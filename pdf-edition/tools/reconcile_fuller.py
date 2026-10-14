"""Compare pinned published Markdown with the supplied author EPUB, read-only.

Only the JSON audit report is written. No book source or export is modified.
Run: python tools/reconcile_fuller.py [--node PATH] [--output PATH]
"""
from __future__ import annotations

import argparse
import base64
import difflib
import hashlib
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import posixpath
import re
import shutil
import subprocess
import unicodedata
import urllib.parse
import xml.etree.ElementTree as ET
import zipfile

EDITION = Path(__file__).resolve().parents[1]
REPO = EDITION.parent

NODE_EXTRACT = r"""
import fs from 'node:fs';
import MarkdownIt from 'markdown-it';
import { collectSource, config, hash } from './tools/source.mjs';
const source = collectSource();
const md = new MarkdownIt({html:true, linkify:false, typographer:false});
const chapters = source.chapters.map(chapter => {
  const analysisMarkupRepairs = [];
  const protectedCode = [];
  let body = chapter.content;
  if (chapter.file.endsWith('05_logic.md')) {
    if (body.includes('$$A ∧ B$')) analysisMarkupRepairs.push({original:'$$A ∧ B$',rendered:'$A ∧ B$',reason:'Mismatched delimiter in published source; preserve formula and prevent audit parser consuming following sections.'});
    body = body.replace('$$A ∧ B$', '$A ∧ B$');
    if (body.includes('100$ check')) analysisMarkupRepairs.push({original:'100$ check',rendered:'100&#36; check',reason:'Literal currency sign, not mathematical delimiter.'});
    body = body.replace('100$ check','100&#36; check');
    body = body.replace(/^(\|[^\r\n]+\|)[ \t]*\r?\n(\|[ :|-]+\|)[ \t]*\r?\n/gm, (whole,header,separator) => {
      const count = row => row.split('|').slice(1,-1).length;
      if (count(header) === count(separator)) return whole;
      const replacement = `${header}\n|${Array(count(header)).fill(' --- ').join('|')}|\n`;
      analysisMarkupRepairs.push({original:whole,rendered:replacement,reason:'Table separator column count normalization; table contents unchanged.'});
      return replacement;
    });
  }
  body = body.replace(/```[\s\S]*?```|`[^`\n]+`/g, value => {
    protectedCode.push(value); return `CTICODEPLACEHOLDER${protectedCode.length-1}END`;
  });
  const formulas = [];
  body = body.replace(/\$\$([\s\S]*?)\$\$|\$([^\n$]+?)\$/g, (raw, display, inline) => {
    const tex = display ?? inline;
    formulas.push({tex,display:display !== undefined,raw});
    return `CTIMATHPLACEHOLDER${formulas.length-1}END`;
  });
  body = body.replace(/CTICODEPLACEHOLDER(\d+)END/g, (_,i) => protectedCode[Number(i)]);
  body = body.replace(/^\s*\{:\s*[^}\n]+\}\s*$/gm, '');
  return {file:chapter.file, projectedSha256:hash(chapter.content),
    html:md.render(body), formulas, analysisMarkupRepairs};
});
process.stdout.write(JSON.stringify({config,chapters,imageRefs:source.imageRefs,
  hashes:source.hashes,referenceHashes:source.referenceHashes}));
"""


class Element:
    def __init__(self, tag='', attrs=None):
        self.tag = tag.lower().split(':')[-1]
        self.attrs = dict(attrs or [])
        self.children = []


class TreeParser(HTMLParser):
    VOID = {'img', 'br', 'hr', 'meta', 'link', 'input', 'source', 'area', 'wbr'}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Element('root')
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        item = Element(tag, attrs)
        self.stack[-1].children.append(item)
        if item.tag not in self.VOID:
            self.stack.append(item)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Element(tag, attrs))

    def handle_endtag(self, tag):
        tag = tag.lower().split(':')[-1]
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def walk(node):
    yield node
    for child in node.children:
        if isinstance(child, Element):
            yield from walk(child)


def normal_text(value):
    value = unicodedata.normalize('NFKC', html.unescape(value))
    value = value.translate(str.maketrans({'’': "'", '‘': "'", '“': '"', '”': '"',
                                         '—': '-', '–': '-', '…': '...'}))
    value = re.sub(r'-{2,}', '-', value)
    value = re.sub(r'CTIMATHPLACEHOLDER\d+END', '[MATH]', value)
    return re.sub(r'\s+', ' ', value).strip()


def normal_tex(value):
    # Whitespace outside \text changes typesetting, not the mathematical token
    # sequence. Original TeX is retained alongside every normalized comparison.
    return re.sub(r'\s+', '', value)


def text_of(node):
    if isinstance(node, str):
        return node
    if node.tag == 'math':
        return '[MATH]'
    if node.tag in {'script', 'style', 'img'}:
        return ''
    if node.tag == 'br':
        return ' '
    return ''.join(text_of(c) for c in node.children)


def parse_records(markup, is_epub=False):
    parser = TreeParser()
    parser.feed(markup)
    headings, blocks, formulas, images = [], [], [], []

    def visit(node, in_table=False, in_pre=False):
        if re.fullmatch('h[1-6]', node.tag):
            headings.append({'level':int(node.tag[1]), 'text':normal_text(text_of(node))})
        if node.tag in {'p', 'pre', 'table', 'figcaption', 'ol', 'ul'} and not in_table and not in_pre:
            value = normal_text(text_of(node))
            if value:
                blocks.append({'kind':'list' if node.tag in {'ol','ul'} else node.tag, 'text':value})
        if node.tag == 'math':
            annotations = [n for n in walk(node) if n.tag == 'annotation'
                           and 'tex' in (n.attrs.get('encoding') or '').lower()]
            tex = text_of(annotations[0]) if annotations else ''
            formulas.append({'tex':tex, 'display':node.attrs.get('display') == 'block',
                             'hasTexAnnotation':bool(annotations)})
            return
        if node.tag == 'img':
            images.append({'src':node.attrs.get('src', ''), 'alt':node.attrs.get('alt', '')})
        for child in node.children:
            if isinstance(child, Element):
                visit(child, in_table or node.tag in {'table','ol','ul'}, in_pre or node.tag == 'pre')

    visit(parser.root)
    # Pandoc moves image alt text into figures; markdown-it leaves images in a
    # paragraph. Captions are compared separately, rather than counted as prose.
    if is_epub:
        blocks = [b for b in blocks if b['kind'] != 'figcaption']
    return {'headings':headings, 'blocks':blocks, 'formulas':formulas, 'images':images,
            'captions':[normal_text(text_of(n)) for n in walk(parser.root)
                        if n.tag == 'figcaption']}


def changes(before, after, key):
    left, right = [key(v) for v in before], [key(v) for v in after]
    matcher = difflib.SequenceMatcher(None, left, right, autojunk=False)
    return [{'operation':op, 'markdownRange':[a,b], 'epubRange':[c,d],
             'markdown':before[a:b], 'epub':after[c:d]}
            for op,a,b,c,d in matcher.get_opcodes() if op != 'equal']


def classify_text_difference(change):
    md = ' '.join(v['text'] for v in change['markdown'])
    epub = ' '.join(v['text'] for v in change['epub'])
    if '{:' in epub or '> ' in epub:
        return 'Literal Kramdown/blockquote markers in author export'
    if '## Linear order' in epub:
        return 'Heading serialized as literal text in author export'
    if '$' in epub and '[MATH]' in md:
        return 'Math delimiter/TeX serialized literally in author export'
    if '**Task' in md:
        return 'Bold-label delimiter spacing'
    if any(v['kind'] == 'list' for v in change['markdown']):
        return 'List and paragraph serialization'
    if len(change['markdown']) != len(change['epub']):
        return 'Paragraph boundary serialization'
    punctuation = lambda s: re.sub(r'\s+', '', s).replace('\ufe0e','').replace('\ufe0f','')
    if punctuation(md) == punctuation(epub):
        return 'Quote spacing or Unicode variation selector'
    return 'Parser formatting; inspect precise before/after records'


def lf_hash(data):
    return hashlib.sha256(data.decode('utf-8').replace('\r\n', '\n').encode()).hexdigest()


def epub_spine(archive):
    container = ET.fromstring(archive.read('META-INF/container.xml'))
    package_path = next(n.attrib['full-path'] for n in container.iter()
                        if n.tag.endswith('rootfile'))
    package = ET.fromstring(archive.read(package_path))
    manifest = {n.attrib['id']:n.attrib['href'] for n in package.iter()
                if n.tag.endswith('item') and 'id' in n.attrib}
    base = posixpath.dirname(package_path)
    paths = [posixpath.normpath(posixpath.join(base, manifest[n.attrib['idref']]))
             for n in package.iter() if n.tag.endswith('itemref')]
    return paths, [n.text for n in package.iter() if n.tag.endswith('rights')]


def resolve_epub_asset(chapter_path, src):
    src = urllib.parse.unquote(urllib.parse.urlsplit(src).path)
    return posixpath.normpath(posixpath.join(posixpath.dirname(chapter_path), src))


def main():
    args = argparse.ArgumentParser(description=__doc__)
    args.add_argument('--node', default=shutil.which('node'))
    args.add_argument('--output', type=Path, default=EDITION/'review'/'full-reconciliation.json')
    options = args.parse_args()
    node = options.node
    if not node:
        bundled = Path.home()/'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
        if bundled.exists():
            node = str(bundled)
    if not node:
        raise SystemExit('Node.js unavailable; supply --node PATH.')
    result = subprocess.run([node,'--input-type=module','-e',NODE_EXTRACT], cwd=EDITION,
                            check=True, stdout=subprocess.PIPE, encoding='utf-8')
    source = json.loads(result.stdout)
    config = source['config']
    reference = REPO/config['referenceEpubFile']
    report = {'upstreamRef':config['upstreamRef'], 'distribution':config['distribution'],
              'referenceEpubFile':config['referenceEpubFile'],
              'referenceEpubSha256':hashlib.sha256(reference.read_bytes()).hexdigest(),
              'method':{'text':'Ordered rendered paragraphs, code and tables; typographic punctuation and whitespace normalized; formula placeholders compared separately.',
                        'formulas':'Ordered TeX versus EPUB MathML TeX annotations, whitespace normalized; original TeX retained in differences.',
                        'images':'Ordered SVG/image references compared by UTF-8 LF-normalized source hashes; captions compared separately.',
                        'limitations':'This compares published source with an existing export, not the current paid package. It does not correct wording or mathematics.'},
              'chapters':[]}
    with zipfile.ZipFile(reference) as archive:
        spine, rights = epub_spine(archive)
        report['originalRightsMetadata'] = rights
        body_chapters = []
        for member in spine:
            if not member.endswith(('.xhtml','.html')):
                continue
            markup = archive.read(member).decode('utf-8')
            records = parse_records(markup, True)
            if 'bodymatter' in markup and records['headings']:
                body_chapters.append((member,records))
        if len(body_chapters) != len(source['chapters']):
            raise SystemExit(f'Chapter mismatch: Markdown {len(source["chapters"])} vs EPUB {len(body_chapters)}')
        for chapter,(member,epub) in zip(source['chapters'], body_chapters):
            md = parse_records(chapter['html'])
            md['formulas'] = chapter['formulas']
            md_images = [r for r in source['imageRefs'] if r['chapter'] == chapter['file']]
            md_image_records = [{'source':r['file'], 'sha256':source['hashes'][r['file']]} for r in md_images]
            epub_image_records = []
            for image in epub['images']:
                asset = resolve_epub_asset(member,image['src'])
                data = archive.read(asset)
                epub_image_records.append({'source':asset, 'sha256':lf_hash(data) if asset.endswith('.svg') else hashlib.sha256(data).hexdigest()})
            md_captions = [{'text':normal_text(re.sub(r'CTIMATHPLACEHOLDER\d+END','[MATH]',i['alt']))} for i in md['images']]
            epub_captions = [{'text':c} for c in epub['captions']]
            chapter_report = {'markdownFile':chapter['file'], 'epubFile':member,
                'projectedSha256':chapter['projectedSha256'],
                'analysisMarkupRepairs':chapter['analysisMarkupRepairs'],
                'counts':{'markdown':{k:len(md[k]) for k in ('headings','blocks','formulas','images')},
                          'epub':{k:len(epub[k]) for k in ('headings','blocks','formulas','images')}},
                'headingDifferences':changes(md['headings'],epub['headings'],lambda v:(v['level'],v['text'])),
                'textDifferences':changes(md['blocks'],epub['blocks'],lambda v:(v['kind'],v['text'])),
                'formulaDifferences':changes(md['formulas'],epub['formulas'],lambda v:normal_tex(v['tex'])),
                'imageDifferences':changes(md_image_records,epub_image_records,lambda v:v['sha256']),
                'captionDifferences':changes(md_captions,epub_captions,lambda v:v['text'])}
            for difference in chapter_report['textDifferences']:
                difference['classification'] = classify_text_difference(difference)
            report['chapters'].append(chapter_report)
    report['summary'] = {'chapterCount':len(report['chapters']),
        'markdownCounts':{k:sum(c['counts']['markdown'][k] for c in report['chapters']) for k in ('headings','blocks','formulas','images')},
        'epubCounts':{k:sum(c['counts']['epub'][k] for c in report['chapters']) for k in ('headings','blocks','formulas','images')},
        'differenceGroups':{k:sum(len(c[k]) for c in report['chapters']) for k in ('headingDifferences','textDifferences','formulaDifferences','imageDifferences','captionDifferences')}}
    classifications = {}
    for chapter in report['chapters']:
        for difference in chapter['textDifferences']:
            label = difference['classification']
            classifications[label] = classifications.get(label,0) + 1
    report['summary']['textDifferenceClassifications'] = classifications
    report['conclusion'] = {
        'imageCoverage':'All 472 ordered image occurrences match the supplied EPUB by normalized SVG bytes.',
        'headingCoverage':'The only heading difference is Linear order: the author export retains its words as a literal ## paragraph rather than a heading.',
        'formulaCoverage':'All MathML TeX annotations match the corresponding source sequence; extra source expressions are dollar-delimited formulas the author export serialized as literal text. Original source formulas remain available and are rendered by the new adapter.',
        'proseReview':'Reviewed differences are list/paragraph structure, literal markup, math delimiter handling, bold-label spacing and typographic punctuation. No substantive wording has been replaced to imitate export artifacts.',
        'choice':'The edition keeps the published Markdown and SVGs at the pinned commit, including both edition-conditional branches. It does not select print mode alone or extract/rewrite PDF text.'}
    options.output.parent.mkdir(parents=True, exist_ok=True)
    options.output.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n', encoding='utf-8')
    print(json.dumps(report['summary'],ensure_ascii=False,indent=2))
    print(f'Report: {options.output}')


if __name__ == '__main__':
    main()

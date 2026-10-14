"""Independent fuller-source, EPUB, HTML, PDF navigation and geometry checks.

Run with the bundled Python runtime. Use --html-only before PDFs stabilize.
Geometry is scanned once per PDF SHA and cached under review.
"""
import argparse
import hashlib
import json
import logging
import os
import posixpath
import re
import shutil
import subprocess
from collections import Counter
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parent
REVIEW = ROOT / "review"
logging.getLogger("pdfminer").setLevel(logging.ERROR)

NODE_AUDIT = r"""
import fs from 'node:fs';
import crypto from 'node:crypto';
import MarkdownIt from 'markdown-it';
import {chromium} from 'playwright';
const input=JSON.parse(fs.readFileSync(0,'utf8'));
const config=JSON.parse(fs.readFileSync('edition.json','utf8'));
const md=new MarkdownIt({html:true,typographer:false,linkify:false});
const expected=[];
for(const file of config.chapterFiles){
 let t=fs.readFileSync('../'+file,'utf8').replace(/\r\n/g,'\n').replace(/^\uFEFF/,'').replace(/^---\n[\s\S]*?\n---\n/,'');
 const tags=[...t.matchAll(/\{%\s*([\s\S]*?)\s*%\}/g)].map(x=>x[1].trim());
 if(tags.some(x=>!/^if\s+site\.distribution\s*(==|!=)\s*['"](?:print|web)['"]$/.test(x)&&x!=='endif'))throw Error('Unexpected source condition');
 t=t.replace(/\{%[\s\S]*?%\}/g,'').replace(/<!--[\s\S]*?-->/g,'');
 const projectedSha256=crypto.createHash('sha256').update(t).digest('hex');
 t=t.replaceAll('&mdash,','&mdash;').replace('$$A ∧ B$','$A ∧ B$').replace('100$ check','100&#36; check').replaceAll('$Z₃$','$Z_{3}$').replace('**Task 6: **Again','**Task 6:** Again');
 t=t.replace(/<div style="page-break-after: always; opacity: 0 ; height: 400px">\s*\\pagebreak\s*<\/div>/g,'');
 if(file.endsWith('05_logic.md'))t=t.replace('|---| --- | ---   | --- | --- | --- |','|---| --- | --- | --- | --- |');
 const images=[...t.matchAll(/!\[([\s\S]*?)\]\(([^)]+)\)/g)].map(m=>({file:'_chapters/'+m[2].replace(/^\.\.\//,''),caption:m[1]}));
 const codes=[];let prose=t.replace(/```[^\n]*\n[\s\S]*?```/g,m=>{codes.push(m);return `AUDITCODE${codes.length-1}END`;}).replace(/!\[[\s\S]*?\]\([^)]*\)/g,'');
 const mathInput=prose.replace(/`[^`]*`/g,'');
 const formulas=[...mathInput.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]*?)\$/g)].map(m=>({display:m[1]!==undefined,tex:m[1]??m[2]}));
 prose=prose.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*\$/g,' ').replace(/^[ \t]*\{:\s*\.?[\w-]+\s*\}[ \t]*\n/gm,'').replace(/AUDITCODE(\d+)END/g,(_,i)=>codes[Number(i)]);
 expected.push({file,projectedSha256,html:md.render(prose),images,formulas});
}
const browser=await chromium.launch({headless:true,executablePath:input.chrome});
const reports={};
try{
 const page=await browser.newPage();
 for(const profile of input.profiles){
  const html=fs.readFileSync(`output/book-fuller-${profile}.html`,'utf8').replace(/<script[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,'');
  await page.setContent(html);
  reports[profile]=await page.evaluate(({expected,epub})=>{
   const norm=s=>s.replace(/\s+/g,' ').trim();
   const semantic=s=>norm(s.normalize('NFKC').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/…/g,'...').replace(/[–—]/g,'-').replace(/-{2,}/g,'-').replace(/&mdash,/g,'-'));
   const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
   const textOf=(html)=>{const el=document.createElement('div');el.innerHTML=html;return el;};
   const getMath=root=>[...root.querySelectorAll('.math')].filter(x=>!x.closest('figcaption')).map(x=>({display:x.classList.contains('display-math'),tex:norm(x.textContent.slice(2,-2))}));
   const visibleHeadings=root=>[...root.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(x=>({level:Number(x.tagName.slice(1)),title:norm(x.textContent)}));
   const sourceChecks=[],epubChecks=[],authorBodies=[],headings=[];
   expected.forEach((item,i)=>{
    const original=document.querySelector(`[data-chapter="${item.file}"]`),actual=original.cloneNode(true),exp=textOf(item.html);
    const images=[...original.querySelectorAll('figure.diagram')].map(x=>({file:x.dataset.source,caption:x.querySelector('svg').getAttribute('aria-label')}));
    const formulas=getMath(original),chapterHeadings=visibleHeadings(original);headings.push(...chapterHeadings);
    actual.querySelectorAll('figure,.math,.chapter-navigation').forEach(x=>x.replaceWith(document.createTextNode(' ')));
    const a=norm(actual.textContent),e=norm(exp.textContent);authorBodies.push(a);
    let first=0;while(first<a.length&&a[first]===e[first])first++;
    const captionsPresent=[...original.querySelectorAll('figure.diagram')].every(x=>x.querySelector('figcaption')&&x.querySelector('.figure-number'));
    sourceChecks.push({file:item.file,projectedSha256:item.projectedSha256,proseMatch:a===e,proseMismatch:a!==e?{at:first,source:e.slice(Math.max(0,first-80),first+180),actual:a.slice(Math.max(0,first-80),first+180)}:null,headingsMatch:eq(chapterHeadings,visibleHeadings(exp)),headingCount:chapterHeadings.length,imageSequenceMatch:eq(images,item.images.map(x=>({...x,caption:norm(x.caption)}))),imageCount:images.length,formulaSequenceMatch:eq(formulas,item.formulas.map(x=>({...x,tex:norm(x.tex)}))),formulaCount:formulas.length,captionCount:original.querySelectorAll('figure.diagram figcaption').length,captionsPresent,codeMatch:eq([...actual.querySelectorAll('pre')].map(x=>x.textContent),[...exp.querySelectorAll('pre')].map(x=>x.textContent)),rawMarkers:[...actual.querySelectorAll('p')].filter(x=>/^(?:\{%|\{:|\|)/.test(x.textContent)).map(x=>x.textContent.slice(0,100))});
    const ep=textOf(epub[i].html),epMath=[...ep.querySelectorAll('math')].filter(x=>!x.closest('figcaption')).map(x=>({display:x.getAttribute('display')==='block',tex:norm(x.querySelector('annotation[encoding="application/x-tex"]')?.textContent||'')}));
    const epHeadings=visibleHeadings(ep),epCaptions=[...ep.querySelectorAll('img')].map(x=>norm(x.getAttribute('alt')||''));
    ep.querySelectorAll('figure,math,head').forEach(x=>x.replaceWith(document.createTextNode(' ')));
    const epText=semantic(ep.textContent),sourceText=semantic(e);let pos=0;while(pos<epText.length&&epText[pos]===sourceText[pos])pos++;
    epubChecks.push({file:item.file,headingsMatch:eq(epHeadings.map(x=>({...x,title:semantic(x.title)})),visibleHeadings(exp).map(x=>({...x,title:semantic(x.title)}))),epubHeadingCount:epHeadings.length,sourceHeadingCount:chapterHeadings.length,epubImageCount:epCaptions.length,sourceImageCount:images.length,captionSequenceMatch:eq(epCaptions.map(semantic),item.images.map(x=>semantic(x.caption.replace(/`([^`]*)`/g,'$1')))),epubBodyFormulaCount:epMath.length,sourceBodyFormulaCount:formulas.length,formulaSequenceMatch:eq(epMath.map(x=>({...x,tex:semantic(x.tex)})),formulas.map(x=>({...x,tex:semantic(x.tex)}))),proseMatch:epText===sourceText,proseFirstDifference:epText!==sourceText?{at:pos,epub:epText.slice(Math.max(0,pos-80),pos+200),source:sourceText.slice(Math.max(0,pos-80),pos+200)}:null});
   });
   const toc=[...document.querySelectorAll('.contents .toc-page')].map(x=>({id:x.dataset.target,page:Number(x.textContent)}));
   return {sourceChecks,epubChecks,authorBodies,headings,toc,chapterOrder:[...document.querySelectorAll('.chapter')].map(x=>x.dataset.chapter)};
  },{expected,epub:input.epub});
 }
}finally{await browser.close();}
console.log(JSON.stringify(reports));
"""


def epub_payload(config):
    ref = REPO / config.get("referenceEpubFile", "Panic, Jencel/Category Theory Illustrated/Category Theory Illustrated - Jencel Panic.epub")
    chapters = []
    with ZipFile(ref) as z:
        for n in range(1, 10):
            member = f"EPUB/text/ch{n:03}.xhtml"
            xml = z.read(member).decode("utf-8")
            tree = ET.fromstring(xml)
            images = [e.attrib.get("src", "") for e in tree.iter() if e.tag.rsplit("}", 1)[-1] == "img"]
            body = re.search(r"<body\b[^>]*>([\s\S]*?)</body>", xml).group(1)
            chapters.append({"html": body, "images": images, "member": member})
    return chapters, {"path": str(ref), "sha256": hashlib.sha256(ref.read_bytes()).hexdigest()}


def pdf_checks(profile, html_result, report, profiles, pdf_path=None, cache_name=None):
    path = Path(pdf_path) if pdf_path is not None else ROOT / "output/pdf" / f"category-theory-illustrated-en-fuller-{profile}.pdf"
    sha = hashlib.sha256(path.read_bytes()).hexdigest()
    reader = PdfReader(path)
    outlines = []

    def walk(items, level=0):
        for item in items:
            if isinstance(item, list):
                walk(item, level + 1)
            else:
                outlines.append({"title": str(item.title), "page": reader.get_destination_page_number(item) + 1, "level": level + 1})
    walk(reader.outline)
    canonical, active_levels = [], []
    for h in html_result["headings"]:
        while active_levels and active_levels[-1] >= h["level"]:
            active_levels.pop()
        canonical.append({"title": h["title"], "level": len(active_levels) + 1})
        active_levels.append(h["level"])
    outline_titles = [{"title": h["title"], "level": h["level"]} for h in outlines]
    # Chromium uses a direct /Dests dictionary with PDF Name keys. pypdf
    # preserves the leading slash, whereas HTML fragment IDs omit it.
    named = {str(name).lstrip("/"): dest for name, dest in reader.named_destinations.items()}
    toc_bad = []
    for item in html_result["toc"]:
        destination = named.get(item["id"])
        actual = reader.get_destination_page_number(destination) + 1 if destination else None
        if actual != item["page"]:
            toc_bad.append({**item, "destinationPage": actual})
    link_bad = []
    for page_number, page in enumerate(reader.pages, 1):
        for obj in page.get("/Annots", []):
            ann = obj.get_object()
            if ann.get("/Subtype") != "/Link":
                continue
            target = ann.get("/Dest")
            action = ann.get("/A")
            if action and action.get("/S") == "/GoTo":
                target = action.get("/D")
            if isinstance(target, str) and str(target).lstrip("/") not in named:
                link_bad.append({"page": page_number, "target": str(target)})
    cache = REVIEW / f"full-content-audit-geometry-{cache_name or profile}.json"
    geometry = json.loads(cache.read_text("utf-8")) if cache.exists() else {}
    if geometry.get("pdfSha256") != sha:
        off_page, bounds, low_text = [], [], []
        p = profiles[profile]
        left, right = p["marginLeftMm"] * 72 / 25.4, (p["widthMm"] - p["marginRightMm"]) * 72 / 25.4
        with pdfplumber.open(path) as document:
            for n, page in enumerate(document.pages, 1):
                chars = [c for c in page.chars if c.get("text", "").strip()]
                bad = [c for c in chars if c["x0"] < -1 or c["x1"] > page.width + 1 or c["top"] < -1 or c["bottom"] > page.height + 1]
                if bad:
                    off_page.append({"page": n, "count": len(bad), "examples": [{k: c[k] for k in ("text", "x0", "x1", "top", "bottom")} for c in bad[:5]]})
                body = [c for c in chars if c["top"] > 28 and c["bottom"] < page.height - 28]
                # The cover deliberately uses the complete page; body pages
                # retain the layout's normal text-area boundaries.
                over = [] if n == 1 else [c for c in body if c["x0"] < left - 2 or c["x1"] > right + 2]
                if over:
                    bounds.append({"page": n, "count": len(over), "examples": [{k: c[k] for k in ("text", "x0", "x1")} for c in over[:5]]})
                if len(chars) < 90:
                    low_text.append({"page": n, "visibleNonspaceChars": len(chars)})
        geometry = {"pdfSha256": sha, "offPageCharacters": off_page, "contentBoundsFlags": bounds, "lowTextPages": low_text}
        cache.write_text(json.dumps(geometry, ensure_ascii=False, indent=2), "utf-8")
    outline_target_bad = []
    for bookmark, heading in zip(outlines, report["headings"]):
        dest = named.get(heading["id"])
        dest_page = reader.get_destination_page_number(dest) + 1 if dest else None
        if dest_page != bookmark["page"]:
            outline_target_bad.append({"title": bookmark["title"], "bookmarkPage": bookmark["page"], "headingPage": dest_page})
    return {"pdfSha256": sha, "reportHashMatches": sha == report.get("pdfSha256"), "pages": len(reader.pages), "bookmarks": len(outlines), "canonicalBookmarkTitlesMatch": outline_titles == canonical, "bookmarkDestinationErrors": outline_target_bad, "tocTargetsChecked": len(html_result["toc"]), "tocTargetErrors": toc_bad, "internalLinkErrors": link_bad, "tagged": bool(reader.trailer["/Root"].get("/StructTreeRoot")), "geometry": geometry}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--html-only", action="store_true")
    args = parser.parse_args()
    config = json.loads((ROOT / "edition.json").read_text("utf-8"))
    profile_config = json.loads((ROOT / "profiles.json").read_text("utf-8"))
    profiles = ["book"]
    epub, reference = epub_payload(config)
    chrome = next(p for p in (os.environ.get("PLAYWRIGHT_CHROMIUM_EXECUTABLE", ""), "C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe") if p and Path(p).exists())
    node = shutil.which("node")
    proc = subprocess.run([node, "--input-type=module", "-e", NODE_AUDIT], input=json.dumps({"epub": epub, "profiles": profiles, "chrome": chrome}), cwd=ROOT, capture_output=True, text=True, encoding="utf-8", check=True)
    results = json.loads(proc.stdout)
    for profile, result in results.items():
        report = json.loads((ROOT / f"output/build-report-fuller-{profile}.json").read_text("utf-8"))
        result["projectedHashesMatch"] = [c["projectedSha256"] for c in result["sourceChecks"]] == [c["projectedSha256"] for c in report["chapters"]]
        if not args.html_only:
            result["pdf"] = pdf_checks(profile, result, report, profile_config)
    for result in results.values():
        result.pop("authorBodies", None)
    REVIEW.mkdir(exist_ok=True)
    output = {"reference": reference, "mode": "html-only" if args.html_only else "final", "profiles": results, "documentedRenderRepairs": ["About spacers", "malformed em-dash entity", "A conjunction delimiter", "literal currency dollar", "Logic table separator", "Z Unicode subscript converted to equivalent TeX", "Task 6 bold-label whitespace"]}
    (REVIEW / "full-content-audit.json").write_text(json.dumps(output, ensure_ascii=False, indent=2), "utf-8")
    summary = {p: {"sourceFailures": [x["file"] for x in r["sourceChecks"] if not all(x[k] for k in ("proseMatch", "headingsMatch", "imageSequenceMatch", "formulaSequenceMatch", "captionsPresent", "codeMatch")) or x["rawMarkers"]], "epubDifferences": [x["file"] for x in r["epubChecks"] if not all(x[k] for k in ("headingsMatch", "captionSequenceMatch", "formulaSequenceMatch", "proseMatch"))], "pdf": {k: v for k, v in r.get("pdf", {}).items() if k != "geometry"}, "geometry": {k: len(v) for k, v in r.get("pdf", {}).get("geometry", {}).items() if isinstance(v, list)}} for p, r in results.items()}
    print(json.dumps({"summary": summary}, ensure_ascii=True))


if __name__ == "__main__":
    main()

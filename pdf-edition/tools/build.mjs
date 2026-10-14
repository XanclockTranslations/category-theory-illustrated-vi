import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import MarkdownIt from 'markdown-it';
import { chromium } from 'playwright';
import { PDFDocument, PDFName, PDFDict, PDFArray } from 'pdf-lib';
import { editionDir, repoDir, config, collectSource, verifyLock, assetPath, hash, normalizedSource } from './source.mjs';
import { normalizePdfNavigation } from './pdf_navigation.mjs';
import { removeCoverFurniture } from './pdf_cover.mjs';
import { loadVietnameseFrontmatter } from './vi_frontmatter.mjs';
import { localizeDiagrams } from './vi_diagrams.mjs';

const profiles = JSON.parse(fs.readFileSync(path.join(editionDir, 'profiles.json'), 'utf8'));
const args = process.argv.slice(2);
const isVietnameseFrontmatter = args.length === 1 && args[0] === '--vi-frontmatter';
const isVietnamese = isVietnameseFrontmatter || args[0] === '--vi';
const through = isVietnameseFrontmatter ? 0 : args.length === 3 && args[1] === '--through' ? Number(args[2]) : null;
if (args.length && !isVietnameseFrontmatter && !(args[0] === '--vi' && (args.length === 1 || args.length === 3 && args[1] === '--through')))
  throw new Error('Usage: node tools/build.mjs [--vi [--through N] | --vi-frontmatter].');
const profileNames = ['book'];
const acceptedSource = collectSource();
const lock = verifyLock(acceptedSource);
const outputDir = path.join(editionDir, 'output');
fs.mkdirSync(path.join(outputDir, 'pdf'), { recursive: true });
const escape = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const changes = [];
let renderedImageCount = 0;
const md = new MarkdownIt({ html: true, typographer: false, linkify: false });

// Protect TeX before Markdown interprets underscores and backslashes.
md.inline.ruler.before('escape', 'math', (state, silent) => {
  if (state.src[state.pos] !== '$') return false;
  const display = state.src[state.pos + 1] === '$';
  const delimiter = display ? '$$' : '$';
  let end = state.src.indexOf(delimiter, state.pos + delimiter.length);
  while (end > 0 && state.src[end - 1] === '\\') end = state.src.indexOf(delimiter, end + delimiter.length);
  if (end < 0) return false;
  if (!silent) {
    const token = state.push('math', '', 0);
    token.content = state.src.slice(state.pos + delimiter.length, end);
    token.meta = { display };
  }
  state.pos = end + delimiter.length;
  return true;
});
md.renderer.rules.math = (tokens, index) => {
  const t = tokens[index];
  return t.meta.display ? `<span class="math display-math">\\[${escape(t.content)}\\]</span>` : `<span class="math">\\(${escape(t.content)}\\)</span>`;
};
// Linking every heading creates a real PDF destination at every level.
md.renderer.rules.heading_open = (tokens, index, options, env, self) => self.renderToken(tokens, index, options) + `<a class="heading-link" href="#${tokens[index].attrGet('id')}">`;
md.renderer.rules.heading_close = (tokens, index, options, env, self) => '</a>' + self.renderToken(tokens, index, options);

const translation = isVietnamese ? loadVietnameseFrontmatter(acceptedSource, md, lock, through) : null;
const source = translation?.source ?? acceptedSource;
const edition = translation ? { ...config, ...translation.config, ...(isVietnameseFrontmatter ? {outputName: 'category-theory-illustrated-vi-frontmatter-book.pdf'} : {}) } : config;

const figureReports = [];
md.renderer.rules.image = (tokens, index) => {
  const token = tokens[index];
  const file = assetPath(token.attrGet('src'));
  const alt = token.content.replace(/\s+/g, ' ').trim();
  let svg = fs.readFileSync(path.join(repoDir, file), 'utf8');
  svg = svg.replace(/<\?xml[\s\S]*?\?>/g, '').replace(/<!DOCTYPE[\s\S]*?>/g, '');
  const number = ++renderedImageCount;
  const prefix = `figure-${number}-`;
  for (const id of [...svg.matchAll(/\bid="([^"]+)"/g)].map(m => m[1])) {
    const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    svg = svg.replace(new RegExp(`id="${escapedId}"`, 'g'), `id="${prefix}${id}"`)
      .replace(new RegExp(`url\\(#${escapedId}\\)`, 'g'), `url(#${prefix}${id})`)
      .replace(new RegExp(`((?:xlink:)?href=")#${escapedId}"`, 'g'), `$1#${prefix}${id}"`);
  }
  svg = svg.replace(/<svg\b/, `<svg role="img" aria-label="${escape(alt)}" data-source="${file}"`);
  figureReports.push({ number, file, caption: alt });
  return `<figure id="figure-${number}" class="diagram" data-source="${file}">${svg}<figcaption><span class="figure-number">${translation ? 'Hình' : 'Figure'} ${number}.</span> ${md.renderInline(alt)}</figcaption></figure>`;
};

const headings = [];
const chapterReports = [];
const plainInline = children => (children || []).map(t => t.children ? plainInline(t.children) : ['text', 'code_inline', 'math'].includes(t.type) ? t.content : ['softbreak', 'hardbreak'].includes(t.type) ? ' ' : '').join('').replace(/\s+/g, ' ').trim();
const chapterBodies = source.chapters.map((chapter, chapterIndex) => {
  let text = chapter.content;
  text = text.replace(/<div style="page-break-after: always; opacity: 0 ; height: 400px">\s*\\pagebreak\s*<\/div>/g, () => {
    changes.push({ file: chapter.file, kind: 'layout', detail: 'Replace invisible spacer with a deliberate page break.' });
    return '<div class="page-break"></div>';
  });
  text = text.replaceAll('&mdash,', () => {
    changes.push({ file: chapter.file, kind: 'markup', detail: 'Repair malformed em-dash entity.' });
    return '&mdash;';
  });
  text = text.replaceAll('$Z₃$', () => {
    changes.push({ file: chapter.file, kind: 'markup', detail: 'Typeset Unicode subscript in Z₃ with equivalent TeX Z_{3} to avoid glyph overhang.' });
    return '$Z_{3}$';
  });
  text = text.replace(/\*\*(Task \d+:)[ \t]+\*\*(?=\S)/g, (_, label) => {
    changes.push({ file: chapter.file, kind: 'markup', detail: `Repair whitespace in bold ${label} label.` });
    return `**${label}** `;
  });
  if (chapter.file.endsWith('05_logic.md')) {
    text = text.replace('$$A ∧ B$', () => {
      changes.push({ file: chapter.file, kind: 'markup', detail: 'Repair mismatched math delimiter around A ∧ B.' });
      return '$A ∧ B$';
    }).replace('100$ check', () => {
      changes.push({ file: chapter.file, kind: 'markup', detail: 'Protect literal currency dollar sign.' });
      return '100&#36; check';
    });
    text = text.replace(/^(\|[^\r\n]+\|)[ \t]*\r?\n(\|[ :|-]+\|)[ \t]*\r?\n/gm, (whole, header, separator) => {
      const count = row => row.split('|').slice(1, -1).length;
      if (count(header) === count(separator)) return whole;
      changes.push({ file: chapter.file, kind: 'markup', detail: `Repair table separator to match ${count(header)} columns.` });
      return `${header}\n|${Array(count(header)).fill(' --- ').join('|')}|\n`;
    });
  }
  const tokens = md.parse(text, {});
  let pendingCallout = null;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'paragraph_open' && tokens[i + 1]?.type === 'inline') {
      const attribute = tokens[i + 1].content.trim().match(/^\{:\s*\.?([\w-]+)\s*\}$/);
      if (attribute) {
        pendingCallout = attribute[1] === 'definitions' ? 'definition' : attribute[1];
        tokens.splice(i, 3); i--; continue;
      }
      const inlineAttribute = tokens[i + 1].content.match(/^\{:\s*\.?([\w-]+)\s*\}\s*\n/);
      if (inlineAttribute) {
        const cls = inlineAttribute[1] === 'definitions' ? 'definition' : inlineAttribute[1];
        tokens[i].attrJoin('class', `callout ${cls}`);
        tokens[i + 1].content = tokens[i + 1].content.slice(inlineAttribute[0].length);
        tokens[i + 1].children = md.parseInline(tokens[i + 1].content, {})[0].children;
      }
      const ct = tokens[i + 1].children.filter(t => !(t.type === 'softbreak' || (t.type === 'text' && !t.content.trim())));
      if (ct.length && ct.every(t => t.type === 'math')) tokens[i].attrJoin('class', 'formula-block');
    }
    if (pendingCallout && ['blockquote_open', 'paragraph_open'].includes(tokens[i].type)) {
      tokens[i].attrJoin('class', `callout ${pendingCallout}`); pendingCallout = null;
    }
    if (tokens[i].type === 'heading_open') {
      const id = `chapter-${chapterIndex}-heading-${headings.length}`;
      tokens[i].attrSet('id', id);
      headings.push({ title: tokens[i + 1].content, plainTitle: plainInline(tokens[i + 1].children), level: Number(tokens[i].tag.slice(1)), id, chapterIndex });
    }
  }
  const before = renderedImageCount;
  let html = md.renderer.render(tokens, md.options, {});
  html = html.replace(/<p>\s*(<figure[\s\S]*?<\/figure>)\s*<\/p>/g, '$1');
  chapterReports.push({ file: chapter.file, ...(chapter.translationFile ? { translationFile: chapter.translationFile } : {}), projectedSha256: hash(chapter.content), imageOccurrences: renderedImageCount - before });
  return html;
});
if (renderedImageCount !== source.imageRefs.length) throw new Error(`Image rendering mismatch: ${renderedImageCount} vs ${source.imageRefs.length}`);

const chapterStarts = headings.filter(h => h.level === 1);
const chaptersHtml = chapterBodies.map((body, i) => {
  const prev = chapterStarts[i - 1]; const next = chapterStarts[i + 1];
  const nav = `<nav class="chapter-navigation" aria-label="${translation ? edition.ui.navigationLabel : 'Chapter navigation'}">${prev ? `<a href="#${prev.id}">← ${escape(prev.plainTitle)}</a>` : '<span></span>'}<a href="#contents">${translation ? edition.ui.contentsLink : 'Contents'}</a>${next ? `<a href="#${next.id}">${escape(next.plainTitle)} →</a>` : '<span></span>'}</nav>`;
  return `<section class="chapter" data-chapter="${source.chapters[i].file}">${body}${nav}</section>`;
}).join('\n');
const url = p => pathToFileURL(p).href;
const fontCss = ['noto-serif/400.css', 'noto-serif/400-italic.css', 'noto-serif/700.css', 'noto-serif/700-italic.css', 'noto-sans/400.css', 'noto-sans/400-italic.css', 'noto-sans/600.css', 'noto-sans/700.css', 'noto-sans/700-italic.css'].map(f => `<link rel="stylesheet" href="${url(path.join(editionDir, 'node_modules/@fontsource', f))}">`).join('\n');
const tocHeadings = translation?.tocHeadings ?? headings.filter(h => h.level <= 2);
const renderedHeadingIds = new Set(headings.map(h => h.id));
const linkedTocHeadings = tocHeadings.filter(h => renderedHeadingIds.has(h.id));
if (translation) for (const h of linkedTocHeadings) {
    if (headings.find(actual => actual.id === h.id).title !== h.title) throw new Error(`Chapter and contents translations differ: ${h.id}`);
}
const toc = tocHeadings.map(h => {
  const linked = renderedHeadingIds.has(h.id);
  const content = `<span class="toc-label">${md.renderInline(h.title)}</span><span class="toc-leader"></span><span class="toc-page"${linked ? ` data-target="${h.id}"` : ''}>${linked ? '' : '-'}</span>`;
  return `<li class="level-${h.level}" data-source-heading="${h.id}">${linked ? `<a href="#${h.id}">${content}</a>` : `<span class="toc-entry pending">${content}</span>`}</li>`;
}).join('\n');
const overviewStarts = translation ? tocHeadings.filter(h => h.level === 1) : chapterStarts;
const overviewItems = overviewStarts.map(h => `<li>${renderedHeadingIds.has(h.id) ? `<a href="#${h.id}">${md.renderInline(h.title)}</a>` : md.renderInline(h.title)}</li>`);
const overview = translation ? `<ul class="frontmatter-list">${overviewItems[0]}</ul><ol>${overviewItems.slice(1).join('')}</ol>` : `<ol>${overviewItems.join('')}</ol>`;
const coverMeta = JSON.parse(fs.readFileSync(path.join(editionDir, translation ? edition.coverMetadata : 'assets/cover/provenance.json'), 'utf8'));
const coverPath = path.join(editionDir, 'assets/cover', coverMeta.output);
if (translation && hash(normalizedSource(fs.readFileSync(path.join(editionDir, 'assets/cover', coverMeta.labelsFile)))) !== coverMeta.labelsCanonicalSha256) throw new Error('Vietnamese cover labels changed; regenerate the localized cover before building.');
let coverArt = normalizedSource(fs.readFileSync(coverPath));
if (hash(coverArt) !== coverMeta.outputCanonicalSha256 || hash(normalizedSource(fs.readFileSync(path.join(repoDir, coverMeta.source)))) !== coverMeta.sourceCanonicalSha256) throw new Error('Cover artwork differs from its provenance. Regenerate and review it with tools/prepare_cover.py.');
if (/<image\b|<script\b|<foreignObject\b/i.test(coverArt)) throw new Error('The cover must contain native SVG artwork without images, scripts, or foreign objects.');
coverArt = coverArt.replace(/<\?xml[\s\S]*?\?>/g, '');
function profileStyle(p) {
  return `<style>@page{size:${p.widthMm}mm ${p.heightMm}mm;margin:${p.marginTopMm}mm ${p.marginRightMm}mm ${p.marginBottomMm}mm ${p.marginLeftMm}mm}@page:first{margin:0}:root{--page-width:${p.widthMm}mm;--page-height:${p.heightMm}mm;--body-size:${p.bodySizePt}pt;--body-font:'${p.bodyFont}';--body-leading:${p.bodyLineHeight};--caption-size:${p.captionSizePt}pt;--heading-one:${p.heading1Pt}pt;--heading-two:${p.heading2Pt}pt;--heading-three:${p.heading3Pt}pt;--diagram-height:${p.diagramMaxHeightMm}mm;--toc-size:${p.tocSizePt}pt;--content-width:${p.widthMm - p.marginLeftMm - p.marginRightMm}mm;--content-height:${p.heightMm - p.marginTopMm - p.marginBottomMm}mm}</style>`;
}
function documentHtml(p) {
  return `<!doctype html><html lang="${edition.language}"><head><meta charset="utf-8"><title>${edition.title} — ${p.label}</title>${fontCss}<link rel="stylesheet" href="${url(path.join(editionDir, 'styles/full-book.css'))}">${profileStyle(p)}
<script>window.MathJax={tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['\\\\[','\\\\]']],processEscapes:true},options:{enableMenu:false},startup:{typeset:false,ready(){MathJax.startup.defaultReady();MathJax.startup.promise.then(async()=>{await document.fonts.ready;${translation ? `(${localizeDiagrams.toString()})(${JSON.stringify(translation.diagramLabels)});` : ''}await MathJax.typesetPromise();window.mathDone=true})}}};</script><script src="${url(path.join(editionDir, 'node_modules/mathjax/es5/tex-chtml.js'))}"></script></head><body>
<section class="cover"><img src="${url(coverPath)}" alt="${translation ? escape(edition.ui.coverAlt) : 'Category Theory Illustrated, by Jencel Panic'}"></section>
<section class="publication">${translation ? translation.publication : `<h1>About this edition</h1><p><strong>Category Theory Illustrated</strong> by <strong>Jencel Panic</strong>.</p><p>This independently typeset edition reconciles the published Markdown chapters with the fuller EPUB supplied in the author’s public repository. It includes the additional interludes, addenda, and exercise answers. It is an unofficial adaptation and is not endorsed by the author.</p><p>The supplied fuller edition carries this notice: <strong>“Creative Commons Non-Commercial Share Alike 4.0”.</strong> This adaptation is offered under <a href="${config.licenseUrl}">Creative Commons Attribution–NonCommercial–ShareAlike 4.0 International</a>. Please retain attribution, identify adaptations, and share adaptations under the same license.</p><p>Original work: <a href="${config.sourceUrl}">Category Theory Illustrated online</a><br>Source: <a href="${config.repositoryUrl}">Author’s public repository</a></p><p>Adaptations: page layout, typography, visible numbered captions derived from the author’s image descriptions, definition and theorem styling, linked contents, chapter navigation, and PDF bookmarks. Small markup repairs are recorded in the accompanying build report. English prose and illustrations remain credited to Jencel Panic.</p><p>Text uses ${p.bodyFont}; headings and diagram font fallbacks use Noto Sans, licensed under the SIL Open Font License. Mathematics is typeset with MathJax.</p><p>Source date: ${lock.upstreamDate.slice(0, 10)}. This edition includes the published chapters, additional interludes, and exercise answers.</p><p>Support the author through the <a href="https://abuseofnotation.gumroad.com/">official editions</a> or <a href="https://www.patreon.com/abuseofnotation">Patreon</a>.</p>`}</section>
<nav class="overview" aria-label="${translation ? edition.ui.overviewLabel : 'Chapter overview'}"><h1>${translation ? edition.ui.overviewHeading : 'Chapter overview'}</h1>${overview}<p>${translation ? edition.ui.overviewInstruction : 'Use the detailed contents on the following pages, or the PDF bookmarks, to find individual topics, interludes, and exercise answers.'}</p></nav><nav id="contents" class="contents" aria-label="${translation ? edition.ui.contentsLabel : 'Detailed contents'}"><h1>${translation ? edition.ui.contentsHeading : 'Contents'}</h1>${translation ? `<p class="contents-notice">${edition.ui.contentsNotice}</p>` : ''}<ul>${toc}</ul></nav>${chaptersHtml}</body></html>`;
}

const candidates = [process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE, 'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'].filter(Boolean);
const executablePath = candidates.find(p => fs.existsSync(p));
const browser = await chromium.launch({ ...(executablePath ? { executablePath } : {}), headless: true });
try {
  for (const profileName of profileNames) {
    const profile = translation ? { ...profiles[profileName], label: 'Bố cục sách' } : profiles[profileName];
    const html = documentHtml(profile);
    const buildStem = translation ? isVietnameseFrontmatter ? 'vi-frontmatter' : 'vi' : 'fuller';
    const htmlPath = path.join(outputDir, `book-${buildStem}-${profileName}.html`);
    fs.writeFileSync(htmlPath, html);
    const page = await browser.newPage({ viewport: { width: 1000, height: 1000 } });
    const consoleErrors = [];
    page.on('pageerror', e => consoleErrors.push(e.message));
    await page.goto(url(htmlPath), { waitUntil: 'load', timeout: 120000 });
    await page.waitForFunction(() => window.mathDone === true, { timeout: 120000 });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: 'print' });
    await page.evaluate(() => {
      for (const p of document.querySelectorAll('.chapter p')) {
        if (p.nextElementSibling?.matches('figure.diagram') && p.textContent.trim().length < 110) p.classList.add('figure-intro');
      }
    });
    const checks = await page.evaluate(() => ({
      mathErrors: [...document.querySelectorAll('mjx-merror,[data-mjx-error]')].map(el => ({ text: el.textContent, error: el.getAttribute('data-mjx-error') })),
      formulaCount: document.querySelectorAll('.chapter mjx-container').length,
      bodyFormulaCount: [...document.querySelectorAll('.chapter mjx-container')].filter(el => !el.closest('figcaption')).length,
      captionFormulaCount: document.querySelectorAll('figcaption mjx-container').length,
      imageCount: document.querySelectorAll('figure.diagram svg').length,
      captionCount: document.querySelectorAll('figure.diagram figcaption').length,
      localizedDiagramLabels: window.localizedDiagramLabels ?? [],
      unprocessedMarkup: [...document.querySelectorAll('p')].filter(el => /^\{:\s/.test(el.textContent)).map(el => el.textContent),
      wideElements: [...document.querySelectorAll('.chapter p,.chapter table,.chapter pre,.chapter mjx-container')].filter(el => el.scrollWidth > el.clientWidth + 5).slice(0, 20).map(el => ({ tag: el.tagName, text: el.textContent.slice(0, 100), width: el.scrollWidth, available: el.clientWidth }))
    }));
    if (checks.mathErrors.length || checks.unprocessedMarkup.length || consoleErrors.length) throw new Error(JSON.stringify({ checks, consoleErrors }, null, 2));
    const printOptions = {
      width: `${profile.widthMm}mm`, height: `${profile.heightMm}mm`, printBackground: true, preferCSSPageSize: true,
      margin: { top: `${profile.marginTopMm}mm`, bottom: `${profile.marginBottomMm}mm`, left: `${profile.marginLeftMm}mm`, right: `${profile.marginRightMm}mm` },
      displayHeaderFooter: true,
      headerTemplate: `<div style="width:100%;font-family:Arial,sans-serif;font-size:8px;color:#667085;margin:0 ${profile.marginLeftMm}mm;letter-spacing:.6px">${translation ? escape(edition.ui.runningHeader) : 'CATEGORY THEORY ILLUSTRATED'}</div>`,
      footerTemplate: '<div style="width:100%;font-family:Arial,sans-serif;font-size:9px;color:#667085;text-align:center"><span class="pageNumber"></span></div>',
      tagged: true, outline: true
    };
    let lastPages = null; let contentsPages; let bytes; let stable = false; let printPasses = 0;
    for (; printPasses < 4; printPasses++) {
      bytes = await page.pdf(printOptions);
      const parsed = await PDFDocument.load(bytes);
      const pageRefs = parsed.getPages().map(p => p.ref.toString());
      const destinations = parsed.catalog.lookup(PDFName.of('Dests'), PDFDict);
      contentsPages = Object.fromEntries(linkedTocHeadings.map(h => {
        const destination = destinations.lookup(PDFName.of(h.id), PDFArray);
        const number = pageRefs.indexOf(destination.get(0).toString()) + 1;
        if (number < 1) throw new Error(`Unresolved PDF contents destination: ${h.id}`);
        return [h.id, number];
      }));
      if (JSON.stringify(contentsPages) === JSON.stringify(lastPages)) { stable = true; break; }
      await page.evaluate(pages => {
        for (const span of document.querySelectorAll('.toc-page')) span.textContent = pages[span.dataset.target];
      }, contentsPages);
      lastPages = contentsPages;
    }
    if (!stable) throw new Error('Contents page numbers did not stabilize after four print passes.');
    const cleanCover = await removeCoverFurniture(bytes);
    bytes = cleanCover.bytes;
    const normalized = await normalizePdfNavigation(bytes, headings, { title: translation ? `${edition.title} - ${edition.editionLabel} - ${profile.label}` : `${config.title} — Fuller English edition — ${profile.label}`, author: config.author, subject: translation ? edition.ui.pdfSubject : 'Fuller English source edition', language: edition.language });
    bytes = normalized.bytes;
    const pdfPath = path.join(outputDir, 'pdf', edition.outputName);
    fs.writeFileSync(pdfPath, bytes);
    fs.writeFileSync(htmlPath, html.replace(/(<span class="toc-page" data-target="([^"]+)">)<\/span>/g, (_, open, id) => `${open}${contentsPages[id]}</span>`));
    const report = { upstreamRef: lock.upstreamRef, edition: edition.editionLabel, distribution: config.distribution, profile: { name: profileName, ...profile }, cover: { source: coverMeta.source, output: coverMeta.output, sourceCanonicalSha256: coverMeta.sourceCanonicalSha256, outputCanonicalSha256: coverMeta.outputCanonicalSha256, nativePathCount: coverMeta.nativePathCount, rasterImages: coverMeta.rasterImages, externalImages: coverMeta.externalImages, renderMode: coverMeta.renderMode, furnitureRemoval: cleanCover.report }, chapters: chapterReports, imageReferenceCount: renderedImageCount, uniqueImageCount: new Set(source.imageRefs.map(r => r.file)).size, figures: figureReports, headings, ...(translation ? { translation: translation.review, tocHeadings } : {}), ...checks, pageCount: normalized.pageCount, printPasses: printPasses + 1, contentsPages, navigation: normalized.normalizationReport, renderOnlyChanges: changes, consoleErrors, pdfSha256: hash(bytes), browserVersion: browser.version() };
    fs.writeFileSync(path.join(outputDir, `build-report-${buildStem}-${profileName}.json`), JSON.stringify(report, null, 2) + '\n');
    console.log(`Built ${pdfPath}\n${normalized.pageCount} pages; ${checks.bodyFormulaCount} body formulas + ${checks.captionFormulaCount} caption formulas; ${renderedImageCount} captioned diagrams; ${normalized.bookmarkCount} bookmarks. Potential wide elements: ${checks.wideElements.length}`);
    await page.close();
  }
} finally { await browser.close(); }

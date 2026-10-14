"""Check Vietnamese frontmatter source/HTML fidelity, scope and PDF navigation.

This checks conversion, not whether the translation's meaning is correct.
Review the English/Vietnamese prose independently before accepting it.
"""
import hashlib
import json
import os
import shutil
import subprocess
from pathlib import Path

from pypdf import PdfReader
from audit_fuller import pdf_checks

ROOT = Path(__file__).resolve().parents[1]
NODE_AUDIT = r"""
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import MarkdownIt from 'markdown-it';
import {chromium} from 'playwright';
const input=JSON.parse(fs.readFileSync(0,'utf8'));
const md=new MarkdownIt({html:true,typographer:false,linkify:false});
const clean=t=>t.replace(/\r\n/g,'\n').replace(/^---\n[\s\S]*?\n---\n/,'').replace(/<!--[\s\S]*?-->/g,'').replace(/<div style="page-break-after: always; opacity: 0 ; height: 400px">\s*\\pagebreak\s*<\/div>/g,'');
const source=fs.readFileSync('../_chapters/00_about.md','utf8');
const translated=fs.readFileSync('translations/vi/00_about.md','utf8');
const expectedHtml=md.render(clean(translated));
const sourceHtml=md.render(clean(source));
const browser=await chromium.launch({headless:true,executablePath:input.chrome});
try{
 const page=await browser.newPage();
 await page.goto(pathToFileURL(path.resolve('output/book-vi-frontmatter-book.html')).href,{waitUntil:'load'});
 await page.waitForFunction(()=>window.mathDone===true);
 const result=await page.evaluate(({expectedHtml,sourceHtml})=>{
   const parse=s=>new DOMParser().parseFromString(s,'text/html').body;
   const norm=s=>s.normalize('NFC').replace(/\s+/g,' ').trim();
   const expected=parse(expectedHtml), original=parse(sourceHtml);
   const chapters=[...document.querySelectorAll('.chapter')];
   const actual=chapters[0].cloneNode(true);actual.querySelectorAll('.chapter-navigation').forEach(x=>x.remove());
   const shape=x=>Object.fromEntries(['h1','h2','h3','p','blockquote','em','strong','ul','ol','li'].map(tag=>[tag,x.querySelectorAll(tag).length]));
   const headings=[...chapters[0].querySelectorAll('h1,h2,h3,h4')].map(el=>({id:el.id,title:norm(el.textContent),level:Number(el.tagName.slice(1))}));
   const entries=[...document.querySelectorAll('.contents li[data-source-heading]')];
   const toc=entries.filter(el=>el.querySelector('a')).map(el=>({id:el.dataset.sourceHeading,page:Number(el.querySelector('.toc-page').textContent)}));
   const future=entries.filter(el=>!el.querySelector('a'));
   return {language:document.documentElement.lang,chapterSources:chapters.map(el=>el.dataset.chapter),
     translatedHtmlTextMatchesSource:norm(actual.textContent)===norm(expected.textContent),
     translatedHtmlStructureMatchesSource:JSON.stringify(shape(actual))===JSON.stringify(shape(expected)),
     englishStructure:shape(original),vietnameseStructure:shape(expected),
     sourceAndTranslationStructureEqual:JSON.stringify(shape(original))===JSON.stringify(shape(expected)),
     tocEntryCount:entries.length,futureEntryCount:future.length,
     futureEntriesHaveNoLinks:future.every(el=>!el.querySelector('a')),
     futurePageNumbersArePending:future.every(el=>el.querySelector('.toc-page').textContent==='-'),
     headings,toc};
 },{expectedHtml,sourceHtml});
 console.log(JSON.stringify(result));
}finally{await browser.close()}
"""


def main():
    config = json.loads((ROOT / "translations/vi/frontmatter.json").read_text("utf-8"))
    report = json.loads((ROOT / "output/build-report-vi-frontmatter-book.json").read_text("utf-8"))
    profiles = json.loads((ROOT / "profiles.json").read_text("utf-8"))
    chrome = next(p for p in (
        os.environ.get("PLAYWRIGHT_CHROMIUM_EXECUTABLE", ""),
        "C:/Program Files/Google/Chrome/Application/chrome.exe",
        "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
        "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"
    ) if p and Path(p).exists())
    proc = subprocess.run([shutil.which("node"), "--input-type=module", "-e", NODE_AUDIT],
        input=json.dumps({"chrome": chrome}), cwd=ROOT, capture_output=True,
        text=True, encoding="utf-8", check=True)
    html = json.loads(proc.stdout)
    pdf_path = ROOT / "output/pdf/category-theory-illustrated-vi-frontmatter-book.pdf"
    pdf = pdf_checks("book", html, report, profiles, pdf_path=pdf_path, cache_name="vi-frontmatter-book")
    reader = PdfReader(pdf_path)
    language = str(reader.trailer["/Root"].get("/Lang", ""))
    input_hashes = report["translation"]["translationInputHashes"]
    stale_inputs = [file for file, digest in input_hashes.items()
        if hashlib.sha256((ROOT / file).read_text("utf-8").replace("\r\n", "\n").encode("utf-8")).hexdigest() != digest]
    checks = {
        "vietnameseLanguage": html["language"] == language == "vi",
        "onlyIntroductionBody": html["chapterSources"] == ["_chapters/00_about.md"],
        "translatedHtmlTextMatchesSource": html["translatedHtmlTextMatchesSource"],
        "translatedHtmlStructureMatchesSource": html["translatedHtmlStructureMatchesSource"],
        "sourceAndTranslationStructureEqual": html["sourceAndTranslationStructureEqual"],
        "allContentsEntriesPresent": html["tocEntryCount"] == report["translation"]["contentsEntryCount"] == 90,
        "futureChaptersHaveNoBrokenLinksOrInventedPages": html["futureEntriesHaveNoLinks"] and html["futurePageNumbersArePending"] and html["futureEntryCount"] == report["translation"]["futureContentsEntryCount"],
        "inputHashesCurrent": not stale_inputs,
        "pdfHashMatches": pdf["reportHashMatches"],
        "bookmarkTitlesMatch": pdf["canonicalBookmarkTitlesMatch"],
        "bookmarkDestinationsValid": not pdf["bookmarkDestinationErrors"],
        "contentsDestinationsValid": not pdf["tocTargetErrors"],
        "internalLinksValid": not pdf["internalLinkErrors"],
        "tagged": pdf["tagged"],
        "noOffPageCharacters": not pdf["geometry"]["offPageCharacters"],
        "noBodyBoundaryFlags": not pdf["geometry"]["contentBoundsFlags"],
        "coverFurnitureRemoved": report["cover"]["furnitureRemoval"]["removedCount"] == 2
    }
    result = {"passed": all(checks.values()), "checks": checks, "html": html, "pdf": pdf, "staleInputs": stale_inputs}
    review = ROOT / "review"
    review.mkdir(exist_ok=True)
    (review / "vi-frontmatter-audit.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"passed": result["passed"], "checks": checks, "pages": pdf["pages"], "bookmarks": pdf["bookmarks"], "linkedContentsEntries": len(html["toc"]), "futureContentsEntries": html["futureEntryCount"]}, ensure_ascii=False))
    if not result["passed"]:
        raise SystemExit("Vietnamese frontmatter audit failed; inspect review/vi-frontmatter-audit.json.")


if __name__ == "__main__":
    main()

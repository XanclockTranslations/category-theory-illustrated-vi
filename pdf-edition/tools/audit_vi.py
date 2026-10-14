"""Validate translated chapter coverage, HTML fidelity and PDF navigation/geometry."""
import hashlib
import json
import shutil
import subprocess
from pathlib import Path
from pypdf import PdfReader
from audit_fuller import pdf_checks

ROOT = Path(__file__).resolve().parents[1]

def main():
    proc = subprocess.run([shutil.which('node'), 'tools/audit_vi.mjs'], cwd=ROOT, capture_output=True, text=True, encoding='utf-8', check=True)
    html = json.loads(proc.stdout)
    report = json.loads((ROOT/'output/build-report-vi-book.json').read_text('utf-8'))
    config = json.loads((ROOT/'translations/vi/frontmatter.json').read_text('utf-8'))
    pdf_path = ROOT/'output/pdf'/config['outputName']
    (ROOT/'review').mkdir(exist_ok=True)
    pdf = pdf_checks('book', html, report, json.loads((ROOT/'profiles.json').read_text('utf-8')), pdf_path=pdf_path, cache_name='vi-book')
    stale = [f for f,h in report['translation']['translationInputHashes'].items() if hashlib.sha256((ROOT/f).read_text('utf-8').replace('\r\n','\n').encode('utf-8')).hexdigest()!=h]
    failures = [c for c in html['chapters'] if not all(c['invariants'].values()) or not all(c[k] for k in ('proseMatch','imageSequence','formulaSequence','codeMatch'))]
    checks = {'machineTranslationAttribution':html['attributionVisible'],'chapterCoverageAndHtmlFidelity':not failures,'inputHashesCurrent':not stale,'vietnameseLanguage':html['language']==str(PdfReader(pdf_path).trailer['/Root'].get('/Lang'))=='vi','completeContents':html['contentsCount']==90,'pendingContentsValid':html['pendingValid'] and html['pendingCount']==report['translation']['futureContentsEntryCount'],'pdfHash':pdf['reportHashMatches'],'bookmarkTitles':pdf['canonicalBookmarkTitlesMatch'],'bookmarkDestinations':not pdf['bookmarkDestinationErrors'],'contentsDestinations':not pdf['tocTargetErrors'],'internalLinks':not pdf['internalLinkErrors'],'tagged':pdf['tagged'],'noOffPageText':not pdf['geometry']['offPageCharacters'],'bodyBounds':not pdf['geometry']['contentBoundsFlags'],'coverFurniture':report['cover']['furnitureRemoval']['removedCount']==2,'noMathOrBrowserErrors':not report['mathErrors'] and not report['consoleErrors']}
    result = {'passed':all(checks.values()),'checks':checks,'html':html,'pdf':pdf,'staleInputs':stale,'failures':failures}
    (ROOT/'review/vi-audit.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
    print(json.dumps({'passed':result['passed'],'checks':checks,'chapters':len(html['chapters'])-1,'pages':pdf['pages'],'bookmarks':pdf['bookmarks'],'failures':failures},ensure_ascii=False))
    if not result['passed']: raise SystemExit('Vietnamese audit failed; inspect review/vi-audit.json')

if __name__=='__main__': main()

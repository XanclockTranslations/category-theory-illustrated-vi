"""Render the maintained Book PDF and inspect cached page contact sheets.

Run after the final build: python tools/review_book.py
Requires Pillow, pypdf, and Poppler's pdftoppm.
"""
from __future__ import annotations

import hashlib
import json
import shutil
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "output/pdf/category-theory-illustrated-en-fuller-book.pdf"
REVIEW = ROOT / "review/book-layout"


def font(size, bold=False):
    candidates = [Path("C:/Windows/Fonts") / ("arialbd.ttf" if bold else "arial.ttf"),
                  Path("/usr/share/fonts/truetype/dejavu") / ("DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf")]
    return next((ImageFont.truetype(str(p), size) for p in candidates if p.exists()), ImageFont.load_default())


def main():
    sha = hashlib.sha256(PDF.read_bytes()).hexdigest()
    report = json.loads((ROOT / "output/build-report-fuller-book.json").read_text(encoding="utf-8"))
    if report["pdfSha256"] != sha:
        raise ValueError("The PDF does not match its build report. Rebuild before review.")
    reader = PdfReader(PDF)
    count = len(reader.pages)
    cache = REVIEW / (sha[:16] + "-v1")
    pages = cache / "pages-50dpi"
    contacts = cache / "contact-sheets"
    samples = cache / "samples-120dpi"
    for directory in (pages, contacts, samples):
        directory.mkdir(parents=True, exist_ok=True)
    executable = shutil.which("pdftoppm")
    if not executable:
        bundled = Path.home() / ".cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin/pdftoppm.exe"
        executable = str(bundled) if bundled.exists() else None
    if not executable:
        raise RuntimeError("Install Poppler and make pdftoppm available on PATH.")
    images = sorted(pages.glob("page-*.png"))
    if len(images) != count:
        print(f"Rendering {count} book pages at 50 DPI...", flush=True)
        subprocess.run([executable, "-r", "50", "-png", str(PDF), str(pages / "page")], check=True)
        images = sorted(pages.glob("page-*.png"))
    if len(images) != count:
        raise RuntimeError("Rendered page count differs from the PDF.")
    sheets = []
    for start in range(0, count, 16):
        batch = images[start:start+16]
        target = contacts / f"contact-{start+1:03d}-{start+len(batch):03d}.png"
        if not target.exists():
            canvas = Image.new("RGB", (1160, 1668), "#e4ebef")
            draw = ImageDraw.Draw(canvas)
            draw.text((16, 13), f"Book layout | pages {start+1}-{start+len(batch)}", fill="#17384d", font=font(19, True))
            for i, file in enumerate(batch):
                with Image.open(file) as opened:
                    im = opened.convert("RGB")
                im.thumbnail((274, 374), Image.Resampling.LANCZOS)
                col, row = i % 4, i // 4
                canvas.paste(im, (col*290+(290-im.width)//2, 48+row*405+27))
                draw.text((col*290+10, 48+row*405+7), f"p. {start+i+1}", fill="#17384d", font=font(14))
            canvas.save(target)
        sheets.append(str(target))
    for number in sorted({1, 2, report["contentsPages"][report["headings"][0]["id"]], count}):
        target = samples / f"page-{number:03d}.png"
        if not target.exists():
            subprocess.run([executable, "-f", str(number), "-l", str(number), "-r", "120", "-png", "-singlefile", str(PDF), str(target.with_suffix(""))], check=True)
    manifest = {"pdf": str(PDF), "pdfSha256": sha, "pageCount": count, "rasterDirectory": str(pages), "contactSheets": sheets, "sampleDirectory": str(samples)}
    (REVIEW / "render-manifest.json").write_text(json.dumps(manifest, indent=2)+"\n", encoding="utf-8")
    print(f"Ready: {count} page rasters and {len(sheets)} contact sheets. Samples: {samples}", flush=True)


if __name__ == "__main__":
    main()

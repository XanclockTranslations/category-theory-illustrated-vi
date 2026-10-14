# English book build

This adapter builds the maintained 178 × 241 mm book layout of Jencel Panic's **Category Theory Illustrated**. The source is reconciled with the author's fuller supplied EPUB, including additional interludes, addenda, and exercise answers. The future Vietnamese translation will use this editable pipeline.

The [repository README](../readme.md) explains why this independent build exists, including GPT-6.1 Sol Ultra's initial failure to notice the author's existing PDF and EPUB. The author’s chapter Markdown and illustration files remain unchanged.

## Build

Install Node.js, pnpm, and Chrome/Chromium or Edge. From this directory:

```bash
pnpm install --frozen-lockfile
pnpm build
```

Output: `output/pdf/category-theory-illustrated-en-fuller-book.pdf`. The generated HTML and build report are also under `output/`. Dependencies and generated artifacts are ignored. `profiles.json` controls the single Book layout: 11.5 pt Noto Serif body text, page dimensions, margins, heading and caption sizes, and diagram limits. The build reads local MathJax and Noto packages; it does not fetch scripts or fonts from a CDN.

The build detects Chrome or Edge on Windows and common Chromium paths on Linux. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to choose a browser; if none is installed, use `pnpm exec playwright install chromium`. Browser versions can affect pagination and are recorded. PDF timestamps mean byte-identical output is not promised.

## Source and cover

`edition.json` selects About, Sets, Categories, Monoids, Orders, Logic, Types, Functors, and Natural transformations. Fuller selection retains both published Liquid branches. Selecting only the print branch would lose passages included in the author's supplied EPUB. The exact excluded draft and supporting files are explained in [excluded-material.md](docs/excluded-material.md).

The source-driven pipeline is Markdown selection → Markdown/TeX parsing → inline SVG and numbered captions → HTML/CSS → Chromium PDF → verified contents numbers → canonical PDF bookmarks. Captions retain the author's image descriptions and their math/code formatting. Logged rendering repairs remove source markup defects without changing mathematical claims.

The first page uses an adaptation of the author's original vector cover. English lettering retains the original outlines for visual fidelity. Its separate artwork and editable Unicode label layer support later cover translation; see [the cover guide](assets/cover/README.md).

`source-lock.json` records the accepted revision, canonical UTF-8/LF hashes of source inputs, and the raw supplied EPUB hash. The initial revision is `9ea2ea38052e82176cccb25c4e75709dbb064d0d`, dated 6 June 2026. The fuller edition's CC BY-NC-SA notice is retained; see [LICENSE.md](LICENSE.md).

## Verify a build

Install Python packages `pypdf`, `pdfplumber`, and `Pillow`, and put Poppler's `pdftoppm` on PATH. Then run:

```bash
python tools/reconcile_fuller.py
python tools/audit_fuller.py
python tools/review_book.py
```

The reconciliation report compares ordered headings, prose blocks, TeX annotations, captions, and SVG hashes with the supplied author EPUB. It records export-formatting differences instead of pretending both serializations are identical. The independent audit checks source-to-HTML fidelity, PDF bookmarks, contents page numbers, internal links, and text bounds. Page rasters and contact sheets are cached by PDF hash under `review/`. Inspect the rendered cover and pages before a release. These checks establish conversion fidelity; they do not prove the author's mathematics or complete PDF accessibility.

## Adopt an upstream update

`main` preserves the upstream base. Work on `english-format-fork`; start later translation branches from that branch. From the repository root:

```bash
git fetch upstream
pnpm --dir pdf-edition upstream:compare
git diff 9ea2ea38052e82176cccb25c4e75709dbb064d0d..upstream/master -- _chapters _draft_chapters cover_print.svg epub _layouts/default.html _config.yml
```

`upstream:compare` reads existing local refs and does not fetch. Replace the old SHA with the accepted `upstreamRef` in `edition.json` when reviewing later updates. Check chapters, illustration changes, conditional edition text, the supplied EPUB, cover, and license notices. Review and merge on a temporary update branch, then accept and rebuild:

```bash
git switch english-format-fork
git switch -c review/upstream-update
git merge upstream/master
pnpm --dir pdf-edition upstream:accept upstream/master
pnpm --dir pdf-edition build
```

Acceptance updates the source lock after checking the working inputs against the Git revision; it is not automatic editorial approval. If the upstream cover changes, regenerate its derived vectors with `python pdf-edition/tools/prepare_cover.py` and inspect them before building. Run reconciliation/audits, inspect the PDF, and merge the reviewed update into `english-format-fork`. Use a fresh review-branch name each time.

## Repository hygiene and translation

The `vietnamese-translation` branch starts from `english-format-fork`. Its
first review commit translates only the cover and everything before Chapter 1
(Sets). Run `pnpm build:vi:frontmatter` and `python tools/audit_vi_frontmatter.py`;
see [the Vietnamese review guide](translations/vi/README.md). Chapter 1 must
wait for the user's review and authorization to continue. The ordinary
`pnpm build` command remains the full English build.

Editable tools, styles, cover assets, configuration, lockfiles, and documentation are publishable. `node_modules/`, `output/`, `review/`, `tmp/`, caches, machine-specific environment files, and `archive/` are ignored. Historical local outputs and unused comparison tools were moved into `archive/previous-editions/`. The upstream research files and original exports retain their original locations and history.

Vietnamese chapter sources, a terminology glossary, and translated SVG labels should later live in separate language directories and use the same renderer. Translate editable sources instead of extracting the PDF text. Keep the relationship between each translation passage and its accepted English source so upstream changes can be reviewed.

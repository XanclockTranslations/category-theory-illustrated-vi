# Category Theory Illustrated: Vietnamese adaptation workspace

This is the public adaptation fork of **Category Theory Illustrated** by **Jencel Panic**, maintained at [ichxorya/category-theory-illustrated-vi](https://github.com/ichxorya/category-theory-illustrated-vi). The current edition establishes an editable English book layout that will serve as the foundation for a Vietnamese translation.

Read the [author's web book](https://abuseofnotation.github.io/category-theory-illustrated/) and visit the [original repository](https://github.com/abuseofnotation/category-theory-illustrated). Please support the author through the [official editions](https://abuseofnotation.gumroad.com/) or [Patreon](https://www.patreon.com/abuseofnotation).

## Why build another PDF pipeline?

The author already supplied a fuller **500-page PDF and an EPUB** in this repository. **GPT-6.1 Sol Ultra missed those files during the initial investigation**, then unnecessarily rebuilt the web edition as a way to obtain a PDF. That mistake is the reason this adaptation started; there was already a readable author-supplied PDF.

We are keeping the independent pipeline because the work now provides an editable foundation for our own translation and layout. It gives us control over typography, definition and theorem panels, formulas, numbered illustration captions, linked contents, chapter navigation, and canonical PDF bookmarks. English and Vietnamese can use the same source-driven build instead of trying to translate or patch an already generated PDF.

The published Markdown has been reconciled with the fuller supplied EPUB, including interludes, addenda, and exercise answers. All nine published chapters and all 472 illustration occurrences are included. The adaptation changes presentation; it does not claim to correct the author's mathematics or to reproduce a separately purchased store download.

The original exports remain under [`Panic, Jencel/Category Theory Illustrated/`](Panic%2C%20Jencel/Category%20Theory%20Illustrated/). The author also has a Pandoc EPUB build. Our pipeline adds a separately maintained book layout, local fonts and mathematics, explicit source locking, and verification of the final PDF.

## Branches

- **`main`** is the unchanged upstream base, initially pinned to `9ea2ea38052e82176cccb25c4e75709dbb064d0d`.
- **`english-format-fork`** contains this adaptation and is the fork's default working branch. It starts directly from `main`.
- Future translation branches should start from **`english-format-fork`**, so they inherit the cover, renderer, captions, and navigation.

For example, when starting translation later:

```bash
git switch english-format-fork
git switch -c vietnamese-translation
```

Keep the author's repository as `upstream` and this personal fork as `origin`. Do not merge our layout changes into `main` merely to start a translation branch.

## Vietnamese frontmatter review

The `vietnamese-translation` branch contains the first Vietnamese review pass:
the cover, edition notice, chapter overview, complete contents labels, and the
Introduction through its acknowledgments. Chapter 1 (Sets) has not been
translated. This pass is one commit and waits for the user's content review
before work can continue.

Run `pnpm --dir pdf-edition build:vi:frontmatter` for the 16-page Book preview.
See [the Vietnamese review guide](pdf-edition/translations/vi/README.md) and
[translation review notes](pdf-edition/translations/vi/review-notes.md).

## Build the English book

```bash
cd pdf-edition
pnpm install --frozen-lockfile
pnpm build
```

Node.js, pnpm, and Chrome/Chromium or Edge are required. The result is `pdf-edition/output/pdf/category-theory-illustrated-en-fuller-book.pdf`: **178 × 241 mm**, with **11.5 pt Noto Serif** body text. There is one maintained book layout.

See the [build and update instructions](pdf-edition/README.md), [cover source and localization instructions](pdf-edition/assets/cover/README.md), and [specific excluded draft material](pdf-edition/docs/excluded-material.md).

## Repository organization

The original chapters, illustrations, exports, and research material remain in their upstream locations. Our renderer, styles, editable vector cover, configuration, lockfiles, and documentation live in `pdf-edition/`. Dependencies, generated PDFs/HTML, page rasters, local caches, and historical output are ignored rather than committed.

The source revision and reference EPUB are locked. An upstream update requires an explicit diff review, acceptance of the new source hashes, a rebuild, and PDF checks. A generated PDF is a release artifact rather than the translation source.

## License and attribution

The fuller supplied edition carries the notice **“Creative Commons Non-Commercial Share Alike 4.0”**. This adaptation preserves that notice and is distributed under **CC BY-NC-SA 4.0**. Retain attribution to Jencel Panic, identify adaptations, use the book noncommercially, and share adaptations under the same terms. See [the license and attribution details](pdf-edition/LICENSE.md).

The independently written adapter code is MIT-licensed; Noto fonts retain their SIL Open Font License. Those licenses do not relicense the author's book or the third-party research files inherited from upstream.


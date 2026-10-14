# English Book verification

The reviewed source revision is `9ea2ea38052e82176cccb25c4e75709dbb064d0d`.
The final Book build was checked on 14 October 2026 with Chromium
`155.0.8059.40`.

- 478 pages at 178 × 241 mm; 11.5 pt Noto Serif body text.
- All nine published chapter sources and 472 ordered illustration occurrences
  are present. Source-to-HTML checks found no missing prose, headings, formulas,
  or image captions.
- The supplied EPUB's serialization differences were reconciled and classified:
  list/paragraph boundaries, literal source markup, math serialization, quotes,
  and one heading rendered as a paragraph. No substantive published prose
  omission was found.
- 1,831 body formulas and eight caption formulas are rendered with MathJax.
- All 331 canonical bookmarks, 90 contents targets, and internal links passed
  their destination checks. Text geometry found zero off-page characters and
  zero body-boundary flags.
- The cover retains 612 native SVG paths, with no raster or external images.
  Its native-vector preview matches the original composition; its editable
  text layer passed a Vietnamese Unicode smoke test.
- Cover header/footer removal preserves page references, annotations, catalog
  navigation, tags, and every other page's content streams. It fails if the
  expected two Chrome text blocks cannot be identified unambiguously.

Reviewed PDF SHA-256:
`43b404948cf7e8e0b6d825901fcbebd0010243c223fd9f03c5b70a822843eb19`.
Generated reports and all page rasters remain under ignored `output/` and
`review/` directories. A future build may have a different binary hash due to
PDF timestamps or browser changes; rerun the documented checks before release.

These checks establish conversion fidelity and navigation behavior. They do
not certify the author's mathematics or complete PDF accessibility.

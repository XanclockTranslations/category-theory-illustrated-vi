# Original cover adaptation

`cover.en.svg` retains the author's original cover composition, background,
colors, illustrations, and outlined English title/author lettering. It is
derived from the upstream `cover_print.svg`, which matches `cover_print.png`
and the cover supplied with the author's EPUB/PDF. The source page is A4:
`210 × 297 mm`, with `viewBox="0 0 210 297"` and background `#f2f2f2`.

The upstream cover's diagram wrappers embed SVGs, rather than raster images.
The preparation script turns those into nested native SVG viewports and gives
their IDs unique prefixes. Every illustration is therefore directly editable
in an SVG editor. Its position, scale, rotation, clipping viewport, paths, and
colors stay unchanged. The English lettering remains the original paths so its
appearance is independent of font availability. No Mell font files are bundled.
Eight embedded SVGs have no original `viewBox`; their intrinsic width/height
coordinate systems are made explicit before scaling. This preserves the small
edge diagrams instead of clipping unscaled paths. Canonical provenance hashes
normalize text to UTF-8/LF so different Git newline settings remain portable.

## Files

- `cover.en.svg`: ready to inline or print, with original English lettering.
- `cover-art.svg`: the same composition without title/author lettering; retains
  the gray title plaque for a separate overlaid text layer.
- `labels.en.json`: editable text, coordinates, sizing, font choices, and colors.
- `provenance.json`: upstream hashes, output hashes, and diagram transformations.

`cover.en.svg` includes a hidden native SVG text layer named
`cover-localizable-labels`. Its three live text objects have IDs
`cover-label-titleLine1`, `cover-label-titleLine2`, and `cover-label-author`.
The original outlined labels are individually identified by
`data-role="original-outlined-label"` and `data-label-key`.

## Rebuild and localize

From `pdf-edition`, run with the bundled Python or another Python 3 runtime:

```powershell
python tools/prepare_cover.py
```

For a future Vietnamese cover, copy `labels.en.json` to `labels.vi.json`, change
`language` to `vi`, change `renderMode` to `text`, and edit its three labels.
Then run:

```powershell
python tools/prepare_cover.py --labels assets/cover/labels.vi.json
```

That generates `cover.vi.svg`, hides the original English title/author paths,
and activates editable Unicode `<text>` objects. Illustration lettering remains
the author's original diagram content. The default live fonts are Noto Sans
and Noto Sans Mono, both suitable for a later font licensing/glyph review;
bundle or load those fonts deliberately when building a localized PDF. The
English edition needs no Mell fonts. `textLength` preserves the target line
width; font size, width, baseline, and weight can be tuned for Vietnamese
diacritics without touching the artwork.

To place the A4 composition on the Book profile (`178 × 241 mm`), fit it by
height, center it horizontally, and fill the remaining strips with `#f2f2f2`.
The composition becomes approximately `170.40 × 241 mm`, leaving `3.80 mm` on
each side. This preserves every original cover element and avoids cropping.
Keep this page free of the body running header, footer, and page number.

The source artwork remains credited to Jencel Panic. This is an independent
cover adaptation; the PDF publication page retains the edition/license notices.

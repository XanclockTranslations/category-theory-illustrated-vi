# Material outside the published book

This audit refers to upstream commit `9ea2ea38052e82176cccb25c4e75709dbb064d0d`. “Drafts and working notes” means the specific repository material below. These files remain in the checkout; they are excluded from the PDF's chapter selection.

## Draft chapters

| File | What it contains | Evidence it is unfinished |
| --- | --- | --- |
| `_draft_chapters/07.spaces.md` | About 380 words of exploratory notes linking functors/natural transformations, continuity, topological or metric spaces, the triangle inequality, and products/coproducts. | Informal fragments and hashtags, no chapter title or structured exposition, no diagrams. It is a collection of ideas rather than a completed chapter. |
| `_draft_chapters/08_adjunctions.md` | About 1,700 words introducing adjunctions through free and forgetful functors between sets and monoids, with illustrated examples. | Substantial prose, but “Unit and counit” and later sections are empty; a sentence stops at “the two functors are two way and we”; raw research links remain. Two referenced diagrams, `generator_rotations.svg` and `rule_rotations.svg`, are absent. |
| `_draft_chapters/09_yoneda.md` | About 260 words introducing hom-functors and representable functors, with two diagrams and a question. | It stops after introductory observations and two research links, without a developed statement/explanation of the Yoneda lemma. |
| `_draft_chapters/12_limits.md` | About 410 words opening a discussion of constant functors, natural transformations, and products as limits. | Empty or skeletal “Free objects,” “Monads,” and “Yoneda Lemma” sections, loose resource links, and a missing referenced `product_part_external.svg` diagram. |

The adjunctions draft is the most developed of these files. It should not be described as empty or worthless; it is simply outside the author's published chapter sequence and requires further author/editorial work before inclusion as a finished chapter.

## Working and supporting material

- `_chapters/reading.md` is a supplementary reading list: **25 links**, grouped under Sets, Orders, Logic, Types, Functors, and miscellaneous topics. Examples include Lawvere's elementary theory of sets, Martin-Löf's type theory notes, and Spivak's category theory book. It has no chapter front matter and is not included in the author's EPUB build or supplied EPUB body.
- `temp/category_theory_2_and_3 (1).pdf` is a **53-page export from February 2022** containing older versions of “From Sets to Categories” and “Monoids etc.” Their current published versions are included in this edition.
- `temp/category_theory_notes.pdf` contains **four pages of reviewer feedback from 2022**, discussing notation and explanation problems in that older draft. It is editorial feedback, not an additional book chapter.
- `proposal.md` is a project proposal: the book's intended audience, comparisons with other introductions, sample passages, testimonials, and background. It is not part of the published book body.
- `references/` holds supporting research materials, including third-party papers/books and Haskell examples. Those files are not automatically appended to the book. The published Types chapter and its Haskell appendix remain included.

## Why this selection is faithful

The author's Jekyll configuration publishes the `_chapters` collection. The author's EPUB build explicitly selects About plus the eight substantive chapters, ending with Natural transformations; it does not select `_draft_chapters` or `reading.md`. This edition selects those same nine chapter sources and retains the union of their web/print conditional passages.

The fuller-source reconciliation checks those nine chapters against the supplied author EPUB. All **472 ordered image occurrences** match, and no substantive published prose omission was found. The extra Markdown heading “Linear order” appears as literal paragraph text in the author EPUB; it is not a missing section. Thus no completed published chapter was accidentally excluded by leaving the drafts and supporting files outside the PDF.

Including any unfinished chapter later would be a separate editorial project. It would require resolving its gaps and diagram references and reviewing its mathematical claims, rather than silently presenting it as part of the author's completed book.

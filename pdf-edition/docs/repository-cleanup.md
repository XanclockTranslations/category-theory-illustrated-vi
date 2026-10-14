# Repository cleanup

Our editable adaptation lives under `pdf-edition/`. Its `.gitignore` excludes `node_modules/`, `output/`, `review/`, `tmp/`, `archive/`, Python/browser caches, local logs, and machine-specific environment files. SVGs, label JSON, renderer/audit tools, styles, documentation, package/source locks, and `.gitattributes` remain publishable. Cover preview PNGs are local verification artifacts; the actual cover is native SVG.

Previous PDF/HTML outputs and review rasters were moved to ignored `archive/previous-editions/`, along with obsolete web-only audit/comparison tools and the unused old stylesheet. The maintained code builds only the Book layout. No historical output was deleted.

The author's original chapter sources, diagrams, exports, drafts, and research material stay in their upstream locations. They retain repository ancestry; the cleanup targets our generated and obsolete adaptation files. Other translation projects in the parent workspace are untouched.

An eligible-file scan found no private keys or token patterns in the adaptation source. Authentication is obtained from Git Credential Manager in memory for publication; credentials and build-machine absolute-path reports are not committed.

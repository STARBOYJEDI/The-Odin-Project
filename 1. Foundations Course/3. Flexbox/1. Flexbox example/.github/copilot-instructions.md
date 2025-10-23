## Copilot instructions for this project

This repository is a tiny static Flexbox example (The Odin Project - Foundations course). The goal of the AI agent when editing this repo is to keep changes minimal, explicit, and safe for a static site (no build tools, no frameworks).

Key facts (quick):
- Project type: static HTML + CSS. Files of interest: `index.html`, `style.css` in the repository root.
- No build system, package manager, or tests present. Changes should be editable directly and previewed in a browser.
- Primary purpose: learning/example code for Flexbox. Prefer clarity and explicit comments over abstractions.

What to edit and where (concrete examples):
- Fix/adjust layout and visual styles in `style.css`. This file is currently empty; add only the CSS rules required to demonstrate the change.
- Small structural fixes to `index.html` are allowed (for example, the link tag currently is missing a closing `>` — change:

  From:

  `<link rel="stylesheet" href="style.css"`

  To:

  `<link rel="stylesheet" href="style.css">`

- Keep the HTML minimal; prefer adding classes/ids only when necessary to demonstrate layout.

Developer workflows (how to preview and validate changes):
- No build step. To preview locally open `index.html` in a browser or use a lightweight local server. Example (PowerShell):

```powershell
# from the project folder
python -m http.server 8000
# then open http://localhost:8000 in a browser
```

- Alternatively, use VS Code Live Server to preview changes hot-reload style.

Project-specific conventions and patterns:
- Keep styling in `style.css` (single CSS file). This example is intentionally tiny — do not introduce preprocessors or CSS frameworks.
- Use semantic HTML where possible, but prefer short, easy-to-read markup that helps learners. Add comments to explain non-obvious layout choices.
- Avoid adding new files or dependencies unless the change is clearly improving the example (explain rationale in PR text or commit message).

Integration points & external dependencies:
- None external. Do not add network calls, build tools, or external package dependencies.

Editing guidance for an AI agent (succinct rules):
1. Minimize edits: change only what's necessary to achieve the requested behavior or fix. Keep commits small and focused.
2. When changing HTML, ensure tags are valid and the stylesheet link is correctly closed and points to `style.css`.
3. When adding CSS, prefer explicit class names (e.g., `.container`, `.item`) and include a short comment explaining the Flexbox rule being demonstrated.
4. Do not introduce JavaScript or tooling. If a user requests interactive behavior, explain that the project is intentionally static and propose a separate example branch.

When to ask the human: always ask if a change will add files or external dependencies, or if a large refactor is requested.

Files worth referencing while editing:
- `index.html` — site structure and resource links.
- `style.css` — primary place for visual changes.

If you update files, include a one-line commit message summarizing the change (e.g., `fix: close stylesheet tag in index.html` or `chore: add basic flexbox layout to style.css`).

If anything here is unclear or you expect different conventions, ask the repository maintainer for clarification before larger changes.

# HTML/HTMX + Alpine UI Library Prompt

**Purpose:**  
A full prompt to generate a build-less, CDN-first, fully customizable **HTML/HTMX + Alpine.js UI library** with shadcn-style components.

---

## Cursor Prompt

You are my lead engineer. Create a **build-less, CDN-first UI library** for **vanilla HTML or HTMX + Alpine.js** that I can deploy on **shared hosting** (FTP only). Deliver a working starter with docs and examples. **Generate all code and files.**

### Goals & Constraints
- **No build tools** (no Node, Vite, PostCSS). Pure HTML/CSS/JS served over CDN or local files.
- **HTML-first**: must work without JS; Alpine enhances behavior.
- **Theming via CSS variables** (tokens). Dark mode with `[data-theme="dark"]`.
- **Utility CSS** (mini Tailwind) + **shadcn-style components** (variants & sizes via `data-*` attrs).
- **HTMX-compatible** partials, loading states, and error states.
- **Accessible** (roles, labels, keyboard, focus trap for dialogs/menus).
- **Tiny footprint** (target ≤ 20KB CSS, ≤ 10KB JS, unminified is fine for now).
- **License:** MIT. **Versioning:** SemVer.

### Tech Choices (CDN)
- **Alpine.js** (default behavior)
- **HTMX** (optional, showcased)
- **Optional helpers (as CDN imports in examples only):**
  - `focus-trap` for modals/menus
  - `@floating-ui/dom` for dropdown/tooltip positioning
  - Iconify for icons

### Produce This File Tree
```
/dist/
  tokens.css
  utilities.css
  components.css
  alpine-helpers.js
/docs/
  index.html
  tokens.html
  utilities.html
  components/
    button.html
    input.html
    card.html
    badge.html
    dialog.html
    tabs.html
    alert-toast.html
    navbar.html
    table.html
  htmx.html
  accessibility.html
/examples/
  starter.html
  partials/
LICENSE
README.md
```

### Implement
1. **Tokens (`/dist/tokens.css`)**
   - Brand, neutrals, semantic (ok/warn/danger), spacing, radius, typography, shadows, breakpoints, motion preferences.
   - Light/dark themes via `[data-theme]`.

2. **Utilities (`/dist/utilities.css`)**
   - Layout: `container`, `flex`, `grid`, etc.
   - Spacing: `p-*`, `m-*`, etc.
   - Typography and primitives.
   - Responsive helpers.

3. **Components (`/dist/components.css`)**
   - **Button**, **Input**, **Card**, **Badge**, **Dialog**, **Tabs**, **Toast**, **Navbar**, **Table**.
   - Use **data attributes** for variants/sizes.

4. **Alpine Helpers (`/dist/alpine-helpers.js`)**
   - For modal open/close, toast queue, tabs state, dropdown toggle.

5. **Docs Site (`/docs/*`)**
   - Full static docs with usage examples and accessibility notes.

6. **Examples (`/examples/starter.html`)**
   - Pull `/dist/*.css` and `/dist/alpine-helpers.js` over relative paths.

7. **README.md**
   - Quick start, CDN usage, theming, accessibility, versioning.

8. **Quality Gates**
   - Lighthouse accessibility ≥90, keyboard operation, CSS `@layer` usage, reduced-motion respect.

9. **Nice-to-haves**
   - Favicon, OG tags, dark-mode persistence via localStorage.

### Final Step
- After generating all files, ensure internal links work locally.
- Output a summary of what was created plus “how to use” CDN and local snippets.
- Everything must run by simply opening `/docs/index.html` in a browser.

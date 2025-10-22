# HTML/HTMX + Alpine UI Library

Build-less, CDN-first UI library for vanilla HTML or HTMX + Alpine.js. Shadcn-style components, utility CSS, and a tiny footprint.

## Quick Start
- Open `docs/index.html` directly in a browser.
- Toggle theme with the header button (persists to `localStorage`).
- Explore tokens, utilities, and components pages.

## File Tree
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
    snippet.html
LICENSE
README.md
```

## Use via CDN (example)
```html
<link rel="stylesheet" href="/dist/tokens.css" />
<link rel="stylesheet" href="/dist/utilities.css" />
<link rel="stylesheet" href="/dist/components.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script src="https://unpkg.com/htmx.org@1.9.12"></script>
<script defer src="/dist/alpine-helpers.js"></script>
```

## Use locally
- Copy `/dist/*` into your project and reference them with relative paths.
- Or use the `examples/starter.html` as a base and replace content.

## Theming
- Set `data-theme="light|dark"` on `<html>`.
- Customize tokens in `dist/tokens.css` by overriding CSS variables.

## Accessibility
- Visible focus via `:focus-visible`.
- Dialogs and menus should trap focus; see `dist/alpine-helpers.js` and `docs/accessibility.html`.
- Respect reduced motion via `@media (prefers-reduced-motion: reduce)`.

## HTMX Notes
- HTMX requires http(s) for XHR requests. When testing locally, run a static server (e.g., `python -m http.server`).
- See `docs/htmx.html` and `examples/partials/snippet.html`.

## Versioning & License
- License: MIT (see `LICENSE`).
- Versioning: SemVer planned; start at `0.1.0`.

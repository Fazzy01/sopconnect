# SOPConnect Consultancy — Website

React + Vite + Tailwind CSS site built from the SOPConnect rebranding brief.

## Getting started

```
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/`.

## Editing the brand colors

All colors are defined as CSS variables in `src/index.css` under `:root`,
and mapped into Tailwind in `tailwind.config.js`. Change the hex values in
`src/index.css` and every `bg-primary`, `text-secondary`, etc. class across
the site updates automatically:

- `--color-primary` — deep navy (main brand color)
- `--color-secondary` — warm gold (buttons, accents)
- `--color-accent` — teal (used sparingly for cultural/creative touches)
- `--color-paper` — background
- `--color-ink` / `--color-ink-soft` — text colors

## Editing content

Most site copy (services, values, training programmes, events, nav links,
disclaimers) lives in one place: `src/data/content.js`. Page layout/structure
lives in `src/pages/`.

## Fonts

- Headings: Fraunces (serif)
- Body: Libre Franklin (sans-serif)

Loaded via Google Fonts in `index.html` — swap the `<link>` there and the
`fontFamily` values in `tailwind.config.js` to change fonts later.

## Structure

- `src/components/` — shared UI (Navbar, Footer, cards, forms, etc.)
- `src/pages/` — one file per route, incl. `src/pages/legal/` for policy pages
- `src/data/content.js` — editable site copy
- `src/App.jsx` — route definitions

## Notes

- The enquiry/contact forms are front-end only right now (they show a
  confirmation state but don't send anywhere) — wire them up to an email
  service or backend endpoint when ready.
- Legal pages (Privacy, Terms, etc.) contain placeholder text marked
  "pending legal review" — have these reviewed before publishing.
- Social links in the footer point to `#` placeholders — add real URLs
  once accounts are set up.

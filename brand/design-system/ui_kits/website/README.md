# Fukuii Website — UI kit

A high-fidelity recreation of the Fukuii marketing site (`white-b0x/fukuii-website`, `prod-sprint` branch — the Next.js app under `apps/frontend`), rebuilt from the design system's tokens and components.

## Run it

Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js` (two levels up), then each section as a `text/babel` script. The theme toggle switches dark/light; the `CodeBlock` has a working copy button.

## Sections

- `Nav.jsx` — sticky blurred nav (`.nav-fk`), FUKUII lockup + sublabel, theme toggle, GitHub.
- `Hero.jsx` — the two-cell hero: hex mascot + tagline (left), alpha status + studio copy + CTAs (right), over a green/gold aurora wash.
- `Sections.jsx` — `StatusStrip`, `WhatIsFukuii` (what-grid + fact boxes), `Networks` (bordered network grid with chain IDs + `Primary`/`Roadmap` badges), `Roadmap` (phase rows, `In Progress`/`Planned`), `QuickStart` (code block), `CTA` (gradient banner), `Footer`.
- `icons.jsx` — GitHub, arrow, doc, sun/moon, and the platform/stack glyphs (Linux, macOS, Windows, Docker, Scala, JVM) reproduced from the site source.

## Components used

`Button`, `Badge`, `Stat`, `CodeBlock` from `window.FukuiiDesignSystem_97523a`, plus the `.cell-grid` / `.container-fk` / `.hero-gradient` / `.status-strip` utility classes from the design system. Sections add layout + copy only.

## Notes

- Content, copy, networks, roadmap phases, and stats are faithful to the prod-sprint site.
- The hero's animated `HexCanvas` (a `<canvas>` hex-field in the real app) is represented here by the static aurora wash + hex logo; wire in a canvas if you need the motion.

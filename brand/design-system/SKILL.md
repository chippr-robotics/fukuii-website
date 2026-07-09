---
name: fukuii-design
description: Use this skill to generate well-branded interfaces and assets for Fukuii (the Scala EVM execution client by Chippr Robotics), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Identity:** institutional-grade infrastructure — *"built to finance's standard."* Serious, precise, institutional, terminal-adjacent. Forest green + old gold on a near-black, green-tinted foundation.
- **Tokens:** link `styles.css` (the root entry) to pick up all colors, type, spacing, motion, and the utility classes. Dark is the default; `[data-theme="light"]` is a parity theme.
- **Color:** primary accent green `#50a060` (sampled from the logo), secondary gold `#d6b56b`, rare pink worm accent `#c06060`. Surfaces `#0f130d` / `#1a1f16`. High contrast.
- **Type:** DM Sans (display + prose, up to 800 for hero/CTA), JetBrains Mono (technical — chain IDs, versions, ports, labels, badges). Mono is part of the brand.
- **Signature motif:** the **cell grid** — geth-inspired bordered grid, sharp corners, hairline shared edges, mono `cell-label`s and `cell-cta` bars. Use `.cell-grid` / `Cell` + `CellGrid` for structural content before reaching for rounded cards. Plus paper-grain noise, a green/gold aurora hero, gradient text, and `badge-fk` status pills (Primary / In Progress / Planned).
- **Components:** `Button`, `Badge`, `Card`, `Cell`/`CellGrid`, `Tag`, `Stat`, `Input`, `Tabs`, `CodeBlock`, `Logo`. See each `*.prompt.md`.
- **UI kit:** `ui_kits/website/` recreates the Fukuii landing page — the reference for product-surface layout.
- **Assets:** `assets/logo/fukuii-hex-logo.svg` — the sticker hex mascot.
- **Copy voice:** sentence case, short declarative headlines (often ending in a period), second person, concrete technical specifics, finance-serious, honest about alpha status, no emoji, no exclamation marks.

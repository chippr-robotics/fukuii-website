# Fukuii Design System

A design system for **Fukuii** — a Scala execution client for Ethereum and the wider EVM ecosystem, maintained by **Chippr Robotics LLC**. Fukuii runs any EVM-compatible network (Ethereum Classic, Ethereum mainnet, Mordor, Sepolia, and growing) from a single binary on the JVM. Positioning: *the execution client built to finance's standard* — feature-complete, signed and SBOM-verifiable, open source, serving institutional custodians and sovereign funds while staying light enough for a solo operator.

This system reads as **serious, precise, and institutional** — the visual equivalent of something a clearing system would trust — while staying legible to an operator reading it at 3 a.m. It is a *forest-green + old-gold* identity on a near-black, terminal-adjacent foundation, with a distinctive **geth-inspired bordered cell grid** as its structural signature.

---

## Sources

Reverse-engineered from the official Fukuii website. If you have access, explore these to build richer, more faithful designs:

- **Website repo — `white-b0x/fukuii-website`, branch `prod-sprint`** — https://github.com/white-b0x/fukuii-website/tree/prod-sprint
  - `apps/frontend/` — the live Next.js 16 site (React 19, Tailwind 4, DM Sans + JetBrains Mono via `next/font`). Source of truth for the design: `app/globals.css` holds the full token + utility system; `app/layout.tsx` wires the fonts; `components/sections/*` are the page sections (Hero, WhatIsFukuii, Networks, Roadmap, QuickStart, CTA, …).
  - `brand/` — brand assets and tokens: `tokens/colors.css` + `colors.json`, `LOGO-STYLE.md`, and the logo / wordmark / favicon / OG assets. The greens are **pixel-sampled from `fukuii-hex-logo.png`** (`#50a060` dominant).
  - ⚠️ Use the **`prod-sprint`** branch. The `main` branch holds an older static design (olive-green `#4d8a28`, different tokens) that does **not** reflect the current brand.
- **Core client — `chippr-robotics/fukuii`** (mirror: `white-b0x/fukuii`) — the Scala client. Source of truth for technical vocabulary: sync modes, Engine API, EIP/ECIP coverage, RPC namespaces, ports, networks.
- **Docs:** https://docs.fukuii.com · **Maintainer:** Chippr Robotics — https://chipprbots.com

---

## Product context

Fukuii has one primary public surface — the **marketing/docs website** — backed by a deeply technical Scala client. The audience is node operators, SREs, institutional infrastructure teams, and protocol developers. The voice is engineering-credible and finance-serious, never salesy. Technical nouns (chain IDs, ports, versions, RPC namespaces, EIPs) are first-class content, always set in monospace.

---

## CONTENT FUNDAMENTALS

How Fukuii writes.

- **Voice — institutional, precise, operator-to-operator.** Confident and exact. The flagship line is *"The execution client built to finance's standard."* Copy speaks to "institutional digital custodians, global financial institutions, and sovereign wealth funds, while remaining lightweight enough for the solo operator."
- **Person.** Second person for the reader ("Tell us what you see", "Pick your path"); the product is *Fukuii* or *it*; *we* only for project intent. The studio signs as *Chippr Robotics LLC*.
- **Casing.** Sentence case for headlines and buttons. Short declaratives, often ending in a period: *"One binary, any network."* *"EVM networks."* *"Run a node. Tell us what you see."* The only uppercase is the `FUKUII` wordmark and mono cell-labels / badges (`ABOUT`, `CONSENSUS MODEL`, `IN PROGRESS`), where letter-spacing makes it deliberate.
- **Technical specificity is the pitch.** Exact versions and standards, never vague magnitudes: *"Engine API V1 through V4"*, *"Scala 3 LTS · Pekko Typed Actors · JVM"*, *"JDK 25 LTS"*, *"CycloneDX SBOM"*, *"Cosign-signed Docker images"*, concrete counts (verify current test count and simulator count against CI before citing — do not carry forward a stale number).
- **JVM-as-finance framing.** The stack is tied to financial infrastructure: *"its stack aligns natively with the infrastructure of modern finance: the trading desks, clearing systems, and settlement layers already built there."*
- **The four pillars (from `llms.txt`).** The positioning spine, used verbatim where possible: **The preferred stack** (JVM + Scala 3, bugs unrepresentable at compile time), **No license meter running** (Apache Pekko, no Business Source License exposure), **Independent by construction** (different codebase / language / team / failure modes from the dominant Go clients), **Agentic infrastructure** (a built-in MCP server exposing node state to AI agents).
- **Honest about maturity.** Alpha status is stated plainly (`Alpha v0.7`), with a standing invitation for operator feedback to shape v1.0.
- **Emoji:** none in product UI. No exclamation marks in body copy. Restraint is the tone.
- **Monospace carries the technical nouns** — chain IDs (`chain 61`), ports (`:8551`), packages (`com.chipprbots`), endpoints (`/buildinfo`), versions — always JetBrains Mono, inline with prose.

---

## VISUAL FOUNDATIONS

- **Color vibe.** Near-black, green-tinted foundation (`--bg #0f130d`, `--bg-elev #1a1f16`). **Forest green is the primary accent** — `--fk-green-3 #50a060`, pixel-sampled from the logo's hex background — used for buttons, links, active states, stats, and the "Primary" highlight. **Old gold** (`#d6b56b`) is the secondary accent, kept as a *solid* tone only: the alpha-status dot, gold badges, the gold focus ring. A **dusty-rose worm accent** (`#c06060`, from the mascot) appears very sparingly. **No green→gold gradient fills** — accent text and CTAs are solid green. High, accessibility-grade contrast throughout.
- **Type.** **DM Sans is THE typeface** — display, headings, body, and UI. It reaches **800** for hero/CTA emphasis, 700 for section titles, tight negative tracking (−0.02 to −0.03em). **JetBrains Mono is used sparingly, as a subheader / label accent only** — cell labels, badges, the nav sublabel, chain IDs, versions, ports, and code. Never for headings or body prose.
- **The cell grid.** The brand's structural signature: a **geth-inspired bordered grid** (`.cell-grid`) — sharp 0-radius corners, hairline `1px` shared edges (achieved with `gap:1px` over a border-colored background), documentary mono labels (`.cell-label`) above content, and CTA bars (`.cell-cta`) at the bottom of cells. Most structural content lives in cells, not rounded cards.
- **Backgrounds.** Flat near-black, plus a fixed **paper-grain noise overlay** (`.noise-overlay`, ~2.5% opacity fractal-noise SVG). The hero adds a restrained **green radial wash** (`.hero-gradient`) with slow-drifting **aurora blobs** (`blur(80px)`, 22–32s alternating drift). An animated `<canvas>` hex-field (HexCanvas) sits behind the hero in the live app.
- **Borders.** Hairlines do the structural work: `--border` (10% ivory), `--border-strong` (18%), and green/gold accent borders for emphasis. Depth reads from borders + elevation more than shadow.
- **Shadows.** `--shadow-card` (soft 30px drop) and `--shadow-glow` (a 1px gold ring + green drop) appear on rounded `card-fk` hover. Restrained and institutional.
- **Corner radii.** Two registers: **sharp (0)** for the cell grid, hero buttons, and matrices; **rounded** `8 / 14 / 22 / 32` for cards, the CTA glass panel, and badges. Badges and dots use the full pill radius.
- **Cards vs cells.** `card-fk` — soft green-tinted fill, 14px radius, hairline border, lifts 2px with a gold glow on hover (for standalone features). `cell-fk` — sharp, bordered, label-led (for structural grids). Reach for cells first.
- **Buttons.** `primary` is solid green with **white** text and **sharp** corners (matches hero + cells); `gradient` is the emphasis CTA — also **solid green**, rounded, with a soft green glow (no gold gradient); `secondary`/`ghost` are bordered and quiet.
- **Hover / press.** Primary brightens; secondary firms its border and surface; nav links go muted → full text with a card-tint background; the GitHub button borders green. Cards lift 2px. No bounce.
- **Motion.** Smooth decelerate (`cubic-bezier(0.16,1,0.3,1)`). Ambient: aurora drift + a gold `badge-pulse` ring on the alpha dot. Entrance reveals fade-up ~24px. All ambient motion respects `prefers-reduced-motion`.
- **Transparency / blur.** Sticky nav (`backdrop-blur(20px) saturate(180%)` over translucent near-black), the hero cell overlay, and the CTA glass panel. Not decorative elsewhere.
- **Layout.** `--container 1240px`, section rhythm ~80px (112px desktop), 4px spacing base, CSS grid for cells and the status strip.
- **Imagery.** The mascot **hex logo** — a sticker-style badge (bold black outline, white bleed, drop shadow) of a cartoon mantis with a pink worm. Warm and characterful, used against the serious dark ground for contrast. No photography.

---

## ICONOGRAPHY

- **System.** Feather-style line icons (24×24, 2px stroke, round caps) for UI affordances — arrow, document, sun/moon, hamburger — plus **brand/tech glyphs** (filled, `currentColor`) for the platform and stack pills: GitHub, Linux, Apple/macOS, Windows, Docker, Scala, Pekko, JVM, RocksDB. All are reproduced faithfully from the site source in `ui_kits/website/icons.jsx`.
- **Color.** Icons inherit `currentColor` — muted by default, accent green on emphasis/hover.
- **Substitution note.** The site hand-embeds individual SVG paths; there is no icon font or sprite. For UI icons beyond the reproduced set, use **[Lucide](https://lucide.dev)** (Feather-compatible, 2px stroke) to stay on-brand. For tech/brand logos, use **[Simple Icons](https://simpleicons.org)**. Flagged as substitutions since no packaged icon set ships with Fukuii.
- **Emoji / unicode:** not used as iconography. Avoid.
- **Logo.** `assets/logo/fukuii-hex-logo.png` (the rendering master — sized PNGs in `png/`), `fukuii-wordmark-dark.svg` / `-light.svg`, favicon, and `assets/social/og-fukuii.png`. (Note: `fukuii-hex-logo.svg` is a bare wrapper with no embedded raster — use the **PNG** for the mascot.) See `Logo` component for the wordmark lockup.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import` manifest only.
- `readme.md` — this file. · `SKILL.md` — Agent-Skills front matter for Claude Code.

**`tokens/`** — foundations, each `@import`ed by `styles.css`
- `fonts.css` — DM Sans + JetBrains Mono (Google Fonts).
- `colors.css` — full palette + role tokens (dark default, light theme) + signal colors.
- `typography.css` · `spacing.css` (radii 8/14/22/32) · `motion.css` (easing, aurora + badge-pulse keyframes).
- `base.css` — resets, body, headings, focus, selection, scrollbar, noise overlay.
- `effects.css` — the brand's utility classes: `container-fk`, `section-fk`, `card-fk`, `badge-fk`, `code-block`, `hero-gradient`, `aurora-blob`, `gradient-text`, `nav-fk`, `status-strip`, `cell-grid` + cell parts, `protocol-matrix`, `proto-tag`, `os-pill`.

**`assets/`** — `logo/` (hex logo svg/png + wordmarks), `favicon/`, `social/` (OG), `colors.json`.

**`components/`** — React primitives (namespace `window.FukuiiDesignSystem_97523a`)
- `core/` — `Button`, `Badge`, `Card`, `Cell` + `CellGrid`, `Tag`, `Stat`
- `forms/` — `Input` · `navigation/` — `Tabs` · `data/` — `CodeBlock` · `brand/` — `Logo`

**`ui_kits/website/`** — the Fukuii landing page recreated from the components + cell system (`index.html` + section JSX + `icons.jsx`). See its README.

**`guidelines/`** — foundation specimen cards in the Design System tab (Colors, Type, Spacing, Surfaces, Brand).

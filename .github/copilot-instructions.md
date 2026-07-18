# Fukuii Website: Copilot Instructions

## Stack

- Astro 5, static output only (`output: 'static'`), no client framework runtime
- TypeScript 5 strict
- Tailwind CSS 4 (CSS-first, `@theme` block in `src/styles/global.css`), used only for small utility classes; most styling is inline `style` attributes referencing CSS custom property tokens
- Self-hosted fonts via `@fontsource/dm-sans` and `@fontsource/jetbrains-mono`, imported in `src/layouts/BaseLayout.astro`
- pnpm 10 (`pnpm install --frozen-lockfile` in CI)
- Hosting: GitHub Pages, custom domain `fukuii.com` (`public/CNAME`), deployed via `.github/workflows/deploy-pages.yml` on push to `main`

## Commands

```bash
pnpm install --frozen-lockfile
pnpm dev              # localhost:4321
pnpm build             # astro check + astro build
pnpm lint
pnpm typecheck         # astro check
```

## Key Rules

- All CSS tokens are CSS custom properties (`--bg`, `--accent`, etc.), never hardcode hex values
- No client framework runtime: any interactivity is a small vanilla-JS `<script>` scoped to its own `.astro` component
- No live/dynamic data fetching (ISR, client-side polling); this is a fully static site
- Canonical URL: `https://fukuii.com`
- No em dashes in generated copy

## Protected Files

Do not modify without explicit instruction:
- `brand/tokens/colors.css`: color system source of truth
- `src/styles/global.css`: design tokens and utility classes
- `src/layouts/BaseLayout.astro`: metadata, JSON-LD, font loading

# Fukuii Website

Official landing page for [Fukuii](https://github.com/chippr-robotics/fukuii) — the multi-EVM execution client in Scala 3.

**Live:** https://fukuii.com

## Stack

- **Next.js 16** — App Router, `output: 'standalone'`
- **TypeScript 5** — strict mode
- **Tailwind CSS 4** — CSS-first (`@theme` in `app/globals.css`, no `tailwind.config.js`)
- **pnpm 10** — package manager
- **node:24-alpine** — container runtime

## Local Setup

```bash
cd apps/frontend
pnpm install
pnpm dev         # → http://localhost:3000
```

Other commands:

```bash
pnpm build       # production build
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
```

## Docker

```bash
docker build -t fukuii-website .
docker run -p 3000:3000 fukuii-website
```

## Repository Structure

```
apps/frontend/          Next.js 16 application
  app/                  App Router (layout, page, sitemap, robots.txt)
  components/           Section + UI components
  lib/api/              Blockscout + CoinGecko data fetchers (ISR)
  public/               Static assets (favicons, OG image, llms.txt)
brand/                  Design assets (source of truth)
  logo/                 SVG logo, PNG exports
  favicon/              Favicon source files
  social/               OG image source
  tokens/               Color tokens (CSS + Tailwind 4)
.github/workflows/      CI/CD — test + Docker build/push on merge to main
```

## Brand

Forest green (`#4d8a28`) + old gold (`#d6b56b`) + ink (`#1a1f16`) + ivory (`#f5f3ed`). Dark-first; light theme via `[data-theme="light"]` class.

Color tokens: `brand/tokens/colors.css` — copy to `apps/frontend/app/globals.css` when updating.

## CI/CD

GitHub Actions runs on every push/PR:
1. `pnpm install --frozen-lockfile`
2. `pnpm lint && pnpm typecheck && pnpm build`

On merge to `main`: builds and pushes Docker image to GHCR (`ghcr.io/chippr-robotics/fukuii-website`).

## License

Apache 2.0 — maintained by [Chippr Robotics LLC](https://github.com/chippr-robotics).

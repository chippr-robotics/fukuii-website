# Fukuii Website

Official landing page for [Fukuii](https://github.com/chippr-robotics/fukuii) — a Scala 3 execution client for Ethereum and the EVM ecosystem.

**Live:** https://fukuii.com

## Stack

- **Next.js 16** — App Router, all routes statically prerendered (`output: 'standalone'`)
- **TypeScript 5** — strict mode
- **Tailwind CSS 4** — CSS-first (`@theme` in `app/globals.css`, no `tailwind.config.js`)
- **pnpm 10** — package manager
- **node:24-alpine** — container runtime

Fonts: DM Sans (display) + JetBrains Mono (code) via `next/font/google`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, network stats, features, stack, architecture, roadmap, guide preview |
| `/features` | Full capability matrix |
| `/stack` | Runtime dependency manifest with versions |
| `/architecture` | Three-layer architecture breakdown |
| `/roadmap` | Orbita four-phase roadmap |
| `/guide` | Installation guide — SNAP sync, Docker, Engine API mode |

## Local Setup

```bash
cd apps/frontend
pnpm install
pnpm dev         # → http://localhost:3000
```

```bash
pnpm build       # production build
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
```

## Repository Structure

```
apps/frontend/              Next.js 16 application
  app/
    globals.css             Tailwind 4 @theme + design tokens
    layout.tsx              Root layout — metadata, JSON-LD, fonts
    page.tsx                Home page
    features/page.tsx
    stack/page.tsx
    architecture/page.tsx
    roadmap/page.tsx
    guide/page.tsx
    sitemap.ts
    robots.txt/route.ts
  components/
    sections/               Page sections (NavHeader, HeroSection, FooterSection, …)
    ui/                     Primitives (FadeIn, HexCanvas, PageHero, ThemeToggle, …)
  lib/api/                  Blockscout + CoinGecko data fetchers (ISR, revalidate: 3600)
  public/                   Favicons, OG image, site.webmanifest, llms.txt
brand/                      Design source of truth
  logo/                     SVG + PNG logo exports, wordmark variants
  favicon/                  Favicon source files
  social/                   OG image source (SVG + PNG)
  tokens/                   Color tokens (CSS + Tailwind 4 + JSON)
  LOGO-STYLE.md             Logo usage guidelines
terraform/                  GCP Cloud Run infrastructure (optional)
nginx.conf                  Reverse-proxy config for VPS deployments
vercel.json                 Vercel deploy config (rootDirectory: apps/frontend)
Dockerfile                  Multi-stage build → node:24-alpine
```

## Deployment

Three supported paths:

**Vercel** (simplest): connect the repo, Vercel reads `vercel.json` (`rootDirectory: apps/frontend`) and deploys automatically on push to `main`.

**Docker / GHCR**: CI builds and pushes to `ghcr.io/chippr-robotics/fukuii-website` on every merge to `main`. Pull and run anywhere:

```bash
docker build -t fukuii-website .
docker run -p 3000:3000 fukuii-website
```

**GCP Cloud Run** (Terraform): see `terraform/README.md`. Provisions Cloud Run from the GHCR image.

**VPS**: use `nginx.conf` as a reverse proxy in front of the Docker container or `pnpm start`.

## CI/CD

GitHub Actions (`.github/workflows/build-deploy.yml`) on every push/PR to `main`:

1. `pnpm install --frozen-lockfile`
2. `pnpm lint && pnpm typecheck && pnpm build`
3. On merge to `main`: builds and pushes Docker image to GHCR with tags `latest`, `main`, and `main-<sha>`.

## Brand

Forest green `#4d8a28` + old gold `#d6b56b` + ink `#1a1f16` + ivory `#f5f3ed`. Dark-first; light theme via `[data-theme="light"]`.

CSS role tokens (`--bg`, `--bg-card`, `--bg-elev`, `--border`, `--text`, `--text-muted`, `--accent`) are defined in `app/globals.css`. Canonical source is `brand/tokens/colors.css` — copy to `globals.css` when updating tokens.

## License

Apache 2.0 — maintained by [Chippr Robotics LLC](https://github.com/chippr-robotics).

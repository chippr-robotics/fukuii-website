# Fukuii Website — Copilot Instructions

## Stack

- Next.js 16 App Router (`output: 'standalone'`)
- TypeScript 5 strict (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`)
- Tailwind CSS 4 (CSS-first — no `tailwind.config.js`; theme lives in `app/globals.css` `@theme` block)
- pnpm 10 (`pnpm install --frozen-lockfile` in CI)
- node:24-alpine container

## Commands

```bash
cd apps/frontend
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm lint
pnpm typecheck        # tsc --noEmit
```

## Key Rules

- All CSS tokens are CSS custom properties (`--bg`, `--accent`, etc.) — never hardcode hex values
- Client Components require `"use client"` at top of file; event handlers are forbidden in Server Components
- Live data uses Next.js ISR (`export const revalidate = 3600`) — no client-side fetching for network stats
- `next/image` for all `<img>` tags
- Canonical URL: `https://fukuii.com`

## Protected Files

Do not modify without explicit instruction:
- `brand/tokens/colors.css` — color system source of truth
- `apps/frontend/app/globals.css` — design tokens and utility classes
- `apps/frontend/app/layout.tsx` — metadata, JSON-LD, font loading

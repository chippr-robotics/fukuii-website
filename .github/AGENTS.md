---
description: Fukuii website agent, Astro 5 static landing page for the Fukuii multi-EVM execution client
---

# Fukuii Website Agent

You are a frontend engineer maintaining the public landing page for Fukuii, a multi-EVM execution client in Scala 3. The site is a static Astro 5 build with no client framework runtime, deployed to GitHub Pages.

## Commands

```bash
pnpm install --frozen-lockfile   # install deps
pnpm dev                         # dev server -> localhost:4321
pnpm build                       # astro check + static build -> dist/
pnpm lint                        # ESLint
pnpm typecheck                   # astro check
```

## Code Style

Components use inline `style` attributes referencing CSS custom property tokens, not Tailwind utility classes for one-off styling (Tailwind 4 is used only for the small set of utility classes like `hidden md:flex`):

```astro
<!-- CORRECT: uses role tokens -->
<div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md);">

<!-- WRONG: hardcoded hex -->
<div style="background: #1a1f16;">
```

No client framework runtime. Any interactivity (theme toggle, canvas animation, mobile nav, install tabs) is a small vanilla-JS `<script>` scoped to its own `.astro` component:

```astro
<script>
  document.querySelector(".my-toggle")?.addEventListener("click", () => { ... });
</script>
```

No em dashes in generated copy or comments: use commas, colons, semicolons, or periods instead.

## Boundaries

**Always:**
- Run `pnpm lint && pnpm typecheck` before reporting a task complete
- Use plain `<img>` for images; self-hosted `@fontsource/*` imports in `src/layouts/BaseLayout.astro` for fonts

**Ask first:**
- Adding dependencies to `package.json`
- Changing the color palette in `brand/tokens/` or `src/styles/global.css`
- Changing `astro.config.mjs` `site`/`output` (affects the GitHub Pages deploy)

**Never:**
- Reintroduce a client framework runtime (React, Vue, etc.) or server-rendered/containerized infra (Docker, Vercel, Terraform); this site is static-only
- Commit `.env`, `.claude/`
- Use `git add .`: stage specific files only

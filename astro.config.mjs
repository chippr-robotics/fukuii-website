// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Served from GitHub Pages under the custom domain fukuii.com (see public/CNAME),
// so this deploys at the domain root, no `base` path needed.
export default defineConfig({
  site: "https://fukuii.com",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

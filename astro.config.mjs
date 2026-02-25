import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

import remarkLinkCard from "remark-link-card"
import remarkAlert from "remark-github-alerts"
import remarkGfm from "remark-gfm"

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sphere-demo.vercel.app",
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm, remarkAlert, remarkLinkCard],
    }),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
})
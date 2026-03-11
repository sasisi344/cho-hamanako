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
  site: "https://cho-hamanako.info",
  build: {
    inlineStylesheets: "always",
  },
  redirects: {
    "/2025/10/【初心者必見】浜名湖釣りのルールとマナー完全/": "/blog/guide/beginner/hamanako-fishing-rules-and-manners",
    "/2024/11/浜名湖周辺にある釣具店をエリア別やおすすめで/": "/blog/guide/logistics/shops",
    "/2025/09/9月の浜名湖投げ釣り五目！キス・カワハギ・ヘダ/": "/blog/guide/method/casting-gomoku",
    "/2025/12/winter12-3-lightgame-rockfish/": "/blog/guide/method/winter-lightgame",
    "/2024/11/1月の浜名湖で狙える！釣り人おすすめポイントと/": "/blog/season/monthly/1-month",
    "/2024/09/10月の浜名湖でおすすめの釣りポイント8選/": "/blog/season/monthly/10-month",
    "/2024/10/11月の浜名湖でおすすめの釣りポイント5選/": "/blog/season/monthly/11-month",
    "/2024/10/12月の浜名湖でおすすめの釣りポイント/": "/blog/season/monthly/12-month",
    "/2024/12/2月の浜名湖でおすすめの釣りポイント6選/": "/blog/season/monthly/2-month",
    "/2025/01/3月の浜名湖でおすすめの釣りポイント10選/": "/blog/season/monthly/3-month",
    "/2025/02/4月の浜名湖でおすすめの釣りポイント8選/": "/blog/season/monthly/4-month",
    "/2025/02/5月の浜名湖でおすすめの釣りポイント9選/": "/blog/season/monthly/5-month",
    "/2025/02/6月の浜名湖でおすすめの釣りポイント9選/": "/blog/season/monthly/6-month",
    "/2025/02/7月の浜名湖でおすすめの釣りポイント7選/": "/blog/season/monthly/7-month",
    "/2025/02/8月の浜名湖でおすすめの釣りポイント10選/": "/blog/season/monthly/8-month",
    "/2024/09/9月の浜名湖でおすすめの釣りポイント6選/": "/blog/season/monthly/9-month",
    "/hamanako-seasonal-fishing-patterns-guide/": "/blog/season/seasonal-patterns-guide",
    "/hamanako-fishing-calendar-guide/": "/blog/season/yearly-fishing-calendar"
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm, remarkAlert, remarkLinkCard],
    }),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
})
import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "釣！浜名湖",
  DESCRIPTION: "浜名湖の釣りポイント、仕掛け、ターゲット魚種、周辺情報を網羅した総合フィッシングガイド。初心者からベテランまで、「釣れる」情報を発信します。",
  AUTHOR: "Cho! Hamanako Team",
}

// Work Page
export const WORK: Page = {
  TITLE: "釣り解説",
  DESCRIPTION: "浜名湖での釣り方やタックル解説。",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "最新記事",
  DESCRIPTION: "浜名湖の釣りに関する最新情報や釣果レポート。",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "釣り場ポイント",
  DESCRIPTION: "表・中・奥浜名湖の主要釣りポイントを詳細解説。",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "検索",
  DESCRIPTION: "記事やポイントをキーワードで検索。",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "ホーム",
    HREF: "/",
  },
  {
    TEXT: "ポイント",
    HREF: "/projects",
  },
  {
    TEXT: "解説ガイド",
    HREF: "/blog",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@cho_hamanako",
    HREF: "https://twitter.com/",
  },
]


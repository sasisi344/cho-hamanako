import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "釣！浜名湖",
  DESCRIPTION: "浜名湖の釣りポイント・仕掛け・ターゲット魚種を網羅した総合ガイド。表・中・奥浜名湖のポイント解説、水深図、ライブカメラ、初心者向けサビキから上級者の攻略まで。",
  AUTHOR: "さしし",
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

// Points Page 
export const POINTS: Page = {
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
    HREF: "/map/",
  },
  {
    TEXT: "釣れる魚",
    HREF: "/blog/target/",
  },
  {
    TEXT: "最新記事",
    HREF: "/blog/",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@cho_hamanako",
    HREF: "https://x.com/cho_hamanako",
  },
]


// AdSense
export const ADSENSE = {
  CLIENT_ID: "ca-pub-9798094072282530",
  RECTANGLE_SLOT: "5678675074",
  MULTIPLEX_SLOT: "9983134206",
}

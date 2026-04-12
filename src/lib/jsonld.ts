import type { CollectionEntry } from "astro:content"

const SCHEMA_CONTEXT = "https://schema.org" as const

/** 記事カテゴリと一覧ページの対応（パンくず用。index が無いカテゴリは /blog へ） */
const BLOG_CATEGORY_HUB: Partial<
  Record<
    NonNullable<CollectionEntry<"blog">["data"]["category"]>,
    { name: string; path: string }
  >
> = {
  guide: { name: "ガイド", path: "/blog/guide/" },
  target: { name: "釣れる魚", path: "/blog/target/" },
}

export type JsonLdGraphRoot = {
  "@context": typeof SCHEMA_CONTEXT
  "@graph": Record<string, unknown>[]
}

function baseOrigin(siteUrl: string): string {
  return siteUrl.replace(/\/$/, "")
}

export function buildDefaultJsonLd(opts: {
  siteUrl: string
  siteName: string
  siteDescription: string
  authorName: string
  socialProfileUrls?: string[]
}): JsonLdGraphRoot {
  const base = baseOrigin(opts.siteUrl)
  const orgId = `${base}/#organization`
  const websiteId = `${base}/#website`

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: opts.siteName,
    url: base,
  }
  if (opts.socialProfileUrls?.length) {
    organization.sameAs = opts.socialProfileUrls
  }

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${base}/`,
        name: opts.siteName,
        description: opts.siteDescription,
        inLanguage: "ja",
        publisher: { "@id": orgId },
      },
      organization,
      {
        "@type": "Person",
        "@id": `${base}/#author`,
        name: opts.authorName,
      },
    ],
  }
}

export function mergeJsonLdGraphs(
  base: JsonLdGraphRoot,
  extraNodes: Record<string, unknown>[]
): JsonLdGraphRoot {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [...base["@graph"], ...extraNodes],
  }
}

function absoluteUrl(siteUrl: string, pathnameOrRelative: string): string {
  const base = baseOrigin(siteUrl)
  if (pathnameOrRelative.startsWith("http")) return pathnameOrRelative
  const path = pathnameOrRelative.startsWith("/") ? pathnameOrRelative : `/${pathnameOrRelative}`
  return new URL(path, base + "/").href
}

export function buildBlogArticleAndBreadcrumbJsonLd(opts: {
  siteUrl: string
  canonicalUrl: string
  post: CollectionEntry<"blog">
  /** OG 用に解決済みの画像パス（例: /_astro/... ）または undefined */
  ogImageSrc?: string
}): Record<string, unknown>[] {
  const base = baseOrigin(opts.siteUrl)
  const { post } = opts
  const { title, summary, pubDate, upDate, category } = post.data

  const imageUrl = opts.ogImageSrc
    ? absoluteUrl(opts.siteUrl, opts.ogImageSrc)
    : absoluteUrl(opts.siteUrl, "/open-graph.jpg")

  const datePublished = pubDate.toISOString()
  const dateModified = (upDate ?? pubDate).toISOString()

  const websiteId = `${base}/#website`
  const orgId = `${base}/#organization`
  const authorId = `${base}/#author`
  const pageId = `${opts.canonicalUrl}#webpage`

  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${opts.canonicalUrl}#article`,
    headline: title,
    description: summary,
    datePublished,
    dateModified,
    inLanguage: "ja",
    isPartOf: { "@id": websiteId },
    author: { "@id": authorId },
    publisher: { "@id": orgId },
    image: [imageUrl],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageId,
      url: opts.canonicalUrl,
      name: title,
      isPartOf: { "@id": websiteId },
    },
  }

  const crumbs: { name: string; path: string }[] = [
    { name: "ホーム", path: "/" },
  ]

  const hub = category ? BLOG_CATEGORY_HUB[category] : undefined
  if (hub) {
    crumbs.push({ name: hub.name, path: hub.path })
  } else {
    crumbs.push({ name: "最新記事", path: "/blog/" })
  }

  crumbs.push({ name: title, path: opts.canonicalUrl })

  const breadcrumb: Record<string, unknown> = {
    "@type": "BreadcrumbList",
    "@id": `${opts.canonicalUrl}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1
      const itemUrl = isLast
        ? opts.canonicalUrl
        : absoluteUrl(opts.siteUrl, c.path)
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: itemUrl,
      }
    }),
  }

  return [article, breadcrumb]
}

export function buildPointArticleAndBreadcrumbJsonLd(opts: {
  siteUrl: string
  canonicalUrl: string
  post: CollectionEntry<"blog">
  ogImageSrc?: string
}): Record<string, unknown>[] {
  const base = baseOrigin(opts.siteUrl)
  const { post } = opts
  const { title, summary, pubDate, upDate } = post.data

  const imageUrl = opts.ogImageSrc
    ? absoluteUrl(opts.siteUrl, opts.ogImageSrc)
    : absoluteUrl(opts.siteUrl, "/open-graph.jpg")

  const datePublished = pubDate.toISOString()
  const dateModified = (upDate ?? pubDate).toISOString()

  const websiteId = `${base}/#website`
  const orgId = `${base}/#organization`
  const authorId = `${base}/#author`

  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${opts.canonicalUrl}#article`,
    headline: title,
    description: summary,
    datePublished,
    dateModified,
    inLanguage: "ja",
    isPartOf: { "@id": websiteId },
    author: { "@id": authorId },
    publisher: { "@id": orgId },
    image: [imageUrl],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${opts.canonicalUrl}#webpage`,
      url: opts.canonicalUrl,
      name: title,
      isPartOf: { "@id": websiteId },
    },
  }

  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "釣り場ポイント", path: "/points/" },
    { name: title, path: opts.canonicalUrl },
  ]

  const breadcrumb: Record<string, unknown> = {
    "@type": "BreadcrumbList",
    "@id": `${opts.canonicalUrl}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1
      const itemUrl = isLast
        ? opts.canonicalUrl
        : absoluteUrl(opts.siteUrl, c.path)
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: itemUrl,
      }
    }),
  }

  return [article, breadcrumb]
}

export function serializeJsonLd(data: JsonLdGraphRoot): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

/** 拡張子付きパス（rss.xml 等）は末尾スラッシュを付けない */
const HAS_FILE_EXTENSION = /\.[a-z0-9]{1,8}$/i

/**
 * サイト内パスに末尾スラッシュを付与する（Astro trailingSlash: 'always' と一致）
 */
export function withTrailingSlash(path: string): string {
  if (!path) return "/"
  if (/^https?:\/\//i.test(path) || path.startsWith("#") || path.startsWith("mailto:")) {
    return path
  }

  const hashIndex = path.indexOf("#")
  const pathAndQuery = hashIndex === -1 ? path : path.slice(0, hashIndex)
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex)
  const queryIndex = pathAndQuery.indexOf("?")
  const pathname = queryIndex === -1 ? pathAndQuery : pathAndQuery.slice(0, queryIndex)
  const search = queryIndex === -1 ? "" : pathAndQuery.slice(queryIndex)

  if (pathname === "/" || pathname === "") return `/${search}${hash}`

  const lastSegment = pathname.split("/").filter(Boolean).at(-1) ?? ""
  if (HAS_FILE_EXTENSION.test(lastSegment)) return path

  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`
  return `${normalized}${search}${hash}`
}

/** blog コレクション記事のパス（points カテゴリは /points/ へ） */
export function blogPostHref(slug: string, category?: string): string {
  if (category === "points") {
    return withTrailingSlash(`/points/${slug.replace(/^points\//, "")}`)
  }
  return withTrailingSlash(`/blog/${slug}`)
}

/** projects コレクション記事のパス */
export function projectPostHref(slug: string): string {
  return withTrailingSlash(`/projects/${slug}`)
}

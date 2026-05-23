import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "@consts"
import { blogPostHref, projectPostHref } from "@lib/paths"

type Context = {
  site: string
}

export async function GET(context: Context) {
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && !data.noindex,
  )
  const projects = await getCollection(
    "projects",
    ({ data }) => !data.draft,
  )

  const items = [...posts, ...projects]

  items.sort((a, b) => {
    const aDate = a.collection === "blog" ? a.data.pubDate : a.data.date
    const bDate = b.collection === "blog" ? b.data.pubDate : b.data.date
    return bDate.getTime() - aDate.getTime()
  })

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.collection === "blog" ? item.data.pubDate : item.data.date,
      link:
        item.collection === "blog"
          ? blogPostHref(item.slug, item.data.category)
          : projectPostHref(item.slug),
    })),
  })
}

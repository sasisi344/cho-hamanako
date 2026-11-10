import { formatDate, truncateText } from "@lib/utils"
import { blogPostHref, projectPostHref } from "@lib/paths"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  const href = entry.collection === "blog"
    ? blogPostHref(entry.slug, entry.data.category)
    : projectPostHref(entry.slug)
  const date = entry.collection === "blog" ? entry.data.pubDate : entry.data.date

  return (
    <a href={href} class="entry-card">
      <div class="entry-card-body">
        <div class="entry-meta">
          {pill && <span class="entry-kind">{entry.collection === "blog" ? (entry.data.category === "points" ? "釣り場" : "記事") : "ガイド"}</span>}
          <time dateTime={date.toISOString()}>{formatDate(date)}</time>
        </div>
        <h3 class="line-clamp-2">{entry.data.title}</h3>
        <div class="entry-summary line-clamp-2">{entry.data.summary}</div>
        <ul class="entry-tags">
          {entry.data.tags.slice(0, 4).map((tag: string) => <li>{truncateText(tag, 20)}</li>)}
        </ul>
      </div>
      <span class="entry-arrow" aria-hidden="true">↗</span>
    </a>
  )
}

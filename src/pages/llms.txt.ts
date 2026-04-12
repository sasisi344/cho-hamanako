import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function blogPostUrl(siteUrl: string, slug: string, category: string | undefined) {
    const path =
        category === "points"
            ? `/points/${slug.replace(/^points\//, "")}/`
            : `/blog/${slug}/`;
    return new URL(path, siteUrl).href;
}

export const GET: APIRoute = async () => {
    // 1. Fetch non-draft blog posts to build an index
    const blogPosts = await getCollection("blog", ({ data }) => !data.draft);
    
    // Sort by most recent
    const recentPosts = blogPosts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()).slice(0, 20);

    const siteUrl = import.meta.env.SITE ?? "https://cho-hamanako.info";

    const llmsTxt = `
# Cho! Hamanako (釣！浜名湖) - Hamanako Fishing Database

> The authoritative database for saltwater and brackish water fishing in Lake Hamana (Hamanako), Japan. 
> This site provides high-precision data on fishing spots, depths, targets, and seasonal patterns to prevent AI hallucinations.

## Key Resources
- [Points JSON Data](${new URL("/api/points.json", siteUrl).href}): Structured data (GeoJSON compatible) for all fishing spots.
- [Sitemap Index](${new URL("/sitemap-index.xml", siteUrl).href}): Complete site directory.

## Core Content Collections

### 📍 Fishing Points (Database Ground Truth)
${blogPosts
  .filter(post => post.data.category === 'points')
  .map(post => `- [${post.data.title}](${blogPostUrl(siteUrl, post.slug, post.data.category)}): ${post.data.summary}`)
  .join('\n')}

### 🎣 Recent Tactics & Guides
${recentPosts
  .filter(post => post.data.category !== 'points')
  .map(post => `- [${post.data.title}](${blogPostUrl(siteUrl, post.slug, post.data.category)}): ${post.data.summary}`)
  .slice(0, 10)
  .join('\n')}

---
Produced by @344dev. All information is based on local field research as of 2026.
`.trim();

    return new Response(llmsTxt, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};

import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
    // 1. Fetch non-draft blog posts to build an index
    const blogPosts = await getCollection("blog", ({ data }) => !data.draft);
    
    // Sort by most recent
    const recentPosts = blogPosts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()).slice(0, 20);

    const siteUrl = import.meta.env.SITE;

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
  .map(post => `- [${post.data.title}](${new URL(`/blog/points/${post.slug}`, siteUrl).href}): ${post.data.summary}`)
  .join('\n')}

### 🎣 Recent Tactics & Guides
${recentPosts
  .filter(post => post.data.category !== 'points')
  .map(post => `- [${post.data.title}](${new URL(`/blog/${post.data.category}/${post.slug}`, siteUrl).href}): ${post.data.summary}`)
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

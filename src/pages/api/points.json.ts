import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { blogPostHref } from "@lib/paths";

export const GET: APIRoute = async () => {
  const points = await getCollection("blog", ({ data }) => {
    return data.category === "points" && !data.draft;
  });

  const formattedPoints = points.map((point) => ({
    title: point.data.title,
    summary: point.data.summary,
    slug: point.slug,
    url: new URL(blogPostHref(point.slug, point.data.category), import.meta.env.SITE).href,
    location: point.data.location,
    fishinginfo: point.data.fishinginfo,
    facilities: point.data.facilities,
    tags: point.data.tags,
    upDate: point.data.upDate || point.data.pubDate,
  }));

  return new Response(JSON.stringify(formattedPoints), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

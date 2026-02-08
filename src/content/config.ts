import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

// Common structured data for fishing
const fishinginfoSchema = z.object({
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
  familyFriendly: z.boolean().default(false), // ファミリーフィッシング特化フラグ
  bestSeason: z.array(z.string()).optional(),
  methods: z.array(z.string()).optional(),
  targetFish: z.array(z.string()).optional(),
}).optional();

const facilitiesSchema = z.object({
  parking: z.boolean().default(false),
  parkingFee: z.string().optional(),
  toilet: z.boolean().default(false),
  convenienceStore: z.string().optional(),
  nightFishing: z.boolean().default(true),
  streetLights: z.boolean().default(false),
  carSide: z.boolean().default(false), // "車横付け" flag
}).optional();

const locationSchema = z.object({
  name: z.string(),
  address: z.string().optional(),
  lat: z.number(),
  lng: z.number(),
  googleMapUrl: z.string().url().optional(),
}).optional();

const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.union([
    z.object({
      title: z.string(),
      summary: z.string(),
      pubDate: z.coerce.date(), // 初回公開日
      upDate: z.coerce.date().optional(), // 最終更新日
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false).optional(),
      noindex: z.boolean().default(false).optional(),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
      category: z.literal('points'),
      cover: image().optional(),
      location: locationSchema,
      fishinginfo: fishinginfoSchema,
      facilities: facilitiesSchema,
    }),
    z.object({
      title: z.string(),
      summary: z.string(),
      pubDate: z.coerce.date(), // 初回公開日
      upDate: z.coerce.date().optional(), // 最終更新日
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false).optional(),
      noindex: z.boolean().default(false).optional(),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
      category: z.enum(['guide', 'target', 'cooking', 'news', 'test']).optional(),
      cover: image().optional(),
      fishinginfo: fishinginfoSchema,
      facilities: facilitiesSchema,
    })
  ]),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { work, blog, projects, legal }

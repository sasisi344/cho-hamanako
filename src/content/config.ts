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
  difficulty: z.string().default('Beginner'),
  familyFriendly: z.boolean().default(false), // ファミリーフィッシング特化フラグ
  bestSeason: z.array(z.string()).optional(),
  bestMonths: z.array(z.number()).optional(), // 推奨月（数値配列）
  methods: z.array(z.string()).optional(),
  targetFish: z.array(z.string()).optional(),
}).optional();

const facilitiesSchema = z.object({
  parking: z.union([z.boolean(), z.string()]).default(false),
  parkingFee: z.string().optional(),
  toilet: z.union([z.boolean(), z.string()]).default(false),
  convenienceStore: z.union([z.boolean(), z.string()]).optional(),
  nearbyTackleShop: z.union([z.boolean(), z.string()]).optional(), // 近くの釣具店
  nightFishing: z.union([z.boolean(), z.string()]).default(true),
  streetLights: z.union([z.boolean(), z.string()]).default(false),
  carSide: z.union([z.boolean(), z.string()]).default(false), // "車横付け" flag
}).optional();

const locationSchema = z.object({
  name: z.string(),
  address: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  googleMapUrl: z.string().url().optional(),
}).optional();

const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(), // 初回公開日
    upDate: z.coerce.date().optional(), // 最終更新日
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false).optional(),
    noindex: z.boolean().default(false).optional(),
    category: z.enum(['points', 'guide', 'target', 'cooking', 'news', 'test', 'season', 'travel', 'method']).optional(),
    cover: image().optional(),
    location: locationSchema,
    fishinginfo: fishinginfoSchema,
    facilities: facilitiesSchema,
    wpSlug: z.string().optional(),
  }),
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

const affiliates = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    html: z.string().optional(), // SiteStripeのHTMLコード
    link: z.string().url().optional(), // 個別リンク（htmlがない場合に使用）
    image: z.string().optional(), // 個別画像（htmlがない場合に使用）
    description: z.string().optional(),
    targetFish: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    brand: z.string().optional(),
    isRecommended: z.boolean().default(false),
    // 表示形式。未指定なら TackleCard が ID の接頭辞から判定する（travel/・naturum/ → banner、それ以外 → card）
    format: z.enum(["card", "banner", "text"]).optional(),
    // ポイント記事で「必要が生まれる場面」。配置ルールは .agents/affiliate-placement-rules.md
    scenes: z
      .array(z.enum(["wading", "night", "car", "family", "safety", "boat", "bait", "stay", "activity", "rental-car"]))
      .default([]),
    // 旅行系リンクの対象エリア（エリア指定のディープリンクのみ）
    area: z.enum(["kanzanji", "bentenjima", "maisaka", "arai", "oku-hamanako"]).optional(),
  }),
})


export const collections = { work, blog, projects, legal, affiliates }


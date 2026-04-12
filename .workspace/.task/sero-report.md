
調査結果を、構成の概要とSEO上の論点に分けてまとめます。

## サイト構成のざっくりした把握

- **ドメイン**: `astro.config.mjs` で `https://cho-hamanako.info` が設定されている。
- **記事の二系統**: `blog` カテゴリ以外は `src/pages/blog/[...slug].astro`、ポイントは `src/pages/points/[...slug].astro`（`points/` プレフィックスを除いた slug）で配信。一覧・ナビは `draft` を除外している箇所が多い。
- **機械可読**: `robots.txt` でサイトマップ参照、`BaseHead` で canonical・RSS・サイトマップリンクあり。

---

## SEO的に特に問題になりやすい点

### 1. `html` の言語が英語のまま（重要）

日本語サイトなのに、ルートレイアウトが `lang="en"` です。検索エンジンの言語判定・スクリーンリーダー・アクセシビリティの両方で不利になります。

```12:14:c:\Users\sasis\344dev\cho-hamanako\src\layouts\PageLayout.astro
<html lang="en">
  <head>
    <BaseHead title={`${title} | ${SITE.TITLE}`} description={description} noindex={noindex} hasAds={hasAds} />
```

**推奨**: 本文が日本語なら `lang="ja"`（必要なら一部に `lang` を振る運用）。

---

### 2. 構造化データ（JSON-LD）がページに出ていない

コードベース内に `application/ld+json` / `schema.org` の実装が見当たりません。記事・パンくず・サイト情報の **Article / BreadcrumbList / WebSite** などは、リッチリザルトや理解しやすさの観点で未整備です。`.agents/structured-data-rules.md` には方針が書かれていますが、テンプレート側への反映はこれから、という状態に見えます。

---

### 3. OGP が「サイト共通」に寄せられている

`PageLayout` は `BaseHead` に **`image` を渡しておらず**、デフォルトの `/open-graph.jpg` のみです。SNSシェア時は記事ごとの魅力（特にカバー画像がある記事）が伝わりにくく、CTR・クリック率の観点で損しやすいです。

```14:14:c:\Users\sasis\344dev\cho-hamanako\src\layouts\PageLayout.astro
    <BaseHead title={`${title} | ${SITE.TITLE}`} description={description} noindex={noindex} hasAds={hasAds} />
```

あわせて `og:type` は常に `website` のままなので、記事URLでも **Article 相当のメタ**にした方が一般的です。

```46:48:c:\Users\sasis\344dev\cho-hamanako\src\components\BaseHead.astro
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
```

---

### 4. canonical と `og:url` の前提が少し違う

canonical は `pathname` だけ、`og:url` / `twitter:url` は `Astro.url` 全体です。通常アクセスでは問題になりにくいですが、**クエリ付きURL**でシェアされると canonical と見かけ上ずれる可能性があります。揃えるなら canonical と同じ正規形にするのが無難です。

```12:39:c:\Users\sasis\344dev\cho-hamanako\src\components\BaseHead.astro
const canonicalURL = new URL(Astro.url.pathname, Astro.site)
// ...
<link rel="canonical" href={canonicalURL} />
```

---

### 5. 下書き・RSS・ポイント記事の `noindex`（運用リスク）

`getStaticPaths` は **`draft: true` を除外していません**。現状 `draft: true` の記事はコンテンツ内に見つかりませんでしたが、今後付けると **そのままビルドされサイトマップに載る可能性**があります。

```10:15:c:\Users\sasis\344dev\cho-hamanako\src\pages\blog\[...slug].astro
export async function getStaticPaths() {
	const posts = await getCollection("blog", (post) => post.data.category !== "points")
	return posts.map((post) => ({
		params: { slug: post.slug },
		props: post,
	}))
}
```

同様に `points/[...slug].astro` も draft 未除外です。

**RSS** は `getCollection` から draft を除いていません。

```9:13:c:\Users\sasis\344dev\cho-hamanako\src\pages\rss.xml.ts
export async function GET(context: Context) {
  const posts = await getCollection("blog")
  const projects = await getCollection("projects")

  const items = [...posts, ...projects]
```

**ポイント記事**は `PageLayout` に `noindex` を渡していません。フロントマターに `noindex` がある場合、ブログ側は反映されますがポイント側は反映されません。

```20:24:c:\Users\sasis\344dev\cho-hamanako\src\pages\points\[...slug].astro
const point = Astro.props
const { title, summary } = point.data
---

<PageLayout title={title} description={summary} hasAds={true}>
```

---

### 6. 内部リンク・ナビの一貫性（中〜小）

ポイント記事も `CollectionEntry<"blog">` のため、`ArticleTopLayout` の「戻る」は **`/blog` 向き**になりがちで、実際のポイント一覧（例: `/points` や `/map`）とズレます。クローラーへの「サイトの階層」の伝わり方・ユーザー導線の両方で改善余地があります。

---

### 7. `llms.txt` のURLが実ルートと一致していない

AI向け索引として意図されていると思われますが、リンク生成が **`/blog/points/...` や `/blog/{category}/{slug}`** のようになっており、実装されている **`/points/...` と `/blog/{slug}`** と食い違います。検索エンジン本体より「サイトの公式URLの一貫性」という意味で、外部に悪いシグナルを送りかねません。

```25:35:c:\Users\sasis\344dev\cho-hamanako\src\pages\llms.txt.ts
### 📍 Fishing Points (Database Ground Truth)
${blogPosts
  .filter(post => post.data.category === 'points')
  .map(post => `- [${post.data.title}](${new URL(`/blog/points/${post.slug}`, siteUrl).href}): ${post.data.summary}`)
  .join('\n')}
// ...
  .map(post => `- [${post.data.title}](${new URL(`/blog/${post.data.category}/${post.slug}`, siteUrl).href}): ${post.data.summary}`)
```

RSS の `link` 生成（`/blog/.../` 末尾スラッシュなど）と、実ページのURL規則がどう揃っているかも、念のためデプロイ後に1本ずつ確認すると安心です。

---

## うまくできている点（簡潔に）

- **canonical**・**description**・**サイトマップ参照**・**RSS alternate** は `BaseHead` に揃っている。
- **WordPress からのリダイレクト**が `astro.config.mjs` にまとまっており、移行SEOの土台はある。
- 一覧系では **`draft` 除外**が多く取られている。

---

## 優先度の目安

| 優先度 | 内容 |
|--------|------|
| 高 | `lang="ja"`、記事ごとのOG画像（＋必要なら `og:type`） |
| 高〜中 | JSON-LD（記事・パンくず・サイト） |
| 中 | `getStaticPaths` / RSS の `draft`・`noindex` の一貫処理、ポイントの `noindex` 伝播 |
| 中 | `llms.txt` のURLを実ルートに合わせる |
| 低 | canonical と `og:url` の完全同一化、検索結果ページの index 方針（必要なら `noindex`） |

必要なら、**どの項目からコードに落とすか**（例: まず `lang` と JSON-LD だけ）まで具体的な修正案に落とし込みます。
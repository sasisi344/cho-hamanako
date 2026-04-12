# サイト構成・SEO 修正タスク（優先度別）

根拠: [sero-report.md](./sero-report.md)（調査レポート）

---

## 優先度：高

- [x] **`PageLayout.astro` の `lang` を `ja` に変更**  
  - 対象: `src/layouts/PageLayout.astro`（現状 `lang="en"`）

- [x] **記事ごとの OGP 画像を渡す**  
  - `PageLayout` → `BaseHead` に `image` を伝播  
  - ブログ／ポイント記事: `cover` がある場合はその絶対URL、なければデフォルト `/open-graph.jpg`

- [x] **記事ページの `og:type` を記事向けにする**  
  - 対象: `src/components/BaseHead.astro`（記事は `article`、トップ・一覧は `website` など props で切替）

---

## 優先度：高〜中

- [x] **JSON-LD（`application/ld+json`）を実装**  
  - 記事: `Article`（`datePublished` / `dateModified` / `author` 等）  
  - パンくず: `BreadcrumbList`（UIとURLの整合）  
  - サイト共通: `WebSite`（必要なら `Organization`）  
  - 参照: `.agents/structured-data-rules.md`

---

## 優先度：中

- [x] **`getStaticPaths` で `draft: true` をビルド対象から除外**  
  - `src/pages/blog/[...slug].astro`  
  - `src/pages/points/[...slug].astro`

- [x] **RSS（`rss.xml.ts`）から下書きを除外**  
  - `getCollection` フィルタで `!data.draft`  
  - 方針に応じて `noindex` 記事も除外するか決める → **RSS からも除外**（インデックス対象のみ）

- [x] **ポイント記事ページで `noindex` を `PageLayout` に伝播**  
  - `src/pages/points/[...slug].astro` で `post.data.noindex` を渡す（ブログ側と同様）

- [x] **`llms.txt` のリンクURLを実ルートに合わせる**  
  - ポイント: `/points/{slug}`（`points/` プレフィックス除去後と一致）  
  - その他記事: `/blog/{slug}`（実装どおりの1セグメントパス）

- [x] **`ArticleTopLayout` の「戻る」リンクをポイント記事で正しい一覧へ**  
  - 例: ポイントは `/points` や `/map` など、実ナビと一致させる → **`/points/` 一覧・JSON-LD パンくずと整合**

---

## 優先度：低

- [x] **`og:url` / `twitter:url` を canonical と同一の正規URLに揃える**  
  - 対象: `src/components/BaseHead.astro`（クエリ付きURLとのズレ防止）

- [x] **サイト内検索ページ（`/search`）のインデックス方針**  
  - 必要なら `noindex` を `PageLayout` に付与

- [ ] **RSS の `link` と本番URL（末尾スラッシュ等）の手動確認**  
  - `@astrojs/rss` が `site` と相対パスを自動結合するため実装は問題なし  
  - デプロイ後、代表的な記事・ポイントで実URLと突合

---

## 完了メモ

| 日付 | 完了した項目 |
|------|----------------|
|      |                |

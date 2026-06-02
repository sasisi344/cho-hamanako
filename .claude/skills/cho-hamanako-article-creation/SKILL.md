---
name: cho-hamanako-article-creation
description: Creates or rewrites Cho! Hamanako MDX articles in src/content/blog with correct category paths, frontmatter, BlogCard/TackleCard, and validation. Use when the user asks to write, rewrite, publish, or complete a fishing/travel blog post for cho-hamanako.
---

# Cho! Hamanako — 記事作成

## 優先順位

1. リポジトリ `CLAUDE.md`
2. 本 SKILL → 詳細は `.agents/`（**正本は `.agents`、本 SKILL は Claude Code 用の入口**）
3. 親 `344dev/CLAUDE.md`（Node 22 / pnpm）

## 作業フロー（標準）

1. **データセット入口**: `cho-hamanako-data-set` → `.workspace/.data-set/.index/manifest.json` を読み、タスクに必要なファイルだけ開く
2. **要件**: キーワード・記事タイプ・新規/リライト・`> [!forAI]` の有無を確認
3. **リライト時**: `cho-hamanako-article-rewrite` + `.agents/article-rewrite/SKILL.md`
4. **構成**: `cho-hamanako-base-structure` + `.agents/base-article-structure/SKILL.md`
5. **タイプ SKILL**: 下表の `.agents/*-article/SKILL.md` を読む
6. **構造**: `.agents/category-slug-rules.md` で保存先と `slug` を決定
7. **根拠**: manifest の `lookup_by_task` に従い data-set を参照（推測で書かない）
8. **執筆**: `.agents/writing-style/SKILL.md` + タイプ別 SKILL（通常記事 **2,000字+**）
9. **画像**: 明示指示があるときのみ → `cho-hamanako-image-generation` SKILL
10. **検証**: BlogCard / TackleCard は `.index/blog-card-index.md` 等で再確認、`draft: false` 前に `> [!forAI]` 削除

詳細手順: `.agents/workflows/article-creation-workflow.md`

## 記事タイプ → SKILL・配置

| 意図 | category（目安） | 配置例 | 参照 SKILL |
|------|------------------|--------|------------|
| 釣り場ピラー | `points` | `src/content/blog/points/{omote\|naka\|oku}/...` | `.agents/point-article/SKILL.md` |
| 深掘りクラスタ | `points`（fukabori） | `points/.../fukabori/` 等 | `.agents/fukabori-article/SKILL.md` |
| 月次・季節 | `season` | `season/monthly/`, `season/spring/` 等 | `.agents/season-article/SKILL.md` |
| ガイド・釣法・理論 | `guide` | `guide/method/`, `guide/theory/`, `guide/beginner/` | `.agents/guide-article/SKILL.md` |
| 旅行・グルメ | `travel` | `travel/`, `guide/travel/` | `.agents/travel-article/SKILL.md` |
| 魚種まとめ（旧 target 系） | 多様 | `target/` 残存あり。新規は guide/season + **tags で魚種** | `.agents/target-article/SKILL.md`（レガシー） |
| まとめ記事（魚×月×スタイル） | 依案件 | — | `.agents/summary-article-process.md` |

**URL**: `category: points` → `/points/{slug}`、それ以外 → `/blog/{slug}`（`slug` は frontmatter の値。ファイルパスではない）

## 本番 MDX の必須ルール（要約）

- **保存**: `src/content/blog/.../index.mdx`（記事フォルダ + `index.mdx`）
- **強調**: 本番本文は `<strong>...</strong>`（`**` 禁止）
- **段落**: 1文1段落（文のあと空行）
- **import**: 本文で `BlogCard` / `TackleCard` を使うならファイル先頭で import
- **内部リンク**: `<BlogCard slug="frontmatterのslug値" />` — `.workspace/.data-set/.index/blog-card-index.md` または `src/content/blog/**` で実在確認
- **アフィリエイト**: `<TackleCard id="category/id" />` — `src/content/affiliates/` で実在確認
- **リライト**: ユーザーが `> [!forAI]` に一次情報を書いている場合はそれを本文へ反映し、公開前にブロック削除

## フロントマター（共通）

- `title`, `summary`, `pubDate`, `upDate`, `category`, `tags`, `draft`, `slug`
- ポイント記事: `location`, `fishinginfo`, `facilities` — テンプレは `.workspace/_point-pillar-migration/point-pillar-template.mdx`
- カバー: `heroImage: "./cover.jpg"` または `./cover.png`（生成後に合わせる）

## 依頼時のチェックリスト

```
- [ ] 記事タイプ SKILL を読んだ
- [ ] category / ディレクトリ / slug がルールと一致
- [ ] BlogCard・TackleCard を実ファイルで確認した
- [ ] 文字数がタイプ別 SKILL の目安を満たす（guide 2,500+、point 3,000+ 等）
- [ ] forAI を削除（公開時）
- [ ] 釣り法令・マナーが必要なら .agents/fishing-laws-hamanako.md
```

## 関連

- 構造化データ: `.agents/structured-data-rules.md`
- 法令: `.agents/fishing-laws-hamanako.md`
- ポイント SEO: `.agents/point-article/seo-audit.md`
- 完了後: `.agents/workflows/post-complete.md`, `rich-content-completion.md`

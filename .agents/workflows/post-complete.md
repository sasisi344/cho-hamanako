---
description: 執筆したドラフトを本番用コンテンツに変換・移動するワークフロー。bold記法の変換やメタデータの更新を行います。
---

# 執筆完了ワークフロー (Draft to Production) - 釣！浜名湖版

## 概要
このワークフローは、`_draft/` にあるドラフト記事を、SEO最適化（strongタグの使用）を施した上で本番ディレクトリ `src/content/blog/` へ移動させます。

## 手順

1.  **対象の特定**
    - 変換・移動したいドラフトファイルの絶対パスを確認する。

// turbo
2.  **内容の変換処理**
    - **強調表記**: すべての `**強調**` 記法を `<strong>強調</strong>` タグに全置換する。
    - **画像パスの正規化**: フロントマターの `image` パスを正しいパス形式に正規化する。
    - フロントマターの `draft` を `false` に設定する。
    - `lastmod` に今日の日付（YYYY-MM-DD）をセットする。

// turbo
3.  **パラメータ・ファクトチェック（厳守）**
    - 記事内の `<BlogCard />` および `<TackleCard />` のパラメータが実在するか検証する。
    - **BlogCard検証**: `slug` が `[.workspace/.data-set/blog-card-index.md](file:///c:/Users/sasis/344dev/cho-hamanako/.workspace/.data-set/blog-card-index.md)` に存在することを確認。
    - **TackleCard検証**: `id` が `[.workspace/.data-set/.index/tackle-card-list.md](file:///c:/Users/sasis/344dev/cho-hamanako/.workspace/.data-set/.index/tackle-card-list.md)` に存在することを確認。
    - **不一致がある場合**: 変換を中断し、正しいパラメータに修正するかユーザーに確認する。

// turbo
3.  **本番配置**
    - カテゴリ（guide, points, season, target, travel）を特定。
    - 移動先 `src/content/blog/{category}/{slug}/index.md` (or index.mdx) を作成。
    - 元のドラフトを削除し、本番環境へ配置を完了する。

4.  **タスク管理の更新**
    - プロジェクト内のタスク管理ファイルの該当項目を[x]済みにする。

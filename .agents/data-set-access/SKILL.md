---
name: data-set-access
description: Routes Cho! Hamanako agents to .workspace/.data-set and .index resources via manifest.json for efficient BlogCard, TackleCard, point facilities, fish biology, and matrix lookups during article creation or rewrite.
---

# データセット参照（`.workspace/.data-set`）

## 原則

- 記事執筆・リライトでは **本ファイル → manifest → 必要ファイルのみ** の順で開く
- `.data-set` 全体を一度に読み込まない（トークン節約・鮮度維持）
- 公開事実の最終確認は **`src/content/`**（data-set はインデックス・調査層）

## ステップ 0 — 入口（毎回）

```
.workspace/.data-set/.index/manifest.json
```

`lookup_by_task` と `resources[].priority` で次に開くパスを決める。

人間向け概要: `.workspace/.data-set/README.md`  
`.index` 詳細: `.workspace/.data-set/.index/README.md`

## タスク別ルーティング

| フェーズ | manifest キー / 開くファイル |
|----------|---------------------------|
| BlogCard 追加・検証 | `blogcard_slug` → `.index/blog-card-index.md` |
| TackleCard 追加・検証 | `tacklecard_id` → `.index/tackle-card-list.md` |
| ポイント H3（駐車・店） | `point_facilities` → `.index/infrastructure-master.json` + `tsuriguten-shoplist.md` |
| まとめ・類似ポイント | `point_matrix` → `point-matrix.md` + `point-article-template.md` |
| 魚種・季節の根拠 | `fish_biology` → `.index/biological/{魚}.md` |
| 季節・月次記事 | `season_fishing` → `.index/season-fishing/{季}.md` |
| 記事名からパス特定 | `llms.json` の `articles[]`（slug は frontmatter で再確認） |
| リライト・旧 URL | `301redirect/301list.md` |
| アフィリエイト下書き | `affiliates/README.md` → 魚種フォルダ |

## 記事作成フローへの組み込み

[article-creation](../workflows/article-creation-workflow.md) / [article-rewrite](../article-rewrite/SKILL.md) の **Preparation** で:

1. `manifest.json` を読む
2. 記事タイプに応じ **最大3ファイル** を選ぶ（例: ポイント → infrastructure + blog-card + tsuriguten）
3. 執筆中に slug/id が必要になったらインデックスを都度参照（推測禁止）

## JSON・構造化データ

| ファイル | 主キー | 使い方 |
|----------|--------|--------|
| `infrastructure-master.json` | `id`（= 多くの point slug） | `facilities`, `lat`, `lng` を frontmatter と整合 |
| `llms.json` | `articles[].slug`, `relativePath` | 横断検索。`knowledge_base` で店・水温 |

## 重複パス

`blog-card-index.md` は **`.index/` を正**とする。ルート同名がある場合は同期を確認（`manifest.json` → `duplicates_warning`）。

## 更新時

リソース追加・パス変更したら `manifest.json` の `version` / `updated` と `resources[]` を更新する。

## 関連

- ポイントマトリクス手順: [point-comparison-matrix.md](../point-article/point-comparison-matrix.md)
- Claude Code 入口: `.claude/skills/cho-hamanako-data-set`

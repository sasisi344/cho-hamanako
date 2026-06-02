---
name: cho-hamanako-workspace-tasks
description: Navigates Cho! Hamanako .workspace task files, datasets, drafts, and editorial backlog. Use when the user references task.md, PDCA, rewrite backlog, GSC priorities, or asks where to put research notes and indexes.
---

# Cho! Hamanako — タスク処理とファイルの場所

## ディレクトリ役割（ブレ防止）

| パス | 用途 | git |
|------|------|-----|
| `src/content/blog/` | **本番記事**（MDX） | 追跡 |
| `src/content/affiliates/` | TackleCard 用アフィリエイト | 追跡 |
| `public/` | 静的アセット（サイト全体） | 追跡 |
| `.agents/` | 執筆ルール・ワークフロー・SKILL（**仕様の正本**） | 追跡 |
| `.claude/skills/` | Claude Code 用 SKILL（入口・要約） | 追跡 |
| `.workspace/.task/` | **人間＋AI のタスク・バックログ** | 多くはローカル運用 |
| `.workspace/.data-set/` | インデックス・リサーチ・301・GSC 素材 | ローカル運用が多い |
| `.workspace/_sns-post/` | SNS 投稿ドラフト | ローカル |
| `.workspace/scripts/` | 画像生成などユーティリティ | 追跡可 |

**原則**: 記事の完成品は `src/content/` に置く。調査メモ・タスクは `.workspace/`。仕様変更は `.agents/` を更新し、`.claude/skills/` は要約を追随。

## タスクファイル（よく使う）

| ファイル | 内容 |
|----------|------|
| `.workspace/.task/task.md` | **最新の全体タスク**（リライト進捗、週間 PDCA、内部リンク） |
| `.workspace/.task/method-guide-rewrite-task.md` | guide/method・theory リライト方針と優先度 |
| `.workspace/.task/niche-kw-tasks.md` | ニッチ KW 施策 |
| `.workspace/.task/content-linking-map.md` | 内部リンク設計 |
| `.workspace/.task/seo-site-tasks.md` | サイト SEO タスク |
| `.workspace/.task/query-datacheck/` | GSC CSV・比較スクリプト |

タスク着手時は **まず `task.md` を読み**、該当バックログ MD を開く。

## データセット（執筆前 — AI 入口）

| 順 | パス | 用途 |
|----|------|------|
| 1 | `.workspace/.data-set/.index/manifest.json` | **機械可読カタログ**・`lookup_by_task` |
| 2 | `.workspace/.data-set/README.md` | 人間・AI向け構造案内 |
| 3 | manifest が指す1〜3ファイルのみ | 全文スキャン不要 |

SKILL: `cho-hamanako-data-set` / `.agents/data-set-access/SKILL.md`

| よく使うリソース | パス |
|------------------|------|
| BlogCard slug | `.index/blog-card-index.md` |
| TackleCard id | `.index/tackle-card-list.md` |
| ポイント設備・GPS | `.index/infrastructure-master.json` |
| 釣り方×ポイント | `point-matrix.md` |
| 記事横断検索 | `llms.json` |

内部リンク・アフィリエイトは **インデックス or `src/content`** で確認。推測禁止。

## ワークフロー（`.agents/workflows/`）

| ファイル | いつ使う |
|----------|----------|
| `article-creation-workflow.md` | 下書き→本番 MDX 完成 |
| `post-complete.md` | 公開直後チェック |
| `rich-content-completion.md` | リッチコンテンツ仕上げ |
| `research-week-fishingreport.md` | 週次釣りレポート調査 |
| `research-month-report.md` | 月次レポート調査 |
| `sns-promotion-workflow.md` | SNS 告知 |

## タスクの進め方

1. `task.md` で未完了チェックボックスを確認
2. 対象カテゴリの `.agents/*-article/SKILL.md` と specialty タスク MD（例: `method-guide-rewrite-task.md`）を読む
3. 必要なら `.data-set` で slug・魚種・GSC を確認
4. `src/content/blog/.../index.mdx` を編集
5. 画像は明示指示時のみ `cho-hamanako-image-generation`
6. 完了したら `task.md` のチェックを更新（ユーザーが依頼した場合）

## `> [!forAI]` 運用（リライト）

- ユーザーが音声・1行メモで一次情報を足す場所
- エージェントは内容を本文の見出し・Callout へ取り込む
- 公開前にブロック削除（`.agents/writing-style/SKILL.md`）

## 他 SKILL との関係

- 記事執筆: `cho-hamanako-article-creation`
- 文体・深度: `cho-hamanako-writing-voice`
- 画像: `cho-hamanako-image-generation`

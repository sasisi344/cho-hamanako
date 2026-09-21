# re-create — 統合リライト作業フォルダ

**作成日**: 2026-09-17
**目的**: 「新規記事を増やすフェーズ」から「既存記事の底上げ・整理フェーズ」への切り替えに伴い、低アクセス記事の整理とクエリ改善を一元管理する作業ハブ。

## 使い方

1. まず [00-site-audit-report.md](00-site-audit-report.md) でサイト全体の問題点サマリーを把握する
2. 個別の作業は以下のファイルで管理する
3. 対応が終わったタスクは [rewrite-tracker.md](rewrite-tracker.md) のチェックボックスを更新し、完了分は `完了ログ` に移す

## ファイル構成

| ファイル | 内容 |
|---|---|
| [00-site-audit-report.md](00-site-audit-report.md) | サイト全体の問題点レポート（低アクセス記事・target/旧サブ記事の重複・クエリ課題のサマリー） |
| [01-low-access-articles.md](01-low-access-articles.md) | ゼロクリック85ページ／ゼロ表示101記事の一覧（優先度付き） |
| [02-target-hub-legacy-duplication.md](02-target-hub-legacy-duplication.md) | 魚種別「教科書」統合後も残っている旧サブ記事62本の重複コンテンツ問題 |
| [03-query-improvement.md](03-query-improvement.md) | クエリ改善タスク（W37時点、`.workspace/.task/query-improvement-w37.md` から移設） |
| [rewrite-tracker.md](rewrite-tracker.md) | 統合リライト作業の進行管理（優先順位付きチェックリスト） |
| `data/` | 分析に使った生データ（GSC CSV抜粋） |

## データソース

- GSC/GA4: `.workspace/access-data/2026/w37/`（2026-08-14〜09-12、直近30日）
- 全記事一覧: `src/content/blog/` 配下の `index.mdx`（296本）

## 関連（旧タスクファイル）

- `.workspace/.task/task.md` / `weekly-task.md` — 全体タスク管理（本フォルダは「リライト・整理」領域の詳細版）
- `.workspace/.task/search-intent-content-restructure.md` — 検索意図に基づくコンテンツ再構築プラン（クロダイ教科書統合の発端。本フォルダの `02` はこの方針の未完了部分の可視化）

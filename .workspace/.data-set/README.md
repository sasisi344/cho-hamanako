# `.workspace/.data-set` — ナレッジベース（AI・執筆者向け）

釣！浜名湖の記事執筆・リライト用データ置き場。**本番記事**（`src/content/`）の SSOT ではなく、検索・事実確認・内部リンク設計を速くするためのインデックス層です。

## AI エージェント：最初に読むファイル

| 順 | ファイル | 用途 |
|----|----------|------|
| 1 | **[`.index/manifest.json`](.index/manifest.json)** | 機械可読のカタログ・タスク別ルックアップ |
| 2 | **[`.index/README.md`](.index/README.md)** | `.index/` 配下の詳細案内 |
| 3 | タスクに応じた1〜2ファイルのみ | 全文スキャンは不要 |

Claude Code / Cursor では SKILL **`.agents/data-set-access/SKILL.md`**（入口: `.claude/skills/cho-hamanako-data-set`）を参照。

## ディレクトリ構造

```
.workspace/.data-set/
├── README.md                 ← 本ファイル
├── llms.json                 ← 全記事一覧 + knowledge_base（店・水温など）
├── .index/                   ← ★ AI検索の入口（優先）
│   ├── manifest.json         ← リソース目録・lookup_by_task
│   ├── README.md
│   ├── blog-card-index.md    ← BlogCard slug
│   ├── tackle-card-list.md   ← TackleCard id
│   ├── infrastructure-master.json  ← ポイント設備・座標
│   └── sitemap.md
├── knowledge/                ← ★ 調べた事実（2026-11-27〜。index.md と CLAUDE.md から入る）
│   ├── species/ seasons/     ← 魚種の生態・季節の釣り物（旧 .index/biological・season-fishing）
│   ├── places/               ← 釣具店・カヤック・旅行先（旧 tsuriguten-shoplist・travel-research）
│   ├── products/tackle/      ← タックルの調べメモ（旧 affiliates/。本番は src/content/affiliates）
│   ├── data/                 ← 水温・月別釣果・週報と月報（旧ルートの .data-set/research）
│   └── serp/                 ← 検索意図・トップクエリ・サジェスト
├── point-matrix.md           ← 釣り方×ポイントマトリクス
├── point-article-template.md ← ポイント記事 MDX テンプレ
├── fukabori-workspace/       ← 深掘り・クラスター用
├── 301redirect/              ← 旧 WP URL・301
└── （ルートの重複 index あり—.index/ を正とする）
```

## タスク別クイック参照

| やりたいこと | 開くファイル |
|--------------|--------------|
| 調べた事実（料金・規則・仕様・生態）を探す・足す | `knowledge/index.md` → 書き方は `knowledge/CLAUDE.md` |
| BlogCard の slug | `.index/blog-card-index.md` |
| TackleCard の id | `.index/tackle-card-list.md` |
| 駐車場・トイレ・座標 | `.index/infrastructure-master.json` |
| 似たポイント・釣り方別一覧 | `point-matrix.md` |
| 魚種の生態・シーズン | `knowledge/species/{魚}.md` |
| 季節記事の根拠 | `knowledge/seasons/*.md` |
| 記事タイトルからパス探索 | `llms.json` → `articles[]` |
| 釣具店の営業時間 | `knowledge/places/tsuriguten-shoplist.md` |
| 旧 URL リライト | `301redirect/301list.md` |

## `llms.json` について

- **`articles`**: タイトル・slug・`relativePath` の配列（サイト横断検索用）
- **`knowledge_base`**: 釣具店リスト、水温インサイトなど構造化データ
- slug 値に余分なクォートが含まれる行あり → **掲載前は必ず `src/content` の frontmatter で再確認**

## 更新ルール

1. 新規ポイント記事公開後: `infrastructure-master.json`（生成スクリプトがあれば実行）、`blog-card-index` を更新
2. 新規 TackleCard 追加後: `.index/tackle-card-list.md` と `src/content/affiliates` を同期
3. `manifest.json` の `updated` 日付を更新（リソース追加時）

## 関連 SKILL

- `.agents/data-set-access/SKILL.md`
- `.agents/article-rewrite/SKILL.md`
- `.agents/point-article/point-comparison-matrix.md`

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
│   ├── biological/           ← 魚種別リサーチ
│   ├── season-fishing/       ← 季節別釣り情報
│   └── sitemap.md
├── point-matrix.md           ← 釣り方×ポイントマトリクス
├── point-article-template.md ← ポイント記事 MDX テンプレ
├── tsuriguten-shoplist.md    ← 釣具店マスタ
├── affiliates/               ← アフィリエイト調査メモ（本番は src/content/affiliates）
├── fukabori-workspace/       ← 深掘り・クラスター用
├── 301redirect/              ← 旧 WP URL・301
└── （ルートの重複 index あり—.index/ を正とする）
```

## タスク別クイック参照

| やりたいこと | 開くファイル |
|--------------|--------------|
| BlogCard の slug | `.index/blog-card-index.md` |
| TackleCard の id | `.index/tackle-card-list.md` |
| 駐車場・トイレ・座標 | `.index/infrastructure-master.json` |
| 似たポイント・釣り方別一覧 | `point-matrix.md` |
| 魚種の生態・シーズン | `.index/biological/{魚}.md` |
| 季節記事の根拠 | `.index/season-fishing/*.md` |
| 記事タイトルからパス探索 | `llms.json` → `articles[]` |
| 釣具店の営業時間 | `tsuriguten-shoplist.md` |
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

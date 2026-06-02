# `.data-set/.index/` — AI 検索用インデックス層

記事作成・リライト時、**このフォルダを data-set の第一入口**として使う。ルートの `README.md` と併用可。

## 必読（エージェント）

1. **[manifest.json](./manifest.json)** — 全リソース ID・パス・`lookup_by_task`・優先度
2. タスクに応じて **manifest の `resources` から1〜2件だけ** 読む（ディレクトリ全体の grep は最後の手段）

## ファイル一覧

| ファイル | 形式 | 主用途 |
|----------|------|--------|
| `manifest.json` | JSON | 目録・タスク別ルーティング |
| `blog-card-index.md` | MD 表 | `<BlogCard slug="..." />` |
| `tackle-card-list.md` | MD リスト | `<TackleCard id="cat/id" />` |
| `infrastructure-master.json` | JSON 配列 | ポイント id・施設・緯度経度 |
| `biological/*.md` | MD | 魚種・時期・生態 |
| `season-fishing/*.md` | MD | 春夏秋冬の釣り傾向 |
| `sitemap.md` | MD | サイト構造 |
| `point-locate-check.md` | MD | 座標・地名チェック用 |

## `lookup_by_task`（manifest より抜粋）

- **内部リンク** → `blog-card-index.md`
- **道具紹介** → `tackle-card-list.md` + `../affiliates/README.md`
- **ポイント設備** → `infrastructure-master.json` + `../tsuriguten-shoplist.md`
- **ポイント×釣り方** → `../point-matrix.md`
- **月次・水温** → `../llms.json`（`knowledge_base`）+ `../water-tempature.md`

## 本番との関係

| data-set | 本番（SSOT） |
|----------|----------------|
| インデックス・メモ | `src/content/blog/**/index.mdx` |
| affiliates/*.md 調査 | `src/content/affiliates/**/*.yaml` |

矛盾時は **本番 frontmatter を優先**し、data-set を後から修正する。

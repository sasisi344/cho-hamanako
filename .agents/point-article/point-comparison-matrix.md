# ポイント比較マトリクス（類似ポイントの整理）

ポイント紹介・まとめ記事では、**似たポイントを並べて紹介する前に**本ドキュメントの手順でマトリクスを作成し、読者が「どこが違うか」を理解できる構成にする。

## いつ使うか

- `category: points` の **まとめ記事**（`family-car-points`、`drive-fishing-spots` 等）
- 単一ピラーのリライトで **近隣5スポット**との差別化を強化するとき
- 内部リンク設計（`task.md` のポイント×釣り方マトリクス）

## マトリクスの軸（5次元）

| 軸 | 参照フィールド / 情報源 | 比較の問い |
|----|-------------------------|------------|
| **エリア** | パス `points/{omote\|naka\|oku}/`、tags | 表・中・奥で潮・地形がどう違うか |
| **スタイル** | `fishinginfo.methods` | ウェーディング / 投げ / サビキ / 夜 / ボート |
| **足場・施設** | `facilities.*` | 車横付け・トイレ・夜・駐車料金 |
| **地形** | 本文・データセット | シャロー / 堤防 / 港 / 河口 / ミオ筋 |
| **ターゲット×月** | `targetFish`, `bestMonths` | 同じ魚でも「このポイントが向く理由」 |

## 手順

### 1. 候補ポイントの抽出

- 入口: `.workspace/.data-set/.index/manifest.json` → `lookup_by_task.point_matrix`
- `.workspace/.data-set/point-matrix.md`（釣り法×エリア×slug）
- `.workspace/.data-set/.index/blog-card-index.md`
- `.workspace/.data-set/.index/infrastructure-master.json`（設備・area）
- 各ポイント `index.mdx` の `fishinginfo` / `facilities`
- まとめ記事テーマに合う **TargetFish**・**Months** で絞る（[summary-article-process.md](../summary-article-process.md)）

季節→月:

- 春 `[3,4,5]` / 夏 `[6,7,8]` / 秋 `[9,10,11]` / 冬 `[12,1,2]`

### 2. 比較表を作る（執筆前・メモで可）

例（ファミリー×車）:

| slug | エリア | 車横付け | 足場 | 本命（月） | このポイントだけの強み |
|------|--------|----------|------|------------|------------------------|
| sunaageba | 表 | ◎ | 舗装護岸 | アジ夏 | 浜名湖唯一の横付け |
| gardenpark | 中 | × | 砂浜 | マゴチ春〜秋 | 広大シャロー・ウェーディング |
| … | … | … | … | … | … |

**ルール**: 「強み」列は **1行で差別化**。同じ文言を他行にコピーしない。

### 3. グルーピング（H2 設計）

羅列禁止。読者の選び方に合わせて H2 を切る。

| グループ例 | 含めるポイントの条件 |
|------------|---------------------|
| ファミリー・初心者 | `familyFriendly: true`、足場・トイレ良好 |
| ウェーディング・サーフ | `methods` にウェーディング、シャロー地形 |
| 夜・常夜灯 | `nightFishing: true` または常夜灯タグ |
| 車・横付け特化 | 護岸横付け・駐車至近 |

1記事に **3〜6ポイント**が目安。多い場合はテーマを分割（別まとめ記事）。

### 4. 本文への落とし込み

各ポイントブロックの型（`family-car-points` 準拠）:

1. H2: 正式地名（[point-article/SKILL.md](./SKILL.md) の表記統一）
2. 2〜4文: **なぜこのテーマ・この時期にここか**（マトリクスの「強み」）
3. 必要なら1文だけ注意（混雑・夜不可等）
4. `<BlogCard slug="..." />` — frontmatter の `slug` のみ

**書かない**: 駐車場の全項目、釣具店の詳細（子記事の仕事）

### 5. 単一ピラーでの使い方

対象1ポイント + **同エリア候補4〜5**でマトリクスを作り、

- 本文では「近隣の〇〇とは違い、ここは△△」と1段落で比較
- 末尾「同じエリアの釣りスポット」に BlogCard 5本（`.workspace/.data-set/point-article-template.md` のエリア別リスト参照）

## エリア別 slug 候補（内部リンク用）

`.workspace/.data-set/point-article-template.md` の「エリア別 BlogCard 候補リスト」を正とする。追加・変更時はインデックスと実ファイルを照合。

## ポイント × 釣り方マトリクス（サイト PDCA）

`task.md` の「ポイント別 × 種別」は、本マトリクスに **釣り方（methods）** 列を足し、不足している BlogCard 導線を埋める。

例: ガーデンパーク（ウェーディング）読者へ → 同エリアの投げ専門ポイント1本 + シーバス戦法記事1本（slug 実在確認）。

## 関連

- ピラー構成: [SKILL.md](./SKILL.md)
- 3Dまとめ: [summary-article-process.md](../summary-article-process.md)
- リライト: [article-rewrite/SKILL.md](../article-rewrite/SKILL.md)

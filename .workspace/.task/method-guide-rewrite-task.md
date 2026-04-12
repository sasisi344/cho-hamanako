# 釣法・解説記事リライト（方針・バックログ）

**作成**: 2026-04  
**目的**: ポイント記事（`category: points`）は別枠で進める。**釣法・理論・入門・ロジスティクスなど「説明型」記事**が移行後に検索上弱くなっているとの認識を踏まえ、**情報の厚み・意図一致・見出し設計**を揃えて復旧する。

---

## 1. 改善の方向性（ここをブレさせない）

1. **「短さ」より「クエリを満たす十分なサブトピック」**  
   無駄な水増しは不要だが、検索意図（いつ・どこで・何を・どう）を **見出しで網羅**し、本文で **最低1段落は触れる**。薄いままにしない。

2. **タイトル・`summary`・最初の H2 を一本化**  
   メタ説明（`summary`）で約束した内容が、**タイトル・H1・冒頭H2**で即答されていること。GSCで落ちているクエリは **その語を自然に含む見出し**で拾う（詰め込み過ぎない）。

3. **guide-article のボリューム感に寄せる**  
   `.agents/guide-article/SKILL.md` の目安（**約2500〜4000字**、結・論・解・結）を **説明記事のデフォルト**とする。大幅に下回る場合は「削りすぎ」の疑いをチェック。

4. **一次情報と内部リンク**  
   浜名湖固有の条件（表・中・奥、季節、禁止エリア等）を **具体語で書く**。内部リンクは **`BlogCard` 推測禁止**（`CLAUDE.md`）— 実在スラッグ確認のうえ `<a>` テキストリンクでよい。

5. **旧URLと新記事の役割分担**  
   GSC上まだ `/2024/...` が残るクエリがある。**301・canonical の整理**と **本文改善**はセットで検討（`astro.config.mjs` の `redirects` と `query-datacheck/` の結果を照合）。

6. **データ駆動で順位付け**  
   全記事一括より、**Search Console / `query-compare-priority.md` で落ちたクエリに紐づく記事から**着手する。

---

## 2. 対象スコープ（ポイント記事以外）

| 優先 | パス目安 | 備考 |
|------|-----------|------|
| 高 | `src/content/blog/guide/method/**` | 釣法解説の中核 |
| 高 | `src/content/blog/guide/theory/**` | 理論・判断軸 |
| 中 | `src/content/blog/guide/beginner/**` | ルール・入門（検索ボリューム大） |
| 中 | `src/content/blog/guide/logistics/**` | 釣具店・水深図など「行前」ニーズ |
| 中 | `src/content/blog/tactics/**` | 戦術・補助記事 |
| 中 | `src/content/blog/theory/**`（`guide/theory` 以外） | 海洋系など横断 |
| 任意 | `src/content/blog/target/**/tactics/**` 等 | 魚種×戦術は別ラインで必要なら |

**除外（このタスクの主対象外）**: `category: points` のピラーポイント記事（`seo-audit.md` 側で管理）。

---

## 3. 参照ドキュメント

| 用途 | パス |
|------|------|
| 文体・構成の正本 | `.agents/guide-article/SKILL.md` |
| 共通 Markdown | `.agents/writing-style/SKILL.md` |
| フロントマター・URL | `.agents/structured-data-rules.md` |
| 落ちたクエリの手がかり | `.workspace/.task/query-datacheck/query-compare-priority.md` |
| サイト全体 SEO 履歴 | `.workspace/.task/seo-site-tasks.md` |

---

## 4. 記事ごとの作業チェック（完了時に打勾）

各 `index.mdx` を触るとき、最低限これを確認する。

- [ ] `title` / `summary` が検索結果で誤解を生まない（過剰約束・季節ミスマッチなし）
- [ ] リード直後の H2 で **結論または答え** が出ている（SKILL の「結・論・解・結」）
- [ ] GSCや想定クエリの **サブトピックが H2/H3 で拾えている**
- [ ] 文字数が極端に薄くない（目安: 2000字未満なら理由を確認）
- [ ] 内部リンク・数値・施設名は **実在コンテンツと一致**
- [ ] マナー・安全の締め（ガイド系の必須に準拠）

---

## 5. 優先キュー（データで強く触る候補）

GSC比較で弱体化が目立った **説明記事まわり**。リライト時にクエリ意図をメモに残す。

| 優先 | 記事スラッグ（`blog/` 以下） | クエリの例 | 状態 |
|------|-------------------------------|------------|------|
| P0 | `guide/method/ajing-guide` | アジ 時期、アジング ポイント | [ ] |
| P0 | `guide/method/anazuri` | 浜名湖 穴釣り | [ ] |
| P1 | `guide/beginner/hamanako-fishing-rules-and-manners` | 釣り禁止、今切口（※禁止系は本文の明確化） | [ ] |
| P1 | `guide/beginner/family-car-fishing-points` | 車 横付け（旧URL集約とセット） | [ ] |
| P1 | `guide/points/hamana-depth-map-guide` または水深系の正本 | 水深図・水深マップ | [ ] ※実際の canonical を確認 |
| P2 | `guide/logistics/shops` | 釣具屋 | [ ] |
| P2 | `season/monthly/*`（季節記事） | 冬・月別（**同年同月のGSCで再比較推奨**） | [ ] |

（`query-compare-priority.md` を更新したら、この表の P0/P1 を差し替えてよい。）

---

## 6. 全件バックログ（`guide/` 説明系・一覧用）

**進捗**: 着手したら `状態` を `進行` / `完了` に更新する。

### `guide/method`

| スラッグ | 状態 | メモ |
|----------|------|------|
| `guide/method/ajing-guide` | [ ] | |
| `guide/method/anazuri` | [ ] | |
| `guide/method/winter-lightgame` | [ ] | |
| `guide/method/casting-gomoku` | [ ] | |
| `guide/method/boat-autumn` | [ ] | |
| `guide/method/night-chining` | [ ] | |
| `guide/method/night-fishing` | [ ] | |
| `guide/method/night-seabass` | [ ] | |
| `guide/method/night-float-fishing` | [ ] | |
| `guide/method/okuhamanako-haze-fishing` | [ ] | |
| `guide/method/hamanako-boat-fishing` | [ ] | |
| `guide/method/hamanako-kayak-fishing` | [ ] | |
| `guide/method/hamanako-sup-fishing` | [ ] | |
| `guide/method/benten-nagashi-fishing` | [ ] | |
| `guide/method/cho-nage-fishing` | [ ] | |
| `guide/method/myaku-hechi-fishing` | [ ] | |
| `guide/method/fukase-fishing` | [ ] | |
| `guide/method/chinutop-july` | [ ] | |
| `guide/method/hamanako-kurodai-topwater` | [ ] | |

### `guide/theory`

| スラッグ | 状態 | メモ |
|----------|------|------|
| `guide/theory/area-strategy-theory` | [ ] | |
| `guide/theory/water-temperature-checking` | [ ] | |
| `guide/theory/water-temperature-logic` | [ ] | |
| `guide/theory/tidal-timing-logic` | [ ] | |
| `guide/theory/tide-table-logic` | [ ] | |
| `guide/theory/mazume-logic` | [ ] | |
| `guide/theory/imagiri-current-logic` | [ ] | |
| `guide/theory/day-vs-night` | [ ] | |
| `guide/theory/seasonal-patterns-guide` | [ ] | |
| `guide/theory/nokkomi-season` | [ ] | |

### `guide/beginner` / `guide/logistics` / その他

| スラッグ | 状態 | メモ |
|----------|------|------|
| `guide/beginner/hamanako-fishing-rules-and-manners` | [ ] | |
| `guide/beginner/family-car-fishing-points` | [ ] | |
| `guide/beginner/hamanako-sabiki-best-season` | [ ] | |
| `guide/beginner/hamanako-poisonous-fish-guide` | [ ] | |
| `guide/logistics/shops` | [ ] | |
| `guide/logistics/parking-toilet-guide` | [ ] | |
| `guide/logistics/bait-vending-machines` | [ ] | |
| `guide/logistics/rental-boat-guide` | [ ] | |
| `guide/points/hamana-depth-map-guide` | [ ] | 水深ガイド（分類は guide 配下） |

### `tactics` / ルート `theory`

| スラッグ | 状態 | メモ |
|----------|------|------|
| `tactics/method-kayaking-intro` | [ ] | |
| `theory/oceanography/temp-lag-science` | [ ] | |

---

## 7. 完了の定義（このタスクの「一段落」）

- P0〜P1 の記事がチェックリストを満たし、**対象クエリでタイトル・要約・見出しが整合**している。
- 旧URLが残る場合は **リダイレクトまたはGSC上の評価先**が整理されている（可能な範囲で）。
- このファイルのバックログ表が、完了分で更新されている。

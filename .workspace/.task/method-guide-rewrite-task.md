# 釣法・解説記事リライト（方針・バックログ）

**作成**: 2026-04  
**最終整理**: 2026-06-02（実ファイル・git・GSC を照合）  
**目的**: ポイント記事（`category: points`）は別枠。**説明型記事**の検索復旧。ただし **2026-05 の一括リライトで `guide/method` はほぼ完了**しているため、本タスクの主戦場は **理論・インフラ・リダイレクト・データ更新** に移る。

---

## 0. 現状サマリ（2ヶ月後の整理）

| 区分 | 状態 | 根拠 |
|------|------|------|
| `guide/method/*`（17本） | **本文リライト済** | commit `5645dc7`（2026-05-24）で全件更新。文字数はおおむね 2,400〜3,500 字 |
| `guide/beginner`・`logistics` | **一部済・一部要インフラ** | `b9aac6c` / `5645dc7` 前後。`hamanako-fishing-rules-and-manners` は約 7,800 字・`upDate` 2026-05-26 |
| `guide/theory/*` | **未着手に近い** | theory 配下に `rewrite` コミットなし。多くが **1,100〜1,900 字**で SKILL 目安未満 |
| `guide/points/hamana-depth-map-guide` | **薄い＋旧URL流入** | 約 1,800 字。GSC では旧 WP URL が主。301 未設定 |
| GSC 優先表（§5） | **要再取得** | `query-compare-priority.md` は **2026-04-07 時点の28日**。季節変動・5月リライト後の効果が未反映 |
| `forAI` ブロック | **リポジトリに残存なし** | リライト後は本文に統合済みとみなす |

**`.workspace/.task/task.md` との関係**: `task.md` の `guide [x] method` は **5月一括リライト完了**と整合。`theory [x]` は **移行完了**の意味で、**厚みリライトは未完了**と解釈する。

---

## 1. 改善の方向性（ブレさせない）

1. **「短さ」より「クエリを満たす十分なサブトピック」** — 見出しで網羅、各 H2 に最低1段落。
2. **タイトル・`summary`・最初の H2 を一本化** — GSC の落ちクエリは自然な見出しで拾う。
3. **guide-article の目安** — 約 2,500〜4,000 字（` .agents/guide-article/SKILL.md`）。2,000 字未満は理由を確認。
4. **一次情報と内部リンク** — `BlogCard` slug 推測禁止（`CLAUDE.md`）。
5. **旧URLと本文はセット** — クリックが旧 `/2024/...` に残るものは **301 → Astro 正本** を先に。本文だけ直しても評価が分散する。
6. **データ駆動** — 次の一手の前に **GSC を1回更新**（下記 §2 の S0）。

---

## 2. 必要度マトリクス（2026-06 時点）

**記号**: 🔴 今やる価値が高い / 🟡 次のバッチ / 🟢 監視のみ・別タスク / ⚪ 完了扱い

### S0 — 着手前（全カテゴリ共通・1回でよい）

| ID | 作業 | 必要度 | 備考 |
|----|------|--------|------|
| S0-1 | GSC 直近28日をエクスポートし `query-compare-priority.md` を更新 | 🔴 | 4月データの P0/P1 は **再検証前提** |
| S0-2 | `astro.config.mjs` の `redirects` と GSC の旧URL行を突合 | 🔴 | 下表「インフラのみ」 |

### A — インフラのみ（本文は触らず効果が出やすい）

| 旧URLの例（GSC） | 正本 slug | 状態 |
|------------------|-------------|------|
| `/2024/09/家族で安心！…車横付け…/` | `guide/beginner/family-car-fishing-points` | 🔴 301 未設定（本文は ~2,600 字で済） |
| `/2024/11/釣りにめっちゃ役立つ！…水深…/` | `guide/points/hamana-depth-map-guide` | 🔴 301 未設定 |
| `/blog/anazuri` 等（要確認） | `guide/method/anazuri` | 🟡 slug・canonical 要確認後に 301 |
| `/2025/10/【初心者必見】…ルール…/` | `guide/beginner/hamanako-fishing-rules-and-manners` | ⚪ 301 済 |
| `/2024/11/浜名湖周辺にある釣具店…/` | `guide/logistics/shops` | ⚪ 301 済 |

### B — 本文リライトがまだ意味がある

| スラッグ | 必要度 | 理由 |
|----------|--------|------|
| `guide/points/hamana-depth-map-guide` | 🔴 | 薄い（~1,800 字）・「水深図/マップ」クエリの正本にすべき |
| `guide/theory/*`（バックログ10本＋未掲載分） | 🔴 | 一括リライト対象外。1,100〜1,900 字が多数 |
| `guide/method/anazuri` | 🟡 | 5月リライト済だが GSC で「浜名湖 穴釣り」位置悪化が最大級。**S0 後**に見出し・クエリ整合のみ再点検 |
| `guide/method/ajing-guide` | 🟡 | 5月リライト済（~3,500 字）。P0 から **監視・微修正** に格下げ |
| `guide/logistics/parking-toilet-guide` 等 | 🟡 | forAI 改稿済だが 2,000 字前後。GSC で弱ければ追記 |
| `guide/beginner/hamanako-fishing-rules-and-manners` | 🟢 | 厚み・禁止エリアは済。S0 でクリックがまだ 0 ならインデックス・被リンクを疑う |
| `guide/logistics/shops` | 🟢 | ~5,800 字・301 済 |

### C — 完了扱い（このタスクでは追記しない）

| スラッグ群 | 備考 |
|------------|------|
| `guide/method/*` 全17本 | `5645dc7` で一括リライト済 |
| `season/monthly/*` 等 | 同コミットで更新。季節 SEO は **季節タスク・同年 GSC 比較** で管理（本ファイル P2 から分離） |

### D — 優先度低・別ライン

| 対象 | 備考 |
|------|------|
| `tactics/method-kayaking-intro` | 単発。guide/method に kayak 記事あり |
| `theory/oceanography/temp-lag-science` | `guide/theory` とは別パス |
| `target/**/tactics/**` | 魚種×戦術は target 系タスク |

---

## 3. 対象スコープ（更新）

| 優先 | パス | 2026-06 の扱い |
|------|------|----------------|
| 🔴 | `guide/theory/**` | **主戦場**（未リライト） |
| 🔴 | `guide/points/hamana-depth-map-guide` | 薄い正本＋301 |
| 🟡 | `guide/beginner/**`・`guide/logistics/**` | 追記・GSC 次第。family-car は 301 優先 |
| 🟢 | `guide/method/**` | 完了。個別は S0 後の微修正のみ |
| 別枠 | `season/monthly/*` | `task.md` / 季節記事タスク |
| 除外 | `category: points` ピラー | `seo-audit.md` |

---

## 4. 記事ごとの作業チェック（触るときだけ）

- [ ] `title` / `summary` が過剰約束・季節ミスマッチなし
- [ ] リード直後の H2 で結論または答え（結・論・解・結）
- [ ] 想定クエリのサブトピックが H2/H3 で拾えている
- [ ] 2,000 字未満なら理由を確認（理論・水深は原則追記）
- [ ] 内部リンク・数値・施設名は実在と一致
- [ ] マナー・安全の締め（ガイド系）

---

## 5. 実行キュー（旧 P0/P1 を置き換え）

**次の3件だけを「やる」と決める**（それ以外は S0 完了まで着手しない）。

| 順 | ID | 作業 | 完了 |
|----|-----|------|------|
| 1 | S0-1 | GSC 更新 → `query-compare-priority.md` 差し替え | [ ] |
| 2 | A-1 | `family-car-fishing-points` へ旧「車横付け」URL の 301 | [ ] |
| 3 | B-1 | `hamana-depth-map-guide` 追記（水深図・エリア別タナ・内部リンク）＋旧水深 URL の 301 | [ ] |

**S0 完了後に並べ替え**（現 GSC では参考程度）:

| 候補 | 旧ラベル | メモ |
|------|----------|------|
| `guide/theory/water-temperature-*` 他 | — | 薄い理論のうち imp の高い順 |
| `guide/method/anazuri` | 旧 P0 | リライト済→再点検 |
| `guide/method/ajing-guide` | 旧 P0 | 監視 |
| `guide/beginner/hamanako-fishing-rules-and-manners` | 旧 P1 | 本文済 |

---

## 6. バックログ（状態のみ・詳細メモは書かない）

### `guide/method` — ⚪ 一括完了（2026-05-24）

`ajing-guide` `anazuri` `winter-lightgame` `casting-gomoku` `boat-autumn` `night-chining` `night-fishing` `night-seabass` `night-float-fishing` `okuhamanako-haze-fishing` `hamanako-boat-fishing` `hamanako-kayak-fishing` `hamanako-sup-fishing` `benten-nagashi-fishing` `cho-nage-fishing` `myaku-hechi-fishing` `fukase-fishing` `chinutop-july` `hamanako-kurodai-topwater` — すべて **完了**

### `guide/theory` — 🔴 未リライト（優先）

| スラッグ | 状態 | おおよそ文字数 |
|----------|------|----------------|
| `guide/theory/nokkomi-season` | [ ] | ~1,100 |
| `guide/theory/area-strategy-theory` | [ ] | ~1,100 |
| `guide/theory/mazume-logic` | [ ] | ~1,150 |
| `guide/theory/day-vs-night` | [ ] | ~1,170 |
| `guide/theory/tide-table-logic` | [ ] | ~1,190 |
| `guide/theory/imagiri-current-logic` | [ ] | ~1,300 |
| `guide/theory/tidal-timing-logic` | [ ] | ~1,320 |
| `guide/theory/water-temperature-logic` | [ ] | ~1,340 |
| `guide/theory/water-temperature-checking` | [ ] | ~1,600 |
| `guide/theory/seasonal-patterns-guide` | [ ] | ~1,900 |

**リライトタスク未掲載だが同フォルダに存在**（必要なら表に追加）:  
`autumn-fall-pattern` `baitfish-tracking` `moon-phase-pattern` `wind-direction-fish` `dissolved-oxygen` `structure-theory` `barometric-pressure-fishing` `night-fishing-light` `turbidity-water-color` `feeding-switch` など（おおむね 2,900〜3,300 字 — **method よりマシだが SKILL 下限付近**）

### `guide/beginner` / `guide/logistics` / 水深

| スラッグ | 状態 | メモ |
|----------|------|------|
| `guide/beginner/hamanako-fishing-rules-and-manners` | ⚪ | 本文済・301 済 |
| `guide/beginner/family-car-fishing-points` | 🟡 | 本文済・**301 要** |
| `guide/beginner/hamanako-sabiki-best-season` | 🟡 | forAI 改稿済 |
| `guide/beginner/hamanako-poisonous-fish-guide` | 🟡 | forAI 改稿済 |
| `guide/logistics/shops` | ⚪ | 厚み・301 済 |
| `guide/logistics/parking-toilet-guide` | 🟡 | |
| `guide/logistics/bait-vending-machines` | 🟡 | |
| `guide/logistics/rental-boat-guide` | 🟡 | |
| `guide/points/hamana-depth-map-guide` | 🔴 | 薄い・301 要 |

### その他

| スラッグ | 状態 |
|----------|------|
| `tactics/method-kayaking-intro` | 低 |
| `theory/oceanography/temp-lag-science` | 低 |

---

## 7. 完了の定義（タスクの「一段落」— 2026-06 版）

- [ ] S0（GSC 更新＋リダイレクト突合）が終わっている
- [ ] 実行キュー 1〜3（上表）が完了している
- [ ] `guide/theory` の 🔴 10本のうち **GSC で imp の高い上位5本** がチェックリストを満たす
- [ ] 本ファイルの §6 状態列が実態と一致している

**もう求めないこと**: `guide/method` 全件の再リライト（完了済みのため）。

---

## 8. 参照

| 用途 | パス |
|------|------|
| 文体・構成 | `.agents/guide-article/SKILL.md` |
| Markdown | `.agents/writing-style/SKILL.md` |
| GSC 比較 | `.workspace/.task/query-datacheck/query-compare-priority.md` |
| 全体タスク | `.workspace/.task/task.md` |
| リダイレクト | `astro.config.mjs` |

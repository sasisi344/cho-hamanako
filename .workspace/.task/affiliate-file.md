# 旅行系アフィリエイト クリック・成果不振 調査ファイル

**調査日**: 2026-07-16
**目的**: 旅行系（宿泊・観光・レンタカー）アフィリエイトのクリック／成果が出ない原因を特定し、改善タスク化する
**対象**: `src/content/blog/travel/` 全12記事 ／ `src/content/affiliates/travel/` 全8アセット ／ `BannerCard.astro`・`AffiliateCard.astro`

---

## 結論サマリ（問題は4層）

1. **出稿漏れ** — 流入のある旅行記事に広告カードが0枚
2. **置き方** — カードが記事末尾に固まり、バナー画像を縦連発（バナー・ブラインドネス）
3. **母数不足** — 旅行記事の検索流入自体が極小
4. **計測不能** — アフィリエイトリンクにクリックイベント計測がなく、改善が数値で追えない

---

## 1. 出稿漏れ（最優先の取りこぼし）

travel 12記事中、**アフィリエイトカードが0枚の記事が5本**。しかも流入がある記事に集中。

| 記事 slug | 直近流入（GA4 w29） | 広告カード数 |
| :--- | :--- | :---: |
| `travel/hamanako-unagi-fishing-trip` | Google/Yahoo organic 流入あり（travel内トップ級） | **0** |
| `travel/hamanako-camp-fishing` | Google organic 流入あり | **0** |
| `travel/hamamatsu-festival-fishing-trip` | ― | **0** |
| `travel/hamanako-winter-fishing-oyster-trip` | ― | **0** |
| `travel/hamanako-kanko-hub` | GSC 5クリック/122表示（travel内最多） | **0**（BlogCard 25枚のみ） |

- **うなぎ記事**：本文に「1泊2日プラン（宿泊×グルメ×釣り）」「名店ランチ」節があり、じゃらん／楽天トラベル／asoview! が最も刺さる文脈を持ちながらリンク皆無。**成約以前に未出稿**。
- **kanko-hub**：集客の受け皿（ハブ）なのに収益動線ゼロ。

---

## 2. カードを置いている記事も「置き方」が弱い

例）`travel/hamanako-rental-fishing-guide`（全128行）

- 広告が **113〜120行目**（末尾「観光をもっと便利に！」節）に固まる → 読了前に離脱する位置。
- `rakuten-travel-stay` + `jalan-net-banner` を縦に連発 → A8/楽天のバナー画像は無視されやすい（バナー・ブラインドネス）。
- 本文文脈内（宿泊・グルメ・移動の話題が出た箇所）に差し込めていない。

### 使用アセットの偏り

用意されている8アセット中、実際に使われているのは **3種のみ**。

| アセット | 使用回数 | 種別 |
| :--- | :---: | :--- |
| `travel/rakuten-travel-stay` | 8 | 宿泊 |
| `travel/jalan-net-banner` | 8 | 宿泊バナー |
| `travel/rakuten-travel-car` | 5 | レンタカー |
| `travel/asoview-banner` | **0** | 体験・レジャー |
| `travel/asoview-text` | **0** | 体験・レジャー（テキスト） |
| `travel/uqey-banner` | **0** | レンタカー |
| `travel/uqey-text` | **0** | レンタカー（テキスト） |
| `travel/jalan-net-text` | **0** | 宿泊（テキスト） |

- **asoview!（体験予約）・Uqey・各テキストリンク版は使用0回**。
- 文脈内テキストリンクはバナーよりCTRが高いが、`BannerCard.astro` はバナー画像優先設計（`isBanner = id.startsWith("travel/")`）でテキスト版が活きていない。

---

## 3. 母数不足（旅行記事の検索流入が極小）

GSC 12ヶ月データ（`.workspace/access-data/gsc-data/2026-0617/12month-data/ページ.csv`）:

| ページ | クリック | 表示 | CTR |
| :--- | :---: | :---: | :---: |
| `travel/hamanako-kanko-hub` | 5 | 122 | 4.1% |
| `travel/omote-area-travel` | 0 | 4 | 0% |
| `travel/kanzanji-fishing-walk-guide` | 0 | 4 | 0% |

- 表示すら数件の記事が大半。成約母数が構造的に不足。

---

## 4. 計測不能（改善が測れない）

- `BannerCard.astro` / `AffiliateCard.astro` のリンクは素の `<a href target="_blank" rel="noopener noreferrer">`。
- **gtag / dataLayer / onclick 等のクリックイベント計測が一切なし**。
- 「カード表示数 → クリック率」を GA4 で追えず、A8・楽天の管理画面の成果のみで判断 → どのカード・どの位置が効いているか不明で改善の当て所がない。

---

## 改善タスク（優先度順）

- [ ] **P1: 流入0枚記事へ文脈内出稿**
  - `hamanako-unagi-fishing-trip`：「宿泊×グルメ」節に楽天/じゃらん、「名店」節に asoview!
  - `hamanako-camp-fishing`：装備・宿泊・移動の文脈に配置
  - まず1本（うなぎ）で改善パターンの雛形を作る
- [ ] **P1: アフィリエイトリンクに GA4 クリックイベント付与**（CTR可視化。P1出稿と同時に入れて以降を数値で回す）
- [ ] **P2: カード位置を末尾→本文文脈内へ移動**、バナー3連 → 1枚＋テキストリンクに分散
- [ ] **P2: 未使用アセット（asoview! / Uqey / テキスト版）を文脈別に使い分け**
- [ ] **P3: `hamanako-kanko-hub` に収益動線を追加**（ハブの受け皿を収益化）
- [ ] **P3: 旅行記事の検索流入強化**（母数不足の構造対策。SEO側タスクと連動）

---

## 参照

- コンポーネント: `src/components/TackleCard.astro`, `BannerCard.astro`, `AffiliateCard.astro`
- 旅行アセット: `src/content/affiliates/travel/*.yaml`
- アクセスデータ: `.workspace/access-data/2026/w29/`, `.workspace/access-data/gsc-data/2026-0617/12month-data/`

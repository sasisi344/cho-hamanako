# アフィリエイトカード前後の誘導文（訴求リード）監査

調査日: 2026-10-17
対象: `src/content/blog/` の公開記事で `<TackleCard />` を含む **137記事・540枚**
基準: [affiliate-placement-rules.md](../../.agents/affiliate-placement-rules.md) §3（カード直前に「状況 → 困ること → 解決」の誘導文を1〜3文）
関連: [affiliate-normalization-plan.md](affiliate-normalization-plan.md)

---

## 結論

- **カードの直前に、その商品へつながる誘導文があるのは540枚中92枚（17%）だけ。**
- **301枚（56%）は直前に本文がない**（見出し・別のカード・BlogCard・表の直後に置かれている）。そのうち204枚はカードが連続している。
- **残りの147枚（27%）は直前に本文があるが、商品につながっていない**。前の段落の説明（攻め方・時期など）がたまたま直前にあるだけで、「だからこの道具」という橋渡しがない。
- **カードの直後に本文が続くのは85枚（16%）**。直後は別のカード（204）・見出し（116）・区切り線（100）が大半で、カードの後に補足や「次の行動」を書く習慣はない。
- **誘導文が1つもない記事が137本中81本（59%）**。カードが3枚以上連続する記事が23本ある（最大は `haze-fukabori` の9連続）。

→ 訴求リードは、ほぼ存在しない状態。ルール正本（2026-10-17制定）より前に書かれた記事が大半のため、ルールどおりの誘導文はほとんどない。

---

## 1. 判定方法

カードごとに、直前・直後の空行でない行を次の3段階に分類した（スクリプトでの機械判定）。

| 段階 | 判定 |
|---|---|
| **誘導文なし** | 直前が見出し・別の TackleCard・BlogCard・表・Callout などで、本文がない |
| **本文あり・商品につながらない** | 直前は本文だが、カードの商品名・ブランド・種類（ロッド・リール・ルアー・仕掛け・エサなど）・釣法の語を含まない |
| **誘導文あり** | 直前の本文が、上記の語のどれかを含む |

**判定の限界**
- 語の一致で見ているため、「誘導文あり」の中にも「エサは30分ごとに交換する」のように、商品に触れてはいるが訴求になっていない文が含まれる。逆に「安全装備には妥協が許されません」→ウェーダーのように、文脈ではつながっているのに「つながらない」と判定されたものもある。
- そのため、**数値は傾向として読む**。正本 §3 の型（状況 → 困ること → 解決）を満たす誘導文は、「誘導文あり」92枚よりさらに少ない。

---

## 2. 記事グループ別

| グループ | カード | 誘導文なし | 本文あり・つながらない | 誘導文あり | 誘導文ありの割合 |
|---|---:|---:|---:|---:|---:|
| target | 317 | 202 | 70 | 45 | 14% |
| guide | 100 | 24 | 38 | 38 | 38% |
| points/fukabori | 47 | 33 | 9 | 5 | 10% |
| points（スポット・ハブ） | 35 | 18 | 14 | 3 | 8% |
| travel | 31 | 21 | 10 | 0 | 0% |
| season | 6 | 3 | 3 | 0 | 0% |
| cooking | 4 | 0 | 3 | 1 | 25% |
| **合計** | **540** | **301** | **147** | **92** | **17%** |

- **target（魚種の教科書）が最も多く、しかも誘導文が少ない**。教科書記事の「推奨タックル」節で、見出しの直後にカードを4〜5枚並べる構成が共通している。二層マッチングのルール（王道 120〜200字・地元 150〜250字の説明）を満たしていない。
- **guide は比較的よい（38%）**。本文の流れの中にカードを置いている記事が多い。
- **travel は0%**。バナーを記事末尾などに置き、直前に予約へつなげる文がない（[travel-affiliate-optimization.md](travel-affiliate-optimization.md) の課題が残っている）。

---

## 3. 流入のある記事の状況（W42 GSC クリック順）

| 記事 | GSC クリック / 表示 | カード | 誘導文なし | つながらない | 誘導文あり | 最大連続 |
|---|---:|---:|---:|---:|---:|---:|
| `guide/logistics/rental-boat-guide` | 12 / 77 | 1 | 0 | 1 | 0 | 1 |
| `target/kibire/cooking` | 9 / 857 | 2 | 0 | 2 | 0 | 1 |
| `points/family-car-points` | 9 / 85 | 4 | 3 | 0 | 1 | 2 |
| `target/kawahagi/points` | 7 / 109 | 4 | 2 | 2 | 0 | 3 |
| `guide/method/benten-nagashi-fishing` | 6 / 36 | 2 | 2 | 0 | 0 | 2 |
| `points/fukabori/chining-fukabori` | 6 / 31 | 1 | 0 | 0 | 1 | 1 |
| `guide/method/hamanako-kayak-fishing` | 6 / 25 | 5 | 4 | 0 | 1 | 4 |
| `points/fukabori/eging-fukabori` | 5 / 49 | 1 | 0 | 1 | 0 | 1 |
| `points/wading-points` | 5 / 22 | 2 | 1 | 1 | 0 | 2 |
| `guide/method/night-fishing` | 4 / 60 | 2 | 2 | 0 | 0 | 2 |
| `target/kisu/points-top5` | 4 / 50 | 3 | 3 | 0 | 0 | 3 |
| `guide/logistics/hamanako-complete-tackle-guide` | 4 / 25 | 17 | 0 | 6 | 11 | 1 |
| `points/naka/megaura` | 3 / 32 | 4 | 2 | 2 | 0 | 2 |
| `guide/method/night-chining` | 3 / 26 | 2 | 0 | 2 | 0 | 1 |
| `points/fukabori/seabass-season-fukabori` | 3 / 20 | 2 | 0 | 0 | 2 | 1 |
| `target/kurodai` | 1 / 63 | 13 | 8 | 3 | 2 | 4 |
| `points/fukabori/tako-fukabori` | 1 / 42 | 2 | 2 | 0 | 0 | 1 |
| `points/fukabori/haze-fukabori` | 1 / 27 | 12 | 9 | 3 | 0 | 9 |

- **表示回数が最大の `target/kibire/cooking`（表示857）は、2枚とも誘導文なしに近い**（料理手順の直後に調理道具を置いている）。
- **`hamanako-complete-tackle-guide` はよい例**。17枚すべての直前に本文があり、11枚は商品に触れた誘導文になっている。誘導文の型を作るときの参考になる。
- 流入上位の多くは、カード1〜4枚のうち誘導文が0〜1枚。

---

## 4. カードが3枚以上連続する記事（23本）

| 最大連続 | 記事 | カード |
|---:|---|---:|
| 9 | `points/fukabori/haze-fukabori` | 12 |
| 5 | `target/seabass` | 23 |
| 5 | `target/mebaru-kasago` | 16 |
| 4 | `target/mejina`・`target/kurodai`・`target/kisu`・`target/kibire`・`target/kawahagi`・`target/flatfish`・`target/aji-saba-sappa` | 12〜18 |
| 4 | `points/fukabori/lunker-seabass-fukabori`・`guide/method/hamanako-kayak-fishing` | 4〜5 |
| 3 | `target/seabass/bachinuke-spots-yore`・`target/seabass/bachinuke-forecast`・`target/kurodai/tactics/chinutop-lures`・`target/kisu/points-top5`・`target/kawahagi/points`・`target/karei`・`season/golden-week-hamanako-fishing`・`points/naka/syotaijihana`・`points/fukabori/boat-seabass-fukabori`・`points/fukabori/boat-gomoku-fukabori`・`guide/method/naka-boat-fishing-tactics` | 3〜11 |

- 魚種の教科書記事（`target/{魚種}/index.mdx`）は、ほぼすべてが4〜5連続。共通テンプレートの「推奨タックル」節が原因。
- 正本 §1 の「同じ節に3枚以上並べない」に反する。

---

## 5. カードの直後

| 直後の要素 | 枚数 |
|---|---:|
| 別のカード | 204 |
| 見出し | 116 |
| 区切り線（`---`） | 100 |
| 本文 | 85 |
| Callout・表など | 27 |
| BlogCard | 7 |
| 記事末尾 | 1 |

- カードの後に「使い方のコツ」「サイズの選び方」「どの記事で詳しく比べているか」などを書いている例は少ない。
- 正本ではカードの直後について決めていない。直前の誘導文を優先し、直後は必要に応じて「次の行動」（比較記事への BlogCard など）を置く程度でよい。

---

## 6. 改善の進め方（提案）

1. **Phase 5 のパイロット10本で、誘導文を正本 §3 の型で入れる**（予定どおり）。流入上位で誘導文がない `family-car-points`・`wading-points`・`chining-fukabori`・`eging-fukabori` はパイロットに含まれている
2. **パイロットの対象外で流入上位の記事も、誘導文だけ先に追加する**。カードの入れ替えはせず、直前に1〜3文を足すだけなので小さな変更で済む。候補: `target/kibire/cooking`（表示857で最大）、`rental-boat-guide`、`target/kawahagi/points`、`benten-nagashi-fishing`、`hamanako-kayak-fishing`、`night-fishing`、`target/kisu/points-top5`
3. **魚種の教科書記事（target 10本）の「推奨タックル」節**は、二層マッチングの説明文（王道・地元）が書かれていない状態。カードを4〜5枚並べる構成を、ゾーンごとに説明文＋カード1〜2枚に組み直す。Phase 7 の横展開でまとめて行う
4. **機械チェックの追加（任意）**: `check-tackle-ids.mjs` に、ビルドは止めない「警告」として「直前に本文がないカード」「3枚以上の連続」を出す機能を足すと、新しい記事で同じ状態が増えるのを防げる
5. travel 記事（0%）は [travel-affiliate-optimization.md](travel-affiliate-optimization.md) の Phase 2（配置精度改善）と合わせて直す

---

## 7. 再現方法

集計スクリプトはセッションの一時フォルダで実行した（リポジトリには未追加）。4 の警告機能を実装する場合は、同じ判定ロジックを `scripts/` に入れる。

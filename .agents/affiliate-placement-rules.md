# アフィリエイト配置ルール（正本）

`<TackleCard />`（物販・旅行・体験のアフィリエイト）を**どの記事に・どこへ・何枚・どう書いて置くか**の正本。各記事タイプの SKILL はこのファイルを参照し、配置ルールを独自に持たない。

- 制定: 2026-10-17（[affiliate-normalization-plan.md](../.workspace/.task/affiliate-normalization-plan.md) Phase 3）
- 背景: 旧ルール「ポイント記事ではアフィリエイト禁止（target 記事へ BlogCard で送る）」では、流入の多いポイント記事から収益の接点が消え、送り先の記事には読者が届かなかった（[point-monetization-review.md](../.workspace/.task/point-monetization-review.md)）。
- 考え方: **記事を分けるのではなく、役割を分ける。** 読者が「それが必要だ」と気づいたその節で、理由を添えて1つ差し出す。

---

## 1. 記事タイプ別の役割と上限

| 記事 | 役割 | 置くもの | 上限 |
|---|---|---|---|
| ポイント記事（スポット単体） | 「行く」決断の後押し | **このスポットだから必要になるもの**（§2） | **3枚** |
| ポイント記事（条件・目的別ハブ、まとめ） | 条件で選ぶ読者の入口 | 条件に直結するもの（車横付け → クーラー・電源、ウェーディング → ウェーダー・エイガード） | **5枚**（1節1枚） |
| ポイント記事（`points/fukabori/*`、魚種×ポイントの深掘り） | 魚種×場所の攻略 | タックル。[target-article/SKILL.md](target-article/SKILL.md) の二層マッチング（王道／地元）に従う | 二層マッチングの規定どおり |
| target 記事 | 道具の比較・選び方 | タックル。二層マッチングに従う。ポイント記事から「もっと比べたい人」を受ける | 二層マッチングの規定どおり |
| travel 記事 | 旅行プランの提案 | 宿泊・体験・レンタカー。プラン提示の直後など「行こう」と決めた場面に置く | 制限なし（ただし同じ節に2枚まで） |
| guide・season 記事 | 方法・時期の解説 | 解説している釣法・季節に必要なもの | 1節1枚 |

**全記事共通**
- 同じ節に3枚以上並べない（バナーや商品カードを縦に並べると読み飛ばされる）
- 記事末尾の「おすすめタックル」節にまとめて置かない。必要になる節の中に置く
- 合う商品がなければ置かない。近い商品を無理に当てはめない（「商品なし」でよい）

---

## 2. ポイント記事: 「必要が生まれる場面」

ポイント記事で置けるのは、次の場面に当てはまる商品だけ。商品の `scenes` タグ（`src/content/affiliates/*.yaml`）と、`position` の値はこの表で対応させる。

| 記事内の節 | 必要が生まれる場面 | `scenes` | `position` |
|---|---|---|---|
| 駐車場・アクセス | 車横付けできる／駐車場から釣り座まで遠い | `car` | `access` |
| 水中地形・足場 | ウェーディングする／足場が高い／ゴロタ・テトラ | `wading` | `terrain` |
| 季節・時間帯の戦法 | 夜釣り・朝マズメが主体 | `night` | `time` |
| 安全・注意事項 | アカエイ・毒魚がいる／水辺で落水の危険がある | `safety` | `safety` |
| 近くの施設 | 釣具店が遠い・早朝に開いていない | `bait`・`family` | `facility` |
| 釣行プラン（遠方から来る人向け） | 朝マズメに合わせて前泊したい／家族の観光と組み合わせたい | `stay`・`activity`・`rental-car` | `trip` |
| ボート・カヤック | レンタルボート・カヤックで出る | `boat` | `terrain` |

**禁止**
- スポットと関係のない汎用タックル（どの記事にも同じリール・ロッドのセットを置く）
- 「推奨タックル」節を記事の終盤に作って、そこにまとめて置くこと

**旅行系をポイント記事に置く条件**
- 使うのは**楽天トラベル・じゃらんのエリア指定リンク**（`travel/rakuten-travel-{area}`・`travel/jalan-{area}`、`scenes: stay`、`format: text`）だけ。asoview!・レンタカー・汎用の宿泊バナーはポイント記事に置かない（travel 記事で使う）
- スポットの地区に合う `area` のリンクを使う。合うエリアがなければ置かず、BlogCard で travel 記事へ送る

| `area` | 対象スポット（例） | 楽天トラベル | じゃらん |
|---|---|---|---|
| `kanzanji` | 舘山寺・内浦湾・村櫛 | `travel/rakuten-travel-kanzanji` | `travel/jalan-kanzanji` |
| `bentenjima` | 弁天島・中之島 | `travel/rakuten-travel-bentenjima` | `travel/jalan-bentenjima`（弁天島温泉の一覧） |
| `maisaka` | 舞阪・網干場・舞阪堤（今切口東岸） | `travel/rakuten-travel-maisaka` | `travel/jalan-maisaka` |
| `arai` | 新居・砂揚げ場・新居弁天海釣公園（今切口西岸） | `travel/rakuten-travel-arai` | `travel/jalan-arai` |
| `oku-hamanako` | 三ヶ日・猪鼻湖・都田・気賀 | `travel/rakuten-travel-oku-hamanako` | `travel/jalan-oku-hamanako` |

- 1記事に置くのは楽天トラベル・じゃらんのどちらか1つ、または2つを並べて1枠（同じ節に2枚まで）とする
- リンク先は各サービスの検索結果ページ（ValueCommerce MyLink。2026-10-17 作成）

---

## 3. 誘導文（カードの直前に必須）

カードの直前に **1〜3文** の誘導文を書く。順序は **状況 → 困ること → 解決**。最後の文で、次のカードが何を解決するかが分かるようにする。

**良い例（安全・ウェーディング）**

```mdx
渚園の砂浜側は遠浅で、ウェーディングで沖の導流堤まで攻めるのが定番です。

ただ、夏の夕マズメは足元にアカエイが寄ってきます。

膝下までのウェーディングでも、エイガードは必ず着けてください。

<TackleCard id="seabass/little-presents-ray-guard-oa-24" position="safety" />
```

**良い例（釣行プラン・宿泊）**

```mdx
今切口の朝マズメは日の出前から始まります。

県外から来るなら、弁天島・舞阪周辺に前泊すると、薄暗いうちに釣り座に入れます。

<TackleCard id="travel/rakuten-travel-bentenjima" position="trip" />
```

**ダメな例**
- 「おすすめのタックルはこちらです。」だけで置く
- 商品のスペックや宣伝文句を並べる（それはカード側に書いてある）
- 誘導文なしでカードを連続させる

target 記事の二層マッチングでは、誘導文の代わりに [target-article/SKILL.md](target-article/SKILL.md) の「本文ルール」（王道 120〜200字、地元 150〜250字）を適用する。

---

## 4. BlogCard で別記事へ送るとき

道具の比較や旅行プランなど、深い内容は target・travel 記事に任せてよい。その場合、BlogCard の直前に **読むと何が分かるか** を1文で書く。

```mdx
ウェーダーの選び方（夏用・冬用の違い、サイズの合わせ方）は別の記事で比べています。

<BlogCard slug="..." />
```

「関連記事」「あわせて読みたい」だけで置かない。

---

## 5. TackleCard の書き方

```mdx
import TackleCard from "@components/TackleCard.astro";

<TackleCard id="seabass/little-presents-ray-guard-oa-24" position="safety" />
```

| prop | 必須 | 内容 |
|---|---|---|
| `id` | 必須 | `src/content/affiliates/` からの**ファイルパス**（拡張子なし）。yaml 内の `id:` ではなくパスで引かれる |
| `position` | 推奨 | 記事内の節の種類。値は下表。クリック時に GA4 の `aff_position` として送信される |
| `isVertical` | 任意 | 商品カードを縦並びにする |
| `noMargin` | 任意 | 上下の余白をなくす |

**`position` の値**

| 値 | 使う節 |
|---|---|
| `access` | 駐車場・アクセス |
| `terrain` | 水中地形・足場・ボート |
| `time` | 季節・時間帯の戦法 |
| `safety` | 安全・注意事項 |
| `facility` | 近くの施設・エサの調達 |
| `trip` | 釣行プラン（宿泊・体験・レンタカー） |
| `tackle` | target・fukabori 記事のタックル推薦節 |
| `summary` | まとめ |

**表示形式**は商品データの `format` で決まる（`card` = 商品カード、`banner` = バナー、`text` = 1行のテキストリンク）。未指定なら `travel/`・`naturum/` はバナー、それ以外は商品カード。記事側で指定する必要はない。

---

## 6. ID の選び方と検証（厳守）

1. **ID は推測で書かない。** [tackle-card-list.md](../.workspace/.data-set/.index/tackle-card-list.md) から選ぶ。この一覧は自動生成で、「ID」列をそのまま書けば動く。場面（`scenes`）・対象魚・記事での使用数も載っている
2. 一覧が古い可能性があるときは `pnpm run gen:tackle` で作り直す
3. 記事を書いたら `pnpm run check:tackle` を実行する。存在しない ID があると失敗する（`pnpm run build` でも最初に実行され、失敗するとビルドが止まる）
4. 欲しい商品がないときは、無理に近い商品を当てはめず、商品データの追加候補としてユーザーに伝える（アフィリエイトリンクの取得はユーザー作業）

**商品データを追加するとき**（`src/content/affiliates/{カテゴリ}/{名前}.yaml`）
- `id:` はファイルパスと同じにする（ずれると `check:tackle` が失敗する）
- `link` は実際のアフィリエイトリンクを入れる。仮のリンク（`amzn.to/example-…` など）は `check:tackle` で失敗する
- Amazon の `image` は商品ページの画像 ID 形式（`https://m.media-amazon.com/images/I/xxxxxxxx.jpg`、サイズ指定なし）にする。ASIN 形式（`/images/P/{ASIN}.01.LZZZZZZZ.jpg`）は画像なし（43 バイトの透明 GIF）を返す商品が多く、カードに画像が出ない
- ポイント記事で使う見込みがある商品には `scenes` を付ける
- 旅行系のエリア指定リンクには `area` を付ける（値: kanzanji・bentenjima・maisaka・arai・oku-hamanako）
- テキストリンク用のリンクには `format: text` を付け、ASP が出すインプレッション計測用の画像 URL を `image` に入れる（1x1 で出力される）
- 追加後に `pnpm run gen:tackle` で一覧を更新する

---

## 7. 効果の測り方

- GA4 のキーイベント `affiliate_click`（2026-10-16〜）。パラメータ: `aff_id`・`aff_position`・`page_type`（記事の category）・`page_path`
- 記事の改修前後で、**PV あたりのクリック率**を比べる（釣りのオフシーズンはアクセス自体が減るため、件数だけで判断しない）
- カードを増やした記事は、GSC の順位とエンゲージメント時間も合わせて確認する（読みにくくなっていないか）
- どの `position` がクリックされやすいかが分かったら、このファイルの §2 に反映する

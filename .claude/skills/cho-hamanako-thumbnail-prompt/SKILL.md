---
name: cho-hamanako-thumbnail-prompt
description: Builds a click-worthy thumbnail scene brief for a Cho! Hamanako article from its content (fish, spot, method, season, dish) and passes it to generate-cover.js via --scene. Use when the user asks to design, redo, or improve a cover/thumbnail/OGP image for an article, or to tune thumbnail CTR. Does not generate until the user explicitly says to.
---

# Cho! Hamanako — サムネイル・プロンプト設計

記事の中身から「何を主役に、どう見せるか」を決め、`generate-cover.js` の `--scene` に渡す英語のシーン指示を作る。
共通のデザイン方針（スタイル・構図ルール・季節ライティング）はスクリプト側に実装済みなので、**このスキルでは記事固有の部分だけを作る**。

画像の実行は **ユーザーが生成を明示したときだけ**（`CLAUDE.md` 共通ルール）。それまでは `--dry-run` でプロンプト確認までに留める。実行方法・失敗時対応は [cho-hamanako-image-generation](../cho-hamanako-image-generation/SKILL.md)。

## 設計の前提

- サムネは一覧・カード・SNS で **幅 300px 前後** に縮小される。「小さくても主役が一目で分かる」ことが最優先
- **文字は画像に入れない**（日本語の文字描画は崩れやすい。タイトルは記事カード側で表示される）
- **左側の余白（テキスト用スペース）は作らない**。画面全体を使い切る
- 重要要素は **中央 80% に収める**（カード・OGP でトリミングされるため）
- 主役は **1つ**。脇役は 2〜3 個まで

## 手順

### 1. 記事を読む（推測しない）

MDX の **フロントマターと本文冒頭〜見出し** を読み、次を拾う。

| 拾う項目 | 例 |
|---|---|
| 記事タイプ | ポイント / 魚種教科書 / 料理 / 季節 / 手法 / 道具 / 旅行 |
| 主役の魚（1〜2種） | `fishinginfo.targetFish` の先頭、タイトルの魚。**ポイント記事は全魚種を描かない** |
| 釣り場の見た目の特徴 | 本文に書かれている施設・地形（T字堤防、橋、テトラ、干潟、砂浜など） |
| 手法 | `fishinginfo.methods`、タイトル（サビキ、チニング、穴釣り、流し釣り…） |
| 季節・時間帯 | `bestSeason` が1〜2つなら季節色を使う。夜釣り・朝マズメ・夕マズメなどは本文から |
| 読者が得をする約束 | タイトルの「◯◯完全ガイド」「◯◯まで」→ 絵で伝わる要素に変換 |

**ハルシネーション防止**: 釣り場の風景は **記事本文・`.workspace/.data-set` に書かれている特徴だけ** を使う。実在しない施設や景色を足さない（スクリプトにも "do not invent landmarks" が入っている）。

### 2. 記事タイプ別の「主役」の決め方

| タイプ | 主役 | 脇役の例 | 避けるもの |
|---|---|---|---|
| **魚種教科書**（`target/`） | 魚をアップで躍動（ジャンプ・水しぶき） | ルアー／仕掛けの一部、曲がった竿先 | 図鑑のような静止した側面図 |
| **ポイント**（`points/`） | その釣り場を象徴する構図（堤防・橋・護岸）＋夕焼け／朝焼け | シルエットのアングラー、水面から跳ねる魚 | 魚種を全部並べる |
| **料理**（`cooking/`、タイトルに食べ方・レシピ） | 完成した料理（刺身・唐揚げ・塩焼き）を手前に湯気つきで | 背景にその魚の姿、浜名湖の水辺 | 生の魚だけ・調理途中の地味な絵 |
| **季節**（`season/`） | 旬の魚＋季節が一目で分かる空と光 | 季節の小物（息の白さ、桜、入道雲、紅葉） | 季節色のない通年的な絵 |
| **手法**（`guide/method/`） | 手法を象徴する動作（竿が曲がる、魚を持ち上げる、特徴的な仕掛け） | 船・カヤック・SUP など手法の乗り物 | 道具の一覧図 |
| **道具**（`guide` の道具系） | 主役の道具をドラマチックにアップ | ぼかした浜名湖の風景 | 商品パッケージ風・ブランドロゴ |
| **旅行・グルメ**（`travel/`） | その土地の象徴的な風景 | 手前に名物料理や釣果 | 観光写真の寄せ集め |

### 3. 見せ方のチェックリスト（クリックされる絵にする）

- [ ] 主役が画面の **50〜65%** を占める
- [ ] **斜め・ローアングル・アップ** など動きのある構図（正面の静止画にしない）
- [ ] **動きの要素**が1つ以上（水しぶき、波紋、湯気、竿のしなり、ジャンプ）
- [ ] 主役と背景が **補色** で分離（暖色の魚／料理 × 寒色の水、など）
- [ ] 背景はシンプル（ぼかし／グラデーション）
- [ ] 魚は **その魚種の特徴を正確に**（キビレは黄色いヒレ、サヨリは赤い先端の下顎、など）。スクリプトの `FISH_EN` に無い魚は英名＋見た目を `--scene` に自分で書く
- [ ] 文字・数字・ロゴ・枠を入れていない

### 4. シーン指示を書く（英語・3〜6行）

テンプレート:

```
Hero: <主役を1文で。動き・アングル込み>.
Supporting: <脇役を最大2つ>.
Setting: <記事に根拠のある場所・時間帯・季節の描写>.
Accuracy notes: <魚の特徴など、間違えると困る点>.
```

例（キビレの食べ方記事）:

```
Hero: a golden-brown deep-fried yellowfin sea bream (kibire) served whole on a dark ceramic plate in the foreground, shot from a low diagonal angle with rising steam and glistening crispy texture.
Supporting: a plate of sashimi slices with a lemon wedge beside it; a softly blurred Hamana Lake shoreline at sunset behind.
Setting: warm evening light, orange and gold tones against a cool teal background.
Accuracy notes: the fish has a silver body with distinctive YELLOW pelvic and anal fins.
```

例（新居弁天海釣公園のポイント記事。T字堤防・サビキ・タコ釣りが本文にある場合）:

```
Hero: a long T-shaped concrete fishing pier stretching into the sea at golden-hour, low angle, with a silhouetted family fishing with a bent rod in the foreground.
Supporting: a horse mackerel (aji) leaping from the water with a splash; a distant bridge on the horizon.
Setting: warm sunset sky, calm water reflecting orange light.
Accuracy notes: horse mackerel has a blue-green back, silver belly and a line of lateral scutes.
```

### 5. dry-run で確認 → 生成

```bash
cd c:/Users/sasis/344dev/cho-hamanako
# シーン指示をファイルに書いて確認（クォートの問題を避けるため --scene-file 推奨）
node .workspace/scripts/Antigravity-nanobana/generate-cover.js "<記事のindex.mdx>" --scene-file "<scene.txt>" --dry-run
```

- 出力されたプロンプトを **ユーザーに見せて承認を取る**。承認前に `--dry-run` なしで実行しない
- `--scene` / `--scene-file` を省略すると、記事メタ（魚種・場所・タイプ）から自動で簡易シーンを作る。ポイント記事は魚が先頭2種になるため、基本は **手動でシーンを書く**
- 生成後は MDX の `cover: ./cover.jpg` を確認（既存が `cover.png` ならファイル名を揃える、または `--out` を指定）
- 複数案を比較したい場合は `--out` を変えて2〜3枚作り、ユーザーに選んでもらう

## 運用メモ

- CTR を測りたい場合は、変更前後の GSC（ページ別 CTR）を `schedule-task.md` に記録してから差し替える。**サムネ変更と title 変更を同時にしない**（要因が分からなくなる）
- スタイル全体を変えたい場合は `generate-cover.js` の `THUMBNAIL_STYLE` / `THUMBNAIL_COMPOSITION` を編集する（記事ごとの調整は `--scene` で行う）

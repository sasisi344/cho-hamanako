# weekly-task.md 完了分の記録（2026-10-05 整理）

> `weekly-task.md` のうち完了した項目を、元の記述のまま移したもの。未完了の項目は [../weekly-task.md](../weekly-task.md) に残している。

---

## 1-1. cooking 拡充第1弾: 季節別釣りメシ記事 × 4本（完了）

### 1-1. cooking 拡充第1弾: 季節別釣りメシ記事 × 4本

**方針**: 浜名湖で釣れる旬の魚を季節ごとに紹介し、おすすめレシピと「どこで釣れるか」（既存 target/points 記事へのリンク）をセットにした記事を春夏秋冬4本作成。
target 記事（haze・kisu・kawahagi・mebaru-kasago・karei 等）と相互 BlogCard でつなぎ、cooking 経由の内部回遊を生み出す。

| スラッグ | 主な魚・レシピ | 状態 |
|---------|--------------|------|
| `cooking/autumn-hamanako-recipe` | ハゼ天ぷら、カワハギ刺身、秋アジ | [x] |
| `cooking/summer-hamanako-recipe` | キス天ぷら、タコ、カワハギ | [x] |
| `cooking/spring-hamanako-recipe` | キス、メバル、クロダイ | [x] |
| `cooking/winter-hamanako-recipe` | メバル、カレイ、シーバス | [x] |

**既存 cooking 記事（重複注意）**:
- `cooking/aji-furai-recipe`（アジフライ）
- `cooking/karei-nitsuke-recipe`（カレイ煮付け）
- `cooking/kurodai-shioyaki-recipe`（クロダイ塩焼き）
- `cooking/nezakana-nitsuke-recipe`（根魚煮付け）
- `cooking/tako-karaage-recipe`（タコ唐揚げ）
- `cooking/beginner/koaji-karaage-recipe`（小アジ唐揚げ）

**注意**: 既存記事と重複するレシピを新記事内で単体記事化せず、BlogCard でリンクするにとどめる。

---

## 1-3. tactics カテゴリ拡充（完了 2026-09-04）

### 1-3. tactics カテゴリ拡充 ✅ 完了（2026-09-04）

詳細プラン → `.workspace/.task/tactics-expansion-plan.md`

- [x] ① `guide/method/inahako-area-tactics`（猪鼻湖エリア攻略 / SUP・ウェーディング）
- [x] ② `guide/method/uchibay-kanzanji-area-tactics`（内浦湾エリア攻略 / 舘山寺）
- [x] ③ `guide/method/naka-boat-fishing-tactics`（中浜名湖ボートフィッシング）
- [x] ④ `guide/method/omote-area-tactics`（表浜名湖エリア攻略）

※進捗ログ（2026-09-04）で完了済みだったがチェックボックス未更新だったため2026-09-22に修正。実ファイルパスは当初案の `tactics/` ではなく `guide/method/` 配下。

---

## 5-1. クロダイ順位回復対応（要因特定・対策実施の完了分）

### 5-1. クロダイ順位回復対応 ✅ 要因特定・対策実施（2026-09-22）
- [x] 「浜名湖 クロダイ」順位調査（W39クエリデータ） → 「浜名湖 クロダイ」22位・「浜名湖クロダイ」15.5位で低迷継続を確認
- [x] 要因特定: `target/kurodai/index.mdx`（正本・slug: kurodai）と `target/kurodai/beginner/index.mdx`（slug: kurodai-beginner）の**タイトルが両方とも「浜名湖 クロダイ」で始まっており、キーワードカニバリゼーションが発生**。W39ページデータでは正本(8.87位)よりbeginner記事(6.5位)の方が上位表示され、評価が分散していた
- [x] 対策: beginner記事のタイトルを「浜名湖 クロダイ釣り入門｜...」→「クロダイ釣り入門｜浜名湖の仕掛け...」に変更し、正本記事が「浜名湖 クロダイ」の代表URLになるよう差別化（`upDate` も更新）

---

## 5-2. 「新居海釣り公園 ライブカメラ」CTR改善（完了分）

### 5-2. 「新居海釣り公園 ライブカメラ」CTR改善 ✅ 一定改善確認・追加対応済み
- [x] タイトル/meta改善 → W39（20260912-20260919）で CTR 1.80% → **5.30%** に向上、表示回数 557 → **2,227** に急増（順位 7.24 → 6.17）
- [x] `points/omote/araibenten-umiduripark` 追加改善（2026-09-22）: 「新居海釣り公園 サビキ ポイント」（9.05位・CTR22.7%）「青物 ポイント」（7.77位）向けに、該当セクションのH3見出しを「サビキポイントはアジ・イワシが本命」「青物ポイントはT-4〜T-5、通年ショアジギングで」に変更しキーワードを前面化。`upDate` 更新

---

## 5-4. 「新居海釣り公園 ライブカメラ」記事改稿（対応の完了分）

### 5-4. 「新居海釣り公園 ライブカメラ」記事改稿のCTR効果測定（2026-09-29対応）
- [x] 対応: 湖西市の津波監視カメラが2026年8月末で提供終了と判明 → `guide/logistics/araibenten-live-camera` を全面改稿（提供終了の告知・舞阪漁港/豊橋市表浜海岸の代替カメラ・白波による風の判断・風向きでの釣り場選び・探し方）、タイトルを「新居弁天海釣公園のライブカメラは終了｜舞阪・表浜の代替カメラで海況確認」に変更。`points/omote/araibenten-umiduripark` はタイトルから「ライブカメラ」を外し該当節を更新

---

## 5-3. GA4 管理画面設定（登録完了分）

### 5-3. GA4 管理画面設定（ユーザー側作業） ✅ 登録完了（2026-09-22）・反映確認待ち
- [x] `affiliate_click` のカスタムディメンション（aff_id / aff_brand / aff_name / page_path）をGA4管理画面で登録（2026-09-22完了）
- [x] キーイベント指定（2026-09-22完了）

---

## 進捗ログ（2026-07-09〜2026-09-22）

- 2026-07-09: Track A〜E 完了（Track B・A・D・E・C の順で実施）。詳細は `.workspace/.task/task-archieve/w29-seo-tracks-completed.md` 参照。
- 2026-07-14: Track F 1-1 完了。`cooking/autumn,summer,spring,winter-hamanako-recipe` の4記事を並列エージェントで作成・カバー画像生成済み。`family-car-fishing-points` の BlogCard import 欠落を修正。pnpm build 通過（306ページ）。
- 2026-07-14: tactics 拡充プランを `.workspace/.task/tactics-expansion-plan.md` に書き出し。4記事構成（猪鼻湖・内浦湾・中浜名湖ボート・表浜名湖）。
- 2026-09-04: tactics 4記事完了（inahako・uchibay-kanzanji・naka-boat・omote）。season/monthly 1〜12月に「正直なところ」コラム追加。効果測定タスク（クロダイ順位・新居CTR・GA4）を weekly に移動。
- 2026-09-22: weekly-task の残タスクを実行。①tactics 1-3 のチェックボックス修正（実際は2026-09-04完了済みだった）②クロダイ順位回復: W39データで要因をカニバリゼーション（正本とbeginner記事のタイトル重複）と特定し、beginner記事タイトルを変更 ③新居海釣り公園: araibenten-umiduripark のサビキ/青物セクション見出しにキーワード前面化 ④travel 1-2「ガーデンパーク」着手条件を再確認、引き続き未達で保留 ⑤5-3 GA4管理画面設定の手順をユーザーに案内
- 2026-09-22: ユーザーがGA4管理画面で`affiliate_click`のキーイベント指定を完了。
- 2026-09-22: ユーザーがGA4カスタムディメンション（aff_id/aff_brand/aff_name/page_path）登録も完了。5-3は設定作業完了、残るは48h後の反映確認のみ。

---

## 追記（2026-10-05）

- `affiliate_click` の発火確認は 2026-10-05 に完了（Partytown を撤去して通常読み込みに変更、`6573423`）。5-3 の「反映後48h → GA4リアルタイムで発火確認」はこれで完了。
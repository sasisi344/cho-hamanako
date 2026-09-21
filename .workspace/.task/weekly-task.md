# 釣！浜名湖：週間タスク（W29 Track F〜）

**作成日**: 2026-07-09
**更新日**: 2026-07-14
**完了アーカイブ**: `.workspace/.task/task-archieve/w29-seo-tracks-completed.md`（Track A〜E）
**アクセスデータ格納先**: `.workspace/access-data/`（週次: `2026/w{nn}/`、12ヶ月: `gsc-data/2026-0617/12month-data/`）
**低アクセス記事整理・クエリ改善（W37〜）**: `.workspace/re-create/`（サイト監査レポート・作業トラッカーはこちらに移設）

---

## 1. Track F: 新規コンテンツ（進行中）

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

### 1-2. travel 中浜名湖版

- [ ] 「ガーデンパーク・村櫛エリア観光×釣り」記事
  - **着手条件**: W29〜W30 GSCで「ガーデンパーク」系表示回数を確認後に判断
  - **注意**: 2026年の浜名湖潮干狩りは全面禁止。夏休み（7/20〜8/20頃）は混雑注意。
  - → GSCデータ `.workspace/access-data/2026/w29/` で確認してから着手
  - **2026-09-22再確認**: W39クエリデータに「ガーデンパーク」系は引き続き0件。着手条件未達のため保留継続

### 1-3. tactics カテゴリ拡充 ✅ 完了（2026-09-04）

詳細プラン → `.workspace/.task/tactics-expansion-plan.md`

- [x] ① `guide/method/inahako-area-tactics`（猪鼻湖エリア攻略 / SUP・ウェーディング）
- [x] ② `guide/method/uchibay-kanzanji-area-tactics`（内浦湾エリア攻略 / 舘山寺）
- [x] ③ `guide/method/naka-boat-fishing-tactics`（中浜名湖ボートフィッシング）
- [x] ④ `guide/method/omote-area-tactics`（表浜名湖エリア攻略）

※進捗ログ（2026-09-04）で完了済みだったがチェックボックス未更新だったため2026-09-22に修正。実ファイルパスは当初案の `tactics/` ではなく `guide/method/` 配下。

---

## 2. 定期運用

- [ ] **2026-10月末**: `amazon-sale-tackle-strategy` の `upDate` 更新＋冬版チェックリスト（メバル・シーバス・防寒・照明）差し替え（同一URL運用）

---

## 3. 成功指標（Track F）

| KPI | 目標 |
|-----|------|
| cooking 経由の内部回遊 | 新規レシピ→target 記事への遷移発生 |
| 季節別記事の GSC インプレッション | 各記事が対象シーズン前に 100+ 表示 |

---

## 4. 運用ルール

1. **BlogCard/TackleCard 検証**: 記載前に `src/content/blog/`・`src/content/affiliates/` の実在確認を必ず行う。
2. **既存記事を壊さない**: 「猪鼻湖 釣り」「浜名湖 釣り禁止」「車横付け」等の上位KWの title は触らない。
3. **ビルド**: 記事追加後に `pnpm build` を実行して検証。
4. **完了記録**: 各タスク完了時にチェックボックスを更新し、末尾の進捗ログに日付を残す。

---

## 5. 効果測定タスク（GSC/GA4確認が必要なもの）

### 5-1. クロダイ順位回復対応 ✅ 要因特定・対策実施（2026-09-22）
- [x] 「浜名湖 クロダイ」順位調査（W39クエリデータ） → 「浜名湖 クロダイ」22位・「浜名湖クロダイ」15.5位で低迷継続を確認
- [x] 要因特定: `target/kurodai/index.mdx`（正本・slug: kurodai）と `target/kurodai/beginner/index.mdx`（slug: kurodai-beginner）の**タイトルが両方とも「浜名湖 クロダイ」で始まっており、キーワードカニバリゼーションが発生**。W39ページデータでは正本(8.87位)よりbeginner記事(6.5位)の方が上位表示され、評価が分散していた
- [x] 対策: beginner記事のタイトルを「浜名湖 クロダイ釣り入門｜...」→「クロダイ釣り入門｜浜名湖の仕掛け...」に変更し、正本記事が「浜名湖 クロダイ」の代表URLになるよう差別化（`upDate` も更新）
- [ ] 効果測定: 2週間後（W41目安）にGSCで正本記事の順位変化を確認

### 5-2. 「新居海釣り公園 ライブカメラ」CTR改善 ✅ 一定改善確認・追加対応済み
- [x] タイトル/meta改善 → W39（20260912-20260919）で CTR 1.80% → **5.30%** に向上、表示回数 557 → **2,227** に急増（順位 7.24 → 6.17）
- [x] `points/omote/araibenten-umiduripark` 追加改善（2026-09-22）: 「新居海釣り公園 サビキ ポイント」（9.05位・CTR22.7%）「青物 ポイント」（7.77位）向けに、該当セクションのH3見出しを「サビキポイントはアジ・イワシが本命」「青物ポイントはT-4〜T-5、通年ショアジギングで」に変更しキーワードを前面化。`upDate` 更新
- [ ] 効果測定: 2週間後にGSCでCTR・表示回数の変化を確認

### 5-3. GA4 管理画面設定（ユーザー側作業） ✅ 登録完了（2026-09-22）・反映確認待ち
- [x] `affiliate_click` のカスタムディメンション（aff_id / aff_brand / aff_name / page_path）をGA4管理画面で登録（2026-09-22完了）
- [x] キーイベント指定（2026-09-22完了）
- [ ] 反映後48h → GA4リアルタイムレポートで発火確認（目安: 2026-09-24以降）
- [ ] カスタムディメンション登録後、探索レポートで `aff_brand`等の値が正しく入っているか確認（目安: 2026-09-24以降）

---

## 進捗ログ

- 2026-07-09: Track A〜E 完了（Track B・A・D・E・C の順で実施）。詳細は `.workspace/.task/task-archieve/w29-seo-tracks-completed.md` 参照。
- 2026-07-14: Track F 1-1 完了。`cooking/autumn,summer,spring,winter-hamanako-recipe` の4記事を並列エージェントで作成・カバー画像生成済み。`family-car-fishing-points` の BlogCard import 欠落を修正。pnpm build 通過（306ページ）。
- 2026-07-14: tactics 拡充プランを `.workspace/.task/tactics-expansion-plan.md` に書き出し。4記事構成（猪鼻湖・内浦湾・中浜名湖ボート・表浜名湖）。
- 2026-09-04: tactics 4記事完了（inahako・uchibay-kanzanji・naka-boat・omote）。season/monthly 1〜12月に「正直なところ」コラム追加。効果測定タスク（クロダイ順位・新居CTR・GA4）を weekly に移動。
- 2026-09-22: weekly-task の残タスクを実行。①tactics 1-3 のチェックボックス修正（実際は2026-09-04完了済みだった）②クロダイ順位回復: W39データで要因をカニバリゼーション（正本とbeginner記事のタイトル重複）と特定し、beginner記事タイトルを変更 ③新居海釣り公園: araibenten-umiduripark のサビキ/青物セクション見出しにキーワード前面化 ④travel 1-2「ガーデンパーク」着手条件を再確認、引き続き未達で保留 ⑤5-3 GA4管理画面設定の手順をユーザーに案内
- 2026-09-22: ユーザーがGA4管理画面で`affiliate_click`のキーイベント指定を完了。
- 2026-09-22: ユーザーがGA4カスタムディメンション（aff_id/aff_brand/aff_name/page_path）登録も完了。5-3は設定作業完了、残るは48h後の反映確認のみ。

# 釣！浜名湖：週間タスク（W29 Track F〜）

**作成日**: 2026-07-09
**更新日**: 2026-07-14
**完了アーカイブ**: `.workspace/.task/task-archieve/w29-seo-tracks-completed.md`（Track A〜E）
**アクセスデータ格納先**: `.workspace/access-data/`（週次: `2026/w{nn}/`、12ヶ月: `gsc-data/2026-0617/12month-data/`）

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

### 1-3. tactics カテゴリ拡充

詳細プラン → `.workspace/.task/tactics-expansion-plan.md`

- [ ] ① `tactics/inahako-area-tactics`（猪鼻湖エリア攻略 / SUP・ウェーディング）🔴
- [ ] ② `tactics/uchibay-kanzanji-area-tactics`（内浦湾エリア攻略 / 舘山寺）🔴
- [ ] ③ `tactics/naka-boat-fishing-tactics`（中浜名湖ボートフィッシング）🟠
- [ ] ④ `tactics/omote-area-tactics`（表浜名湖エリア攻略）🟡 GSC推移確認後

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

## 進捗ログ

- 2026-07-09: Track A〜E 完了（Track B・A・D・E・C の順で実施）。詳細は `.workspace/.task/task-archieve/w29-seo-tracks-completed.md` 参照。
- 2026-07-14: Track F 1-1 完了。`cooking/autumn,summer,spring,winter-hamanako-recipe` の4記事を並列エージェントで作成・カバー画像生成済み。`family-car-fishing-points` の BlogCard import 欠落を修正。pnpm build 通過（306ページ）。
- 2026-07-14: tactics 拡充プランを `.workspace/.task/tactics-expansion-plan.md` に書き出し。4記事構成（猪鼻湖・内浦湾・中浜名湖ボート・表浜名湖）。

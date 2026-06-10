# cooking記事 拡充タスク（魚種別レシピ）

**作成**: 2026-06-10
**目的**: 浜名湖で釣れる魚を中心とした「料理・レシピ」記事を **現状13本 → 20本前後** に拡充する。
**関連**: `.workspace/.task/task.md` §未完了リライト「cooking: 料理記事は増やせる見込み」

---

## 0. 現状サマリ（2026-06-10 完了時点）

| 区分 | 状態 |
|------|------|
| `cooking/beginner/koaji-karaage-recipe` | 公開済（2026-03-25・約2,025字） |
| `target/{種}/cooking/index.mdx`（`category: target`） | **14本**（既存12本＋キビレ・サヨリを追加） |
| `cooking/{単品レシピ}/index.mdx`（`category: cooking`） | **6本**（koaji-karaage-recipe＋新規5本） |
| 既存cooking系コンテンツ合計 | **20本**（目標達成） |

### target/cooking 14本

`aji-saba-sappa` `eging` `flatfish` `haze` `karei` `kawahagi` `kibire` `kisu` `kurodai` `mebaru-kasago` `mejina` `sayori` `seabass` `tako`

---

## 1. 20本に向けた構成案

| 優先度 | 内容 | 本数目安 | 状態 |
|--------|------|----------|------|
| 🔴 高 | gap種（キビレ・サヨリ）の `target/{種}/cooking/` 新規作成・マゴチは既存flatfish-cookingを増強 | 2＋増強1 | ✅ 完了 |
| 🟡 中 | 既存記事の「概要レシピ集」から**単品レシピ**を `cooking` カテゴリへ独立記事化（アジフライ／カレイの煮付け／メバル・カサゴの煮付け／タコの唐揚げ／クロダイの塩焼き） | 5 | ✅ 完了 |
| 🟢 低・要相談 | 「外道魚」系（ボラ・エイ・フグ等）の「これ食べられる？」記事 | 2〜3 | 未着手（C3-x） |ボラは浜名湖だと昔から美味しくて有名。臭いは確かに気になるけど、刺身・洗いで食べると絶品。外洋に面した砂浜では専門で狙う人がいたりする。エイはアカエイになる、尻尾に毒のトゲがあったり大型になるので厄介だが、


**現在**: 20本到達（目標達成）。C3-xを追加すれば22〜23本。

---

## 2. 実行キュー

### 残タスク

| 順 | ID | 作業 | 状態 |
|----|-----|------|------|
| 6 | C3-x | 外道魚系（ボラ・エイ・フグ等）の方向性決定 | [ ] |

### 完了済み（アーカイブ）

<!--
| 順 | ID | 作業 | 状態 |
|----|-----|------|------|
| 1 | C0-1 | サヨリ料理の需要・切り口調査（bioデータ作成含む） | [x] C1-3でsayori-cooking作成・公開により対応済み |
| 2 | C1-1 | `target/kibire/cooking/` 新規作成 | [x] 2026-06-10 完成・公開（約4,100字、cover.jpg生成済み、`draft: false`） |
| 3 | C1-2改 | `flatfish-cooking`のマゴチパートをリライト・増強（唐揚げ・フライ／兜焼き・かぶと煮を追加） | [x] 2026-06-10（約3,300字→約4,100字、`upDate`更新済み） |
| 4 | C1-3 | `target/sayori/cooking/` 新規作成 | [x] 2026-06-10 完成・公開（約3,600字、cover.jpg生成済み、`draft: false`） |
| 5 | C2-x | 単品レシピ記事の候補選定・作成（5本・`cooking`カテゴリ） | [x] 2026-06-10 完成・公開（各約1,700〜2,050字、cover.jpg生成済み、`draft: false`） |
  - cooking/aji-furai-recipe（アジフライ）
  - cooking/karei-nitsuke-recipe（カレイの煮付け）
  - cooking/nezakana-nitsuke-recipe（メバル・カサゴの煮付け）
  - cooking/tako-karaage-recipe（タコの唐揚げ）
  - cooking/kurodai-shioyaki-recipe（クロダイの塩焼き）
-->

---

## 3. 判断待ち事項

- 外道魚系を本タスクに含めるか、別タスクに分離するか（C3-x）
- 20本到達後の優先カテゴリページ（`/cooking/`一覧）整備の要否

---

## 4. 参照

| 用途 | パス |
|------|------|
| 魚種バイオロジー | `.workspace/.data-set/.index/biological/{fish}.md` |
| 料理道具アフィリエイト | `.workspace/.data-set/affiliates/cooking/cooking.md` |
| 全体タスク | `.workspace/.task/task.md` |
| 文体・構成 | `.agents/writing-style/SKILL.md` |

# 釣！浜名湖 — アクティブタスク

**最終整理**: 2026-09-29
**管理方針**: このファイルが「今やること」の一覧。完了したタスクは `archive/` へ移動。詳細プランは個別ファイル参照。

## ✅ 完了: `affiliate_click` 計測不備の修正（2026-09-26〜2026-10-05）

GA4で `affiliate_click`（TackleCardクリック）が観測されていなかった件。当初の原因特定と修正（`3778ad9`、gtagシムの `dataLayer` 生成順）は不十分で、2026-10-05 の再調査で Partytown の worker 起動失敗（約10秒でフォールバック）が真因と判明。GA4 を Partytown 経由から通常のメインスレッド読み込みに変更し（`6573423`）、デプロイ後に発火を確認済み（2026-10-05、オーナー確認）。詳細は [archive/w40-task-archived-2026-10-05.md](archive/w40-task-archived-2026-10-05.md) 参照。

- [x] `affiliate_click` の発火確認（2026-10-05 完了）
- [x] キーイベント指定は 2026-09-22 に完了済み（`weekly-task.md` 参照）
- [ ] 次回W{nn}データ取得時に `キーイベント` 列へ件数が計上されているか確認（週次解析のなかで実施）
- [ ] あわせて `.claude/skills/cho-hamanako-weekly-pdca/SKILL.md` 更新に伴い、次回W{nn}データ取得時はGA4探索レポート形式（デバイス軸・キーイベント含む）で取得できているか確認

## 🟡 進行中: TackleCard 二層マッチング レビュー（2026-09-24〜）

商品紹介の深度・マッチング率向上プロジェクト。ルール整備（[target-article/SKILL.md](../../.agents/target-article/SKILL.md) 王道ゾーン／地元ゾーン）完了、シーバス2記事（`seabass-points`・`seabass-tactics`）でパイロット実装済み。残り13魚種・約80記事を1本ずつレビューする。

- [ ] 詳細タスクリスト: [tackle-matching-review.md](tackle-matching-review.md)（魚種ごとにH2、記事ごとにTODO＋修正案入力欄のH3）
- [ ] マッチング率リサーチ（採用タックル vs 市場推奨）: [tackle-research/](tackle-research/README.md)（現在庫一覧・市場調査・実アングラー調査・一致率分析・価格帯ベンチマークの5ファイル）
- [ ] リンク作成・商品追加の実行: [tackle-research/link-creation-candidates.md](tackle-research/link-creation-candidates.md)（優先度高3件から着手）

## ✅ 完了（アーカイブ済み）: W39関連リライト・エリアまとめページ新設（2026-09-22〜23）

re-createフェーズ、W39優先度タスク、5エリアまとめページ新設（猪鼻湖・庄内湖・表浜名湖・奥浜名湖・中浜名湖）は全完了。詳細は [archive/w39-tasks-completed-2026-09-22.md](archive/w39-tasks-completed-2026-09-22.md) 参照。

### 効果測定（着手済みタスクの追跡・唯一の残タスク）

- [ ] W39優先度3件（`araibenten-umiduripark`・`miyakodagawa`・`9-month`）+ セクション見出し改善分の効果測定（目安 W41 = 2026-10月上旬にGSCで確認）
- [ ] クロダイKWカニバリ解消の効果測定（目安 W41にGSCで正本記事の順位変化を確認）
- [ ] `amihosiba`・`family-car-points`・`rental-boat-guide`の2026-09-23再対応分の効果測定（目安 W42 = 2026-10月中旬にGSCで確認）
- [ ] 5エリアまとめページの効果（順位・CTR変化）をW41（2026-10月上旬目安）でGSC確認する

---

## 🟡 優先度：中（W41-task.md に集約）

W39クエリ再確認の修正候補・低アクセス記事の改善（nagisaen／ライブカメラCTR／megaura／nakanoshima／常夜灯／舞阪／伊勢海老／kisuインデックス／エンゲージメント／GSC手動作業）は W40-task.md に集約していたが、2026-10-05 に W39・W40 のタスクファイルを archive へ移動（[archive/w39-task-completed-2026-10-05.md](archive/w39-task-completed-2026-10-05.md)／[archive/w40-task-archived-2026-10-05.md](archive/w40-task-archived-2026-10-05.md)）。**W40 の未完了タスクは [W41-task.md](W41-task.md) に引き継ぎ済み**。

- [ ] `target/kibire/cooking`（キビレ 食べ方）: 表示101・CTR0%・順位10.58。W39時点で対応済みだが効果反映前のデータのため要再測定（W41）
- [ ] 浜名湖ポイント（表示56・CTR0%・順位7.38）: 広域クエリにつき優先度低、様子見

## 🟡 次フェーズ: 低アクセス記事の継続監視（時期待ち）

- [ ] `guide/method/*` 新規4本（2026-09-04公開）— GSCインデックス取得まで様子見（10月以降確認）
- [ ] `season/*`・`travel/*` 系ゼロインプレ記事 — 季節到来後に表示増加を確認してから判断

---

## 🟡 優先度 低・時期指定

### 4. amazon-sale-tackle-strategy 更新
- [ ] **2026-10月末**: `amazon-sale-tackle-strategy` の `upDate` 更新＋冬版チェックリスト差し替え（メバル・シーバス・防寒・照明）

### 5. キャンプ記事リサーチ
完了（2026-09-04）。詳細は [archive/camp-fishing-research-completed-2026-09-04.md](archive/camp-fishing-research-completed-2026-09-04.md) 参照。

---

## 参照ファイル（アクティブ）

| ファイル | 用途 |
|----------|------|
| `weekly-task.md` | 週次PDCAトラック・効果測定タスク |
| `affiliate-file.md` | 旅行系アフィリエイト改善の詳細（P2配置最適化が残件） |

## アーカイブ済みファイル（参照のみ）

`archive/` フォルダに格納。完了・不要と判断したもの。
- `w39-tasks-completed-2026-09-22.md`（W39リライト・5エリアまとめページ新設 完了 2026-09-22〜23）
- `camp-fishing-research-completed-2026-09-04.md`（浜名湖キャンプ場リサーチ＋記事化 完了 2026-09-04）
- `re-create-phase-completed-2026-09-19.md`（re-createフェーズ全完了: cooking14本・クエリ改善24件・ゼロクリック7本タイトル最適化）
- `season-monthly-target-fish-restructure-completed-2026-09-04.md`（月次記事12本へtarget/*・season/*BlogCard追加完了 2026-09-04）
- `murakushi-rental-completed-2026-09-16.md`（村櫛エリア新規記事見送り判断＋既存記事リライト、釣具レンタルオンラインサービス調査＆新規記事化・旧記事統合 完了 2026-09-16）
- `tactics-article-briefs.md`・`tactics-expansion-plan.md`（tactics 4記事完了 2026-09-04）
- `kurodai-new-session.md`・`search-intent-content-restructure.md`（クロダイ教科書完成・complete-guide削除・BlogCard修正完了 2026-09-04）
- 旅行アフィリエイト基本配置（unagi/camp/kanko-hub の3記事に楽天・じゃらん・asoview 配置完了 2026-09-04）
- `chousa-file.md`（観光KW調査 → weekly-task.mdに統合済み・完了）
- `cooking-post.md`（cooking20本目標達成済み）
- `method-guide-rewrite-task.md`（guide/method・theory リライト完了）
- `analytics-tracking-setup.md`（計測タグ実装完了）
- `content-linking-map.md`（古い内部リンク設計図 → 新方針に吸収）
- `query-check.md`（古いGSCデータ分析 → 現行データで管理）
- `ajing-rulecolor-check.md`（スクレイパー設計図 → 優先度低で棚上げ）
- `catch-data-scraper-requirements.md`（釣果スクレイパー設計図 → 優先度低で棚上げ）

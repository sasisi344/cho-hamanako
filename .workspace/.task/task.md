# 釣！浜名湖 — アクティブタスク

**最終整理**: 2026-10-05
**管理方針**: このファイルが「今やること」の一覧。完了したタスクは `archive/` へ移動。詳細プランは個別ファイル参照。

## 🟡 計測確認: `affiliate_click`

2026-10-05 に Partytown の worker 起動失敗が真因と判明し、GA4 を通常のメインスレッド読み込みに変更して発火確認まで完了した（`6573423`）。経緯と詳細は [archive/w40-task-archived-2026-10-05.md](archive/w40-task-archived-2026-10-05.md) と [archive/w41-completed-2026-10-05.md](archive/w41-completed-2026-10-05.md) を参照。残りは確認のみ。

- [ ] 次回W{nn}データ取得時に `キーイベント` 列へ件数が計上されているか確認（週次解析のなかで実施）
- [ ] あわせて `.claude/skills/cho-hamanako-weekly-pdca/SKILL.md` 更新に伴い、次回W{nn}データ取得時はGA4探索レポート形式（デバイス軸・キーイベント含む）で取得できているか確認

## 🟡 進行中: TackleCard 二層マッチング レビュー（2026-09-24〜）

商品紹介の深度・マッチング率向上プロジェクト。ルール整備（[target-article/SKILL.md](../../.agents/target-article/SKILL.md) 王道ゾーン／地元ゾーン）完了、シーバス2記事（`seabass-points`・`seabass-tactics`）でパイロット実装済み。残り13魚種・約80記事を1本ずつレビューする。

- ハゼ記事は 2026-10-05 に3本（`haze-fukabori`・`haze-beginner`・`hazekura-intro`）へ統合済み。レビューは統合後の3本で行う（[tackle-matching-review.md](tackle-matching-review.md) のハゼ節に注記あり）。
- [ ] 詳細タスクリスト: [tackle-matching-review.md](tackle-matching-review.md)（魚種ごとにH2、記事ごとにTODO＋修正案入力欄のH3）
- [ ] マッチング率リサーチ（採用タックル vs 市場推奨）: [tackle-research/](tackle-research/README.md)（現在庫一覧・市場調査・実アングラー調査・一致率分析・価格帯ベンチマークの5ファイル）
- [ ] リンク作成・商品追加の実行: [tackle-research/link-creation-candidates.md](tackle-research/link-creation-candidates.md)（優先度高3件から着手）

## 🟡 効果測定（着手済みタスクの追跡）

- [ ] W39優先度3件（`araibenten-umiduripark`・`miyakodagawa`・`9-month`）+ セクション見出し改善分の効果測定（目安 W41 = 2026-10月上旬にGSCで確認）
- [ ] クロダイKWカニバリ解消の効果測定（目安 W41にGSCで正本記事の順位変化を確認）
- [ ] `amihosiba`・`family-car-points`・`rental-boat-guide`の2026-09-23再対応分の効果測定（目安 W42 = 2026-10月中旬にGSCで確認）
- [ ] 5エリアまとめページの効果（順位・CTR変化）をW41（2026-10月上旬目安）でGSC確認する
- 2026-10-05 実施分（`nagisaen`・`amihosiba`の再改稿・サヨリ記事・ハゼ3本の統合）の効果測定は [W41-task.md](W41-task.md) の「効果測定」に記載（目安 W43、ハゼは W45 も）

---

## 🟡 優先度：中（W41-task.md に集約）

W39・W40 の未完了タスクは [W41-task.md](W41-task.md) に集約済み（W39・W40 のタスクファイルは 2026-10-05 に archive へ移動: [archive/w39-task-completed-2026-10-05.md](archive/w39-task-completed-2026-10-05.md)／[archive/w40-task-archived-2026-10-05.md](archive/w40-task-archived-2026-10-05.md)）。

- [ ] `target/kibire/cooking`（キビレ 食べ方）: 表示101・CTR0%・順位10.58。W39時点で対応済みだが効果反映前のデータのため要再測定（W41。W41-task.md の `kibire-cooking`（優先度：高）で対応中）
- [ ] 浜名湖ポイント（表示56・CTR0%・順位7.38）: 広域クエリにつき優先度低、様子見

## 🟡 次フェーズ: 低アクセス記事の継続監視（時期待ち）

- [ ] `guide/method/*` 新規4本（2026-09-04公開）— GSCインデックス取得まで様子見（10月以降確認）
- [ ] `season/*`・`travel/*` 系ゼロインプレ記事 — 季節到来後に表示増加を確認してから判断

---

## 🟡 優先度 低・時期指定

### amazon-sale-tackle-strategy 更新
- [ ] **2026-10月末**: `amazon-sale-tackle-strategy` の `upDate` 更新＋冬版チェックリスト差し替え（メバル・シーバス・防寒・照明）

---

## 参照ファイル（アクティブ）

| ファイル | 用途 |
|----------|------|
| `W41-task.md` | 直近の週次PDCA（W41）の未完了タスクと効果測定 |
| `weekly-task.md` | 週次PDCAトラック・効果測定タスク（未完了のみ） |
| `affiliate-file.md` | 旅行系アフィリエイト改善の詳細（P2配置最適化が残件） |
| `redirect-targets.md` | 旧URL転送の実績と、転送先の検証結果 |

## アーカイブ済みファイル（参照のみ）

`archive/` フォルダに格納。完了・不要と判断したもの。
- `w41-completed-2026-10-05.md`（W41の完了項目: `nagisaen`・`affiliate_click`・`amihosiba`・サヨリ記事統一・ハゼ記事3本統合・`/affiliates/`（比較記事は取り消し）・GA4セグメント）
- `weekly-task-completed-2026-10-05.md`（weekly-taskの完了分: cooking季節別4本・tactics4本・クロダイ／新居の対策実施・GA4登録・進捗ログ）
- `w40-task-archived-2026-10-05.md`（W40タスク一式。未完了分は W41 へ引き継ぎ済み）
- `w39-task-completed-2026-10-05.md`（W39タスク一式。全完了）
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

# 釣！浜名湖 — アクティブタスク

**最終整理**: 2026-10-05
**管理方針**: このファイルが「今やること」の一覧。完了したタスクは `archive/` へ移動。詳細プランは個別ファイル参照。

## ✅ 冬の収益化（2026-11-05〜11-10 完了）
> **11/15 までの計画（2026-11-06 改定）**: 順番は `hq/roadmap/cho-hamanako.md` を正とする（1日10本まで。検収は書き終えたあと）。GSC の登録リクエストはしない（U-1 は取りやめ）。画像はプロンプトを書いた段階で生成してよい。

詳細・判断の根拠は [winter-monetization-2026-11.md](winter-monetization-2026-11.md)（hq:H-38）。最初の締切はブラックフライデー前の 11/15。

- [x] 11/8: 今ある商品でカード配置（FUYU-1）、内部リンク（FUYU-2）
- [x] 11/05: 防寒商品のリサーチとカード18件の登録（FUYU-3・FUYU-4、[winter-gear-research-2026-11.md](winter-gear-research-2026-11.md)）
- [x] 11/05: 防寒ガイド兼ブラックフライデー記事（FUYU-5、指示書 `.workspace/codex/orders/2026-11-05-FUYU-5.md`）
- [x] 11/05: 魚種×月の記事6本の統合（FUYU-8、指示書 `.workspace/codex/orders/2026-11-05-FUYU-8.md`）
- [x] 公開後: 新記事への内部リンク（FUYU-13）、数字の食い違いの整理（FUYU-12、2026-11-10 完了）
- [x] 11/15: 冬ハブ（FUYU-6）と転送の変更（FUYU-7）。体験メモ（U-3、2026-11-10 反映済み）
- [x] バッチ CH-1: 牡蠣小屋の旅記事（FUYU-9）、未登録4本の点検（FUYU-10）（2026-11-08 検収済み）
- [ ] **11/19: Amazon ブラックフライデーの期間を公式で確認し、記事の日付を更新（FUYU-11a）→ セール対象の商品を取得して記事に反映（FUYU-11b）。先行セールが 11/21 から始まるので、それまでに終える**
- [ ] 11/21〜: 先行セール開始後に対象と記事の案内を照合（FUYU-11c）
- [ ] 判断待ち: 秋ハブ（下の B）を来年に回すか

## 🟠 新規: 「浜名湖 魚釣り」総合KWの入口づくり（2026-11-19 起票、hq:H-48）

Codex の提案 [_inbox/2026-11-18-main-keyword-lp-improvement-tasks.md](../_inbox/2026-11-18-main-keyword-lp-improvement-tasks.md)（分析元 [kw-no1.md](../_inbox/kw-no1.md)）を CC が検討し、**縮小版で進める**（ユーザー決定 2026-11-19）。目標は「浜名湖 魚釣り」「浜名湖 釣り」の上位（1〜3位）。受け皿はトップに限らず、個別記事でもよい。トップは中間語（釣り場・ポイント）と詳細記事への入口として強くする。

| 状態 | ID | 作業 | 規模 | 担当・所要の目安 | 日 |
|---|---|---|---|---|---|
| [x] | CH-KW-01 | 基準値の保存・URL検査（登録状態とGoogle選択canonical）・遷移計測の確認。結果は [ch-kw-01-baseline.md](ch-kw-01-baseline.md)。URL検査は API で取れたのでユーザー作業は不要になった | S〜M | Claude（2026-11-19 完了） | 11/19（木） |
| [x] | CH-KW-02 前半 | 比較3候補（新居弁天・`family-car-points`・砂揚げ場）の根拠・確認日・掲載判断を整理。[材料台帳](ch-kw-02-comparison-materials.md)。砂揚げ場は現在の駐車・立入条件の一次確認がそろうまで単独推薦を見送り。確定材料は対象3記事へ反映済み。トップは後日 | M | Codex（2026-11-22 調査・整理・記事反映完了） | 11/22（日） |
| [x] | CH-KW-02 後半1（冬・春） | 四季の釣行案内のうち冬・春の場所・魚・釣り方・準備・根拠・確認日・内部リンク。[材料台帳](ch-kw-02-comparison-materials.md) §6。主案は冬＝新居弁天のカサゴ穴釣り、春＝5月の新居弁天のキス。弁天島海浜公園は釣り禁止区域の境界が未確認のため見送り。リンク先の記事の誤りは §6-3・6-4 | M | Claude（2026-11-24 完了） | 11/24（火） |
| [ ] | CH-KW-02 後半2（夏・秋） | 夏・秋を同じ形式でそろえる（[材料台帳](ch-kw-02-comparison-materials.md) §6-4 の引き継ぎを見る。導流堤は使わない）。前半の確認待ちも同 §4 から引き継ぐ。H-43の指示書は既存CH-6（11/21作成）を参照 | M | Claude | 平日枠11/25（水）〜26（木）。11/27の実装前まで |
| [ ] | CH-KW-04・05・07 | トップの総合案内（本文）＋入門一覧の冒頭案内＋3ファイルの文脈リンク。H-45 の読み進めやすさのルールで書く。**ルール記事（総合KWの今の受け皿）と `family-car-points` は、H-43 のカード（①②③）も同じ書き直しで置く**（[収益の設計](ch-kw-revenue-design.md) §3-1・§3-3）。トップにカードは置かず、カードのある記事へ送る | M〜L | Claude 2.5時間 | 11/27（金） |
| [ ] | CH-KW-08 | 検収（build・tackle-ids・リンク・スマホ/PC）＋ main へ出す承認の表 | M | Claude 45分＋ユーザー10分 | 11/28（土）→ 承認後 11/29 に公開 |
| [ ] | CH-KW-09 | 公開後の比較（01 の基準と同条件の28日）。トップ→送り先の遷移と、ルール記事・`family-car-points`・新居弁天のカードのクリック率も並べる（[収益の設計](ch-kw-revenue-design.md) §5） | S | Claude 30分 | 12/28 の月次分析 |
| 保留 | CH-KW-03 | 初回釣行の新規記事。01 の結果と公開後の動きを見て 12/28 に判断（ルール記事・`family-car-points` と重なるため） | — | — | — |
| 不要 | CH-KW-06 | レンタル記事の現地／宅配の区別。11/15 の AF-3（`4db75d7`）で済み | — | — | — |

- **収益の設計（2026-11-21 追加、ユーザー指示）**: [ch-kw-revenue-design.md](ch-kw-revenue-design.md)。トップは広告・カードがないので送客に徹し、総合KWで実際に表示されているルール記事を、順位と収益の両方の受け皿にする。H-43 のカード配置と同時に進め、ルール記事と `family-car-points` は H-43 側で先に触らない（11/27 の `feature/main-kw-entry` でまとめる）。新居弁天・フォトニクス下・舞阪堤・砂揚げ場・レンタルボートは 11/23〜26 に先に置く
- 初心者企画（`_inbox/初心者.md` の案2「入口ページ」・案4「ルール記事の冒頭」）は、CH-KW-05 と同じ作業として一緒に行う。二重に起票しない
- **ブランチ（2026-11-19 ユーザー決定）**: 計画・記録・取得データ（`.workspace/**`、deploy が走らない）はふだんのセッションの流れで main へ。実装（`src/**`・`.mdx`。04・05・07）は専用ブランチ `feature/main-kw-entry` で進め、11/27 の実装開始時に**最新の `origin/main` から切る**（早く切ると、H-43・AF-3 など他の記事の作業と `family-car-points`・`yearly-fishing-calendar` で衝突する）。検収のあと、承認の表を見せて main へ統合する。作業ツリーに別件の未コミット変更があるので、ブランチは git worktree で分ける
- 公開は deploy が走る変更（`src/**`）。main へは、リポジトリ・理由のファイル・公開内容の表を見せて承認をもらう
- 公開後の測定は 12/28 の月次分析（[schedule-task.md](schedule-task.md)）。少数表示なので、足りなければ 56〜84日へ延ばす

## 🔴 新規: 秋KW改善（2026-10-30〜）

秋記事16本のうち9本がインデックス未登録と判明。診断・想定クエリ・競合・タスク詳細は [autumn-kw-index-report.md](autumn-kw-index-report.md)。

- [ ] A. 未登録9本の理由確認・再リクエスト・内部リンク追加・サヨリ2本の整理・旧WP転送の301化確認
- [ ] B. 新規ハブ「浜名湖 秋 釣り」を `season/` に作成（構成案を確認してから本文）
- [ ] C. `autumn-guide`（秋シーバス）のタイトルは 10/31 に修正済み。本文を9〜11月に広げるリライトは Codex 担当、指示書 `.workspace/codex/orders/2026-10-31-AKI-C.md`（Aとセット）
- [ ] D. 11/30 の月次分析で登録状況と「秋」クエリを再測定

## 🔴 安全: 今切口の立入・釣り禁止の記述を統一（2026-11-01 起票）

`points/omote/imagiremaisakatei` の「舞阪堤テトラ帯での釣り自体は禁止されていません」（202行付近）が、`.agents/fishing-laws-hamanako.md` の「今切口から左右・沖合1,400m、導流堤上は釣り禁止エリア」と食い違う。AKI-C の Codex 報告書（`.workspace/codex/reports/2026-11-01-AKI-C.md`）で指摘。

- [x] 2026-11-01 ユーザーの判断で `imagiremaisakatei` の該当文を「テトラ帯の一部は釣り禁止エリアから外れるが、危険な場所に変わりはない」に変更（CC）
- [x] 2026-11-03 関連記事を洗い出し、食い違いを一覧化 → [imagire-restriction-audit.md](imagire-restriction-audit.md)（A 2本・B 5本・C 9本）
- [x] 2026-11-03 基準をユーザー確認で確定し `.agents/fishing-laws-hamanako.md` を更新（船: 釣り・停泊禁止／陸: 導流堤は立入禁止、今切大橋より南の突堤は進入禁止、その他は禁止なし）。罰則の数字は出典未確認のため削除
- [x] 2026-11-03 一覧の A 2本・B 4本・C 9本を Codex で修正（指示書 `.workspace/codex/orders/2026-11-03-IMG-1.md`、報告書 `.workspace/codex/reports/2026-11-03-IMG-1.md`）。CC 検収済み
- [x] `points/wading-points` 77行「弁天島ミオ筋周辺: 鉄橋付近や導流堤まわり」の導流堤がどれか確認する → 2026-11-03 ユーザー回答: 導流堤は今切口の浜名湖側にある流入を分散させる堤防で、陸から離れていて船でしか行けない。「導流堤まわり」を削除（CC）し、`.agents/fishing-laws-hamanako.md` に定義を追記
- [ ] `hamanako-fishing-rules-and-manners` の特定水産動植物の罰則の金額表記が見出し・本文・まとめで一致していない（Codex 報告）→ 2026-11-03 ユーザー判断: 罰則は法令に従うので、<strong>先に浜名湖の罰則を法令ごとに統一したDB（データセット）を作り</strong>、それを正本に記事を直す。記事は DB ができるまで触らない（下の「罰則DB」）
- [x] シーバスのランカー定義（60／70／80cm超）→ 2026-11-03 ユーザー判断: 定義はなく、サイトでは「70cm以上」を目安にする。`.agents/target-article/SKILL.md` に追記し、定義として別の数字を書いていた3記事（seabass の beginner・points・tactics）を直した（CC）。80cm超の個体・狙いを書く記事（winter-lunker など）はそのまま
- [ ] シーバスの水温の目安が教科書・月別記事・データセットで食い違う件を整理する（同報告書「止めた箇所」）
- [ ] <strong>罰則DB</strong>: 浜名湖で釣り人に関係する罰則を、根拠の法令・条文・出典URL・確認日つきで1つのデータにまとめる（漁業法、静岡県漁業調整規則、漁業権の行使規則、今切口の遊漁禁止水域の根拠など）。置き場所は `.workspace/.dataset/` 配下。できたら `.agents/fishing-laws-hamanako.md` の「罰則の整理」をこの DB に合わせ、記事の罰則表記を直す（2026-11-03 ユーザー判断）

## 🟡 内部リンクの試行（2026-11-24 起票、hq:H-54）

提案・承認・計測の記録: [internal-links-pilot/README.md](internal-links-pilot/README.md)。

- [ ] 提案 A01〜A09 の承認（ユーザー）→ 承認された ID だけ反映し、`log.json` に変更日を書く
- [ ] 反映の28日後＋3日に `measure.mjs` でまとめて判定（Claude、S）
- [ ] キビレの `kibire-cooking`（1,836表示・6.1位・本文の被リンク1本）へのリンク: 11/10 にカードを変えたので **12/08 以降**に `kurodai/cooking` の「キビレ（キチヌ）の美味しい食べ方」の節から足す
- [x] 2026-11-24 `target/kibire/index.mdx` の「夏〜秋の個体は刺身でも美味しい」を、`kibire-cooking` に合わせて「刺身はすすめない」に直した（main 未反映。ブランチ `claude/internal-links-pilot`）
- [ ] **リンク切れ（本番で確認済み）**: 実在しない slug の BlogCard が14個、読者の画面に赤い「not found」が出ている。`cooking/autumn-hamanako-recipe`（6個: 86・88・126・169・181・183行）、`cooking/winter-hamanako-recipe`（6個: 94・123・167・191・193・195行）、`target/tako/season/june-tako-opening`（2個: 188・210行）。slug にフォルダのパスを書いているのが原因（Claude、S、修正の承認待ち）
- [ ] 乙女園公園の駐車台数が食い違う: `points/omote/otomeen` は「約20台」、`points/omote/kangetsuen` は「30台以上」。どちらが正しいかユーザー確認。直すまでこの2記事の間にリンクを張らない

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
- [x] **2026-10月末**: `amazon-sale-tackle-strategy` の `upDate` 更新＋冬版チェックリスト差し替え（メバル・シーバス・防寒・照明）→ 2026-10-27 実施（未デプロイ）。11月前後の節を夏の節より前に移し、4項目に TackleCard 3枚・BlogCard 3枚を追加

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

# 浜名湖釣果データ・スクレイピング 要件定義 & KW選定設計図

> 2026-06-24作成。Obsidian側メモ（`07_workspace/00_Memo` → `08_blog-master/釣！浜名湖/2025年の釣果データ取得：釣！浜名湖.md`）から発展し、本プロジェクト（cho-hamanako）の既存実装・既存リサーチを踏まえて設計し直したもの。

## 1. 背景・目的

- 本サイトには `src/components/CatchChart.astro` という月別釣果期待度グラフのコンポーネントが既にあり、`points/fukabori/` 配下の **18記事** で使われている（[.workspace/.data-set/fukabori-workspace/fukabori-index.md](../.data-set/fukabori-workspace/fukabori-index.md)）。
- そのデータの元ネタは [.workspace/.data-set/fukabori-workspace/catch-chart-research-results.md](../.data-set/fukabori-workspace/catch-chart-research-results.md) という**手動リサーチ（4段階の定性評価: 爆釣/好調/散発/圏外）**であり、実際の釣果報告から集計した実データではない。
- **目的:** 実際の釣果報告サイトを定期スクレイピングし、①既存の手動データの検証・更新、②未カバーのポイント×魚種データの拡張、を継続的に行う。アウトプットは既存`CatchChart`がそのまま読み込める形式にする（新しい表示コンポーネントは作らない）。

## 2. データ消費仕様（最優先で守る既存制約）

`CatchChart.astro` の実際のProps定義（実装から抽出）:

```ts
interface MonthlyDataItem {
  month: number;        // 1-12
  level: string | number; // "爆釣"|"好調"|"散発"|"圏外" or 0-5
  note?: string;
  value?: number;
  label?: string;
}
interface Props {
  fish?: string;                       // 表示名（例: "クロダイ（網干場・舞阪）"）
  data?: (string | MonthlyDataItem)[]; // 12要素の配列が基本形
  fishData?: { name: string; seasons: number[] }[]; // 複数魚種比較用
  unit?: string;
}
```

実際の記事での使用例（[imagire-area-fukabori/index.mdx](../../src/content/blog/points/fukabori/imagire-area-fukabori/index.mdx)）:

```mdx
<CatchChart
  fish="クロダイ（網干場・舞阪）"
  data={["好調","散発","爆釣","爆釣","好調","好調","好調","好調","好調","爆釣","爆釣","好調"]}
/>
```

**設計方針:** スクレイパーの最終出力は「ポイント×魚種」ごとに12ヶ月分の`"爆釣"|"好調"|"散発"|"圏外"`配列（またはMonthlyDataItem配列）を生成するJSONとする。MDXへの貼り込みは人間（または別タスク）が行い、本スクレイパーは記事ファイルを自動編集しない。
**理由:** `CLAUDE.md`の「【厳守】ハルシネーション防止」方針（slug等は実在確認必須）に合わせ、生成データを記事に反映する工程は必ずレビューを経由させる。

## 3. 対象魚種・ポイントの選定（KW設計）

### 3.1 優先魚種リスト（既存18記事カバー対象 = 検証価値が最も高い）

既存fukabori記事の対象魚種をそのまま優先リストにする。実データで既存の定性評価を裏付け・修正できるため、新規魚種を探すより優先度が高い。

| 魚種 | 関連既存記事（fukabori） |
|---|---|
| クロダイ／キビレ | imagire-area-fukabori, kibire-bottom-fukabori, chining-fukabori |
| アジ | imagire-area-fukabori, ajing-fukabori |
| シーバス | mio-suji-area-fukabori, boat-seabass-fukabori, wading-seabass-fukabori, seabass-season-fukabori, lunker-seabass-fukabori, bachinuke-fukabori |
| カレイ | mio-suji-area-fukabori, boat-gomoku-fukabori |
| サヨリ | boat-gomoku-fukabori, sayori-fukabori |
| カワハギ | boat-gomoku-fukabori, imagire-area-fukabori |
| メバル／カサゴ | imagire-area-fukabori, ajing-fukabori |
| ハゼ | haze-fukabori |
| マダコ | tako-fukabori |
| メジナ（グレ） | mejina-fukabori |
| シロギス | kisu-fukabori |
| アオリイカ／コウイカ | eging-fukabori |
| マゴチ | magochi-fukabori |

### 3.2 ポイント名の正規化（重要な技術課題）

スクレイピング元（ヤマハ/スズキ両マリーナ）は「今切沖」のような大まかな地名表記が多く、本サイトが管理する**51ポイントの正式slug**（[.workspace/.data-set/fukabori-workspace/point-list.md](../.data-set/fukabori-workspace/point-list.md)、表/中/奥浜名湖）に直接対応しない。

- `location_aliases.yaml` を作り、自由記述地名 → 51ポイントslugへのマッピングを管理する（例: 「今切沖」→ `imagiremaisakatei` または `amihosiba`、要目視確認）。
- マッピング確度が低い場合は、ポイント単位ではなく**エリア単位（表/中/奥浜名湖）**までの粗い粒度で保存する。無理にポイント単位へこじつけない。
- 緯度経度が必要な場合は `.workspace/.data-set/.index/infrastructure-master.json`（ポイントごとのlat/lng・施設情報）を参照できる。

### 3.3 既存クエリ分析からの優先度補正

[.workspace/.task/query-check.md](query-check.md) と [.workspace/.task/chousa-file.md](chousa-file.md) の知見を反映:

- **アジング系**: 「アジング」「アジングポイント」等で表記が分散（合計表示2200超）。魚種としては「アジ」に統一し、`ajing-fukabori`の実データ更新を優先。
- **ハゼ釣り 新川**: 表示436・クリック13と需要はあるが認知度が低いマイナーポイント。`shinkawa-kakou`（新川河口）×ハゼのデータを優先的に実データ化できれば差別化材料になる。
- **水深・水温・バチ抜け系のKW**（`浜名湖 水温 データ`, `浜名湖 バチ抜け`等）は釣果データそのものではないが、将来的に水温/バチ抜け時期と釣果の相関を見るための補助データとして`water-tempature.md`と組み合わせる余地をメモしておく（MVPの対象外）。

## 4. 対象サイト

| サイト | URL | 形式 | 採用理由 |
|---|---|---|---|
| ヤマハマリーナ浜名湖 釣果情報 | https://hamanako.yamaha-marina.co.jp/fishing_report/ | カード型・繰り返しテンプレート（日付/魚種/船名/場所） | 構造化済みで抽出が容易、公式で安定 |
| スズキマリーナ浜名湖 釣果報告ブログ | https://suzukimarine.co.jp/marina/hamanako/blog/category/fishing/ | ブログ形式（タイトル＋概要、~10ヶ月分） | 過去ログが厚く月別傾向分析に向く、公式で安定 |

**初期スコープ外（再検討事項）:** アングラーズ（商用UGC、利用規約確認要）／釣りビジョン（店舗ごとにデータが空が多い）／hamazo.tv系個人ブログ（アクセス時403が発生、ボット対策の可能性）。

## 5. システムアーキテクチャ

### 5.1 Technical Stack
本ワークスペースの既存スクリプト（`.workspace/scripts/check-missing-covers.mjs`, `Antigravity-nanobana/*.js`）に合わせ、**Node.js（ESM）**で実装する。

- **Fetch/Parse:** `fetch` + `cheerio`（静的HTMLのみ。JS描画が必要な場合は対象外）
- **Storage:** JSONファイル（小規模データのためDB不要。`.workspace/.data-set/fukabori-workspace/catch-data-scraped/`配下）
- **Config:** `site-adapters.yaml`（サイトごとのセレクタ定義）、`species-aliases.yaml`、`location-aliases.yaml`

### 5.2 処理フロー
1. **Fetch:** `site-adapters.yaml`定義に従い対象ページを取得。ページネーション対応。前回実行時の最新日付より新しい記事のみ処理（差分取得）。`robots.txt`確認、User-Agent明示、1-2秒のリクエスト間隔を入れる。
2. **Parse:** サイトごとのアダプタで日付・魚種・場所・URLを抽出。失敗時はクラッシュさせずログに記録してスキップ。
3. **Normalize:** `species-aliases.yaml`で魚種表記ゆれを統一（クロダイ＝チヌ＝黒鯛等）。`location-aliases.yaml`で地名→ポイントslug（or エリア）に正規化。
4. **Store:** `catches-raw.json`に蓄積（`source`+`url`+`date`で重複防止）。
5. **Aggregate:** ポイント（またはエリア）×魚種×月で報告件数を集計し、件数の相対値から`爆釣/好調/散発/圏外`の4段階に変換するロジック（閾値は`catch-chart-research-results.md`の既存パターンを参考に初期値を決める）。
6. **Output:** `CatchChart`の`data`プロップとして貼れる形のJSON（`{fish, data: string[12]}`）を出力。既存の手動データとの差分比較レポートも生成する。

## 6. 出力物（Deliverables）
1. スクレイパー本体: `.workspace/scripts/catch-scraper/`（既存`Antigravity-nanobana`と同階層）
2. 生データ: `.workspace/.data-set/fukabori-workspace/catch-data-scraped/catches-raw.json`
3. 集計結果（CatchChart投入用）: `.workspace/.data-set/fukabori-workspace/catch-data-scraped/{point-or-area}_{fish}.json`
4. 既存手動データとの比較レポート: `catch-data-diff-report.md`（既存`catch-chart-research-results.md`とどれだけ一致/相違するか）
5. 実行ログ（取得件数・パース失敗件数）

## 7. 開発ステップ
1. **Step 1:** `site-adapters.yaml`設計＋ヤマハマリーナ向けFetch/Parseアダプタの実装。
2. **Step 2:** スズキマリーナ向けアダプタ追加（ブログ本文からの魚種抽出）。
3. **Step 3:** `species-aliases.yaml` / `location-aliases.yaml`によるNormalize実装。
4. **Step 4:** JSON蓄積・差分検知・重複防止の実装。
5. **Step 5:** 月別4段階評価への変換ロジック＋CatchChart投入用JSON出力。
6. **Step 6:** 既存`catch-chart-research-results.md`との比較レポート生成、2サイト分のデータで実用性を検証。

## 8. 今後の拡張性（Not for MVP）
- アングラーズ等の商用サイト対応（利用規約確認後）
- hamazo.tv系ブログの403要因調査
- 週次自動実行（タスクスケジューラ登録）
- 比較レポートを踏まえた既存18記事のCatchChart実データ反映（人間レビュー前提）

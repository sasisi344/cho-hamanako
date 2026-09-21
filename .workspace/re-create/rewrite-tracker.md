# 統合リライト作業トラッカー

**運用方針**: 当面は新規記事作成より既存記事の整理・リライトを優先する。着手したタスクは進捗ログに日付を残す。

---

## 🟡 低優先: target/kisu インデックス状況確認

- [ ] `target/kisu`（index自体・0refs）のGSCインデックス状況をSearch Consoleで確認。インデックスされていなければ正本（kisu/index）へ301リダイレクト検討

> **target/* 旧サブ記事62本の削除方針は撤回**（2026-09-19）。beginner/tactics/season系は内部リンクで機能中のため維持。cooking系は下記「釣れる場所×調理タスク」で別途対応。

---

## 🔴 最優先: cooking記事「釣れる場所×調理」リライト（14本）

**方針**: 単体レシピ記事→「浜名湖で釣った〇〇の食べ方」軸に再構成。タイトル最適化 + 各魚種教科書記事（target/{fish}/index.mdx）末尾に「調理・食べ方」セクション＋BlogCard追加。

| 優先 | 魚種 | cooking slug | 教科書 slug | 状態 |
|---|---|---|---|---|
| 高 | カレイ | `karei-cooking` | `karei` | [x] |
| 高 | タコ | `tako-cooking` | `tako` | [x] |
| 高 | カワハギ | `kawahagi-cooking` | `kawahagi` | [x] |
| 高 | キス | `kisu-cooking` | `kisu` | [x] |
| 中 | クロダイ | `kurodai-cooking` | `kurodai` | [x] |
| 中 | ハゼ | `haze-cooking` | `haze` | [x] |
| 中 | シーバス | `seabass-cooking` | `seabass` | [x] |
| 中 | アジ・サバ | `aji-saba-sappa-cooking` | `aji-saba-sappa` | [x] |
| 低 | キビレ | `kibire-cooking` | `kibire` | [x] |
| 低 | メバル・カサゴ | `mebaru-kasago-cooking` | `mebaru-kasago` | [x] |
| 低 | エギング（イカ） | `eging-cooking` | `eging` | [x] |
| 低 | ヒラメ・マゴチ | `flatfish-cooking` | `flatfish` | [x] |
| 低 | サヨリ | `sayori-cooking` | `sayori` | [x] |
| 低 | メジナ | `mejina-cooking` | `mejina` | [x] |

## 🔴 最優先: クエリ改善タスクA（即効性高、9件）

詳細: [03-query-improvement.md](03-query-improvement.md) の「優先A」セクション

- [x] 新居海釣り公園 ライブカメラ（タイトル変更・冒頭直リンクCallout追加 2026-09-19）
- [x] 浜名湖 漁業権（冒頭即答テーブル・タコ/ウナギ/イセエビH2追加 2026-09-19）
- [x] タコ関連2026最新情報（june-tako-openingタイトル・summary更新 2026-09-19）
- [x] 車横付けKWの内部リンク集約（family-car-points タイトル更新・family-car-fishing-pointsからBlogCard追加 2026-09-19）
- [x] アジング常夜灯（ajing-fukaboriタイトル・summary更新 2026-09-19）
- [x] 集魚灯（タイトル更新・冒頭禁止可否Callout追加 2026-09-19）
- [x] 弁天流し釣り（タイトル変更 2026-09-19）
- [x] 浜名湖中之島（H1・summary最適化 2026-09-19）
- [x] 舞阪漁港釣り禁止（hamanako-fishing-rules-and-mannersのsummary即答型化・同記事に統合 2026-09-19）

## 🟠 中優先: points/oku/* ゼロ表示エリア（8本）✅ 完了

- [x] 奥浜名湖エリア内部リンク確認・追加（2026-09-19）
  - `hanagawa`: 0refs→2refs（isajigawa・syounaiko から追加）
  - `shimo-ona`: 1refs→2refs（sakujyoseki から追加）
  - `arai-nakanogo`: 0refs→1refs（nakanoshima から追加）
  - kanzanji/lakesideway/mikkabi-eki/setosuidou/shiras-boat: 既に複数refs確認済み

## 🟠 中優先: クエリ改善タスクB・C（B完了 / C未着手）

詳細: [03-query-improvement.md](03-query-improvement.md)

### C完了（2026-09-19）

| 対象 | 変更内容 |
|---|---|
| `points/naka/murakushi-kaisuiyoku` | タイトル「村櫛海水浴場跡地 釣りポイント」・summaryに旧海水浴場エリア追記 |
| `travel/hamanako-unagi-fishing-trip` | タイトルに「うなぎ釣り ポイント・仕掛け・漁業権」追加・漁業権H2セクション追加 |
| `target/kurodai/beginner` | タイトルに「仕掛け（オモリ・ハリス・針）」追加 |
| `guide/method/night-fishing` | タイトル「浜名湖 夜釣り ポイント完全ガイド」に変更 |
| `season/monthly/8-month` | タイトル「浜名湖 8月 釣り2026」・summaryに2026最新明示 |
| `points/oku/sakujyoseki` | Bで対応済み（猪鼻湖 釣りポイント KW強化） |

※ GSC作業系（浜名湖ポイントインデックス確認）・OGP画像系は手動対応が必要。

### B完了（2026-09-19）

| 対象 | 変更内容 |
|---|---|
| `points/naka/megaura` | タイトル「女河浦海水浴場跡地 釣りポイント」に最適化 |
| `points/omote/imagiremaisakatei` | タイトル更新・「今切口の釣り禁止ゾーンと注意事項」H2追加 |
| `points/fukabori/tako-fukabori` | タイトルに「時期・シーズン（5〜9月）」追加・時期FAQテーブル追加 |
| `points/oku/isajigawa` | タイトル「庄内湖 釣りポイント」に最適化 |
| `points/fukabori/eging-fukabori` | タイトル「浜名湖エギング ポイント・時期・攻略ガイド」に変更 |
| `points/omote/amihosiba` | タイトルから角括弧除去・「舞阪 網干場 釣りポイント」に変更 |
| `target/kibire/cooking` | 既にcooking記事リライトで対応済み |
| `points/oku/sakujyoseki` | タイトル「猪鼻湖 釣りポイント」に最適化 |
| `guide/logistics/rental-boat-guide` | 「免許不要で乗れるレンタルボートはある？」H2＋料金比較テーブル追加 |

## 🟡 低優先: ゼロクリック記事のタイトル/メタ見直し ✅ 対応済み

- [x] points系5本 タイトル最適化（2026-09-19）: sunza / washidukou / bachinuke-fukabori / waji-boat / bentenjimakaihinkouen
- [x] cooking系3本（kurodai-shioyaki / nezakana-nitsuke / koaji-karaage）— 2026-09-19 完了。`src/content/blog/cooking/` 配下に実在。釣り起点KWタイトルに最適化
- [x] guide/theory系4本（hamanako-weather-vs-hamamatsu / feeding-switch / mazume-logic / dissolved-oxygen）— 2026-09-19 完了。`src/content/blog/guide/theory/` 配下に実在。KWタイトルに最適化

## ⚪ 監視のみ（対応不要・時間経過で解消見込み）

- 旧URL構造（`/blog/{fish}-cooking/`等）のGSC残留表示 — 対応不要、自然消滅を待つ
- 2026-09-04公開の`guide/method/*`新規4本 — 公開間もないため様子見

---

## 完了ログ

### 2026-09-19: cooking記事「釣れる場所×調理」リライト 全14本完了

低優先6本（2026-09-19）:

| 対象ファイル | 変更内容 |
|---|---|
| `target/kibire/cooking` | タイトル・summary更新・リード後にkibire-points BlogCard追加（末尾は既存） |
| `target/mebaru-kasago/cooking` | タイトル・summary更新（pointsなし） |
| `target/eging/cooking` | タイトル・summary更新（pointsなし） |
| `target/flatfish/cooking` | タイトル・summary更新（pointsなし） |
| `target/sayori/cooking` | タイトル・summary更新（pointsなし） |
| `target/mejina/cooking` | タイトル・summary更新（pointsなし） |

### 2026-09-19: cooking記事「釣れる場所×調理」リライト 高優先4本・中優先4本（計8本）完了

| 対象ファイル | 変更内容 |
|---|---|
| `target/karei/cooking` | タイトル・summary更新・リード後/末尾にkarei-points BlogCard追加 |
| `target/tako/cooking` | タイトル・summary更新・リード後/末尾にtako-points BlogCard追加 |
| `target/kawahagi/cooking` | タイトル・summary更新・リード後/末尾にkawahagi-points BlogCard追加 |
| `target/kisu/cooking` | タイトル・summary更新・リード後/末尾にkisu-points BlogCard追加 |
| `target/kurodai/cooking` | タイトル・summary更新・リード後/末尾にkurodai-points BlogCard追加 |
| `target/haze/cooking` | タイトル・summary更新・リード後/末尾にhaze-points BlogCard追加 |
| `target/seabass/cooking` | タイトル・summary更新・リード後/末尾にseabass-points BlogCard追加 |
| `target/aji-saba-sappa/cooking` | タイトル・summary更新・リード後/末尾にaji-saba-sappa-points BlogCard追加 |

### 2026-09-19: クエリ改善タスクA（9件）完了

| 対象ファイル | 変更内容 |
|---|---|
| `guide/logistics/araibenten-live-camera` | タイトル変更・summary更新・冒頭直リンクCallout追加 |
| `guide/beginner/hamanako-fishing-rules-and-manners` | summary即答型化・冒頭禁止魚介テーブル追加・タコ/ウナギ/イセエビH2追加（Callout import追加）|
| `target/tako/season/june-tako-opening` | タイトル・summaryに「2026」「漁期」明示 |
| `points/family-car-points` | タイトルに「車横付けOK」明示 |
| `guide/beginner/family-car-fishing-points` | 末尾にfamily-car-pointsへのBlogCard追加（集約） |
| `points/fukabori/ajing-fukabori` | タイトル・summaryに「常夜灯」「場所・使い方」追加 |
| `guide/theory/night-fishing-light` | タイトルに「禁止？合法？」追記・冒頭即答Callout追加・Callout import追加 |
| `guide/method/benten-nagashi-fishing` | タイトルを「弁天流し釣り 仕掛け・コツ完全ガイド」に変更 |
| `points/omote/nakanoshima` | タイトル・summaryを「浜名湖 中之島 釣りポイント」に最適化 |

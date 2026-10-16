# アフィリエイト導線 正規化・改善 計画書

作成日: 2026-10-16
前提レポート: [point-monetization-review.md](point-monetization-review.md)（ポイント記事の収益化ライン見直し）
関連: [W42-task.md](W42-task.md) ／ [travel-affiliate-optimization.md](travel-affiliate-optimization.md) ／ [tackle-matching-review.md](tackle-matching-review.md) ／ [schedule-task.md](schedule-task.md)

---

## 0. 目的とゴール

**目的**: アクセスのあるポイント記事に、読者が「必要だ」と感じる場面でアフィリエイトを置けるようにし、クリックを数値で追える状態にする。

そのために、記事を直す前に**仕組み（計測・データ・コンポーネント・ルール）を正規化**する。土台が揃っていない状態で記事を直しても、効果を測れず、同じずれがまた起きるため。

| ゴール | 判定基準 |
|---|---|
| G1 計測できる | GA4 で `affiliate_click` がキーイベントとして記録され、記事・節・カード単位で集計できる |
| G2 壊れたカードがない | 存在しない TackleCard ID が0件。ビルド時に自動で検出される |
| G3 ルールが1か所で決まっている | 配置ルールの正本が1ファイルにあり、各 SKILL はそこを参照する。記述の矛盾がない |
| G4 収益の接点が増える | パイロット10本で、改修前より `affiliate_click` 件数とクリック率が増える。順位・エンゲージメントは悪化しない |

---

## 1. 現状の機能面の問題（今回の調査で追加で見つかったもの）

### 1.1 【緊急】存在しない TackleCard ID が16件あり、本番でエラー表示になっている

`TackleCard` は ID が見つからないと赤い「⚠️ Tackle ID "…" not found」ボックスを表示する（`src/components/TackleCard.astro`）。本番の `chining-fukabori`・`eging-fukabori` で表示されていることを確認した（2026-10-16、curl で確認）。

| 存在しない ID | 使用記事 | 近い既存エントリ |
|---|---|---|
| `daiwa-silver-wolf-air` | `chining-fukabori`、`magochi-fukabori` | なし（`seabass/daiwa-silverwolf-76ml-s-w` は別製品） |
| `daiwa-emeraldas-air` | `eging-fukabori` | `eging/daiwa-emeraldas-83m`、`eging/daiwa-emeraldas-83m-j` |
| `daiwa-kisu-special` | `kisu-fukabori` | `kisu/shimano-kisu-special-taper-pl-n71q`（メーカー違い） |
| `daiwa-cool-line-800`、`ogk-hasu-combo` | `haze-fukabori` | なし |
| `common/shimano-stradic-c3000hg`、`seabass/daiwa-lates-93ml` | `wading-seabass-fukabori` | なし |
| `common/shimano-vanquish-c3000` | `boat-seabass-fukabori` | なし |
| `seabass/shimano-exsence-silent-assassin-129f` | `seabass-season-fukabori` | `seabass/shimano-exsence-silent-assassin-99f` ほか（サイズ違い） |
| `seabass/switch-hitter-85s`、`kisu-tactics/sasame-karei-assault` | `mio-suji-area-fukabori` | なし（`kisu-tactics/` というカテゴリ自体がない） |
| `octopus/daiwa-taco-x`、`octopus/megabass-taco-le-99` | `tako-fukabori` | `tako/abu-tacosfield-762h`（`octopus/` カテゴリはない。正しくは `tako/`） |
| `fishing-gear/daiwa-nanome-iso`、`fishing-gear/tsurikens-zen-circular` | `mejina-fukabori` | なし（`fishing-gear/` カテゴリはない） |
| `kurodai/decoy-easyset-chining` | `target/kurodai` | なし |

- 影響: `*-fukabori` 系11本＋`target/kurodai`。`chining-fukabori`・`eging-fukabori`・`kisu-fukabori`・`magochi-fukabori` は**設置したカードが1枚だけで、その1枚が壊れている**。つまり収益の接点は0。
- 原因: ルールでは ID を実在確認してから書くことになっているが、確認しないまま推測で書かれた ID がある。カテゴリ名（`octopus/`、`fishing-gear/`、`kisu-tactics/`）も推測されている。**ビルド時に検出する仕組みがない**ため、そのまま公開されている。

### 1.2 データ定義のずれ

| 問題 | 内容 |
|---|---|
| ファイルパスと `id:` フィールドの不一致 | `cooking/okamoto-pichit-regular`（id は `…-regular-32`）、`flatfish/sample`（id は `duo-beach-walker`）、`haze/sample`（id は `haze-crank`）。`getEntry` はファイルパスで引くため、`id:` を見て書くと壊れる |
| 索引が古い | `.workspace/.data-set/.index/tackle-card-list.md` は89行。実際のエントリは220件ある。形式も `kurodai: owners-kuro-hook` で、そのまま `id` に使えない。**AI が推測で ID を書く原因の1つ** |
| 使われていないエントリ | 220件中42件はどの記事にも使われていない |
| 表示形式がIDの接頭辞で決まる | `TackleCard.astro` で `travel/`・`naturum/` で始まる ID はバナー表示、それ以外は商品カード表示。テキストリンク版（`jalan-net-text`、`asoview-text`）もバナー扱いになり、文中に置けるテキストリンクとして使えない |
| 使用場面の情報がない | スキーマは `targetFish`・`methods`・`categories` のみ。「ウェーディング」「夜釣り」「車横付け」「安全」「宿泊」など**ポイント記事で必要になる場面**で商品を引けない |
| 旅行リンクにエリア指定がない | `travel/*` はすべて各サービスのトップへのリンク |

### 1.3 計測の問題

- `affiliate_click` は4週連続で0件。GA4 側でキーイベントにマークされているか未確認（W42 Act）。
- 送っているのは `aff_id`・`aff_brand`・`aff_name`・`link_url`・`page_path` のみ。**記事内のどこ（節・位置）でクリックされたか**、**どの記事タイプか**が分からず、「どの置き方が効くか」を検証できない。

### 1.4 ルールの分散と矛盾

| ファイル | 記述 |
|---|---|
| `.agents/point-article/SKILL.md` 109〜110行目 | ポイント記事では TackleCard 禁止 |
| `.agents/target-article/SKILL.md` 52行目〜 | 二層マッチング（王道／地元）。カード直前の説明文の文字数まで規定 |
| `.agents/travel-article/SKILL.md` 75行目 | 宿泊は TackleCard。参照先は古い `tackle-card-list.md` |
| `.agents/writing-style/SKILL.md` 106行目〜 | TackleCard の書式のみ |
| [travel-affiliate-optimization.md](travel-affiliate-optimization.md) | 「本音転換点」の挿入タイミング（task 文書でルールではない） |

→ 配置ルールが4ファイルとタスク文書に分かれ、ポイント記事については「禁止」と実装（26本に設置）が食い違っている。

---

## 2. 改善方針

1. **土台から直す順序を守る**: 計測 → データ・コンポーネント → ルール → 記事の順に進める。前の段階が終わるまで次の段階の記事改修は始めない。
2. **正本を1つにする**: アフィリエイトの配置ルールは新設する `.agents/affiliate-placement-rules.md` に集め、各 SKILL はそこを参照する。商品データの正本は `src/content/affiliates/`。索引はそこから自動生成し、手で書かない。
3. **間違いを仕組みで止める**: 存在しない ID はビルド時（またはチェック用スクリプト）で失敗させる。ルールで「確認すること」と書くだけにしない。
4. **ポイント記事は「その場所で必要なもの」に限る**: レポート §3 の「役割分担＋橋渡し」を正式ルールにする。汎用セットの羅列はしない。
5. **変更は小さく、測ってから広げる**: 記事改修はパイロット10本から始め、4週間測ってから横展開する。

---

## 3. フェーズ別タスク

各フェーズの「完了条件」を満たしたら次へ進む。（※ユーザー）はユーザー操作が必要なもの。

### Phase 1: 緊急修正と計測の確認（10/17〜10/23）

壊れたカードの修正は、ほかの作業を待たずに最初に行う。

- [x] **1-1 壊れた ID 16件の修正**（2026-10-16 完了。記録は下の「Phase 1 実施記録」）
  - 既存エントリで代わりになるもの（`eging/daiwa-emeraldas-83m`、`tako/abu-tacosfield-762h`、`seabass/shimano-exsence-silent-assassin-99f` など）は、**記事の文脈に合うか確認したうえで**置き換える
  - 代わりがないものは、(a) 新しくエントリを作る（アフィリエイトリンクの取得は※ユーザー）か、(b) カードを外して本文の記述だけにする。どちらにするかはユーザーと相談して決める
  - リンク・商品画像は推測で作らない
- [x] **1-2 ID チェックスクリプトの追加**（2026-10-16 完了。`scripts/check-tackle-ids.mjs`）: `src/content/blog/**/*.mdx` の `<TackleCard id="…">` と `src/content/affiliates/**/*.yaml` のパスを照合し、存在しないものがあれば終了コード1で失敗させる。`package.json` に `check:tackle` を追加し、`build` の前に実行する
- [x] **1-3 GA4 の確認**（※ユーザー）: `affiliate_click` の受信確認とキーイベント化。本番デプロイ日時を記録し、W43 を計測のベースラインとする
  - 2026-10-16 完了: リアルタイムで `affiliate_click` の受信を確認。イベント名で登録し、キーイベントに設定した。キーイベントの集計は 10/16 以降のみ（過去分は数えられない）
- [ ] **1-4 デプロイ**（※ユーザー）

**完了条件**: `check:tackle` が0件で通る。本番にエラー表示がない。GA4 で `affiliate_click` を1件以上受信できている（テストクリックでもよい）。

#### Phase 1 実施記録（2026-10-16）

**1-1 置き換え・削除（17箇所、12記事）**

周辺の本文に商品名は出てこないため、本文は変えずにカードだけ差し替えた。選定基準は「同じ用途（ロッド・リール・ルアー・仕掛けなど）で、節の見出し・説明と矛盾しないこと」。配置や誘導文の見直しは Phase 5 で行う。

| 記事 | 旧 ID（存在しない） | 新 ID | 理由 |
|---|---|---|---|
| `target/kurodai` | `kurodai/decoy-easyset-chining` | `kurodai/decoy-easy-set-chining` | 綴り違い（同一商品） |
| `eging-fukabori` | `daiwa-emeraldas-air` | `eging/daiwa-emeraldas-83m` | 同シリーズのエギングロッド |
| `chining-fukabori` | `daiwa-silver-wolf-air` | `kurodai/shimano-bream-game` | チニング用ロッド |
| `magochi-fukabori` | `daiwa-silver-wolf-air` | `seabass/daiwa-silverwolf-76ml-s-w` | 同シリーズのロッド |
| `kisu-fukabori` | `daiwa-kisu-special` | `kisu/shimano-kisu-special-taper-pl-n71q` | キス専用ライン（メーカー違いの同名シリーズ） |
| `tako-fukabori` | `octopus/megabass-taco-le-99` | `tako/dragon-octopus-tap` | 見出し「覇権エギ」→ タコエギ |
| `tako-fukabori` | `octopus/daiwa-taco-x` | `tako/abu-tacosfield-762h` | タコ専用ロッド |
| `seabass-season-fukabori` | `seabass/shimano-exsence-silent-assassin-129f` | `seabass/pazdesign-feel-120` | 「重めのシンペン」の説明に合う大型シンペン |
| `mio-suji-area-fukabori` | `seabass/switch-hitter-85s` | `seabass/jackson-nyoro-nyoro-85` | 同サイズのシンキングペンシル |
| `mio-suji-area-fukabori` | `kisu-tactics/sasame-karei-assault` | `karei/sasame-canon-ball-karei` | 同メーカーのカレイ仕掛け |
| `wading-seabass-fukabori` | `seabass/daiwa-lates-93ml` | `seabass/shimano-encounter-s96m` | シーバスロッド |
| `wading-seabass-fukabori` | `common/shimano-stradic-c3000hg` | `common/shimano-vanford` | C3000番クラスのリール |
| `mejina-fukabori` | `fishing-gear/tsurikens-zen-circular` | `mejina/duel-tg-wave-master` | 磯用ウキ |
| `mejina-fukabori` | `fishing-gear/daiwa-nanome-iso` | `mejina/daiwa-liberty-club-isokaze-mejina` | 磯竿 |
| `haze-fukabori` | `daiwa-cool-line-800` | `common/sanka-cooler-6bl` | 小型クーラー |
| `haze-fukabori` | `ogk-hasu-combo` | （削除） | 該当商品なし。同じ節に既に9枚あるため補充しない |
| `boat-seabass-fukabori` | `common/shimano-vanquish-c3000` | （削除） | 同じ節にリールが既にある（`daiwa-morethan-pe-tw`） |

元の商品（ヴァンキッシュ、ストラディック、ラテオ、シルバーウルフ AIR など）を正式に載せたい場合は、アフィリエイトリンクを取得してエントリを追加し、Phase 5 で差し替える。

**1-2 チェックスクリプト**

- `scripts/check-tackle-ids.mjs` を追加。`pnpm run check:tackle` で単体実行でき、`pnpm run build` の最初にも実行される（存在しない ID があればビルドを止める）
- 修正前の状態で実行して17件すべてを検出すること、修正後は0件で通ることを確認した
- `astro build` 後の `dist/` で「not found in affiliates」を含むページが0件であることを確認した（302ページ）

### Phase 2: データとコンポーネントの正規化（10/24〜11/6）

- [x] **2-1 ファイルパスと `id:` の不一致3件を修正**（`sample.yaml` はファイル名を変えるか削除。参照している記事がないか先に確認）
- [x] **2-2 スキーマ拡張**（`src/content/config.ts` の `affiliates`）。追加するのは次の任意項目だけ。既存エントリは変更しなくても動くようにする
  - `format`: `"card" | "banner" | "text"`。未指定なら現在の接頭辞判定と同じ結果になる初期値にする
  - `scenes`: 使用場面タグ。値の候補: `wading`・`night`・`car`・`family`・`safety`・`boat`・`stay`・`activity`・`rental-car`・`bait`
  - `area`: 旅行系のエリア（`kanzanji`・`bentenjima`・`maisaka`・`arai`・`oku-hamanako`。2026-10-17 に弁天島と舞阪を分割 など）
- [x] **2-3 TackleCard の表示形式を `format` で決めるように変更**（接頭辞の判定は後方互換の初期値として残す）。`format: "text"` は文中に置けるテキストリンクとして表示する
- [x] **2-4 計測項目の追加**（2026-10-17 完了・デプロイ済み）: TackleCard に任意の `position` prop を追加し、`data-aff-position` として出力する。`affiliate-tracking.js` で `aff_position` と記事タイプ（`page_type`: points/target/travel など。URL から判定）を送る。GA4 側でカスタムディメンションを登録する（※ユーザー）
- [x] **2-5 索引の自動生成**: `src/content/affiliates/` から `tackle-card-list.md` を生成するスクリプトを作る。出力は「そのまま `id` に使える完全なパス」＋`scenes`・`targetFish`・`format`。`manifest.json` の参照先も合わせて更新する
- [x] **2-6 `scenes` の付与**: ポイント記事で使う見込みのある商品（ウェーダー、エイガード、ヘッドライト、クーラー、ポータブル電源、ライフジャケット、サビキセット、宿泊・体験リンクなど）から優先して付ける

**完了条件**: ビルドが通り、既存記事の表示が変わらない（バナー・カードの見た目の差分なし）。索引が自動生成され、件数が実エントリ数と一致する。`aff_position` が GA4 のリアルタイムで確認できる。

#### Phase 2 実施記録（2026-10-17）

- **2-1**: 3件を削除した。`flatfish/sample.yaml`・`haze/sample.yaml` はリンク先が仮 URL（`amzn.to/example-…`）で、本番の `/affiliates/` に7か所表示されていた。`cooking/okamoto-pichit-regular.yaml` は記事で使われている `cooking/okamoto-pichit-regular-32` と同一商品の重複。再発防止として `check-tackle-ids.mjs` にファイルパスと `id:` の一致確認を追加した
- **2-2**: `src/content/config.ts` の `affiliates` に `format`（card / banner / text）・`scenes`（wading・night・car・family・safety・boat・bait・stay・activity・rental-car）・`area`（当初 kanzanji・bentenjima-maisaka・arai・oku-hamanako。Phase 4 で bentenjima と maisaka に分割）を任意項目として追加。値は enum で固定し、表記ゆれを防ぐ
- **2-3**: `TackleCard.astro` は `format` を優先し、未指定なら従来の接頭辞判定。`format: "text"` 用に `AffiliateTextLink.astro` を新設（文中に置ける1行のテキストリンク。A8 のインプレッション計測用 1x1 画像も出力）。`jalan-net-text`・`asoview-text`・`uqey-text`・`naturum/text-link` に `format: text` を設定（いずれも記事では未使用で、既存表示への影響なし）
- **2-4**: `TackleCard` に `position` prop を追加し、外枠の div に `data-aff-position` として出力。記事本文の `<article>` に `data-category`（記事の category）を追加。`affiliate-tracking.js` で `aff_position`・`page_type` を送るようにした。`page_type` は URL ではなく frontmatter の category から取る（`/blog/` 配下の URL はカテゴリを含まないものがあるため）
- **2-5**: `scripts/generate-tackle-card-list.mjs` を追加（`pnpm run gen:tackle`）。出力先は従来どおり `.workspace/.data-set/.index/tackle-card-list.md` なので、manifest や各 SKILL の参照は変更不要。ID・商品名・種類・対象魚・場面・エリア・表示形式・記事での使用回数を載せる（218件、未使用40件）
- **2-6**: 40件に `scenes` を付与（ウェーダー・エイガード・ヘッドライト・電気ウキ・クーラー・ポータブル電源・車中泊用品・ファミリー向けセット・ライフジャケット・ボート/カヤック類・エサ・旅行系リンク）
- **確認**: `astro check` エラー0、`astro build` 成功（302ページ）。変更前のビルドと記事本文の HTML を比較し、差分はビルドごとに変わるランダム ID のみ（表示の変化なし）。開発サーバーで `format: text` と `position` の出力を一時的に確認し、確認後に記事を元に戻した
- **残り**: GA4 のカスタムディメンション登録（※ユーザー）、デプロイ後のリアルタイム確認

### Phase 3: ルールの正規化（10/31〜11/6、Phase 2 と並行可）

- [x] **3-1 正本 `.agents/affiliate-placement-rules.md` を新設**。内容:
  - 記事タイプ別の役割と上限（レポート §3.1 の表。ポイント記事は最大3枚、「必要が生まれる場面」に限る）
  - 場面と `scenes` タグの対応（レポート §3.2 の表）
  - 誘導文テンプレート（状況 → 困ること → 解決 → カード）と禁止例（レポート §3.3）
  - BlogCard 前の誘導文（レポート §3.4）
  - `position` の付け方（節の種類: `access`・`terrain`・`time`・`safety`・`facility`・`trip`）
  - ID は自動生成の索引から選び、`check:tackle` を通すこと
- [x] **3-2 各 SKILL を正本参照に書き換え**: `point-article`（109〜110行目の禁止を削除）、`target-article`（二層マッチングは残し、配置の共通部分を正本へ）、`travel-article`（参照先を新しい索引へ）、`writing-style`（書式のみ残す）
- [x] **3-3 Claude Code SKILL の検証チェックリスト更新**: `cho-hamanako-article-creation`・`cho-hamanako-article-rewrite` に「`check:tackle` 実行」「カード直前の誘導文の有無」「ポイント記事のカード上限」を追加
- [x] **3-4 CLAUDE.md の補助ドキュメント一覧に正本を追加**

**完了条件**: `grep` でアフィリエイト配置に関する記述を探したとき、矛盾する記述が残っていない。

#### Phase 3 実施記録（2026-10-17）

- Phase 1〜2 はユーザーがビルド・デプロイ済み。本番で エラー表示0件・`/affiliates/` の仮 URL 0件・`<article data-category>` の出力を確認した
- **3-1**: 正本 `.agents/affiliate-placement-rules.md` を新設（記事タイプ別の役割と上限、場面×`scenes`×`position` の対応表、誘導文の型と禁止例、BlogCard の誘導文、TackleCard の props、ID の選び方と検証、効果の測り方）
- **3-2**: `point-article`（「アフィリエイト禁止」を廃止し、場面限定・上限・誘導文必須に置き換え）、`target-article`（二層マッチングは維持し、共通部分は正本参照。ポイント記事からの受け皿の役割を追記）、`travel-article`（ID の参照先を自動生成の索引に、受け皿の役割を追記）、`writing-style`（書式に `position` を追加、配置は正本参照）。あわせて `guide-article`・`season-article`・`base-article-structure`（M5 をポイント記事では分散配置）・`workflows/post-complete.md`（`check:tackle` と配置確認）も正本参照に揃えた
- **3-3**: `cho-hamanako-article-creation`（アフィリエイトの行とチェックリスト）、`cho-hamanako-article-rewrite`（クイックフローに手順6を追加）を更新
- **3-4**: `CLAUDE.md` の補助ドキュメント一覧に正本を追加
- **確認**: `.agents`・`.claude/skills`・`CLAUDE.md` を「アフィリエイト禁止」「純粋な攻略」「物販…禁止」等で検索し、旧ルールの記述は改定注記と正本の背景説明以外に残っていないことを確認

### Phase 4: アセットの拡充（11/1〜11/13、ユーザー作業中心）

- [x] **4-1 エリア指定の旅行リンク作成**（※ユーザー: 楽天トラベル・じゃらん・asoview! の管理画面）。対象エリア: 舘山寺温泉、弁天島・舞阪、新居、奥浜名湖（猪鼻・都田）。作成後に `travel/` へ `format: "text"`・`area` 付きで追加する
- [ ] **4-2 パイロット10本で使う場面別商品の過不足確認**: 足りない商品はリスト化し、追加するか見送るかをユーザーが決める（※リンク取得はユーザー）

**完了条件**: パイロット10本の改修に必要な ID がすべて実在する。

#### Phase 4 実施記録（2026-10-17）

- 方針変更（ユーザー判断）: **asoview! はエリア別リンクを作らない。旅行は楽天トラベル・じゃらんのみ**。既存の `travel/asoview-banner`（travel 記事4本で使用中）はそのまま残す
- ユーザーが ValueCommerce MyLink で各エリアの検索結果ページへのリンクを作成（[ryokou-affi.md](ryokou-affi.md)）。10件を `src/content/affiliates/travel/` に登録した: `rakuten-travel-{area}`・`jalan-{area}`（area = kanzanji・bentenjima・maisaka・arai・oku-hamanako）。すべて `format: text`・`scenes: ["stay"]`・`area` 付き。MyLink のインプレッション計測用画像を `image` に入れ、`AffiliateTextLink` で 1x1 出力する（A8 限定だった条件を、テキスト形式の `image` 全般に広げた）
- リンク先の確認: 遷移先 URL（`vc_url`）を直接開き、10件とも 200 で検索結果が表示されることを確認（計測リンク経由ではクリックが計上されるため使っていない）。楽天トラベルの件数: 舘山寺23・弁天島17・舞阪11・新居6・奥浜名湖6
- じゃらんの弁天島リンクは、当初は浜名湖エリア全体の一覧ページだったため、ユーザーが「弁天島温泉」で再取得したリンクに差し替えた（表示名「弁天島温泉の宿をじゃらんで探す」。遷移先に THE OCEAN・開春楼の2軒が表示されることを確認）
- 正本 `affiliate-placement-rules.md` §2 を更新: ポイント記事に置く旅行系は楽天トラベル・じゃらんのエリア指定リンクだけ。エリアとスポットの対応表を追加
- `check:tackle` OK（228件）、`astro check` エラー0、開発サーバーで表示を確認（確認後に記事は元に戻した）
- 4-2（パイロット用の場面別商品の過不足確認）は Phase 5 の記事ごとの選定と一緒に行う

### 追加対応: 商品カードの画像・リンク切れ修正（2026-10-17）

ユーザー指摘「画像が表示されない物販カードがある」を受けて、Phase 5 の前に既存データだけで修正した。

- **調査**: 商品カード表示（`format: card`）の全203件について、カード部品と同じ手順で表示用の画像 URL を組み立てて取得した。**46件が画像なし**（Amazon の ASIN 形式 `/images/P/{ASIN}.01.LZZZZZZZ.jpg` が 43 バイトの透明 GIF を返す）。うち31件は記事で使用中
- **画像の修正（37件）**: アフィリエイトタグなしの商品ページから画像 ID を取得し、`image` を `/images/I/xxxx.jpg` 形式に置き換えた。商品ページの商品名がデータの名前と一致することを確認。カード部品が付ける `_AC_SY320_` 付きの URL で全件表示できることを確認
- **リンク切れ（9件）**: 商品ページ自体が 404（販売終了）。画像もリンクも機能していなかった
- **仮リンク（1件）**: `common/shimano-vanford` のリンクが `https://amzn.to/example-vanford`（amazon.com のトップへ転送、タグなし）。4記事で使用中だった（うち `wading-seabass-fukabori` は Phase 1 で置き換え先に選んだもの）
- **全リンク確認**: 商品カード203件のリンク先を確認し、上記10件以外はすべて 200
- **記事の置き換え（16記事・20箇所）**: 既存の生きている商品に置き換えた

| 旧（削除） | 使用 | 置き換え先 |
|---|---:|---|
| `seabass/shimano-exsence-silent-assassin`（旧版） | 6 | `seabass/shimano-exsence-silent-assassin-99f`（同一商品）。`target/seabass` は同じ節に -99f があるため削除のみ |
| `seabass/bassday-range-vib-70es` | 6 | `flatfish/tacklehouse-rolling-bait-77`（同じバイブレーション系。秋ガイドの本文にも併記あり） |
| `seabass/daiwa-morethan-pe-tw`（ベイトリール） | 2 | `boat-seabass-fukabori` は `mebaru-kasago/daiwa-tatula-100-xhl`（ベイトリール）。`target/seabass` は「ロッド・ライン」節に紛れていたため削除 |
| `seabass/daiwa-hvf-land-surf` | 1 | `karei/daiwa-prime-surf-t25-405-w`（サーフロッド） |
| `cooking/kai-fish-bone-tweezers` | 2 | `cooking/pearlmetal-bone-tweezers` |
| `cooking/shinden-brass-scaler` | 1 | `cooking/wadaisuke-brass-scaler` |
| `common/shimano-vanford`（仮リンク） | 4 | 一時的に `common/shimano-ultegra-c3000` へ置き換えたが、ユーザーが正式リンクを取得したため再登録し、4記事ともヴァンフォードに戻した（下記） |
| `seabass/lumica-power-float`・`seabass/owner-maru-seigo-hook`・`cooking/sekimagoroku-hekiju-sashimi-210` | 0 | （未使用のため削除のみ） |

- **データ削除（9件）**: 上表の販売終了エントリ。`/affiliates/` に全件が表示されるため、切れたリンクを公開しないよう削除した（git から復元可能）
- **ヴァンフォード再登録**: ユーザー取得の正式リンク（ASIN B0D95C1QQ9「24 ヴァンフォード 各種」、`tag=sasisi344-22`）に差し替え。名前を「C3000HG」から「各種」に、画像を `/images/I/71in8t4x3CL.jpg` に更新。記事4本は元どおり `common/shimano-vanford` を使用
- **再発防止**: `check-tackle-ids.mjs` に仮リンク（`example` を含む link）の検出を追加。正本 §6 に「`image` は `/images/I/` 形式」「仮リンク禁止」を追記
- **結果**: 商品カード193件すべて画像表示 OK、`check:tackle` OK（219件）、`astro check` エラー0
- **残り**: リンク切れは今後も販売終了で発生する。月1回程度、リンク・画像の死活確認を回す仕組み（ネットワークを使うのでビルドとは別のスクリプト）を Phase 7 の棚卸しで検討する

### Phase 5: パイロット改修

> 2026-10-17 誘導文の監査: [affiliate-lead-audit.md](affiliate-lead-audit.md)（直前に商品へつながる誘導文があるのは540枚中92枚＝17%）。パイロット対象外の流入上位記事にも、誘導文だけ先に足すことを提案している（11/7〜11/20）

#### Phase 5 進捗: 魚種別攻略（target）の誘導文改修

方針（2026-10-17 ユーザー判断）: 新しいカードは足さず、**既にカードがある魚種別攻略記事の訴求力を高める**ところから始める。カードの直前に正本 §3 の型で誘導文を入れ、`position="tackle"` を付ける。根拠は商品データの説明と記事本文の記述のみ（実体験の創作はしない）。

| 記事 | 日付 | カード | 対応 |
|---|---|---:|---|
| `target/kurodai`（教科書） | 2026-10-17 | 13 | 13枚すべてに誘導文（1〜3文）。連続していた3〜4枚の間にも個別の誘導文を入れ、連続を解消。ブッコミ節のダンゴは「エサ取りが多い時期はダンゴ釣りへ」でつないだ。`upDate` 更新 |
| `target/seabass` | 2026-10-17 | 22 | 誘導文22枚。同じ商品の2回目（第6章）は短い誘導文。ロッド節のプライムサーフ（投げ竿。シーバスのルアー釣りに合わない）を外した |
| `target/kibire` | 2026-10-17 | 18 | 誘導文18枚 |
| `target/aji-saba-sappa` | 2026-10-17 | 17 | 誘導文17枚。アジング節のサビキ仕掛けは「反応がない夜はサビキへ」でつないだ。見出し代わりの「サビキのスターターパッケージ：」を誘導文に置き換え |
| `target/flatfish` | 2026-10-17 | 16 | 誘導文16枚。「ヒラメへのルアー：」を誘導文に置き換え |
| `target/mebaru-kasago` | 2026-10-17 | 16 | 誘導文16枚 |
| `target/kisu` | 2026-10-17 | 14 | 誘導文14枚。本格投げ節の小型天秤は「手前を探るときに替える」でつないだ |
| `target/mejina` | 2026-10-17 | 13 | 誘導文13枚 |
| `target/eging` | 2026-10-17 | 11 | 誘導文11枚。ロッド節で同一商品（エメラルダス 83M・J）が別 ID で2枚並んでいたため `eging/daiwa-emeraldas-83m-j` を外した |
| `target/kawahagi` | 2026-10-17 | 11 | 誘導文11枚。陸っぱり節の船カワハギ竿（第5章にも同じカードあり）を外し、第5章でボート用として誘導。「エサ：」を誘導文に置き換え |
| `target/karei` | 2026-10-17 | 10 | 誘導文10枚。投げ釣り節のボート用両軸リール（第5章にも同じカードあり）を外し、第5章でボート用として誘導 |
| `target/tako` | 2026-10-17 | 10 | 誘導文10枚 |
| `target/sayori` | 2026-10-17 | 2 | 誘導文2枚。ウキカゴ節のカゴなし仕掛けは「カゴを付けない日に」でつないだ |

- 魚種の教科書13本・173枚すべての直前に誘導文が入り、カードの連続は0になった（監査スクリプトで確認）。全体では「商品に触れた誘導文あり」が 92 → 221 枚
- 根拠は商品データの説明と記事本文の記述のみ。実体験・未確認の数値は書いていない（アジングの「1g前後」は根拠がないため「軽い」に直した）
- 外したカード: 5枚（プライムサーフ、エメラルダス重複、船カワハギ竿の重複、カレイ節の両軸リールの重複＝いずれも置き場所の誤り／重複）
- `check:tackle` OK、`astro check` エラー0、`astro build` 成功
- 次: 流入のある魚種別の個別記事（`june-tako-opening`・`kawahagi-points`・`points-top5`・`kibire-cooking`・`magochi-bottom-wind`・`hazekura-intro` など）


対象（W42 GSC クリック上位）: `nagisaen`・`family-car-points`・`drive-fishing-spots`・`amihosiba`・`chining-fukabori`・`imagiremaisakatei`・`eging-fukabori`・`wading-points`・`miyakodagawa`・`araibenten-umiduripark`

- [ ] **5-1 改修前の数値を記録**（W43〜W44 の PV、`affiliate_click`、GSC 順位・CTR、エンゲージメント時間）
- [ ] **5-2 記事ごとに「必要が生まれる場面」を抽出**し、置くカードと位置を決める（1記事最大3枚）
- [ ] **5-3 改修**: 正本ルールに従ってカードと誘導文を置き、`position` を付ける。既存の終盤の汎用カードは外すか、場面の節へ移す
- [ ] **5-4 `check:tackle` とビルドを通してデプロイ**（※デプロイはユーザー）
- [ ] **5-5 効果測定項目を [schedule-task.md](schedule-task.md) に登録**

**完了条件**: 10本の改修が本番に反映され、測定開始日が記録されている。

### Phase 6: 測定と判断（11/21〜12/18、4週間）

- [ ] **6-1 週次 PDCA で10本の `affiliate_click`・クリック率・`aff_position` 別のクリックを確認**
- [ ] **6-2 順位・エンゲージメントが悪化していないか確認**
- [ ] **6-3 判断**:
  - 改善した → 効いた場面（`position`）を正本ルールに反映し、Phase 7 へ
  - 改善しない → 誘導文・位置・商品のどれが原因かを `aff_position` のデータで切り分けて、ルールを修正する
- 注意: 11〜12月は釣りのオフシーズンで、アクセス自体が減る。前週比ではなく「PV あたりのクリック率」で判断し、可能なら前年同期と比べる

### Phase 7: 横展開（12月〜）

- [ ] **7-1 汎用4枚セットの7本**（`megaura`・`hamayu-ohashi`・`omsolar`・`syotaijihana`・`higata-sitefishing`・`konankoukou`・`murakushi-kaisuiyoku`）を場面別に入れ替える
- [ ] **7-2 残りのポイント記事**を、[point-motivation-priority.md](point-motivation-priority.md) の優先順位と合わせて、リライト時に一緒に改修する
- [ ] **7-3 使われていない42件のエントリを棚卸し**し、削除するか場面タグを付けて活用するかを決める

---

## 4. 依存関係とスケジュール

```
Phase 1 緊急修正・計測 ──┬─> Phase 2 データ・コンポーネント ──┐
                          └─> Phase 3 ルール（並行可） ─────────┼─> Phase 5 パイロット ─> Phase 6 測定 ─> Phase 7 横展開
                              Phase 4 アセット（ユーザー作業）──┘
```

| 期間 | フェーズ | 担当 |
|---|---|---|
| 10/17〜10/23 | Phase 1 | Claude（1-1, 1-2）／ユーザー（1-3, 1-4） |
| 10/24〜11/6 | Phase 2 | Claude（GA4 カスタムディメンション登録はユーザー） |
| 10/31〜11/6 | Phase 3 | Claude（内容はユーザー承認） |
| 11/1〜11/13 | Phase 4 | ユーザー中心 |
| 11/7〜11/20 | Phase 5 | Claude（デプロイはユーザー） |
| 11/21〜12/18 | Phase 6 | 週次 PDCA で確認 |
| 12月〜 | Phase 7 | リライトと合わせて進める |

- 中長期のタスクなので、承認後に GitHub Project（ブログ運営タスク）へ Phase 単位で Issue 化することを推奨する（Issue 作成は依頼があれば実施）。

---

## 5. リスクと対策

| リスク | 対策 |
|---|---|
| カードを増やして記事が読みにくくなり、順位・滞在が落ちる | ポイント記事は最大3枚。誘導文必須。Phase 6 で順位・エンゲージメントも見る |
| スキーマ変更で既存の表示が変わる | 追加項目はすべて任意。`format` の初期値を現在の判定と同じにする。Phase 2 の完了条件で見た目の差分なしを確認 |
| オフシーズンで母数が少なく、効果が判断できない | クリック率で判断する。判断を保留する場合は、測定期間を延ばすことを Phase 6 で決める |
| ASP 側のリンク作成が遅れる | Phase 5 は既存アセットだけでできる記事から始め、旅行リンクが必要な記事（`imagiremaisakatei`・`araibenten-umiduripark` の宿泊部分）は後から追加する |
| 計測が直らない | Phase 1 の完了条件を満たすまで Phase 5 に進まない |

---

## 6. 次のアクション

1. この計画の承認
2. Phase 1-1: 壊れた ID 16件の対応方針（置き換え／新規作成／削除）を記事ごとに決める（Claude が案を出し、ユーザーが判断）
3. Phase 1-2: `check:tackle` スクリプトの実装
4. Phase 1-3: GA4 の確認（※ユーザー）

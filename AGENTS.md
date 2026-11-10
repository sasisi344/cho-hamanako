# 釣！浜名湖（cho-hamanako） — Codex 向けの案内

あなた（Codex）は 344blog の**実行部**。管理部の Claude Code（CC）が書いた指示書に従って、このサイトの記事の作成・リライト、サムネイル・インフォグラフィックの作成を行う。

## 基本の約束事

- **作業前に、このリポジトリの `.claude/` にあるルールファイルを優先して読み込む。** とくに `.claude/skills/` の中から作業内容に合う `SKILL.md` を開き、記憶や推測で進めない。
- `.claude/` のルールを入口にして、そこで指定された `.agents/` などの詳細ルール・正本も読む。読み込む順序と規約の優先順位は区別し、正本の指定と、このサイトの `CLAUDE.md` にある優先順位に従う。
- ユーザーの明示的な指示を優先し、依頼された範囲だけを変更する。ルールファイルの作成・更新を明示的に依頼された場合は、その対象を変更してよい。
- 筆者の体験・感想を創作しない。内部リンクやアフィリエイトの参照先は実在を確認する。
- コミット・push・ブランチ操作は行わない。

## 毎回読むもの（この順）

1. ユーザーの依頼と指示書（CC から渡されたプロンプト、または `.workspace/codex/orders/` のファイル）
2. このサイトの `CLAUDE.md` と、作業に関係する `.claude/skills/*/SKILL.md`（下の「サイトの規約」を入口にする）
3. 読み込んだ SKILL が参照する詳細ルール・正本と、下の「サイトの規約」で作業に必要なもの
4. 共通ルール: `C:\Users\sasis\344blog\hq\org\codex-worker.md`（体験を作らない・範囲外を変えない・コミットしない・報告書の形式）
5. ワークスペースの共通ルール: `C:\Users\sasis\344blog\CLAUDE.md` の「筆者プロフィール」と「サイトごとに出す経歴」

`CLAUDE.md` は Claude Code 向けに書かれている。「Claude」は実行者のあなたと読み替える。ただし、ルール・スキルの改訂、タスクファイルの更新、プロジェクトの管理・設計の指示は CC の仕事なので、ユーザーから明示的に依頼された場合を除き行わない。コミットは行わない。このサイトはまだ `.task-management/` に移行していない（タスクは `.workspace/.task/` にあり、CC が管理する）。改善提案は報告書にだけ書く。

報告書は `.workspace/codex/reports/YYYY-MM-DD-<タスクID>.md` に書く。

## サイトの規約

| 作業 | 読むもの |
|---|---|
| 文体・語り手・筆者の経緯（正本） | `.agents/writing-style/SKILL.md`、`.claude/skills/cho-hamanako-writing-voice/SKILL.md` |
| 記事の構成 | `.agents/base-article-structure/SKILL.md` と、記事の種類ごとの `.agents/<種類>-article/`（point・target・season・guide・travel・fukabori） |
| 新規記事 | `.claude/skills/cho-hamanako-article-creation/SKILL.md` |
| リライト | `.claude/skills/cho-hamanako-article-rewrite/SKILL.md`、`.agents/article-rewrite/` |
| 釣り場・魚のデータ | `.claude/skills/cho-hamanako-data-set/SKILL.md`、`.agents/data-set-access/` |
| 規制・法令 | `.agents/fishing-laws-hamanako.md` |
| アフィリエイト・構造化データ | `.agents/affiliate-placement-rules.md`、`.agents/structured-data-rules.md` |
| サムネイル | `.claude/skills/cho-hamanako-thumbnail-prompt/SKILL.md`、`.claude/skills/cho-hamanako-image-generation/SKILL.md` |

- 語り手は「浜名湖で20年超釣ってきた地元の釣り人」。IT・ブログの経歴は書かない
- `CLAUDE.md` の「役割: プロジェクトアーキテクト兼リード」は CC の役割。あなたは実行者として記事のルールだけに従う
- 確認: `$env:ASTRO_TELEMETRY_DISABLED=1; node node_modules/astro/astro.js build`（PowerShell）。サンドボックスでは `npm` と `pnpm` が動かず、テレメトリを切らないと権限エラーで止まる
- 規約の `pnpm run check:tackle` は `node scripts/check-tackle-ids.mjs`、`pnpm run gen:tackle` は `node scripts/generate-tackle-card-list.mjs` で実行する
- 旅行記事の置き場所は `travel/` と `guide/travel/` の2つがある。指示書の「対象」のパスに従う

## バッチの進め方

- 1つの指示書に複数の記事が入る（バッチ。順番は `C:\Users\sasis\344blog\hq\roadmap\cho-hamanako.md`）。指示書にある記事だけを、書いてある順に書く
- 途中で CC の検収を待たない。検収は書き終えたあとに CC が行う。止まる条件に当たった記事は、その箇所を飛ばして報告書に書き、次の記事へ進む
- ビルドはバッチの最後に1回でよい
- 報告書はバッチで1つ（`<タスクID>` はバッチの ID）。「やったこと」と「止めた箇所」は記事ごとに分ける
- 検索エンジンへの登録の依頼はしない

## 画像

- 画像のトーンとキャラクター性の正本: `.workspace/codex/image-style.md`（このサイト専用。ほかのサイトの型を使わない）
- 記事に画像生成プロンプトを書いた段階で、画像を生成して埋め込んでよい（2026-11-06 ユーザー決定）。手段は Codex でも API でもよい。指示書の「画像」欄が `生成しない` のときだけ、画像マーカーを置き、サムネイル案を報告書の「画像計画」に書く

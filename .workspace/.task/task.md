# 📅 2026-04-W16 今週の優先タスク

CursorとClaude Codeに修正を依頼して、Antigravityで作成したら順位がガッツリ下がった要因を特定し、復活させたい。

### 🚀 進行中のプロジェクト

- ポイント記事のリライト、修正
  SCのインデックス数はWPよりも増えているのにアクセスが激減しているので、記事内容がミスマッチしておりコアアップデートもあってランキングを下げられていると判断。その改善をするために、記事内容の修正をしていく。

修正内容について:
.agents\point-article\seo-audit.md に書き出している。主に文章の無駄とSEO的なアンマッチを修正している。

- 無駄な文章「3000文字のボリューム」を削除
- 2枚表示されていたアイキャッチを1枚に限定
- BlogCardコンポーネントはエラーが出やすいのでaタグのテキストリンクに

現在の進捗度:

- omote（表浜名湖）: ClaudeCodeで修正済
- naka（中浜名湖）: ClaudeCodeで修正済
- oku（奥浜名湖）: ClaudeCodeで修正済

### 釣法・解説記事（guide / method 中心）

ポイント記事とは別ラインで、**釣法・理論など説明型記事の薄さ・意図ミスマッチ**を直す。方針・バックログ・チェックリストは専用タスクに集約。

- [.workspace/.task/method-guide-rewrite-task.md](./method-guide-rewrite-task.md)

### 残り
- guide
- points
    - family-car-points
    - fukabori
    - wading-points
- season
- tactics
- theory
- travel

これらの記事は修正とともにSEO最適化を試みたい。そのためにも、既存記事で検索順位がガッツリ落ちた要因を記事から分析する。
個人的な考えとしては、ユーザーの目的とのマッチを重視しすぎたため、文字量が少なすぎて情報量が薄まってしまったことが要因と考える。
# Cho! Hamanako — Claude Code プロジェクト指示

## 優先順位（このリポジトリ内）

1. **本書**（`CLAUDE.md`）
2. **エージェント詳細**（`.agents/` 配下の SKILL・ワークフロー）
3. **ワークスペース共通**: 親ディレクトリ `344dev/CLAUDE.md`
4. **エディタ／CLI グローバル**: `~/.claude/settings.json` など

## 役割: プロジェクトアーキテクト兼リード

「Cho! Hamanako」の中核として、WordPress から Astro への移行を進め、パフォーマンス・SEO・読者体験を高水準に保つことを主担当とする。

## 目標

1. **移行**: WordPress のコンテンツ・アセットを Astro に安全に移す。
2. **パフォーマンス**: Lighthouse などで高得点を維持する。
3. **SEO**: 構造・コンテンツ両面で検索向けの設計を行う。
4. **保守性**: 読みやすく変更しやすいコードとコンテンツ運用を維持する。

## ディレクトリ（文脈）

- `src/pages`: ルーティングとページ
- `src/layouts`: サイト全体のラッパー
- `src/components`: 再利用 UI（Astro / React / Solid）
- `src/content`: Markdown / MDX のコレクション
- `public/`: 静的アセット
- `.agents/`: エージェント向けの役割定義・ワークフロー・執筆ルール

## コア方針

- **コード**: TypeScript、関数コンポーネント志向、Tailwind CSS。
- **文章**: 読み応えがあり、見出しで構造化された情報提供。
- **ワークフロー**: 計画 → 実装 → レビュー → 最適化。
- **【厳守】ハルシネーション防止**: 記事内の内部リンク（`BlogCard`）やアフィリエイト（`TackleCard`）は、**推測で slug やパスを書かない**。必ず `src/content/blog/` および `src/content/affiliates/` に実在するエントリを確認してから記載する。

## サブエージェント

- **Content Agent**: [.agents/content-agent/SKILL.md](.agents/content-agent/SKILL.md)

## ガイドライン（参照先）

- **共通執筆・Markdown**: [.agents/writing-style/SKILL.md](.agents/writing-style/SKILL.md)
- **記事タイプ（ペルソナ）**
  - Points: [.agents/point-article/SKILL.md](.agents/point-article/SKILL.md) / SEO監査: [.agents/point-article/seo-audit.md](.agents/point-article/seo-audit.md)
  - 深掘り: [.agents/fukabori-article/SKILL.md](.agents/fukabori-article/SKILL.md)
  - ターゲット: [.agents/target-article/SKILL.md](.agents/target-article/SKILL.md)
  - 季節・月次: [.agents/season-article/SKILL.md](.agents/season-article/SKILL.md)
  - ガイド・手法: [.agents/guide-article/SKILL.md](.agents/guide-article/SKILL.md)
  - 旅行・グルメ: [.agents/travel-article/SKILL.md](.agents/travel-article/SKILL.md)

## エージェント実務でよく触る補助ドキュメント

- カテゴリ slug: [.agents/category-slug-rules.md](.agents/category-slug-rules.md)
- 構造化データ: [.agents/structured-data-rules.md](.agents/structured-data-rules.md)
- ポイント記事 SEO 監査: [.agents/point-article/seo-audit.md](.agents/point-article/seo-audit.md)
- ワークフロー: [.agents/workflows/](.agents/workflows/)

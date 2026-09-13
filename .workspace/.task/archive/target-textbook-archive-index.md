# アーカイブ：魚種別教科書記事プロジェクト

**完了日**: 2026-09-04  
**種別**: 完了済みタスクのアーカイブ

---

## このアーカイブに格納されているもの

### プロジェクト概要

「Cho! Hamanako」ブログの各魚種ターゲット記事（`src/content/blog/target/{fish}/index.mdx`）を
「教科書スタイル」でフルリライトするプロジェクト。全13魚種を完了した。

---

## 格納ファイル一覧

### 魚種別タスクファイル（{fish}-textbook.md）

執筆前に作成した設計書。章構成・現状記事一覧・一次情報・実行指示を記録している。

| ファイル | 対象魚種 | 正本 slug |
|---|---|---|
| `seabass-textbook.md` | シーバス（スズキ） | `seabass` |
| `kisu-textbook.md` | キス | `kisu` |
| `haze-textbook.md` | ハゼ | `haze` |
| `kibire-textbook.md` | キビレ | `kibire` |
| `kawahagi-textbook.md` | カワハギ | `kawahagi` |
| `mebaru-kasago-textbook.md` | メバル・カサゴ | `mebaru-kasago` |
| `eging-textbook.md` | エギング（アオリイカ・コウイカ） | `eging` |
| `karei-textbook.md` | カレイ | `karei` |
| `flatfish-textbook.md` | ヒラメ・マゴチ | `flatfish` |
| `tako-textbook.md` | タコ | `tako` |
| `aji-saba-sappa-textbook.md` | アジ・サバ・サッパ | `aji-saba-sappa` |
| `mejina-textbook.md` | メジナ | `mejina` |
| `sayori-textbook.md` | サヨリ | `sayori` |

### 共通ドキュメント

| ファイル | 用途 |
|---|---|
| `target-textbook-index.md` | 全魚種の進捗管理・一次情報まとめ（完了状態で保存） |
| `target-textbook-method.md` | 記事の章構成ルール・スタイル定義・TackleCard配置ポリシー |
| `kurodai-new-session.md` | クロダイ（先行完了）の作業セッションメモ |

---

## 成果物の場所

すべての正本ファイルは以下のパスに存在する：

```
src/content/blog/target/{fish}/index.mdx
```

### 完了した記事一覧

| 魚種 | 正本パス | 完了日 | 備考 |
|---|---|---|---|
| クロダイ | `target/kurodai/index.mdx` | 2026-09-04 | 先行完了。complete-guide 削除済み |
| シーバス | `target/seabass/index.mdx` | 2026-09-04 | 7章構成（バチ抜け章あり） |
| キス | `target/kisu/index.mdx` | 2026-09-04 | 新規作成 |
| ハゼ | `target/haze/index.mdx` | 2026-09-04 | |
| キビレ | `target/kibire/index.mdx` | 2026-09-04 | complete-guide 削除済み |
| カワハギ | `target/kawahagi/index.mdx` | 2026-09-04 | complete-guide 削除済み |
| メバル・カサゴ | `target/mebaru-kasago/index.mdx` | 2026-09-04 | |
| エギング | `target/eging/index.mdx` | 2026-09-04 | |
| カレイ | `target/karei/index.mdx` | 2026-09-04 | |
| ヒラメ・マゴチ | `target/flatfish/index.mdx` | 2026-09-04 | magochi-bottom-wind と接続済み |
| タコ | `target/tako/index.mdx` | 2026-09-04 | 漁業権・禁漁期の注意記載あり |
| アジ・サバ・サッパ | `target/aji-saba-sappa/index.mdx` | 2026-09-04 | |
| メジナ | `target/mejina/index.mdx` | 2026-09-04 | |
| サヨリ | `target/sayori/index.mdx` | 2026-09-04 | |

---

## 記事の共通ルール（target-textbook-method.md の要約）

将来の参照・追加作業のためにここに転記する。

### 章構成

```
序章    │ 入門記事へのBlogCard誘導。この記事の位置づけ
第1章   │ 生態・習性（浜名湖固有の文脈を含む）
第2章   │ 年間シーズナリティ（月別・水温ベース）
第3章   │ 釣法選択（Mermaidフロー + TackleCard）
第4章   │ なぜ釣れないのか（著者一次情報を中心に構成）
第5章   │ 実績タックル大全（TackleCard）
第6章   │ 時合・潮・固有条件
終章    │ ポイント・料理・マナー（BlogCard接続）
```

例外：シーバスは7章構成（バチ抜けが第4章、なぜ釣れないのかが第5章）

### 文体ルール

- **断定スタイル（だ・である）**：ですます禁止
- **本文の強調**：`<strong>...</strong>` のみ。`**` 禁止
- **BlogCard slug**：実在する slug 値のみ使用（推測禁止）
- **TackleCard id**：実在する affiliates/ の id のみ使用（推測禁止）

### TackleCard 配置ポリシー

- 配置可能：**第3章**（釣法別節末尾）、**第5章**（タックル大全）のみ
- 配置禁止：第1章・第2章・第4章・第6章・序章・終章

### Mermaid

各記事の第3章に釣法選択フローを `<Mermaid caption="..." code={...} />` で配置する。

---

## Claudeへの引き継ぎルール

このアーカイブを参照するケースは以下の通り：

1. **同種記事の追加**：新たな魚種を追加する場合は `target-textbook-method.md` のルールに従い、対応する `{fish}-textbook.md` を新規作成してから執筆する
2. **既存記事のリライト**：同じ章構成・文体ルールを維持する。第4章の一次情報は著者に確認してから書く
3. **TackleCard 追加**：`affiliates/{fish}/` に実在するファイル名を必ず確認してから記述する
4. **スラグ確認**：BlogCard の slug は `grep "^slug:"` で実ファイルから取得する。ディレクトリ名と slug は一致しないことがある（例：`urayasu-choho` が `uragake-gear/` ディレクトリにある）

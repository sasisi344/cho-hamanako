# カテゴリバランス調査レポート

> 調査日: 2026-09-04  
> 調査対象: `src/content/blog/` 配下の全 MDX（296記事）

---

## 1. カテゴリ別記事数（ファイルパスベース）

| カテゴリ（パス） | 記事数 | frontmatter `category` | 公式定義との整合 |
|----------------|--------|------------------------|----------------|
| `target/` | 115 | 各魚種名など | ⚠️ 公式では廃止予定 |
| `points/` | 73 | `guide` 系 | ✅ |
| `guide/theory/` | 22 | `guide` | ✅（サブとして存在） |
| `guide/method/` | 20 | `guide` or `method` | ⚠️（公式サブ未定義） |
| `season/` | 21 | — | ✅ |
| `travel/` | 12 | — | ✅（guide配下として） |
| `cooking/` | 10 | — | ✅ |
| `tactics/` | **5** | **`method`** | ❌ 公式カテゴリにない |
| `reporting/` | **3** | — | ❌ 公式カテゴリにない |
| `theory/` (トップ) | **1** | **`guide`** | ❌ 公式カテゴリにない |

---

## 2. 問題カテゴリの詳細

### (A) `theory/` トップレベル ← 最小・最重要問題

- **記事数**: 1記事のみ（`temp-lag-science`：春の水温1ヶ月ラグ）
- **frontmatter**: `category: guide`（フォルダ名と不一致）
- **性質**: `guide/theory/` と同質な理論系コンテンツ
- **問題点**: フォルダだけ独立しているが事実上 `guide/theory/` に属すべき記事

### (B) `tactics/` ← 小カテゴリ・frontmatter乖離

- **記事数**: 5記事（エリア攻略×4、カヤック入門×1）
- **frontmatter**: 全記事 `category: method`（フォルダ名 `tactics` と不一致）
- **内容**: 具体的なエリア戦術・釣法系コンテンツ
- **対応する正規カテゴリ**: `guide/method/`（20記事）

### (C) `reporting/` ← 小カテゴリ（同様の事例）

- **記事数**: 3記事（週次レポート系）
- **公式定義**: なし
- **性質**: 時期系なので `season/` への統合が有力

---

## 3. `theory` 廃止・`tactics` 統合の方針検討

### 対象 A: `theory/` トップレベル（1記事）の廃止

| 項目 | 内容 |
|------|------|
| 移動先 | `guide/theory/temp-lag-science/` |
| URL変更 | `/theory/oceanography/temp-lag-science/` → `/guide/theory/temp-lag-science/` |
| frontmatter | すでに `category: guide` なので変更なし |
| 作業コスト | 低（フォルダ移動＋リダイレクト設定） |
| **推奨** | ✅ 実施すべき |

### 対象 B: `guide/theory/`（22記事）の性質

- 内容は「攻略理論・科学的根拠」系（水温、気圧、ベイト追跡など）
- `tactics/` の内容「エリア戦術・具体的釣法」とは性質が異なる
- **→ `guide/theory/` は `tactics` に移動するのは不適切**
- **→ `guide/theory/` は現状維持が妥当**

### 対象 C: `tactics/`（5記事）の扱い

| 選択肢 | メリット | デメリット |
|--------|----------|------------|
| `guide/method/` に統合 | frontmatter と一致、構造整理 | フォルダ移動・URL変更 |
| `tactics/` のまま維持 | 変更なし | frontmatterとフォルダ名の乖離継続 |
| **推奨**: `guide/method/` に移動 | ✅ 整合性が取れる | リダイレクト要 |

---

## 4. 同様の事例（少ないカテゴリ）

| カテゴリ | 記事数 | 推奨対応 |
|----------|--------|----------|
| `theory/` (トップ) | 1 | → `guide/theory/` へ移動・カテゴリ廃止 |
| `reporting/` | 3 | → `season/` または廃止を検討 |
| `tactics/` | 5 | → `guide/method/` に統合を検討 |

---

## 5. 推奨アクション（優先順）

### 優先度 HIGH — `theory/` トップレベルの廃止
1. `theory/oceanography/temp-lag-science/` を `guide/theory/temp-lag-science/` へ移動
2. `theory/` フォルダを削除
3. リダイレクト設定（301）
4. frontmatterの変更なし（すでに `category: guide`）

### 優先度 MEDIUM — `tactics/` の整理
1. 全5記事を `guide/method/` 配下へ移動
2. frontmatterの `category: method` → `category: guide` に統一
3. リダイレクト設定

### 優先度 LOW — `reporting/` の扱い
1. 内容を確認し `season/` 移動か廃止かを判断

---

## 6. 実施後の想定カテゴリ構造

```
guide/
├── theory/    23記事（現22 + temp-lag-science追加）
├── method/    25記事（現20 + tactics5記事統合）
├── beginner/  6記事
└── logistics/ 7記事

season/        21記事（reporting統合後は+3）
```

---

## ステータス

- [x] `theory/` トップレベル廃止・移動（2026-09-04）
- [x] `tactics/` → `guide/method/` 統合（2026-09-04）
- [x] `reporting/` → `season/` 移動・廃止（2026-09-04）

## 実施後のカテゴリ構成（確定）

| カテゴリ | 記事数 |
|----------|--------|
| target | 115 |
| points | 73 |
| guide | 62（theory/23, method/25, logistics/7, beginner/6, その他） |
| season | 24（weekly レポート3記事含む） |
| travel | 12 |
| cooking | 10 |

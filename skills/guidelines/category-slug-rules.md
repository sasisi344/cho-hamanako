# Strict Category Structure and Slug Rules for Cho! Hamanako Rebuild

## 📌 Rebuild Vision
Astro Sphereをベースとした、高速かつモバイルファーストな釣り情報サイトへの刷新。WordPressからの移行にあたり、カテゴリ構造の最適化とURL（スラッグ）の英字化を徹底し、SEO効果と管理効率を最大化する。

このブログはSXO体験とGEOを意識する。ナレッジベースのコンテンツとして、検索KWから訪れた人に対してすぐ結論を出し、興味を持っていただく。そして先を読み進めたユーザーが他の興味を見出すように、サイト内回遊を意識した構成にする。

## 🏷 Category Structure (Hierarchy)
カテゴリーのフォルダ名slugは英字。ウェブ表示は日本語を主軸に。
URL構造は、理想だと「https://cho-hamanako.info/category/post-name/」にしたい。

### 1. ポイント紹介 (Fishing Points)
- **Slug** : `points`
- **Description** : 浜名湖の釣り場詳細。エリアで分類し、地形タイプ（河口・サーフ等）は **タグ** で管理する。
- **Sub-categories** :
    - 表浜名湖: `omote`
    - 中浜名湖: `naka`
    - 奥浜名湖: `oku`
    - 月別おすすめ情報: `monthly`

### 2. 浜名湖釣りガイド (Hamanako Guide)
- **Slug** : `guide`
- **Description** : 初心者向け情報、マナー、道具、周辺観光（宿泊・グルメ）を含む総合ガイド。
- **Sub-categories** :
    - 初心者・入門: `beginner`
    - 道具・仕掛け・用語: `knowledge`
    - グルメ・宿泊・観光: `travel`

### 3. 魚種別攻略 (Target Fish)
- **Slug** : `target`
- **Description** : 魚種ごとの攻略法、時期、実績ポイント。複合カテゴリ（例：キス・カワハギ）は廃止し、 **単独魚種** でディレクトリを分ける。
- **Sub-categories**  (Slug Examples):
    - クロダイ: `kurodai`
    - キビレ: `kibire`
    - シーバス: `seabass`
    - アジ: `aji`
    - ハゼ: `haze`
    - カレイ: `karei`
    - タコ: `octopus`
    - キス: `kiss`
    - カワハギ: `kawahagi`
    - カサゴ: `kasago`
    - メバル: `mebaru`
    - アオリイカ: `aori-squid`
    - コウイカ: `cuttlefish`
    - ヒラメ: `hirame`
    - マゴチ: `magochi`

### 4. 料理・レシピ (Cooking & Recipes)
- **Slug** : `cooking`
- **Description** : 釣った魚の下処理、レシピ。
- **Sub-categories** : なし (Flat or by Fish Type via Tags)

### 5. ニュース・お知らせ (News)
- **Slug** : `news`
- **Description** : サイト更新、イベント情報、浜名湖周辺ニュース。

---

## 🏷 Tags Strategy (New)
カテゴリを補完するためにタグを積極的に活用する。

- **Location Types** : `river-mouth` (河口), `surf` (サーフ/砂浜), `port` (漁港), `park` (公園)
- **Features** : `family` (ファミリー向け), `night` (夜釣り), `parking` (駐車場あり), `toilet` (トイレあり)
- **Fishing Methods** : `lure` (ルアー), `bait` (エサ釣り), `sabiki` (サビキ)

作成するタグはSNS活用のハッシュタグを意識して、記事にあるkeywordを意識したものを選ぶ。1記事につき3-5個を設定。
一度使用したものはlistで保存。使用頻度から「tagの優先度」を調整する。同じ意味や類語などの重複ルールを制定する。

---

## 🔗 Strict Slug Rules

URL構造を統一し、予測可能でクリーンなURLを維持する。

### Basic Format
`https://cho-hamanako.com/[category-slug]/[article-slug]`

### Rules
1. **Language**: **English Only**. 日本語URLは禁止（Not Allowed）。
2. **Case**: **Lowercase Only**. 大文字は使用しない（kebab-case）。
3. **Separator**: **Hyphen (`-`)**. アンダースコア（`_`）やスペースは使用しない。
4. **Dates**: 記事スラッグに日付を含めない（ディレクトリ構造で管理またはFrontmatterで管理）。
    *   *Bad*: `2024-05-20-seabass-fishing`
    *   *Good*: `seabass-fishing-may-2024` or just `seabass-fishing-guide`
5. **Length**: 簡潔に（3-5単語推奨）。冗長な単語（`a`, `the`, `of` など）は省略可能。

### Examples
- **釣果情報**: `choka/seabass-night-game-omote`
- **ポイント**: `points/bentenjima-park-guide`
- **テクニック**: `technique/fg-knot-easy-method`
- **料理**: `cooking/black-sea-bream-carpaccio`

---

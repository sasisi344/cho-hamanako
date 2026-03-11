# Skill: Point Article Definition & Process

## 📄 Overview
This skill defines the strict frontmatter schema and article structure for "Fishing Point" (釣り場) articles. It ensures that all necessary structured data is present for SEO, filtering, rich display features, and uniform readability across the site.

## 🎯 Purpose
To standardize data entry for fishing spots, enabling:
- **Map & DB Integration**: Providing structured data for features like Streamlit maps.
- **Quick Filtering**: User-facing filters for target fish, facility availability, and difficulty.
- **Consistent UX**: A predictable content flow starting from basic info to seasons, tactics, and tourism.

## 🛠 Mandatory Frontmatter Schema (YAML)
Based on the established format (e.g., `omote/amihosiba`), the following structure is **MANDATORY**.

```yaml
---
title: "網干場（舞阪港）～表浜名湖の釣りポイント紹介～"
summary: "Description for list view (about 70-100 chars)..."
pubDate: "YYYY-MM-DD" # WordPressの公開日（timeは含めない）
upDate: "YYYY-MM-DD" # Astroに追加・更新した日（timeは含めない）
draft: false
noindex: false # WordPress記事とのカニバリズム対策（移行完了まで）
tags: # 3-5個設定。記事内容から主要キーワードを拾う
  - "表浜名湖"
  - "ポイント紹介"
  - "舞阪漁港"
category: "points"
cover: "./cover.jpg"

# 📍 Location Data (Mandatory for Maps/Streamlit)
location:
  name: "網干場（舞阪漁港）"
  address: "静岡県浜松市中央区舞阪町舞阪"
  lat: 34.680353  # 必ず数値（float）
  lng: 137.603328 # 必ず数値（float）
  googleMapUrl: "https://www.google.com/maps/search/?api=1&query={lat},{lng}"

# 🎣 Fishing Info
fishinginfo:
  difficulty: "Beginner" # Beginner, Intermediate, Advanced
  bestSeason: ["春", "夏", "秋", "冬"]
  methods: ["サビキ釣り", "投げ釣り", "ルアー"]
  targetFish: ["クロダイ", "シーバス", "アジ"]

# 🚗 Facilities
facilities:
  parking: true
  parkingFee: "有料（1回410円）" # 無料 or 金額目安
  toilet: true
  convenienceStore: "あり" # あり / なし / 店名など
  nightFishing: true
  streetLights: true
---
```

## 📝 Article Structure (Markdown Body)

記事の本文は、以下の構成（定型フォーマット）で統一すること。

### 1. 導入部 (Intro)
- 挨拶：`『釣！浜名湖』をご覧いただきありがとうございます！` から始める。
- ターゲットや魅力の簡潔な紹介。
- 注意喚起があれば `<div class="note warn">` タグ等のショートコードで囲む（マナー・立ち入り禁止など）。

### 2. 基本情報 (Basic Info)
- **H2**: `## {ポイント名}の基本情報`
- Google Mapsの `<iframe>` 埋め込み (幅広めに設定)。
- 箇条書き（ul）で以下の項目を網羅：
    * **ポイント名**：
    * **所在地**：
    * **アクセス方法**：
    * **駐車場**：
    * **トイレ**：
    * **近くの釣具店**：
    * **近くのコンビニ**：
- 基本的な地形や水深、独自のルールなどを段落で解説。

### 3. ポイントの特徴とシーズン (Features & Seasons)
- **H3**: `### ポイントの特徴` (地形変化、潮通しなど)
- **H3**: `### 🐟️狙い目のシーズン` (春夏秋冬それぞれの有効な釣法などを箇条書き)
- **H2**: `## シーズンごとに釣れやすい魚`
    - 各季節を太字（例: `**春：クロダイ、メジナ...**`）にし、その下に詳細を記述。
- **H3**: `### ✨️ポイントの補足` (混雑時や潮の狙い目などのTips)

### 4. 釣り方別の攻略 (Tactics by Method)
- **H2**: `## エサで釣れる魚とおすすめタックル`
    - **対象魚**：
    - **おすすめエサ**：
    - **おすすめタックル**：
    - (解説文)
- **H2**: `## ルアーで釣れる魚とおすすめタックル`
    - **対象魚**：
    - **おすすめルアー**：
    - **おすすめタックル**：
    - (解説文)

### 5. 周辺情報 (Surroundings)
- **H2**: `## {ポイント名}の周辺観光情報`
    - 家族連れや釣果がなかった時のための代替案（グルメ、観光名所、温泉など）。

### 6. まとめ (Conclusion)
- **H2**: `## まとめ：{この記事の総括・キャッチフレーズ}`
- ポイントの魅力の再確認。
- 最後に再度、ゴミ持ち帰りや駐車マナーなどの注意喚起を `<div class="note warn">` 等で締めくくる。

## ⚠️ Critical Rules
1. **HTML Callouts**: Astro Sphereテーマの仕様に合わせ、強調や警告にはMarkdownの引用（`>`）ではなく `<div class="note">` や `<div class="note warn">` を使用する。
2. **Coordinates (lat/lng)**: Google Mapsのリンクと合わせて正確に記述する。
3. **Data Consistency**: `location`, `fishinginfo`, `facilities` の各キーは必須。存在しない場合は `false` や `"なし"` などを適切に埋める。

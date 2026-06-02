---
created: 2026-06-02
updated: 2026-06-02
tags:
  - template
  - points
---

# ポイント記事 標準構成テンプレート

既存記事（gardenpark, nakanoshima, miyakodagawa, syounaiko 等）の分析から定義した標準構成。

---

## frontmatter

```yaml
---
title: "【地名】｜キャッチコピー"
summary: >-
  （SEO用1〜2文。地名・ターゲット・スタイルのキーワードを含める）
pubDate: YYYY-MM-DDTHH:MM:SS.sssZ
upDate: YYYY-MM-DDTHH:MM:SS.sssZ
category: points
tags:
  - エリア（表浜名湖/中浜名湖/奥浜名湖）
  - ポイント紹介
  - 主な釣り方
  - 主なターゲット魚種
draft: false
noindex: false
cover: ./cover.jpg
wpSlug: （WordPressの旧URL。移行記事のみ）
fishinginfo:
  difficulty: Beginner | Intermediate | Expert
  familyFriendly: true | false
  bestSeason:
    - 春
    - 夏
    - 秋
    - 冬
  bestMonths:
    - 1〜12 の数値
  methods:
    - 釣り方1
    - 釣り方2
  targetFish:
    - 魚種1
    - 魚種2
facilities:
  parking: true | false
  parkingFee: 無料 | 〇〇円
  parkingCapacity: 約〇〇台
  toilet: true | false
  convenienceStore: 店名（車で〇分）
  nearbyTackleShop: 店名（車で〇分）
  nightFishing: true | false
  streetLights: true | false
location:
  name: 地名（短い）
  address: 静岡県...
  lat: 緯度
  lng: 経度
  googleMapUrl: "https://maps.app.goo.gl/..."
slug: kebab-case-slug
---
```

---

## MDX本文構成

```mdx
import Map from "@components/Map.astro";
import GMapButton from "@components/GMapButton.astro";
import Callout from "@components/Callout.astro";
import BlogCard from "@components/BlogCard.astro";
（MapAreaを使う場合は import MapArea from "@components/MapArea.astro"; も追加）

------- リード文（H2なし）-------
「釣！浜名湖」へようこそ！
ポイントの核心・魅力を2〜3段落で。強調箇所は<strong>〜</strong>で。

<Map lat={} lng={} name="" />
<GMapButton url="" />

---

## ポイント概要と詳細アクセス

### 駐車場
### トイレ・コンビニ
### 近くの釣具店

---

## 水中構造と攻略エリア

ポイントの水中地形（シャロー/ブレイク/ミオ筋）と攻め方。
サブポイントが複数ある場合は MapArea コンポーネントを使用。

---

## メインターゲットと季節の戦法

### ターゲット魚種ごとに H3 で分ける
関連するターゲット記事は <BlogCard> で挿入。

---

## 安全・注意事項

アカエイ対策、漁業施設ルール、駐車マナー等を必ず記載。

<Callout type="NOTE"> または <Callout type="CAUTION"> で補足。

---

## まとめ

「〇〇は、〇〇など多彩なターゲットが狙える、〇〇エリア屈指の〇〇ポイントです。」

<Callout type="TIP">
- 箇条書き（時合・釣り方のポイント・注意点 6〜8項目）
</Callout>

> [!IMPORTANT]
> マナー・安全に関する最重要事項を1〜2文で。

---

## 同じエリアの釣りスポット（エリア名）

（同エリアのポイント記事を BlogCard で5本）

<BlogCard slug="..." />
<BlogCard slug="..." />
<BlogCard slug="..." />
<BlogCard slug="..." />
<BlogCard slug="..." />
```

---

## 構成チェックリスト

- [ ] fishinginfo フルで記載（difficulty, familyFriendly, bestMonths, methods, targetFish）
- [ ] facilities フルで記載
- [ ] location（lat/lng/googleMapUrl）設定済み
- [ ] Map + GMapButton コンポーネント配置
- [ ] 駐車場・トイレ・コンビニ・釣具店の情報記載
- [ ] 水中地形の解説（シャロー/ブレイク/ミオ筋など）
- [ ] 季節別攻略（最低3シーズン）
- [ ] アカエイ等の安全・注意事項
- [ ] まとめ + CalloutTIP（6〜8項目）
- [ ] > [!IMPORTANT] マナー締め
- [ ] 同じエリアのBlogCard 5本（末尾に集約）
- [ ] 関連するターゲット/深堀り記事のBlogCard（本文内）

---

## エリア別 BlogCard 候補リスト

### 表浜名湖（omote）
nakanoshima, nagisaen, amihosiba, araibenten-umiduripark, bentenjimakaihinkouen, imagiremaisakatei, otomeen, sakuramaru, sunaageba, boatrace-hamanako, kangetsuen, parkvillege, shinkawa-kakou

### 中浜名湖（naka）
gardenpark, murakushi-fishing-port, murakushi-kaisuiyoku, matsumigaura, megaura, yuto-yamazaki, syotaijihana, hamayu-ohashi, higata-sitefishing, konankoukou, arai-nakanogo, utiyama-kaigan, washidukou, omsolar

### 奥浜名湖（oku）
syounaiko, miyakodagawa, isajigawa, kanzanji, kiga, mikkabi-eki, ina, hiramatsu, photonics-under, shiras-boat, sahama-hakusan, waji-boat, kohitomi-boat, kyowa-boat, hanagawa, ime, lakesideway, pokochan-coast, sakujyoseki, sakumekaigan, setosuidou, shimo-ona, sunza, tsuzusaki

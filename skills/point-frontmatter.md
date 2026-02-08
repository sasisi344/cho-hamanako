# Skill: Point Article Frontmatter Definition

## 📄 Overview
This skill defines the strict frontmatter schema for "Fishing Point" (釣り場) articles. It ensures that all necessary structured data is present for SEO, filtering, and rich display features (like maps and quick info boxes).

## 🎯 Purpose
To standardize data entry for fishing spots, enabling:
- **Map & DB Integration**: Providing structured data (JSON/YAML) for external tools like **Streamlit** to perform map-based lookups and analysis.
- **Quick Filtering**: User-facing filters for target fish, facility availability (parking, toilet), and difficulty.
- **SEO**: Structured data for local business/place schema.

## 🛠 Mandatory Frontmatter Schema (YAML)

When creating a new point article, the following blocks are **MANDATORY**.

```yaml
---
title: "乙女園（うなぎ観音）"
summary: "Description for list view..."
date: "2026-02-08"
draft: false
noindex: true # Mandatory for new articles during migration
tags:
  - "表浜名湖"
  - "ポイント紹介"
category: "points"
slug: "otomeen"
cover: "./cover.jpg"

# 📍 Location Data (Mandatory for Maps/Streamlit)
location:
  name: "Official Spot Name"
  address: "Full Address"
  lat: 34.697416  # Must be a number (float)
  lng: 137.604230 # Must be a number (float)
  googleMapUrl: "https://maps.app.goo.gl/..."

# 🎣 Fishing Info
fishinginfo:
  difficulty: "Beginner" # Beginner, Intermediate, Advanced
  bestSeason: ["夏", "秋"]
  methods: ["投げ釣り", "ルアー"]
  targetFish: ["シーバス", "キビレ"]

# 🚗 Facilities
facilities:
  parking: true
  parkingFee: "無料"
  toilet: true
  convenienceStore: "Available nearby"
  nightFishing: true
  streetLights: true

---
```

## 📝 Critical Rules for Data Integrity

1. **Migration Safety (noindex)**:
    - **Rule**: `noindex: true` MUST be set for all new articles.
    - **Reason**: To prevent cannibalization with the existing WordPress site until full migration is complete.
2. **Coordinates (lat/lng)**: MUST be precise numbers. These are the backbone of the **Streamlit map feature**.
3. **Boolean Flags**: `parking`, `toilet`, `nightFishing`, `streetLights`, `carSide` must be `true` or `false` (Astro/Zod will validate this).
    - 特に **`carSide` (車横付け)** はユーザー需要が非常に高い強力なフックになるため、正確に設定すること。
4. **Category**: Must be exactly `points` for these fields to be active in the schema.
5. **Co-location**: Always use `./` paths for images (e.g., `cover: "./cover.jpg"`) to keep data and assets within the same Page Bundle.


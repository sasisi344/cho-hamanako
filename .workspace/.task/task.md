# 📅 2026-03-W14 今週の優先タスク

今週（3月第4週）は、3月の「ハクパターン」の深化と、4月の「乗っ込みチヌ」に向けた「魚種×特定商品」のターゲット記事量産を完了しました。

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

中浜名湖の修正でusageは30%くらい進んだから、すべて変更するのは5h制限を考えても半日かかる計算。残りを考慮して、次の作業は日付が変わる頃かな。

---

## 🔤 見出し絵文字・記号の除去タスク

### 背景・方針
- 絵文字が文字化けする端末ではページ品質が下がる
- 見出し（h2〜h4）の意味がアクセシビリティ・クローラー観点で損なわれる
- **方針**: `src/content/blog/` 配下（`points/` を除く）の全記事の見出しから絵文字・記号を除去する

### 対象ファイル一覧（116ファイル）

#### guide/ （15ファイル）
- [ ] `guide/beginner/hamanako-sabiki-best-season`
- [ ] `guide/method/ajing-guide`
- [ ] `guide/method/benten-nagashi-fishing`
- [ ] `guide/method/boat-autumn`
- [ ] `guide/method/casting-gomoku`
- [ ] `guide/method/chinutop-july`
- [ ] `guide/method/index`（メソッド一覧ページ）
- [ ] `guide/method/night-chining`
- [ ] `guide/method/night-fishing`
- [ ] `guide/method/night-seabass`
- [ ] `guide/method/okuhamanako-haze-fishing`
- [ ] `guide/method/winter-lightgame`
- [ ] `guide/theory/area-strategy-theory`
- [ ] `guide/theory/index`（理論一覧ページ）
- [ ] `guide/theory/water-temperature-checking`

#### season/ （14ファイル）
- [ ] `season/01-january-kasago`
- [ ] `season/11-november-karei`
- [ ] `season/12-december-chinta`
- [ ] `season/monthly/1-month`
- [ ] `season/monthly/2-month`
- [ ] `season/monthly/3-month`
- [ ] `season/monthly/4-month`
- [ ] `season/monthly/5-month`
- [ ] `season/monthly/6-month`
- [ ] `season/monthly/7-month`
- [ ] `season/monthly/8-month`
- [ ] `season/monthly/9-month`
- [ ] `season/monthly/10-month`
- [ ] `season/monthly/11-month`
- [ ] `season/monthly/12-month`
- [ ] `season/yearly-fishing-calendar`

#### tactics/ / theory/ / travel/ （4ファイル）
- [ ] `tactics/method-kayaking-intro`
- [ ] `theory/oceanography/temp-lag-science`
- [ ] `travel/hamanako-traditional-fishing-guide`
- [ ] `travel/hamanako-winter-fishing-oyster-trip`

#### target/aji-saba-sappa/ （5ファイル）
- [ ] `target/aji-saba-sappa/index`
- [ ] `target/aji-saba-sappa/beginner`
- [ ] `target/aji-saba-sappa/cooking`
- [ ] `target/aji-saba-sappa/tactics`
- [ ] `target/aji-saba-sappa/tactics/sabiki-set-comparison`

#### target/eging/ （5ファイル）
- [ ] `target/eging/index`
- [ ] `target/eging/beginner`
- [ ] `target/eging/cooking`
- [ ] `target/eging/squid-complete`
- [ ] `target/eging/tactics`

#### target/flatfish/ （5ファイル）
- [ ] `target/flatfish/index`
- [ ] `target/flatfish/beginner`
- [ ] `target/flatfish/cooking`
- [ ] `target/flatfish/november-guide`
- [ ] `target/flatfish/tactics`

#### target/haze/ （5ファイル）
- [ ] `target/haze/index`
- [ ] `target/haze/beginner`
- [ ] `target/haze/beginner/hazekura-gear`
- [ ] `target/haze/cooking`
- [ ] `target/haze/season/august-hazekura`
- [ ] `target/haze/tactics`

#### target/karei/ （6ファイル）
- [ ] `target/karei/index`
- [ ] `target/karei/beginner`
- [ ] `target/karei/cooking`
- [ ] `target/karei/kareing`
- [ ] `target/karei/season/spring-hanami-karei`
- [ ] `target/karei/tactics`

#### target/kawahagi/ （5ファイル）
- [ ] `target/kawahagi/index`
- [ ] `target/kawahagi/beginner`
- [ ] `target/kawahagi/complete-guide`
- [ ] `target/kawahagi/cooking`
- [ ] `target/kawahagi/tactics`

#### target/kibire/ （5ファイル）
- [ ] `target/kibire/index`
- [ ] `target/kibire/beginner`
- [ ] `target/kibire/comparison`
- [ ] `target/kibire/complete-guide`
- [ ] `target/kibire/tactics`

#### target/kisu/ （6ファイル）
- [ ] `target/kisu/beginner`
- [ ] `target/kisu/cooking`
- [ ] `target/kisu/season/may-fishing`
- [ ] `target/kisu/season/may-fishing-top5`
- [ ] `target/kisu/season/seasonal-guide`
- [ ] `target/kisu/tactics`

#### target/kurodai/ （8ファイル）
- [ ] `target/kurodai/index`
- [ ] `target/kurodai/beginner`
- [ ] `target/kurodai/boke-bait-tackle`
- [ ] `target/kurodai/cooking`
- [ ] `target/kurodai/fukase-nimaishio-logic`
- [ ] `target/kurodai/season/chinu-nokkomi-bait`
- [ ] `target/kurodai/season/spring-nokkomi-guide`
- [ ] `target/kurodai/tactics`

#### target/magochi・mebaru-kasago・mejina / （8ファイル）
- [ ] `target/magochi/tactics/magochi-bottom-wind`
- [ ] `target/mebaru-kasago/index`
- [ ] `target/mebaru-kasago/beginner`
- [ ] `target/mebaru-kasago/mebaru-beginner`
- [ ] `target/mebaru-kasago/cooking`
- [ ] `target/mebaru-kasago/tactics`
- [ ] `target/mebaru-kasago/winter-kasago`
- [ ] `target/mejina/index`
- [ ] `target/mejina/beginner`
- [ ] `target/mejina/cooking`
- [ ] `target/mejina/tactics`

#### target/sayori / seabass / （14ファイル）
- [ ] `target/sayori/index`
- [ ] `target/sayori/beginner/sayori-beginner-guide`
- [ ] `target/sayori/boat-guide`
- [ ] `target/sayori/season/large-sayori-guide`
- [ ] `target/sayori/tactics/uragake-gear`
- [ ] `target/seabass/index`
- [ ] `target/seabass/beginner`
- [ ] `target/seabass/cooking`
- [ ] `target/seabass/bachinuke-forecast`
- [ ] `target/seabass/bachinuke-lures`
- [ ] `target/seabass/bachinuke-spots-yore`
- [ ] `target/seabass/bachinuke-tackle`
- [ ] `target/seabass/season/autumn-guide`
- [ ] `target/seabass/season/haku-pattern`
- [ ] `target/seabass/season/haku-sasuke`
- [ ] `target/seabass/season/winter-shinp-strategy`
- [ ] `target/seabass/tactics`

#### target/tako / （7ファイル）
- [ ] `target/tako/index`
- [ ] `target/tako/beginner`
- [ ] `target/tako/cooking`
- [ ] `target/tako/guide-2025`
- [ ] `target/tako/season/early-summer`
- [ ] `target/tako/season/june-tako-opening`
- [ ] `target/tako/tactics`

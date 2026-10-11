// OGP / エリアカバー画像を既存のイラスト素材から生成する（API 不使用・sharp のみ）。
//   node .workspace/scripts/make-ogp.mjs            # 全て生成
//   node .workspace/scripts/make-ogp.mjs default    # public/open-graph.jpg（サイト共通のフォールバック OGP）のみ
//   node .workspace/scripts/make-ogp.mjs covers     # エリアまとめ記事の cover.jpg のみ
// 素材: src/assets/images/{omote,naka,oku}.webp（下端に生成AIの透かしがあるため、上端基準で切り抜く）
import { createRequire } from 'module'
import path from 'path'

const require = createRequire(path.join(process.cwd(), 'package.json'))
const sharp = require('sharp')

const IMG = 'src/assets/images'
const FONT = "Yu Gothic, Meiryo, Noto Sans JP, sans-serif"

// 上端基準で cover 切り抜き（下端の透かしを避ける）
async function crop(src, width, height) {
  return sharp(src)
    .resize(width, height, { fit: 'cover', position: 'top' })
    .toBuffer()
}

async function makeDefaultOgp() {
  const W = 1200
  const H = 630
  const bg = await crop(`${IMG}/omote.webp`, W, H)
  const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.35" stop-color="#06203a" stop-opacity="0"/>
      <stop offset="1" stop-color="#06203a" stop-opacity="0.82"/>
    </linearGradient>
    <filter id="s" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.55"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g filter="url(#s)" font-family="${FONT}" fill="#fff" font-weight="700">
    <text x="64" y="462" font-size="112">釣！浜名湖</text>
    <text x="68" y="540" font-size="42" font-weight="500">釣り場・仕掛け・魚種別ガイド</text>
    <text x="68" y="592" font-size="30" font-weight="500" fill="#cfe6ff">cho-hamanako.info</text>
  </g>
</svg>`
  await sharp(bg)
    .composite([{ input: Buffer.from(overlay) }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile('public/open-graph.jpg')
  console.log('✓ public/open-graph.jpg (1200x630)')
}

// エリアまとめ記事: 文字なしの 16:9 カバー（記事ヒーロー・カード・OGP で共用するため文字は入れない）
const COVERS = [
  { src: 'omote.webp', out: 'src/content/blog/points/omote/omote-hamanako-fishing-points/cover.jpg' },
  { src: 'naka.webp', out: 'src/content/blog/points/naka/naka-hamanako-fishing-points/cover.jpg' },
  { src: 'oku.webp', out: 'src/content/blog/points/oku/oku-hamanako-fishing-points/cover.jpg' },
  // 車横付けまとめ: 護岸・桟橋・舗装路が写る表浜名湖の素材を使用
  { src: 'omote.webp', out: 'src/content/blog/points/drive-fishing-spots/cover.jpg' },
]

async function makeCovers() {
  for (const c of COVERS) {
    const buf = await crop(`${IMG}/${c.src}`, 1200, 675)
    await sharp(buf).jpeg({ quality: 88, mozjpeg: true }).toFile(c.out)
    console.log(`✓ ${c.out} (1200x675)`)
  }
}

const mode = process.argv[2] ?? 'all'
if (mode === 'all' || mode === 'default') await makeDefaultOgp()
if (mode === 'all' || mode === 'covers') await makeCovers()

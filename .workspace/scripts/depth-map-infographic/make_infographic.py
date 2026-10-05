from PIL import Image, ImageDraw, ImageFont

S = 2  # supersampling
W, H = 1600, 900
img = Image.new("RGB", (W * S, H * S), "#f4f8fb")
d = ImageDraw.Draw(img)

FR = "C:/Windows/Fonts/BIZ-UDGothicR.ttc"
FB = "C:/Windows/Fonts/BIZ-UDGothicB.ttc"


def f(size, bold=False):
    return ImageFont.truetype(FB if bold else FR, size * S)


def T(xy, text, size, fill="#12324a", bold=False, anchor="la"):
    d.text((xy[0] * S, xy[1] * S), text, font=f(size, bold), fill=fill, anchor=anchor)


def TL(xy, lines, size, fill="#12324a", bold=False, gap=30):
    for i, t in enumerate(lines):
        T((xy[0], xy[1] + i * gap), t, size, fill, bold)


def R(box, fill=None, outline=None, width=1, radius=0):
    b = [v * S for v in box]
    if radius:
        d.rounded_rectangle(b, radius=radius * S, fill=fill, outline=outline, width=width * S)
    else:
        d.rectangle(b, fill=fill, outline=outline, width=width * S)


def L(p1, p2, fill, width=2, dash=None):
    if not dash:
        d.line([p1[0] * S, p1[1] * S, p2[0] * S, p2[1] * S], fill=fill, width=width * S)
        return
    x1, y1 = p1
    x2, y2 = p2
    length = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
    n = int(length // (dash * 2))
    for i in range(n + 1):
        a = i * dash * 2 / length
        b = min((i * dash * 2 + dash) / length, 1)
        d.line([(x1 + (x2 - x1) * a) * S, (y1 + (y2 - y1) * a) * S,
                (x1 + (x2 - x1) * b) * S, (y1 + (y2 - y1) * b) * S], fill=fill, width=width * S)


INK = "#12324a"
SUB = "#4a6a82"
BLUE = "#1f6fa8"
DEEP = "#0d3b66"
LIGHT = "#9cc9e6"
SAND = "#e3c88a"
MUD = "#7a6a58"

# ---- header ----
R((0, 0, W, 120), fill=DEEP)
T((50, 22), "浜名湖の水深・浅瀬・底質まとめ", 46, "#ffffff", True)
T((50, 80), "浜松市史（昭和43年刊）と国土地理院 湖沼図（1965年）の記述より", 24, "#cfe6f5")

# panel frames
PY0, PY1 = 150, 790
panels = [(40, 540), (560, 1060), (1080, 1560)]
for x0, x1 in panels:
    R((x0, PY0, x1, PY1), fill="#ffffff", outline="#c9dbe8", width=2, radius=16)

# ---- panel 1: depth ----
x0, x1 = panels[0]
T((x0 + 28, PY0 + 22), "① 水深の目安", 30, INK, True)
T((x0 + 28, PY0 + 62), "水面から下へ。深いほど長い棒", 20, SUB)
top = PY0 + 130
scale = 28  # px per m
R((x0 + 20, top - 24, x1 - 20, top), fill="#d7ecf8")
L((x0 + 20, top), (x1 - 20, top), BLUE, 3)
T((x0 + 28, top - 22), "水面", 18, BLUE, True)

cols = [
    ("湖南", "4m以浅", 4, 4, "#bfe0f2"),
    ("猪鼻湖・松見ヶ浦\n入口", "8〜9m", 8, 9, "#5fa8d3"),
    ("最深部", "12.2m", 12.2, 12.2, DEEP),
]
cx = [x0 + 100, x0 + 250, x0 + 400]
for (name, label, lo, hi, color), x in zip(cols, cx):
    bw = 70
    R((x - bw / 2, top, x + bw / 2, top + lo * scale), fill=color)
    if hi > lo:
        R((x - bw / 2, top + lo * scale, x + bw / 2, top + hi * scale), fill=color)
        # lighter extension to show range
        R((x - bw / 2, top + lo * scale, x + bw / 2, top + hi * scale), fill="#a8d2ea")
        L((x - bw / 2, top + lo * scale), (x + bw / 2, top + lo * scale), "#ffffff", 2)
    bottom = top + hi * scale
    T((x, bottom + 14), label, 26, INK, True, "ma")
    lines = name.split("\n")
    for i, ln in enumerate(lines):
        T((x, bottom + 52 + i * 24), ln, 19, SUB, False, "ma")

TL((x0 + 28, PY1 - 76), ["最深部は舘山寺 内浦湾の出口と", "三ヶ日町大崎を結ぶ中央部"], 20, INK)
# 12.2 note text positioned in lower-left
# (note sits in free lower area)

# ---- panel 2: shoals ----
x0, x1 = panels[1]
T((x0 + 28, PY0 + 22), "② 浅瀬（瀬）4か所の広さ", 30, INK, True)
T((x0 + 28, PY0 + 62), "面積の比較（約・万平方メートル）", 20, SUB)
shoals = [
    ("大瀬（おおせ）", "弁天島の前・湖内最大", 450),
    ("碇瀬（いかりせ）", "鉄道南側の中央", 65),
    ("ゼゼラ瀬", "鷲津と村櫛を結ぶ中央", 50),
    ("八兵衛瀬（はちべえせ）", "鉄道南側・新居側", 10),
]
maxw = 330
y = PY0 + 118
for name, where, area in shoals:
    T((x0 + 28, y), name, 25, INK, True)
    T((x0 + 28, y + 32), where, 18, SUB)
    w = max(area / 450 * maxw, 6)
    R((x0 + 28, y + 62, x0 + 28 + w, y + 92), fill=BLUE if area == 450 else "#5fa8d3")
    T((x0 + 28 + w + 12, y + 60), f"{area}万㎡", 26, INK, True)
    y += 128

# ---- panel 3: bottom sediment ----
x0, x1 = panels[2]
T((x0 + 28, PY0 + 22), "③ 湖底の底質", 30, INK, True)
T((x0 + 28, PY0 + 62), "村櫛と鷲津を結ぶ線が境目", 20, SUB)
by0 = PY0 + 125
R((x0 + 28, by0, x1 - 28, by0 + 150), fill=MUD, radius=8)
T(((x0 + x1) / 2, by0 + 38), "北側", 22, "#ffffff", True, "ma")
T(((x0 + x1) / 2, by0 + 78), "泥・軟泥質", 30, "#ffffff", True, "ma")
T(((x0 + x1) / 2, by0 + 116), "有機質に富んだ泥底", 19, "#f1e6d8", False, "ma")
ly = by0 + 150 + 22
L((x0 + 20, ly), (x1 - 20, ly), "#c0392b", 4, dash=14)
T(((x0 + x1) / 2, ly + 10), "村櫛 — 鷲津 ライン", 22, "#c0392b", True, "ma")
sy0 = ly + 56
R((x0 + 28, sy0, x1 - 28, sy0 + 150), fill=SAND, radius=8)
T(((x0 + x1) / 2, sy0 + 38), "南側", 22, INK, True, "ma")
T(((x0 + x1) / 2, sy0 + 78), "砂質", 30, INK, True, "ma")
T(((x0 + x1) / 2, sy0 + 116), "鉄道の南は粒が大きい砂", 19, "#5b4a2a", False, "ma")
TL((x0 + 28, sy0 + 176), ["支湖（庄内湖・引佐細江・猪鼻湖・松見ヶ浦・", "舘山寺内浦など）は粒の細かい粘土質の砂土"], 19, INK, False, 28)

# ---- footer ----
R((0, 810, W, H), fill="#e6eef4")
T((50, 822), "※位置関係を示す図ではありません。数値は昭和期の資料にもとづくため、現在の水深とは異なる場合があります。", 21, INK, True)
T((50, 858), "出典：浜松市史 一（浜松市役所、昭和43年刊）／国土地理院 湖沼図（1965年）　　cho-hamanako.info", 19, SUB)

out = img.resize((W, H), Image.LANCZOS)
out.save("C:/Users/sasis/344dev/cho-hamanako/src/content/blog/guide/theory/hamanako-depth-map/infographic.png", optimize=True)
print("ok")

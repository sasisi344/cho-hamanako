"""浜名湖 水深解説記事用スライド（3枚）を生成する。

出力: src/content/blog/guide/theory/hamanako-depth-map/slide-{depth,shoals,sediment}.png
数値の出典: 浜松市史 一（浜松市役所、昭和43年刊）/ 国土地理院 湖沼図（1965年、最深注記12.2）
実行: python .workspace/scripts/depth-map-infographic/make_slides.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[3] / "src/content/blog/guide/theory/hamanako-depth-map"
S = 2
W, H = 1600, 900
FR = "C:/Windows/Fonts/BIZ-UDGothicR.ttc"
FB = "C:/Windows/Fonts/BIZ-UDGothicB.ttc"

INK = "#12324a"
SUB = "#4a6a82"
BLUE = "#1f6fa8"
MID = "#5fa8d3"
PALE = "#bfe0f2"
DEEP = "#0d3b66"
SAND = "#e3c88a"
MUD = "#7a6a58"
RED = "#c0392b"


class Slide:
    def __init__(self, title, subtitle):
        self.img = Image.new("RGB", (W * S, H * S), "#f4f8fb")
        self.d = ImageDraw.Draw(self.img)
        self.rect((0, 0, W, 120), DEEP)
        self.text((50, 20), title, 46, "#ffffff", True)
        self.text((50, 80), subtitle, 24, "#cfe6f5")
        self.rect((0, 810, W, H), "#e6eef4")
        self.text((50, 822), "※位置関係を示す図ではありません。数値は昭和期の資料にもとづくため、現在の水深とは異なる場合があります。", 21, INK, True)
        self.text((50, 858), "出典：浜松市史 一（浜松市役所、昭和43年刊）／国土地理院 湖沼図（1965年）　　cho-hamanako.info", 19, SUB)

    @staticmethod
    def font(size, bold=False):
        return ImageFont.truetype(FB if bold else FR, size * S)

    def text(self, xy, t, size, fill=INK, bold=False, anchor="la"):
        self.d.text((xy[0] * S, xy[1] * S), t, font=self.font(size, bold), fill=fill, anchor=anchor)

    def lines(self, xy, ls, size, fill=INK, bold=False, gap=None):
        gap = gap or int(size * 1.5)
        for i, t in enumerate(ls):
            self.text((xy[0], xy[1] + i * gap), t, size, fill, bold)

    def rect(self, box, fill=None, outline=None, width=1, radius=0):
        b = [v * S for v in box]
        if radius:
            self.d.rounded_rectangle(b, radius=radius * S, fill=fill, outline=outline, width=width * S)
        else:
            self.d.rectangle(b, fill=fill, outline=outline, width=width * S)

    def line(self, p1, p2, fill, width=2, dash=None):
        (x1, y1), (x2, y2) = p1, p2
        if not dash:
            self.d.line([x1 * S, y1 * S, x2 * S, y2 * S], fill=fill, width=width * S)
            return
        length = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
        for i in range(int(length // (dash * 2)) + 1):
            a = i * dash * 2 / length
            b = min((i * dash * 2 + dash) / length, 1)
            self.d.line([(x1 + (x2 - x1) * a) * S, (y1 + (y2 - y1) * a) * S,
                         (x1 + (x2 - x1) * b) * S, (y1 + (y2 - y1) * b) * S], fill=fill, width=width * S)

    def card(self, box):
        self.rect(box, "#ffffff", "#c9dbe8", 2, 16)

    def save(self, name):
        self.img.resize((W, H), Image.LANCZOS).save(OUT / name, optimize=True)
        print("saved", name)


def slide_depth():
    s = Slide("浜名湖の最深部はどこ？何メートル？", "答え：舘山寺 内浦湾の出口と三ヶ日町大崎を結ぶ中央部、約12m")
    s.card((40, 150, 880, 790))
    s.text((68, 170), "水深の目安", 30, INK, True)
    s.text((68, 212), "水面から下へ。深いほど長い棒", 20, SUB)
    top = 275
    sc = 34
    s.rect((60, top - 28, 860, top), "#d7ecf8")
    s.line((60, top), (860, top), BLUE, 3)
    s.text((72, top - 26), "水面", 18, BLUE, True)
    cols = [("湖南", "4m以浅", 4, 4, PALE, 190), ("猪鼻湖・松見ヶ浦の入口", "8〜9m", 8, 9, MID, 470), ("最深部", "12.2m", 12.2, 12.2, DEEP, 735)]
    for name, label, lo, hi, color, x in cols:
        bw = 110
        s.rect((x - bw / 2, top, x + bw / 2, top + lo * sc), color)
        if hi > lo:
            s.rect((x - bw / 2, top + lo * sc, x + bw / 2, top + hi * sc), "#a8d2ea")
            s.line((x - bw / 2, top + lo * sc), (x + bw / 2, top + lo * sc), "#ffffff", 2)
        bottom = top + hi * sc
        s.text((x, bottom + 12), label, 30, INK, True, "ma")
        s.text((x, bottom + 52), name, 19, SUB, False, "ma")

    s.card((910, 150, 1560, 790))
    s.text((940, 172), "最深部のポイント", 30, INK, True)
    s.text((940, 232), "12.2m", 88, DEEP, True)
    s.text((1250, 276), "湖沼図の最深注記", 22, SUB)
    s.lines((940, 380), [
        "● 位置",
        "　舘山寺・内浦湾の出口と三ヶ日町大崎を",
        "　結ぶ中央部",
        "● 浜松市史",
        "　「12メートルの等深線が最も深い」",
        "● 深い場所の向き",
        "　北東から南西へ延びる",
        "　（都田川から二川へ向かう構造線上）",
    ], 22, INK, False, 40)
    s.save("slide-depth.png")


def slide_shoals():
    s = Slide("浜名湖の浅瀬（瀬）はどこにある？", "答え：大瀬・碇瀬・ゼゼラ瀬・八兵衛瀬の4か所。最大は弁天島の前の大瀬")
    s.card((40, 150, 1020, 790))
    s.text((68, 170), "浅瀬4か所の広さ", 30, INK, True)
    s.text((68, 212), "面積の比較（約・万平方メートル）", 20, SUB)
    shoals = [("大瀬（おおせ）", "鉄道北側の本湖・弁天島の前（湖内最大）", 450), ("碇瀬（いかりせ）", "鉄道南側の中央", 65),
              ("ゼゼラ瀬", "鷲津と村櫛を結ぶ中央", 50), ("八兵衛瀬（はちべえせ）", "鉄道南側の新居側", 10)]
    y = 255
    for name, where, area in shoals:
        s.text((68, y), name, 28, INK, True)
        s.text((68, y + 38), where, 19, SUB)
        w = max(area / 450 * 620, 6)
        s.rect((68, y + 72, 68 + w, y + 110), BLUE if area == 450 else MID)
        s.text((68 + w + 14, y + 70), f"{area}万㎡", 30, INK, True)
        y += 134

    s.card((1050, 150, 1560, 790))
    s.text((1078, 172), "浅い理由", 30, INK, True)
    s.lines((1078, 232), [
        "天竜川から流れ出た土砂が",
        "沿岸流で運ばれ、湖口から",
        "湖内に入り込んで「逆デルタ」",
        "をつくっているため。",
        "",
        "とくに砂が堆積した場所は",
        "浅瀬になる。",
        "",
        "湖南は全体に浅く、",
        "4メートル以浅。",
    ], 24, INK, False, 42)
    s.save("slide-shoals.png")


def slide_sediment():
    s = Slide("浜名湖の湖底はどうなっている？", "答え：村櫛と鷲津を結ぶ線より南は砂、北は泥")
    s.card((40, 150, 1020, 790))
    s.text((68, 170), "湖底の底質", 30, INK, True)
    s.text((68, 212), "村櫛と鷲津を結ぶ線が境目", 20, SUB)
    s.rect((68, 260, 992, 440), MUD, radius=10)
    s.text((530, 290), "北側", 24, "#ffffff", True, "ma")
    s.text((530, 332), "泥・軟泥質", 40, "#ffffff", True, "ma")
    s.text((530, 392), "泥、またはきわめて有機質に富んだ軟泥質", 21, "#f1e6d8", False, "ma")
    s.line((56, 472), (1004, 472), RED, 4, dash=16)
    s.text((530, 484), "村櫛 — 鷲津 ライン", 26, RED, True, "ma")
    s.rect((68, 540, 992, 720), SAND, radius=10)
    s.text((530, 570), "南側", 24, INK, True, "ma")
    s.text((530, 612), "砂質", 40, INK, True, "ma")
    s.text((530, 672), "ほとんどが砂質", 21, "#5b4a2a", False, "ma")

    s.card((1050, 150, 1560, 790))
    s.text((1078, 172), "砂・泥の細かな違い", 30, INK, True)
    s.lines((1078, 232), [
        "● 砂質の南側",
        "　鉄道の南は粒が大きい砂、",
        "　北に向かうほど粒が細かい",
        "",
        "● 支湖",
        "　庄内湖・引佐細江・猪鼻湖・",
        "　松見ヶ浦・舘山寺内浦などは",
        "　粒の細かい粘土質の砂土",
    ], 23, INK, False, 42)
    s.save("slide-sediment.png")


if __name__ == "__main__":
    slide_depth()
    slide_shoals()
    slide_sediment()

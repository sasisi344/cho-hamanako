import os
import shutil

base_dir = r"c:\Users\sasis\344dev\cho-hama"
blog_dir = os.path.join(base_dir, "src", "content", "blog")

dirs_to_remove = [
    "guide/hamanako-tako-fishing-guide-2025",
    "guide/hamanako-kurodai-fishing-guide",
    "guide/hamanako-kibire-fishing-complete-guide",
    "guide/hamanako-kawahagi-fishing-complete-guide",
    "guide/hamanako-kawahagi-boat-fishing-guide",
    "guide/hamanako-aji-sabiki-fishing-guide",
    "guide/hamanako-kiss-fishing-points-5",
    "guide/hamanako-hirame-fishing-november-guide",
    "guide/hamanako-mebaru-fishing-guide-beginner",
    "guide/hamanako-kasago-fishing-guide",
    "guide/hamanako-kasago-fishing-winter-guide",
    "guide/hamanako-seabass-fishing-guide-autumn",
    "guide/hamanako-seabass-winter-shinp-strategy",
    "guide/hamanako-winter-kurodai-tactics",
    "guide/hamanako-winter-seabass-lunker-tactics",
    "guide/hamanako-aori-ika-eging-guide",
    "guide/hamanako-squid-fishing-complete-guide",
    "guide/hamanako-bachinuke-forecast-guide",
    "guide/hamanako-bachinuke-preparation-guide",
    "guide/hamanako-bachinuke-tackle-guide",
    "guide/bachinuke-tackle-lure-selection",
    "guide/sabiki-best-season",
    "guide/family-car-fishing-points",
    "guide/hamanako-fishing-shops-guide",
    "guide/hamanako-night-fishing-complete-guide",
    "guide/hamanako-anazuri-winter-complete-guide",
    "guide/hamanako-boat-fishing-guide-autumn",
    "guide/hamanako-autumn-casting-gomoku-guide",
    "guide/hamanako-winter-lightgame-rockfish-points",
]

for d in dirs_to_remove:
    path = os.path.join(blog_dir, d)
    if os.path.exists(path):
        shutil.rmtree(path)

print("done")

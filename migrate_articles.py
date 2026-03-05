import os
import shutil
import re

base_dir = r"c:\Users\sasis\344dev\cho-hama"
blog_dir = os.path.join(base_dir, "src", "content", "blog")

moves = [
    ("guide/hamanako-kurodai-fishing-guide/index.mdx", "target/kurodai/complete-guide"),
    ("guide/hamanako-kibire-fishing-complete-guide/index.mdx", "target/kibire/complete-guide"),
    ("guide/hamanako-kawahagi-fishing-complete-guide/index.mdx", "target/kawahagi/complete-guide"),
    ("guide/hamanako-kawahagi-boat-fishing-guide/index.mdx", "target/kawahagi/boat-guide"),
    ("guide/hamanako-aji-sabiki-fishing-guide/index.mdx", "target/aji-saba-sappa/sabiki-guide"),
    ("guide/hamanako-tako-fishing-guide-2025/index.mdx", "target/tako/guide-2025"),
    ("guide/hamanako-kiss-fishing-points-5/index.mdx", "target/kisu/points-top5"),
    ("guide/hamanako-hirame-fishing-november-guide/index.mdx", "target/flatfish/november-guide"),
    ("guide/hamanako-mebaru-fishing-guide-beginner/index.mdx", "target/mebaru-kasago/mebaru-beginner"),
    ("guide/hamanako-kasago-fishing-guide/index.mdx", "target/mebaru-kasago/kasago-guide"),
    ("guide/hamanako-kasago-fishing-winter-guide/index.mdx", "target/mebaru-kasago/winter-kasago"),
    ("guide/hamanako-seabass-fishing-guide-autumn/index.mdx", "target/seabass/autumn-guide"),
    ("guide/hamanako-seabass-winter-shinp-strategy/index.mdx", "target/seabass/winter-shinp-strategy"),
    ("guide/hamanako-winter-kurodai-tactics/index.mdx", "target/kurodai/winter-tactics"),
    ("guide/hamanako-winter-seabass-lunker-tactics/index.mdx", "target/seabass/winter-lunker"),
    ("guide/hamanako-aori-ika-eging-guide/index.mdx", "target/eging/aori-guide"),
    ("guide/hamanako-squid-fishing-complete-guide/index.mdx", "target/eging/squid-complete"),
    ("guide/hamanako-bachinuke-forecast-guide/index.mdx", "target/seabass/bachinuke-forecast"),
    ("guide/hamanako-bachinuke-preparation-guide/index.mdx", "target/seabass/bachinuke-prep"),
    ("guide/hamanako-bachinuke-tackle-guide/index.mdx", "target/seabass/bachinuke-tackle"),
    ("guide/bachinuke-tackle-lure-selection/index.mdx", "target/seabass/bachinuke-lures"),
    ("guide/sabiki-best-season/index.mdx", "target/aji-saba-sappa/best-season"),
    ("guide/family-car-fishing-points/index.mdx", "points/family-car-points"),
    ("guide/hamanako-fishing-shops-guide/index.mdx", "guide/logistics/shops"),
    ("guide/hamanako-night-fishing-complete-guide/index.mdx", "guide/method/night-fishing"),
    ("guide/hamanako-anazuri-winter-complete-guide/index.mdx", "guide/method/anazuri"),
    ("guide/hamanako-boat-fishing-guide-autumn/index.mdx", "guide/method/boat-autumn"),
    ("guide/hamanako-autumn-casting-gomoku-guide/index.mdx", "guide/method/casting-gomoku"),
    ("guide/hamanako-winter-lightgame-rockfish-points/index.mdx", "guide/method/winter-lightgame"),
]

asset_moves = [
    ("guide/hamanako-kurodai-fishing-guide/cover.jpg", "target/kurodai/complete-guide"),
    ("guide/hamanako-kibire-fishing-complete-guide/cover.jpg", "target/kibire/complete-guide"),
    ("guide/hamanako-kawahagi-fishing-complete-guide/cover.jpg", "target/kawahagi/complete-guide"),
    ("guide/hamanako-kawahagi-boat-fishing-guide/cover.jpg", "target/kawahagi/boat-guide"),
    ("guide/hamanako-aji-sabiki-fishing-guide/cover.jpg", "target/aji-saba-sappa/sabiki-guide"),
    ("guide/hamanako-tako-fishing-guide-2025/cover.jpg", "target/tako/guide-2025"),
    ("guide/hamanako-kiss-fishing-points-5/cover.jpg", "target/kisu/points-top5"),
    ("guide/hamanako-hirame-fishing-november-guide/cover.jpg", "target/flatfish/november-guide"),
    ("guide/hamanako-mebaru-fishing-guide-beginner/cover.jpg", "target/mebaru-kasago/mebaru-beginner"),
    ("guide/hamanako-kasago-fishing-guide/cover.jpg", "target/mebaru-kasago/kasago-guide"),
    ("guide/hamanako-kasago-fishing-winter-guide/cover.jpg", "target/mebaru-kasago/winter-kasago"),
    ("guide/hamanako-seabass-fishing-guide-autumn/cover.jpg", "target/seabass/autumn-guide"),
    ("guide/hamanako-seabass-winter-shinp-strategy/cover.jpg", "target/seabass/winter-shinp-strategy"),
    ("guide/hamanako-winter-kurodai-tactics/cover.jpg", "target/kurodai/winter-tactics"),
    ("guide/hamanako-winter-seabass-lunker-tactics/cover.jpg", "target/seabass/winter-lunker"),
    ("guide/hamanako-aori-ika-eging-guide/cover.jpg", "target/eging/aori-guide"),
    ("guide/hamanako-squid-fishing-complete-guide/cover.jpg", "target/eging/squid-complete"),
    ("guide/hamanako-bachinuke-forecast-guide/cover.jpg", "target/seabass/bachinuke-forecast"),
    ("guide/hamanako-bachinuke-preparation-guide/cover.jpg", "target/seabass/bachinuke-prep"),
    ("guide/hamanako-bachinuke-tackle-guide/cover.jpg", "target/seabass/bachinuke-tackle"),
    ("guide/bachinuke-tackle-lure-selection/cover.jpg", "target/seabass/bachinuke-lures"),
    ("guide/sabiki-best-season/cover.jpg", "target/aji-saba-sappa/best-season"),
    ("guide/family-car-fishing-points/cover.jpg", "points/family-car-points"),
    ("guide/hamanako-fishing-shops-guide/cover.jpg", "guide/logistics/shops"),
    ("guide/hamanako-night-fishing-complete-guide/cover.jpg", "guide/method/night-fishing"),
    ("guide/hamanako-anazuri-winter-complete-guide/cover.jpg", "guide/method/anazuri"),
    ("guide/hamanako-boat-fishing-guide-autumn/cover.jpg", "guide/method/boat-autumn"),
    ("guide/hamanako-autumn-casting-gomoku-guide/cover.jpg", "guide/method/casting-gomoku"),
    ("guide/hamanako-winter-lightgame-rockfish-points/cover.jpg", "guide/method/winter-lightgame"),
]

for src_rel, dest_rel in moves:
    src_path = os.path.join(blog_dir, src_rel)
    dest_dir = os.path.join(blog_dir, dest_rel)
    os.makedirs(dest_dir, exist_ok=True)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(dest_dir, "index.mdx"))

for src_rel, dest_rel in asset_moves:
    src_path = os.path.join(blog_dir, src_rel)
    dest_dir = os.path.join(blog_dir, dest_rel)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(dest_dir, "cover.jpg"))

replacements = {
    'slug="guide/hamanako-kurodai-fishing-guide"': 'slug="target/kurodai/complete-guide"',
    'slug="guide/hamanako-kibire-fishing-complete-guide"': 'slug="target/kibire/complete-guide"',
    'slug="guide/hamanako-kawahagi-fishing-complete-guide"': 'slug="target/kawahagi/complete-guide"',
    'slug="guide/hamanako-kawahagi-boat-fishing-guide"': 'slug="target/kawahagi/boat-guide"',
    'slug="guide/hamanako-aji-sabiki-fishing-guide"': 'slug="target/aji-saba-sappa/sabiki-guide"',
    'slug="guide/hamanako-tako-fishing-guide-2025"': 'slug="target/tako/guide-2025"',
    'slug="guide/hamanako-kiss-fishing-points-5"': 'slug="target/kisu/points-top5"',
    'slug="guide/hamanako-hirame-fishing-november-guide"': 'slug="target/flatfish/november-guide"',
    'slug="guide/hamanako-mebaru-fishing-guide-beginner"': 'slug="target/mebaru-kasago/mebaru-beginner"',
    'slug="guide/hamanako-kasago-fishing-guide"': 'slug="target/mebaru-kasago/kasago-guide"',
    'slug="guide/hamanako-kasago-fishing-winter-guide"': 'slug="target/mebaru-kasago/winter-kasago"',
    'slug="guide/hamanako-seabass-fishing-guide-autumn"': 'slug="target/seabass/autumn-guide"',
    'slug="guide/hamanako-seabass-winter-shinp-strategy"': 'slug="target/seabass/winter-shinp-strategy"',
    'slug="guide/hamanako-winter-kurodai-tactics"': 'slug="target/kurodai/winter-tactics"',
    'slug="guide/hamanako-winter-seabass-lunker-tactics"': 'slug="target/seabass/winter-lunker"',
    'slug="guide/hamanako-aori-ika-eging-guide"': 'slug="target/eging/aori-guide"',
    'slug="guide/hamanako-squid-fishing-complete-guide"': 'slug="target/eging/squid-complete"',
    'slug="guide/hamanako-bachinuke-forecast-guide"': 'slug="target/seabass/bachinuke-forecast"',
    'slug="guide/hamanako-bachinuke-preparation-guide"': 'slug="target/seabass/bachinuke-prep"',
    'slug="guide/hamanako-bachinuke-tackle-guide"': 'slug="target/seabass/bachinuke-tackle"',
    'slug="guide/bachinuke-tackle-lure-selection"': 'slug="target/seabass/bachinuke-lures"',
    'slug="guide/sabiki-best-season"': 'slug="target/aji-saba-sappa/best-season"',
    'slug="guide/family-car-fishing-points"': 'slug="points/family-car-points"',
    'slug="guide/hamanako-fishing-shops-guide"': 'slug="guide/logistics/shops"',
    'slug="guide/hamanako-night-fishing-complete-guide"': 'slug="guide/method/night-fishing"',
    'slug="guide/hamanako-anazuri-winter-complete-guide"': 'slug="guide/method/anazuri"',
    'slug="guide/hamanako-boat-fishing-guide-autumn"': 'slug="guide/method/boat-autumn"',
    'slug="guide/hamanako-autumn-casting-gomoku-guide"': 'slug="guide/method/casting-gomoku"',
    'slug="guide/hamanako-winter-lightgame-rockfish-points"': 'slug="guide/method/winter-lightgame"',
}

# Update all MDX files
for root, dirs, files in os.walk(blog_dir):
    for name in files:
        if name.endswith(".mdx"):
            file_path = os.path.join(root, name)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            orig_content = content
            
            # Apply all URL replacements
            for old, new in replacements.items():
                content = content.replace(old, new)
            
            # If the file is in target/ or points/, fix the category
            norm_path = file_path.replace("\\", "/")
            if "src/content/blog/target" in norm_path:
                content = content.replace('category: "guide"', 'category: "target"')
            elif "src/content/blog/points" in norm_path:
                content = content.replace('category: "guide"', 'category: "points"')
            elif "src/content/blog/guide/method" in norm_path or "src/content/blog/guide/logistics" in norm_path:
                content = content.replace('category: "target"', 'category: "guide"') # just in case
            
            if content != orig_content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)

print("Migration script finish")

import streamlit as st
import pandas as pd
import glob
import os
import yaml
import re
import folium
from streamlit_folium import st_folium

# ページ設定
st.set_page_config(
    page_title="釣！浜名湖 | 釣り場ポイント検索マップ",
    page_icon="🎣",
    layout="wide"
)

# カスタムCSSでUIを調整
st.markdown("""
    <style>
    .main {
        background-color: #f8f9fa;
    }
    .stHeader {
        background-color: #007bff;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
    }
    </style>
    """, unsafe_allow_html=True)

st.title("🎣 浜名湖釣りポイント 目的地検索マップ")
st.markdown("""
浜名湖の釣りポイントを地図から探せます。
**ピンをクリック**すると、そのポイントの詳細解説記事へ移動できるリンクが表示されます。
""")

# 浜松市・浜名湖周辺のデフォルト位置
HAMANAKO_CENTER = [34.73, 137.58]
ASTRO_BASE_URL = "http://localhost:4321"

# ブログ記事から位置情報を収集する関数
def load_points():
    points = []
    # src/content/blog 配下の全md/mdxファイルを探索
    content_dir = "src/content/blog"
    files = glob.glob(os.path.join(content_dir, "**", "*.md*"), recursive=True)
    
    for file in files:
        # ディレクトリ名が "_draft" など除外対象ならスキップ（必要に応じて）
        if "_draft" in file:
            continue
            
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                # Frontmatterを抽出
                match = re.search(r'^---\s*\n(.*?)\n---', content, re.DOTALL | re.MULTILINE)
                if match:
                    config = yaml.safe_load(match.group(1))
                    if isinstance(config, dict) and 'location' in config:
                        loc = config['location']
                        if 'lat' in loc and 'lng' in loc:
                            # Slugの生成: src/content/blog からの相対パス
                            rel_path = os.path.relpath(file, content_dir)
                            # 拡張子と /index を除去
                            slug = rel_path.replace("\\", "/").replace(".mdx", "").replace(".md", "").replace("/index", "")
                            
                            points.append({
                                "name": config.get('title', slug),
                                "lat": loc['lat'],
                                "lon": loc['lng'],
                                "url": f"{ASTRO_BASE_URL}/blog/{slug}",
                                "category": config.get('category', 'points')
                            })
        except Exception as e:
            # st.error(f"Error parsing {file}: {e}") # 本番用はログに
            continue
    return pd.DataFrame(points)

# データの読み込み
df = load_points()

# 地図の作成
m = folium.Map(location=HAMANAKO_CENTER, zoom_start=12, control_scale=True)

if not df.empty:
    for i, row in df.iterrows():
        # ポップアップにリンクを含める
        popup_html = f"""
        <div style="width:200px">
            <h4>{row['name']}</h4>
            <a href="{row['url']}" target="_blank" style="display:inline-block; background-color:#007bff; color:white; padding:5px 10px; text-decoration:none; border-radius:3px;">
                ポイントの詳細を見る
            </a>
        </div>
        """
        folium.Marker(
            location=[row['lat'], row['lon']],
            popup=folium.Popup(popup_html, max_width=300),
            tooltip=row['name'],
            icon=folium.Icon(color='blue' if row['category'] == 'points' else 'green', icon='info-sign')
        ).add_to(m)

    # 地図をStreamlitで表示
    st_folium(m, width="100%", height=600, returned_objects=[])

    # リスト表示
    with st.expander("ポイント一覧を表示"):
        st.dataframe(df[["name", "lat", "lon", "url"]])
else:
    st.info("現在、位置情報が登録されている記事を探しています...")
    # サンプル表示 (浜松駅周辺)
    folium.Marker([34.7037, 137.7348], popup="浜松駅").add_to(m)
    st_folium(m, width="100%", height=600)

st.sidebar.title("🔍 検索フィルター")
st.sidebar.write("今後、魚種や足場の良さでフィルターできる機能を追加予定です。")

if st.sidebar.button("データを再読み込み"):
    st.rerun()

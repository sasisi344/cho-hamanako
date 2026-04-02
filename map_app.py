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

# URLクエリパラメータの読み取り（iframe埋め込み連携用）
query_params = st.query_params
is_embed = query_params.get("embed", "false").lower() == "true"
param_lat = float(query_params.get("lat", 0)) if "lat" in query_params else None
param_lng = float(query_params.get("lng", 0)) if "lng" in query_params else None
param_zoom = int(query_params.get("zoom", 12)) if "zoom" in query_params else 12

# 埋め込みモードでない場合のみ、タイトルと説明を表示
if not is_embed:
    st.title("🎣 浜名湖釣りポイント 目的地検索マップ")
    st.markdown("""
    浜名湖の釣りポイントを地図から探せます。
    **ピンをクリック**すると、そのポイントの詳細解説記事へ移動できるリンクが表示されます。
    """)

# 浜松市・浜名湖周辺のデフォルト位置
HAMANAKO_CENTER = [34.73, 137.58]
ASTRO_BASE_URL = "https://cho-hamanako.com"  # 本番URL

# URLパラメータがある場合はそちらを優先
map_center = [param_lat, param_lng] if param_lat and param_lng else HAMANAKO_CENTER
map_zoom = param_zoom

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
@st.cache_data
def get_data():
    json_path = "public/data/points.json"
    if os.path.exists(json_path):
        return pd.read_json(json_path)
    return pd.DataFrame()

df = get_data()

# サイドバーによるフィルター
st.sidebar.title("🔍 検索フィルター")
if not df.empty:
    # 魚種フィルター
    all_fish = sorted(list(set([fish for sublist in df['targetFish'] for fish in sublist])))
    selected_fish = st.sidebar.multiselect("ターゲット魚種", all_fish)
    
    # カテゴリフィルター
    all_categories = sorted(df['category'].unique())
    selected_cat = st.sidebar.multiselect("カテゴリ", all_categories, default=all_categories)
    
    # フィルタリング
    if selected_fish:
        df = df[df['targetFish'].apply(lambda x: any(f in x for f in selected_fish))]
    df = df[df['category'].isin(selected_cat)]

# 地図の作成（URLパラメータがあればそちらの座標を中心にする）
m = folium.Map(location=map_center, zoom_start=map_zoom, control_scale=True)

if not df.empty:
    for i, row in df.iterrows():
        # ポップアップにリンクを含める
        popup_html = f"""
        <div style="width:200px">
            <h4>{row['title']}</h4>
            <p style="font-size:0.9em; color:#666;">{row['summary'][:50]}...</p>
            <a href="{ASTRO_BASE_URL}/blog/{row['slug']}" target="_blank" style="display:inline-block; background-color:#007bff; color:white; padding:5px 10px; text-decoration:none; border-radius:3px;">
                ポイントの詳細を見る
            </a>
        </div>
        """
        folium.Marker(
            location=[row['lat'], row['lng']],
            popup=folium.Popup(popup_html, max_width=300),
            tooltip=row['title'],
            icon=folium.Icon(color='blue' if row['category'] == 'points' else 'green', icon='info-sign')
        ).add_to(m)

    # 地図をStreamlitで表示
    st_folium(m, width="100%", height=600, returned_objects=[])

    # リスト表示
    with st.expander(f"ポイント一覧を表示 ({len(df)}件)"):
        st.dataframe(df[["title", "category", "targetFish", "address"]])
else:
    st.info("条件に一致するポイントが見つかりませんでした。")
    st_folium(m, width="100%", height=600)

if st.sidebar.button("データを再読み込み (JSONを更新)"):
    os.system("node scripts/export_points_data.cjs")
    st.cache_data.clear()
    st.rerun()

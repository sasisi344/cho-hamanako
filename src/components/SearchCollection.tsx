import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For, onMount } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"

type Props = {
  entry_name: string
  tags: string[]
  data: CollectionEntry<"blog">[] | CollectionEntry<'projects'>[]
  initialTags?: string[]
}

export default function SearchCollection({ entry_name, data, tags, initialTags }: Props) {
  // Use any here to avoid union of array vs array of union issues in Fuse/Filter
  const items = data as any[];

  const [query, setQuery] = createSignal("");
  const [filter, setFilter] = createSignal(new Set<string>(initialTags || []))
  const [collection, setCollection] = createSignal<any[]>(items)
  const [descending, setDescending] = createSignal(false);

  const fuse = new Fuse(items, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    const filtered = (query().length < 2
      ? items
      : fuse.search(query()).map((result) => result.item)
    ).filter((entry: any) => {
      const activeFilters = Array.from(filter());
      if (activeFilters.length === 0) return true;

      const areaTags = ["表浜名湖", "中浜名湖", "奥浜名湖"];
      const selectedAreas = activeFilters.filter(f => areaTags.includes(f));
      const otherFilters = activeFilters.filter(f => !areaTags.includes(f));

      // Area tags match with OR
      const areaMatch = selectedAreas.length === 0 || selectedAreas.some(area =>
        entry.data.tags.some((tag: string) => tag === area)
      );

      // Other tags match with OR
      const otherMatch = otherFilters.length === 0 || otherFilters.some(f =>
        entry.data.tags.some((tag: string) => tag === f)
      );

      return areaMatch && otherMatch;
    });
    setCollection(descending() ? [...filtered].reverse() : filtered)
  })

  function toggleDescending() {
    setDescending(!descending())
  }

  function toggleTag(tag: string) {
    setFilter((prev) =>
      new Set(prev.has(tag)
        ? [...prev].filter((t) => t !== tag)
        : [...prev, tag]
      )
    )
  }

  function clearFilters() {
    setFilter(new Set<string>());
  }

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  onMount(() => {
    const wrapper = document.getElementById("search-collection-wrapper");
    if (wrapper) {
      wrapper.style.minHeight = "unset";
    }
  })

  return (
    <div class="collection-layout">
      <aside class="collection-controls" aria-label="記事の検索と絞り込み">
        <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText="キーワードで探す" />
        <div class="filter-heading">
          <span>絞り込み</span>
          {filter().size > 0 && <button type="button" onClick={clearFilters}>選択を解除</button>}
        </div>
        <ul class="filter-tags">
          <For each={tags}>
            {(tag) => (
              <li>
                <button type="button" onClick={() => toggleTag(tag)} aria-pressed={filter().has(tag)}>
                  <span class="filter-check" aria-hidden="true">{filter().has(tag) ? "✓" : ""}</span>
                  <span>{tag}</span>
                </button>
              </li>
            )}
          </For>
        </ul>
      </aside>
      <div class="collection-results">
        <div class="results-toolbar">
          <p role="status" aria-live="polite"><strong>{collection().length}</strong>件 <span>／ 全{data.length}件</span></p>
          <button type="button" onClick={toggleDescending} aria-label={descending() ? "新しい順に並べ替え" : "古い順に並べ替え"}>
            {descending() ? "古い順" : "新しい順"}
            <svg fill="none" aria-hidden="true"><use href={descending() ? "/ui.svg#sort-ascending" : "/ui.svg#sort-descending"} /></svg>
          </button>
        </div>
        <ul class="collection-list">
          <For each={collection()}>{entry => <li><ArrowCard entry={entry} /></li>}</For>
        </ul>
        {collection().length === 0 && <p class="collection-empty">条件に合う記事がありません。キーワードや絞り込み条件を変えてみてください。</p>}
      </div>
    </div>
  )
}

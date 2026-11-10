import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"

type Props = { data: CollectionEntry<"blog">[] }

export default function Search({ data }: Props) {
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<CollectionEntry<"blog">[]>([])
  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    setResults(query().length < 2 ? [] : fuse.search(query()).map(result => result.item))
  })
  const onSearchInput = (event: Event) => setQuery((event.target as HTMLInputElement).value)

  return (
    <div class="search-page">
      <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText="魚・釣り場・釣り方を検索" />
      {query().length < 2
        ? <p class="search-hint">「クロダイ」「弁天島」「サビキ」など、2文字以上のキーワードで探せます。</p>
        : <>
            <div class="results-toolbar"><p role="status" aria-live="polite"><strong>{results().length}</strong>件見つかりました</p></div>
            <ul class="collection-list"><For each={results()}>{result => <li><ArrowCard entry={result} pill /></li>}</For></ul>
            {results().length === 0 && <p class="collection-empty" role="status">条件に合う記事がありません。別のキーワードで探してみてください。</p>}
          </>
      }
    </div>
  )
}

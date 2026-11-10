type Props = {
  onSearchInput: (e: Event) => void
  query: () => string
  setQuery: (value: string) => void
  placeholderText: string
}

export default function SearchBar({ onSearchInput, query, setQuery, placeholderText }: Props) {
  return (
    <div class="search-field">
      <svg fill="none" aria-hidden="true"><use href="/ui.svg#search" /></svg>
      <input name="search" type="search" aria-label={placeholderText} value={query()} onInput={onSearchInput} autocomplete="off" spellcheck={false} placeholder={placeholderText} />
      {query().length > 0 && (
        <button type="button" class="search-clear" onClick={() => setQuery("")} aria-label="検索キーワードを消去">
          <svg fill="none" aria-hidden="true"><use href="/ui.svg#x" /></svg>
        </button>
      )}
    </div>
  )
}

import '../styles/components/SearchBar.css'

export default function SearchBar({ value, onChange, onSearch, onTopAnime }) {
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="search__input"
        placeholder="Найти аниме..."
      />
      <button onClick={onSearch} className="button button--primary">
        Поиск
      </button>
      <button onClick={onTopAnime} className="button">
        Топ аниме
      </button>
    </div>
  )
}
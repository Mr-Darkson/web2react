import { useState } from 'react'
import { useAnimeContext } from '../context/AnimeContext'
import { useAnimeSearch } from '../hooks/useAnimeSearch'
import SearchBar from './SearchBar'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'
import '../styles/components/Header.css'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const { loading, error } = useAnimeContext()
  const { searchAnime, getTopAnime } = useAnimeSearch()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchAnime(searchQuery)
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">Аниме Поисковик</h1>
      <SearchBar 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        onTopAnime={getTopAnime}
      />
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
    </header>
  )
}
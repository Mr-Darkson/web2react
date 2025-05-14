import { useAnimeContext } from '../context/AnimeContext'
import AnimeCard from './AnimeCard'
import '../styles/components/AnimeGrid.css'

export default function AnimeGrid() {
  const { animeList, showDetail } = useAnimeContext()

  if (showDetail) return null

  return (
    <div className="anime-grid">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  )
}
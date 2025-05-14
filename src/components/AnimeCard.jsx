import { useAnimeSearch } from '../hooks/useAnimeSearch'
import '../styles/components/AnimeCard.css'

export default function AnimeCard({ anime }) {
  const { getAnimeDetails } = useAnimeSearch()

  return (
    <div className="anime-card" onClick={() => getAnimeDetails(anime.mal_id)}>
      <img 
        src={anime.images.jpg.image_url} 
        alt={anime.title} 
        className="anime-card__image"
      />
      <h3 className="anime-card__title">{anime.title}</h3>
    </div>
  )
}
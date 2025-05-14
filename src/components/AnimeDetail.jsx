import { useAnimeContext } from '../context/AnimeContext'
import '../styles/components/AnimeDetail.css'

export default function AnimeDetail() {
  const { selectedAnime, showDetail, setShowDetail } = useAnimeContext()

  if (!showDetail) return null

  return (
    <div className="anime-detail">
      <h2 className="anime-detail__title">{selectedAnime.title}</h2>
      <img 
        src={selectedAnime.images.jpg.large_image_url} 
        alt={selectedAnime.title} 
        className="anime-detail__image"
      />
      <p className="anime-detail__info"><strong>Тип:</strong> {selectedAnime.type}</p>
      <p className="anime-detail__info"><strong>Эпизоды:</strong> {selectedAnime.episodes || 'Неизвестно'}</p>
      <p className="anime-detail__info"><strong>Статус:</strong> {selectedAnime.status}</p>
      <p className="anime-detail__info"><strong>Рейтинг:</strong> {selectedAnime.score || 'Нет оценки'}</p>
      <p className="anime-detail__info"><strong>Жанры:</strong> {selectedAnime.genres.map(g => g.name).join(', ')}</p>
      <p className="anime-detail__info"><strong>Описание:</strong> {selectedAnime.synopsis || 'Нет описания'}</p>
      
      <button 
        onClick={() => setShowDetail(false)} 
        className="button button--back"
      >
        Назад к списку
      </button>
    </div>
  )
}
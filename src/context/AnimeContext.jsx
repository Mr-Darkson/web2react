import { createContext, useState, useContext } from 'react'

const AnimeContext = createContext()

export function AnimeProvider({ children }) {
    const [animeList, setAnimeList] = useState([])
    const [selectedAnime, setSelectedAnime] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showDetail, setShowDetail] = useState(false)

    return (
        <AnimeContext.Provider
            value={{
                animeList,
                setAnimeList,
                selectedAnime,
                setSelectedAnime,
                loading,
                setLoading,
                error,
                setError,
                showDetail,
                setShowDetail
            }}
        >
            {children}
        </AnimeContext.Provider>
    )
}

export function useAnimeContext() {
    return useContext(AnimeContext)
}
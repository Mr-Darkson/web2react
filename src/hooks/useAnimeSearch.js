import { useState } from 'react'
import { useAnimeContext } from '../context/AnimeContext'

export function useAnimeSearch() {
    const { setAnimeList, setLoading, setError, setSelectedAnime, setShowDetail } = useAnimeContext()

    const searchAnime = async (query) => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=12`)
            const { data } = await response.json()
            setAnimeList(data || [])
        } catch (err) {
            setError('Ошибка поиска. Пожалуйста, попробуйте позже.')
            console.error('Error searching anime:', err)
        } finally {
            setLoading(false)
        }
    }

    const getTopAnime = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=12')
            const { data } = await response.json()
            setAnimeList(data || [])
        } catch (err) {
            setError('Ошибка загрузки данных. Пожалуйста, попробуйте позже.')
            console.error('Error fetching top anime:', err)
        } finally {
            setLoading(false)
        }
    }

    const getAnimeDetails = async (animeId) => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
            const { data } = await response.json()
            setSelectedAnime(data)
            setShowDetail(true)
        } catch (err) {
            setError('Ошибка загрузки деталей. Пожалуйста, попробуйте позже.')
            console.error('Error fetching anime details:', err)
        } finally {
            setLoading(false)
        }
    }

    return { searchAnime, getTopAnime, getAnimeDetails }
}
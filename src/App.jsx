import { AnimeProvider } from './context/AnimeContext.jsx'
import Header from './components/Header'
import AnimeGrid from './components/AnimeGrid'
import AnimeDetail from './components/AnimeDetail'

function App() {
    return (
        <AnimeProvider>
            <div className="container">
                <Header />
                <main className="main">
                    <AnimeGrid />
                    <AnimeDetail />
                </main>
            </div>
        </AnimeProvider>
    )
}

export default App;
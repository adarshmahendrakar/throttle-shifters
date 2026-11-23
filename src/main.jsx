import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { PlaceholderPage } from './components/PlaceholderPage'
import { RidesEventsPage } from './components/RidesEventsPage'
import { GalleryPage } from './components/GalleryPage'
import { AboutPage } from './components/AboutPage'
import { ContactPage } from './components/ContactPage'
import { pageCopy } from './data/site'
import './styles.css'

function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || 'home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash.slice(1) || 'home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPage = pageCopy[page] ? page : 'home'

  return <div className="site-shell">
    <Header currentPage={currentPage} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} onNavigate={navigate} />
    <main>{currentPage === 'home' ? <HomePage onNavigate={navigate} /> : currentPage === 'rides' ? <RidesEventsPage onNavigate={navigate} /> : currentPage === 'gallery' ? <GalleryPage onNavigate={navigate} /> : currentPage === 'about' ? <AboutPage onNavigate={navigate} /> : currentPage === 'contact' ? <ContactPage onNavigate={navigate} /> : <PlaceholderPage copy={pageCopy[currentPage]} onNavigate={navigate} />}</main>
    <Footer />
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)

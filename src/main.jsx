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
import { UpcomingRideModal } from './components/UpcomingRideModal'
import { pageCopy } from './data/site'
import './styles.css'

function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || 'home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showRideModal, setShowRideModal] = useState(() => !window.location.hash || window.location.hash === '#home')

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash.slice(1) || 'home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!showRideModal) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setShowRideModal(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [showRideModal])

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
    {showRideModal && <UpcomingRideModal onClose={() => setShowRideModal(false)} />}
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)

import { useState, useEffect } from 'react'
import { useSmoothScroll } from '../hooks/useScrollReveal'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    scrollTo(targetId)
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#" className="logo">
            Mon Chat Est <span>Roi</span>
          </a>

          <nav className="nav">
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  Prestations
                </a>
              </li>
              <li>
                <a href="#trust" className="nav-link" onClick={(e) => handleNavClick(e, '#trust')}>
                  Pourquoi nous
                </a>
              </li>
              <li>
                <a href="#pricing" className="nav-link" onClick={(e) => handleNavClick(e, '#pricing')}>
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

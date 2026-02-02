import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const contentRef = useScrollReveal()
  const imageRef = useScrollReveal()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content reveal" ref={contentRef}>
            <p className="hero-tagline">Catsitting Premium</p>
            <h1 className="hero-title">Votre chat mérite le meilleur</h1>
            <p className="hero-description">
              Un service de garde de chat d'exception à Paris et en Île-de-France. Nos catsitters passionnés prennent
              soin de votre félin comme d'un roi.
            </p>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">
                Découvrir nos tarifs
              </a>
              <a href="#services" className="btn btn-outline">
                Nos prestations
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper reveal reveal-delay-1" ref={imageRef}>
            <img src="/images/hero-cat.png" alt="Chat persan élégant dans un intérieur luxueux" className="hero-image" />
            <div className="hero-image-overlay">
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">4.9/5</div>
                  <div className="stat-label">Google</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">700+</div>
                  <div className="stat-label">Avis</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">&lt;1%</div>
                  <div className="stat-label">Candidats retenus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

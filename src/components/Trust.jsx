import { useScrollReveal } from '../hooks/useScrollReveal'

const trustItems = [
  { icon: '⭐', number: '4.9/5', label: 'Note Google' },
  { icon: '👥', number: '700+', label: 'Avis clients' },
  { icon: '🎯', number: '<1%', label: 'Candidats retenus' },
  { icon: '📺', number: 'TF1', label: 'Vus sur' },
]

function Trust() {
  const titleRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <section className="trust-section section-lg" id="trust">
      <div className="container">
        <h2 className="heading-section trust-title reveal" ref={titleRef}>
          Pourquoi nous choisir
        </h2>

        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <TrustItem key={item.label} item={item} delay={index % 3 + 1} />
          ))}
        </div>

        <div className="reveal" ref={ctaRef} style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-md)', opacity: 0.9 }}>
            Chaque catsitter passe un entretien de 1h30 et est rigoureusement sélectionné pour garantir le meilleur
            soin à votre félin.
          </p>
          <a href="#contact" className="btn btn-accent">
            Réserver maintenant
          </a>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ item, delay }) {
  const ref = useScrollReveal()

  return (
    <div className={`trust-item reveal reveal-delay-${delay}`} ref={ref}>
      <div className="trust-icon">{item.icon}</div>
      <div className="trust-number">{item.number}</div>
      <div className="trust-label">{item.label}</div>
    </div>
  )
}

export default Trust

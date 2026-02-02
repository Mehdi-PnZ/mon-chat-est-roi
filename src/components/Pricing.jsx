import { useScrollReveal } from '../hooks/useScrollReveal'

const pricingPlans = [
  {
    id: 1,
    title: 'Visite Express',
    price: '13€',
    period: '30 minutes',
    features: ['Nourriture & eau fraîche', 'Litière propre', 'Câlins & jeux', 'Photos envoyées'],
    featured: false,
  },
  {
    id: 2,
    title: 'Visite Confort',
    price: '18€',
    period: '1 heure',
    features: ['Tout de la Visite Express', '+ Temps de jeu prolongé', '+ Vidéos de votre chat', '+ Relevé du courrier'],
    featured: true,
  },
  {
    id: 3,
    title: 'Garde de Nuit',
    price: '39€',
    period: 'toute la nuit',
    features: ['Présence toute la nuit', 'Soins complets', 'Arrosage des plantes', 'Idéal chats anxieux'],
    featured: false,
  },
]

function PricingCard({ plan, delay }) {
  const ref = useScrollReveal()

  return (
    <div className={`pricing-card reveal reveal-delay-${delay} ${plan.featured ? 'featured' : ''}`} ref={ref}>
      <h3 className="pricing-title">{plan.title}</h3>
      <div className="pricing-amount">{plan.price}</div>
      <div className="pricing-period">{plan.period}</div>
      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href="#contact" className={`btn ${plan.featured ? 'btn-accent' : 'btn-outline'}`}>
        Réserver
      </a>
    </div>
  )
}

function Pricing() {
  const headerRef = useScrollReveal()

  return (
    <section className="pricing-section section-lg" id="pricing">
      <div className="container">
        <header className="section-header reveal" ref={headerRef} style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <p className="hero-tagline">Tarifs</p>
          <h2 className="heading-section">Nos formules</h2>
        </header>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} delay={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

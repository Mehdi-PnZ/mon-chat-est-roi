import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    id: 1,
    label: 'Essentiel',
    title: 'La Visite',
    description:
      "Une visite de 30 minutes à 1 heure pour prendre soin de votre chat. Nourriture fraîche, eau, litière propre, câlins et jeux. Vous recevez photos et vidéos de votre félin.",
    price: 'À partir de 13€',
    priceUnit: '/ visite',
    image: '/images/service-visit.png',
    imageAlt: "Chat recevant des câlins lors d'une visite",
  },
  {
    id: 2,
    label: 'Bien-être',
    title: 'Moments de Jeu',
    description:
      'Des séances de jeu stimulantes pour garder votre chat actif et heureux. Nos catsitters experts connaissent les besoins spécifiques de chaque félin.',
    price: 'Inclus',
    priceUnit: 'dans chaque visite',
    image: '/images/service-play.png',
    imageAlt: 'Chat jouant avec un plumeau',
  },
  {
    id: 3,
    label: 'Premium',
    title: 'Garde de Nuit',
    description:
      "Votre catsitter reste toute la nuit chez vous. Idéal pour les chats anxieux ou nécessitant une attention particulière. Le confort de leur maison, la présence rassurante en plus.",
    price: 'À partir de 39€',
    priceUnit: '/ nuit',
    image: '/images/service-night.png',
    imageAlt: 'Chat dormant paisiblement',
  },
]

function ServiceBlock({ service }) {
  const ref = useScrollReveal()

  return (
    <div className="service-block reveal" ref={ref}>
      <div className="service-image-container">
        <img src={service.image} alt={service.imageAlt} className="service-image" />
      </div>
      <div className="service-content">
        <p className="service-label">{service.label}</p>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <p className="service-price">
          {service.price} <span>{service.priceUnit}</span>
        </p>
        <a href="#pricing" className="btn btn-outline">
          En savoir plus
        </a>
      </div>
    </div>
  )
}

function Services() {
  const headerRef = useScrollReveal()

  return (
    <section className="services-section section-lg" id="services">
      <div className="container">
        <header className="section-header reveal" ref={headerRef} style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <p className="hero-tagline">Nos prestations</p>
          <h2 className="heading-section">Des soins sur mesure</h2>
        </header>

        {services.map((service) => (
          <ServiceBlock key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services

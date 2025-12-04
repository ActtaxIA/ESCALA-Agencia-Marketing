'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './HomeStripes.module.css'

interface StripeData {
  section: string
  icon: string
  title: string
  route: string
}

const stripes: StripeData[] = [
  { section: 'inicio', icon: '🌙', title: 'Inicio', route: '/' },
  { section: 'quienes-somos', icon: '✦', title: 'Quiénes Somos', route: '/quienes-somos' },
  { section: 'metodologia', icon: '◈', title: 'Metodología', route: '/metodologia' },
  { section: 'servicios', icon: '☀', title: 'Servicios', route: '/servicios' },
  { section: 'portfolio', icon: '◐', title: 'Portfolio', route: '/portfolio' },
  { section: 'casos-exito', icon: '▲', title: 'Éxitos', route: '/exitos' },
  { section: 'blog', icon: '◆', title: 'Blog', route: '/blog' },
  { section: 'contacto', icon: '★', title: 'Contacto', route: '/contacto' },
]

export default function HomeStripes() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeStripe, setActiveStripe] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // ... (código existente) ...
  }, [])

  // ... (useEffect estrellas y parallax igual) ...

  const handleStripeClick = (route: string, section: string) => {
    // En móvil: Primer click activa, segundo click navega
    if (window.innerWidth <= 768) {
      if (activeStripe !== section) {
        setActiveStripe(section)
        return
      }
    }

    // Animación y navegación normal
    const stripe = document.querySelector(`[data-section="${section}"]`) as HTMLElement
    if (stripe) {
      stripe.style.transform = 'scale(1.02)'
      setTimeout(() => {
        stripe.style.transform = ''
      }, 200)
    }

    if (route !== '/') {
      setTimeout(() => {
        router.push(route)
      }, 300)
    }
  }

  return (
    <>
      {/* ... (loader y resto igual) ... */}

        {/* Contenedor de franjas */}
        <div className={styles.container}>
          {stripes.map((stripe, index) => (
            <div
              key={stripe.section}
              className={`${styles.stripe} ${activeStripe === stripe.section ? styles.active : ''}`}
              data-section={stripe.section}
              onClick={() => handleStripeClick(stripe.route, stripe.section)}
            >
              {/* ... (contenido igual) ... */}
              {/* Sol en la franja naranja (índice 5) */}
              {index === 5 && <div className={styles.sun}></div>}

              {/* Estrellas en la última franja (índice 7) */}
              {index === 7 && <div className={styles.stars} id="stars"></div>}

              {/* Contenido de la franja */}
              <div className={styles.stripeContent}>
                <div className={styles.stripeIcon}>{stripe.icon}</div>
                <div className={styles.stripeLine}></div>
                <h2>{stripe.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


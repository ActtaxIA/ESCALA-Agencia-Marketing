'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { NAV_ITEMS, LIGHT_STRIPES, STRIPE_COLORS } from '@/types'
import styles from './StripeDivider.module.css'

export function StripeDivider() {
  const router = useRouter()
  const [expandedStripe, setExpandedStripe] = useState<string | null>(null)

  const handleStripeClick = (e: React.MouseEvent, href: string) => {
    // Solo aplicar lógica de doble tap en móvil
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      e.preventDefault() // Prevenir navegación por defecto
      
      if (expandedStripe === href) {
        // Segundo tap en la misma franja, navegar
        router.push(href)
      } else {
        // Primer tap, expandir franja
        setExpandedStripe(href)
      }
    }
    // En desktop, el Link funciona normalmente (navegación directa)
  }

  return (
    <div className={styles.divider}>
      {NAV_ITEMS.map((item) => {
        const isLightStripe = LIGHT_STRIPES.includes(item.stripeNumber)
        const expanded = expandedStripe === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleStripeClick(e, item.href)}
            className={`${styles.stripe} ${expanded ? styles.expanded : ''}`}
            style={{ 
              backgroundColor: STRIPE_COLORS[item.stripeNumber as keyof typeof STRIPE_COLORS] 
            }}
          >
            <span 
              className={styles.label}
              style={{ 
                color: isLightStripe ? 'var(--text)' : 'white',
                textShadow: isLightStripe ? 'none' : '0 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

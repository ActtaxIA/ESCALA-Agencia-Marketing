'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS, LIGHT_STRIPES, STRIPE_COLORS } from '@/types'
import styles from './StripeNav.module.css'

interface StripeNavProps {
  position: 'left' | 'right'
}

export function StripeNav({ position }: StripeNavProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={`${styles.stripeNav} ${styles[position]}`}>
      {NAV_ITEMS.map((item) => {
        const isLightStripe = LIGHT_STRIPES.includes(item.stripeNumber)
        const active = isActive(item.href)
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.stripe} ${active ? styles.active : ''}`}
            style={{ 
              backgroundColor: STRIPE_COLORS[item.stripeNumber as keyof typeof STRIPE_COLORS] 
            }}
            data-stripe={item.stripeNumber}
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
            {active && (
              <span 
                className={styles.activeIndicator}
                style={{
                  backgroundColor: isLightStripe ? 'var(--text)' : 'white'
                }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { NAV_ITEMS, LIGHT_STRIPES, STRIPE_COLORS } from '@/types'
import styles from './StripeDivider.module.css'

export function StripeDivider() {
  return (
    <div className={styles.divider}>
      {NAV_ITEMS.map((item) => {
        const isLightStripe = LIGHT_STRIPES.includes(item.stripeNumber)
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={styles.stripe}
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

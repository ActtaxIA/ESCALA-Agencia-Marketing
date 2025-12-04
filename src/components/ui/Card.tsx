import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.card, hover && styles.hover, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

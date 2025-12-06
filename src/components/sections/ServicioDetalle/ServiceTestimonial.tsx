'use client'

import styles from './ServiceTestimonial.module.css'
import { StripeDivider } from '@/components/layout'

interface ServiceTestimonialProps {
  quote: string
  author: string
  position: string
  company: string
}

export default function ServiceTestimonial({ quote, author, position, company }: ServiceTestimonialProps) {
  return (
    <>
      <StripeDivider />

      <section className={styles.testimonial}>
        <div className={`${styles.testimonialContent} fade-up`}>
          <div className={styles.quoteIcon}>"</div>
          <blockquote className={styles.quote}>{quote}</blockquote>
          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              {author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={styles.authorInfo}>
              <strong>{author}</strong>
              <span>{position}, {company}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}









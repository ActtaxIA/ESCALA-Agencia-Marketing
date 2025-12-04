'use client'

import { useEffect } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Laura Martínez',
    position: 'Gerente',
    company: 'Restaurante La Huerta',
    text: 'Desde que trabajamos con ESCALA, nuestras reservas online se han triplicado. La web es preciosa y funciona perfectamente.',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    position: 'Director',
    company: 'Clínica Dental Sonrisa',
    text: 'Excelentes profesionales. Las campañas de Google Ads nos han traído más de 80 pacientes nuevos en 3 meses.',
    rating: 5,
  },
  {
    name: 'Ana García',
    position: 'CEO',
    company: 'Urban Style',
    text: 'Montaron nuestra tienda online en tiempo récord. Ya hemos facturado más de 50.000€ y seguimos creciendo.',
    rating: 5,
  },
  {
    name: 'Miguel Sánchez',
    position: 'Propietario',
    company: 'Asesoría Fiscal',
    text: 'Gracias al SEO local, ahora aparecemos primeros en Google. Las consultas se han duplicado.',
    rating: 5,
  },
  {
    name: 'Elena López',
    position: 'Directora',
    company: 'Academia Connect',
    text: 'La gestión de redes sociales es impecable. Hemos conseguido más de 5000 seguidores en pocos meses.',
    rating: 5,
  },
  {
    name: 'Javier Torres',
    position: 'Gerente',
    company: 'Inmobiliaria Costa',
    text: 'Profesionalidad y resultados. La nueva web ha mejorado muchísimo nuestra imagen y las ventas.',
    rating: 5,
  },
]

export default function Testimonials() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section className={styles.testimonials}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Testimonios</span>
          <h2 className={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${styles.testimonialCard} fade-up`}>
              <div className={styles.testimonialRating}>
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorPosition}>
                    {testimonial.position} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}


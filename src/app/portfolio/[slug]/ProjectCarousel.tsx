'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './project.module.css'

interface CarouselProps {
  images: string[]
  title: string
}

export default function ProjectCarousel({ images, title }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [currentSlide])

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!images || images.length === 0) return null

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image: string, i: number) => (
            <div key={i} className={styles.carouselSlide}>
              <Image
                src={image}
                alt={`${title} - imagen ${i + 1}`}
                width={1920}
                height={1080}
                className={styles.carouselImage}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        
        {/* Controles del carrusel - Solo si hay más de 1 imagen */}
        {images.length > 1 && (
          <>
            <button 
              className={`${styles.carouselBtn} ${styles.carouselPrev}`}
              onClick={prevSlide}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button 
              className={`${styles.carouselBtn} ${styles.carouselNext}`}
              onClick={nextSlide}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
            
            {/* Indicadores */}
            <div className={styles.carouselIndicators}>
              {images.map((_: string, i: number) => (
                <button 
                  key={i} 
                  className={`${styles.carouselDot} ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  aria-current={i === currentSlide}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}


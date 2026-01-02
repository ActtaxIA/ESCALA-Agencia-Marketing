'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './project.module.css'

interface CarouselProps {
  images: string[]
  title: string
}

export default function ProjectCarousel({ images, title }: CarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // Tamaño de cada card + gap
  const cardWidth = 380 // 350px card + 30px gap
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const scrollAmount = cardWidth * 2 // Desplazar 2 cards a la vez
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft)
    }
  }

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scroll('left')
      if (e.key === 'ArrowRight') scroll('right')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!images || images.length === 0) return null

  const showControls = images.length > 3 // Mostrar controles si hay más de 3 imágenes

  return (
    <section className={styles.galleryCarousel}>
      <div className={styles.galleryContainer}>
        {showControls && (
          <button 
            className={`${styles.galleryBtn} ${styles.galleryPrev}`}
            onClick={() => scroll('left')}
            aria-label="Desplazar izquierda"
          >
            ‹
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className={styles.galleryScroll}
          onScroll={handleScroll}
        >
          {images.map((image: string, i: number) => (
            <div key={i} className={styles.polaroidCard}>
              <div className={styles.polaroidInner}>
                <div className={styles.polaroidImage}>
                  <Image
                    src={image}
                    alt={`${title} - imagen ${i + 1}`}
                    width={350}
                    height={280}
                    className={styles.cardImage}
                    priority={i < 4}
                  />
                </div>
                <div className={styles.polaroidCaption}>
                  {i + 1} / {images.length}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showControls && (
          <button 
            className={`${styles.galleryBtn} ${styles.galleryNext}`}
            onClick={() => scroll('right')}
            aria-label="Desplazar derecha"
          >
            ›
          </button>
        )}
      </div>
    </section>
  )
}


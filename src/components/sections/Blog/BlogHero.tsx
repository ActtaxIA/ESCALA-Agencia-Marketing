'use client'

import { useState } from 'react'
import styles from './BlogHero.module.css'

const categories = [
  { id: 'all', label: 'Todos', icon: '📚' },
  { id: 'seo', label: 'SEO', icon: '📈' },
  { id: 'diseno', label: 'Diseño Web', icon: '🎨' },
  { id: 'redes', label: 'Redes Sociales', icon: '📱' },
  { id: 'ads', label: 'Publicidad', icon: '🎯' },
  { id: 'ia', label: 'IA', icon: '🤖' },
  { id: 'email', label: 'Email', icon: '📧' },
]

interface BlogHeroProps {
  onSearch?: (term: string) => void
  onCategoryChange?: (category: string) => void
}

export default function BlogHero({ onSearch, onCategoryChange }: BlogHeroProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchTerm)
  }

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <section className={styles.hero}>
      {/* Fondo con gradiente */}
      <div className={styles.heroBg}>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroPattern}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={styles.badgeIcon}>✦</span>
          Blog de Marketing Digital
        </div>

        <h1 className={styles.heroTitle}>
          Conocimiento que <span>impulsa resultados</span>
        </h1>

        <p className={styles.heroDesc}>
          Guías prácticas, tutoriales y novedades sobre marketing digital. 
          Todo lo que necesitas para hacer crecer tu negocio online.
        </p>

        {/* Buscador */}
        <form className={styles.searchBox} onSubmit={handleSearch}>
          <div className={styles.searchIcon}>🔍</div>
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>
            Buscar
          </button>
        </form>

        {/* Categorías */}
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              <span className={styles.categoryIcon}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Decoración */}
      <div className={styles.decoration}>
        <div className={styles.floatingCard}>
          <span>+50</span>
          <small>Artículos</small>
        </div>
      </div>
    </section>
  )
}












'use client'

import styles from './Categories.module.css'

const categories = [
  { name: 'SEO', count: 12, icon: '📈' },
  { name: 'Diseño Web', count: 8, icon: '🎨' },
  { name: 'Publicidad', count: 10, icon: '🎯' },
  { name: 'Redes Sociales', count: 15, icon: '📱' },
  { name: 'IA & Tecnología', count: 7, icon: '🤖' },
  { name: 'Email Marketing', count: 6, icon: '📧' },
]

export default function Categories() {
  return (
    <>

      <section className={styles.categories}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Categorías</span>
          <h2 className={styles.sectionTitle}>Explora por tema</h2>
        </div>
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div key={index} className={`${styles.categoryCard} fade-up`}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryCount}>{category.count} artículos</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}












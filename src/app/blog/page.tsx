'use client'

import { useState } from 'react'
import { StandardLayout } from '@/components/layout'
import BlogHero from '@/components/sections/Blog/BlogHero'
import FeaturedSlider from '@/components/sections/Blog/FeaturedSlider'
import BlogGrid from '@/components/sections/Blog/BlogGrid'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    console.log('🔍 Búsqueda:', term)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    console.log('📂 Categoría seleccionada:', category)
  }

  return (
    <StandardLayout>
      <BlogHero 
        onSearch={handleSearch} 
        onCategoryChange={handleCategoryChange}
      />
      <FeaturedSlider />
      <BlogGrid 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryChange}
      />
    </StandardLayout>
  )
}

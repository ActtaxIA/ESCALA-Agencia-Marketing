'use server'

import { readdir } from 'fs/promises'
import { join } from 'path'

export async function getPublicBlogImages() {
  try {
    const blogImagesPath = join(process.cwd(), 'public', 'blog')
    const files = await readdir(blogImagesPath)
    
    // Filtrar solo imágenes
    const imageFiles = files.filter(file => {
      const ext = file.toLowerCase().split('.').pop()
      return ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext || '')
    })
    
    // Devolver con URLs
    return imageFiles.map(file => ({
      name: file,
      url: `/blog/${file}`
    }))
  } catch (error) {
    console.error('Error al leer imágenes:', error)
    return []
  }
}


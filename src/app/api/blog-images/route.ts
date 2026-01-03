import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const blogImagesPath = join(process.cwd(), 'public', 'blog')
    const files = await readdir(blogImagesPath)
    
    // Filtrar solo imágenes
    const imageFiles = files.filter(file => {
      const ext = file.toLowerCase().split('.').pop()
      return ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext || '')
    })
    
    // Devolver con URLs
    const images = imageFiles.map(file => ({
      name: file,
      url: `/blog/${file}`
    }))
    
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error al leer imágenes del blog:', error)
    return NextResponse.json([], { status: 500 })
  }
}


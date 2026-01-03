'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createArticle(formData: FormData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autenticado')
  }

  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const categoryId = formData.get('category_id') as string
  const metaTitle = formData.get('meta_title') as string
  const metaDescription = formData.get('meta_description') as string
  const keywords = (formData.get('keywords') as string).split(',').map(k => k.trim()).filter(Boolean)
  const featuredImage = formData.get('featured_image') as string
  const published = formData.get('published') === 'true'
  const featured = formData.get('featured') === 'true'

  // Extraer excerpt automáticamente del contenido
  const excerpt = extractExcerpt(content)

  const { data, error } = await supabase
    .from('articles')
    .insert({
      title,
      slug,
      excerpt,
      content,
      category_id: categoryId || null,
      meta_title: metaTitle,
      meta_description: metaDescription,
      keywords,
      featured_image: featuredImage || null,
      published,
      featured,
      published_at: published ? new Date().toISOString() : null,
      author: 'ESCALA Marketing',
    })
    .select()
    .single()

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/administrator')
  revalidatePath('/blog')
  redirect('/administrator')
}

// Función helper para extraer excerpt del contenido
function extractExcerpt(content: string): string {
  // Si hay separador <!--more-->, usar el texto antes de él
  if (content.includes('<!--more-->')) {
    const beforeMore = content.split('<!--more-->')[0]
    return stripHtml(beforeMore).trim().substring(0, 300)
  }
  
  // Si no hay separador, usar los primeros 250 caracteres del texto limpio
  const cleanText = stripHtml(content).trim()
  return cleanText.substring(0, 250) + (cleanText.length > 250 ? '...' : '')
}

// Función helper para limpiar HTML
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Eliminar tags HTML
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ') // Normalizar espacios
    .trim()
}

export async function updateArticle(id: string, formData: FormData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autenticado')
  }

  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const categoryId = formData.get('category_id') as string
  const metaTitle = formData.get('meta_title') as string
  const metaDescription = formData.get('meta_description') as string
  const keywords = (formData.get('keywords') as string).split(',').map(k => k.trim()).filter(Boolean)
  const featuredImage = formData.get('featured_image') as string
  const published = formData.get('published') === 'true'
  const featured = formData.get('featured') === 'true'

  // Extraer excerpt automáticamente del contenido
  const excerpt = extractExcerpt(content)

  // Obtener artículo actual para ver si cambió el estado de publicación
  const { data: currentArticle } = await supabase
    .from('articles')
    .select('published, published_at')
    .eq('id', id)
    .single()

  const wasPublished = currentArticle?.published
  const newPublishedAt = !wasPublished && published ? new Date().toISOString() : currentArticle?.published_at

  const { error } = await supabase
    .from('articles')
    .update({
      title,
      slug,
      excerpt,
      content,
      category_id: categoryId || null,
      meta_title: metaTitle,
      meta_description: metaDescription,
      keywords,
      featured_image: featuredImage || null,
      published,
      featured,
      published_at: newPublishedAt,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/administrator')
  revalidatePath('/blog')
  revalidatePath(`/blog/${slug}`)
  redirect('/administrator')
}

export async function deleteArticle(id: string) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autenticado')
  }

  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/administrator')
  revalidatePath('/blog')
}


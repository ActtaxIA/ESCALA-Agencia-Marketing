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
  let featuredImage = formData.get('featured_image') as string
  const published = formData.get('published') === 'true'
  const featured = formData.get('featured') === 'true'
  const publishedAt = formData.get('published_at') as string
  
  // Si hay archivo de imagen, procesarlo (aquí simplemente usamos el nombre)
  // En producción real, subirías a un storage (Supabase Storage, Cloudinary, etc.)
  const imageFile = formData.get('image') as File | null
  if (imageFile && imageFile.size > 0) {
    featuredImage = formData.get('featured_image') as string
  }

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
      published_at: publishedAt || (published ? new Date().toISOString() : null),
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
  // 1. Buscar separador "Leer Más" de Joomla: <hr class="readmore" />
  if (content.includes('<hr class="readmore"')) {
    const beforeMore = content.split(/<hr class="readmore"[^>]*>/)[0]
    return stripHtml(beforeMore).trim().substring(0, 300)
  }
  
  // 2. Buscar separador antiguo de Markdown: <!--more-->
  if (content.includes('<!--more-->')) {
    const beforeMore = content.split('<!--more-->')[0]
    return stripHtml(beforeMore).trim().substring(0, 300)
  }
  
  // 3. Si no hay separador, usar los primeros 250 caracteres del texto limpio
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
  let featuredImage = formData.get('featured_image') as string
  const published = formData.get('published') === 'true'
  const featured = formData.get('featured') === 'true'
  const publishedAt = formData.get('published_at') as string

  // Si hay archivo de imagen, procesarlo
  const imageFile = formData.get('image') as File | null
  if (imageFile && imageFile.size > 0) {
    featuredImage = formData.get('featured_image') as string
  }

  // Extraer excerpt automáticamente del contenido
  const excerpt = extractExcerpt(content)

  // Obtener artículo actual
  const { data: currentArticle } = await supabase
    .from('articles')
    .select('published, published_at')
    .eq('id', id)
    .single()

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
      published_at: publishedAt || currentArticle?.published_at,
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


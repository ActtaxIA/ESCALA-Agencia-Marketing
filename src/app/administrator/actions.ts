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
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const categoryId = formData.get('category_id') as string
  const metaTitle = formData.get('meta_title') as string
  const metaDescription = formData.get('meta_description') as string
  const keywords = (formData.get('keywords') as string).split(',').map(k => k.trim()).filter(Boolean)
  const featuredImage = formData.get('featured_image') as string
  const published = formData.get('published') === 'true'
  const featured = formData.get('featured') === 'true'

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

export async function updateArticle(id: string, formData: FormData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autenticado')
  }

  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const categoryId = formData.get('category_id') as string
  const metaTitle = formData.get('meta_title') as string
  const metaDescription = formData.get('meta_description') as string
  const keywords = (formData.get('keywords') as string).split(',').map(k => k.trim()).filter(Boolean)
  const featuredImage = formData.get('featured_image') as string
  const published = formData.get('published') === 'true'
  const featured = formData.get('featured') === 'true'

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


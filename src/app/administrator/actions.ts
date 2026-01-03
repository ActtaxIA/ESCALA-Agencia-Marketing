'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createArticle(formData: FormData) {
  try {
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
    
    console.log('🔧 SERVER ACTION - createArticle:')
    console.log('- Content length:', content?.length || 0)
    
    // Subir imagen a Supabase Storage si existe
    const imageFile = formData.get('image') as File | null
    if (imageFile && imageFile.size > 0) {
      console.log('📸 Subiendo imagen a Supabase Storage...')
      console.log('- File name:', imageFile.name)
      console.log('- File size:', imageFile.size)
      
      // Convertir File a ArrayBuffer
      const arrayBuffer = await imageFile.arrayBuffer()
      const buffer = new Uint8Array(arrayBuffer)
      
      // Generar nombre único
      const timestamp = Date.now()
      const ext = imageFile.name.split('.').pop()
      const fileName = `${slug}-${timestamp}.${ext}`
      
      // Subir a Supabase Storage bucket 'blog-images'
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(`public/${fileName}`, buffer, {
          contentType: imageFile.type,
          cacheControl: '3600',
          upsert: false
        })
      
      if (uploadError) {
        console.error('❌ Error subiendo imagen:', uploadError)
        throw new Error(`Error al subir la imagen: ${uploadError.message}`)
      }
      
      console.log('✅ Imagen subida correctamente:', uploadData)
      featuredImage = fileName
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
      console.error('❌ Error de Supabase:', error)
      throw new Error(`Error de Supabase: ${error.message}`)
    }

    console.log('✅ Artículo creado correctamente en Supabase:', data)

    revalidatePath('/administrator')
    revalidatePath('/blog')
    
    return { success: true, slug }
  } catch (error: any) {
    console.error('💥 Error en createArticle:', error)
    throw error
  }
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
  try {
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

    console.log('🔧 SERVER ACTION - updateArticle:')
    console.log('- ID:', id)
    console.log('- Title:', title)
    console.log('- Slug:', slug)
    console.log('- Content length:', content?.length || 0)
    console.log('- Content preview:', content?.substring(0, 150) || 'NO CONTENT')

    // Subir imagen a Supabase Storage si existe
    const imageFile = formData.get('image') as File | null
    if (imageFile && imageFile.size > 0) {
      console.log('📸 Subiendo imagen a Supabase Storage...')
      console.log('- File name:', imageFile.name)
      console.log('- File size:', imageFile.size)
      
      // Convertir File a ArrayBuffer
      const arrayBuffer = await imageFile.arrayBuffer()
      const buffer = new Uint8Array(arrayBuffer)
      
      // Generar nombre único
      const timestamp = Date.now()
      const ext = imageFile.name.split('.').pop()
      const fileName = `${slug}-${timestamp}.${ext}`
      
      // Subir a Supabase Storage bucket 'blog-images'
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(`public/${fileName}`, buffer, {
          contentType: imageFile.type,
          cacheControl: '3600',
          upsert: true // Permitir sobrescribir si ya existe
        })
      
      if (uploadError) {
        console.error('❌ Error subiendo imagen:', uploadError)
        throw new Error(`Error al subir la imagen: ${uploadError.message}`)
      }
      
      console.log('✅ Imagen subida correctamente:', uploadData)
      featuredImage = fileName
      
      // Si había una imagen anterior, eliminarla
      const existingImage = formData.get('existing_featured_image') as string
      if (existingImage && existingImage !== fileName) {
        console.log('🗑️ Eliminando imagen anterior:', existingImage)
        await supabase.storage
          .from('blog-images')
          .remove([`public/${existingImage}`])
      }
    } else {
      // Mantener la imagen existente si no hay una nueva
      const existingImage = formData.get('existing_featured_image') as string
      if (existingImage) {
        featuredImage = existingImage
      }
    }

    // Extraer excerpt automáticamente del contenido
    const excerpt = extractExcerpt(content)

    console.log('- Excerpt:', excerpt.substring(0, 100))

    // Obtener artículo actual
    const { data: currentArticle } = await supabase
      .from('articles')
      .select('published, published_at')
      .eq('id', id)
      .single()

    console.log('- Current article:', currentArticle)

    const updateData = {
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
    }

    console.log('📝 Datos a actualizar en Supabase:', {
      ...updateData,
      content: `${updateData.content?.length || 0} caracteres`
    })

    const { error, data } = await supabase
      .from('articles')
      .update(updateData)
      .eq('id', id)
      .select()

    if (error) {
      console.error('❌ Error de Supabase:', error)
      throw new Error(`Error de Supabase: ${error.message}`)
    }

    console.log('✅ Artículo actualizado correctamente en Supabase:', data)

    // Revalidar rutas
    revalidatePath('/administrator')
    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)

    // Devolver éxito (NO usar redirect aquí)
    return { success: true, slug }
  } catch (error: any) {
    console.error('💥 Error en updateArticle:', error)
    throw error
  }
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


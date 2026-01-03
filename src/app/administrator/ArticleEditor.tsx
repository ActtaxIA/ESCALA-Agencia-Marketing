'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Editor } from '@tinymce/tinymce-react'
import { createArticle, updateArticle } from './actions'
import styles from './editor.module.css'

interface Category {
  id: string
  name: string
  slug: string
}

interface Article {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  author: string
  category_id: string
  meta_title: string
  meta_description: string
  keywords: string[]
  published: boolean
  featured: boolean
}

interface ArticleEditorProps {
  article?: Article
  categories: Category[]
}

export default function ArticleEditor({ article, categories }: ArticleEditorProps) {
  const router = useRouter()
  const editorRef = useRef<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    featured_image: article?.featured_image || '',
    author: article?.author || 'ESCALA Marketing',
    category_id: article?.category_id || '',
    meta_title: article?.meta_title || '',
    meta_description: article?.meta_description || '',
    keywords: article?.keywords?.join(', ') || '',
    published: article?.published || false,
    featured: article?.featured || false,
  })

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Auto-generar slug desde título
    if (field === 'title' && !article) {
      const slug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleSave = async (publish: boolean = false) => {
    setLoading(true)
    setError('')

    try {
      // Validaciones
      if (!formData.title.trim()) {
        throw new Error('El título es obligatorio')
      }
      if (!formData.slug.trim()) {
        throw new Error('El slug es obligatorio')
      }
      if (!formData.category_id) {
        throw new Error('Debes seleccionar una categoría')
      }

      // Obtener contenido del editor TinyMCE
      const content = editorRef.current?.getContent() || formData.content

      // Crear FormData para enviar
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('slug', formData.slug)
      formDataToSend.append('excerpt', formData.excerpt)
      formDataToSend.append('content', content)
      formDataToSend.append('featured_image', formData.featured_image)
      formDataToSend.append('author', formData.author)
      formDataToSend.append('category_id', formData.category_id)
      formDataToSend.append('meta_title', formData.meta_title)
      formDataToSend.append('meta_description', formData.meta_description)
      formDataToSend.append('keywords', formData.keywords)
      formDataToSend.append('published', publish.toString())
      formDataToSend.append('featured', formData.featured.toString())

      // Las actions usan redirect() al final, así que solo ejecutamos y esperamos
      if (article?.id) {
        await updateArticle(article.id, formDataToSend)
      } else {
        await createArticle(formDataToSend)
      }
      
      // Si llegamos aquí sin error, las actions redirigirán automáticamente
    } catch (err: any) {
      setError(err.message || 'Error al guardar el artículo')
      setLoading(false)
    }
  }

  return (
    <div className={styles.editorContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>{article ? 'Editar Artículo' : 'Nuevo Artículo'}</h1>
          <div className={styles.headerActions}>
            <button
              onClick={() => router.back()}
              className={styles.btnSecondary}
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              onClick={() => handleSave(false)}
              className={styles.btnSecondary}
              disabled={loading}
            >
              {loading ? 'Guardando...' : 'Guardar Borrador'}
            </button>
            <button
              onClick={() => handleSave(true)}
              className={styles.btnPrimary}
              disabled={loading}
            >
              {loading ? 'Publicando...' : 'Publicar'}
            </button>
          </div>
        </div>
      </header>

      {/* Error */}
      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.mainColumn}>
          {/* Título */}
          <div className={styles.field}>
            <label>Título *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Título del artículo"
              maxLength={200}
            />
            <span className={styles.charCount}>{formData.title.length}/200</span>
          </div>

          {/* Slug */}
          <div className={styles.field}>
            <label>URL (Slug) *</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              placeholder="url-del-articulo"
            />
            <span className={styles.hint}>
              Vista previa: /blog/{formData.slug || 'url-del-articulo'}
            </span>
          </div>

          {/* Extracto */}
          <div className={styles.field}>
            <label>Extracto</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              placeholder="Breve resumen del artículo (se muestra en listados)"
              rows={3}
              maxLength={300}
            />
            <span className={styles.charCount}>{formData.excerpt.length}/300</span>
          </div>

          {/* Editor TinyMCE */}
          <div className={styles.field}>
            <label>Contenido *</label>
            <Editor
              apiKey="no-api-key"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={formData.content}
              init={{
                height: 600,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | image link | code | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px; line-height:1.6 }',
                language: 'es',
                block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4',
                image_title: true,
                automatic_uploads: false,
                file_picker_types: 'image',
                file_picker_callback: (callback, value, meta) => {
                  if (meta.filetype === 'image') {
                    const input = document.createElement('input')
                    input.setAttribute('type', 'file')
                    input.setAttribute('accept', 'image/*')
                    
                    input.onchange = function(this: HTMLInputElement) {
                      const file = this.files?.[0]
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = function() {
                          callback(reader.result as string, { alt: file.name })
                        }
                        reader.readAsDataURL(file)
                      }
                    }
                    
                    input.click()
                  }
                },
              }}
            />
            <span className={styles.hint}>
              💡 Usa el botón "Code" para alternar entre modo visual y HTML
            </span>
          </div>

          {/* SEO & Metadatos */}
          <div className={styles.seoSection}>
            <h2>SEO & Metadatos</h2>
            
            <div className={styles.field}>
              <label>Meta Title (0/{formData.meta_title.length}/70)</label>
              <input
                type="text"
                value={formData.meta_title}
                onChange={(e) => handleChange('meta_title', e.target.value)}
                placeholder="Título optimizado para SEO (máx 70 caracteres)"
                maxLength={70}
              />
            </div>

            <div className={styles.field}>
              <label>Meta Description (0/{formData.meta_description.length}/160)</label>
              <textarea
                value={formData.meta_description}
                onChange={(e) => handleChange('meta_description', e.target.value)}
                placeholder="Descripción para buscadores (máx 160 caracteres)"
                rows={3}
                maxLength={160}
              />
            </div>

            <div className={styles.field}>
              <label>Palabras Clave (separadas por comas)</label>
              <input
                type="text"
                value={formData.keywords}
                onChange={(e) => handleChange('keywords', e.target.value)}
                placeholder="seo, marketing digital, posicionamiento"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Publicación */}
          <div className={styles.sidebarCard}>
            <h3>Publicación</h3>
            <div className={styles.checkboxField}>
              <label>
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => handleChange('published', e.target.checked)}
                />
                Publicado
              </label>
            </div>
            <div className={styles.checkboxField}>
              <label>
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                />
                ⭐ Destacado
              </label>
            </div>
          </div>

          {/* Categoría */}
          <div className={styles.sidebarCard}>
            <h3>Categoría</h3>
            <select
              value={formData.category_id}
              onChange={(e) => handleChange('category_id', e.target.value)}
            >
              <option value="">Sin categoría</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Autor */}
          <div className={styles.sidebarCard}>
            <h3>Autor</h3>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => handleChange('author', e.target.value)}
              placeholder="Nombre del autor"
            />
          </div>

          {/* Imagen Destacada */}
          <div className={styles.sidebarCard}>
            <h3>Imagen Destacada</h3>
            <input
              type="text"
              value={formData.featured_image}
              onChange={(e) => handleChange('featured_image', e.target.value)}
              placeholder="nombre-imagen.webp"
            />
            <span className={styles.hint}>
              Solo el nombre del archivo en /public/blog/
            </span>
            {formData.featured_image && (
              <img
                src={`/blog/${formData.featured_image}`}
                alt="Preview"
                className={styles.imagePreview}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

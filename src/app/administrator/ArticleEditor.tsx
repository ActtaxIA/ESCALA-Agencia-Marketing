'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { createArticle, updateArticle, deleteArticle } from './actions'
import styles from './editor.module.css'

interface Article {
  id?: string
  title?: string
  slug?: string
  excerpt?: string
  content?: string
  category_id?: string
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  featured_image?: string
  published?: boolean
  featured?: boolean
}

interface Category {
  id: string
  name: string
  slug: string
}

interface Props {
  article?: Article
  categories: Category[]
}

export default function ArticleEditor({ article, categories }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    category_id: article?.category_id || '',
    meta_title: article?.meta_title || '',
    meta_description: article?.meta_description || '',
    keywords: article?.keywords?.join(', ') || '',
    featured_image: article?.featured_image || '',
    published: article?.published || false,
    featured: article?.featured || false,
  })

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Auto-generar slug desde título
    if (field === 'title' && !article?.slug) {
      const slug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, String(value))
      })

      if (article?.id) {
        await updateArticle(article.id, data)
      } else {
        await createArticle(data)
      }
    } catch (err: any) {
      setError(err.message || 'Error al guardar')
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!article?.id || !confirmDelete) return
    setLoading(true)
    
    try {
      await deleteArticle(article.id)
      router.push('/administrator')
    } catch (err: any) {
      setError(err.message || 'Error al eliminar')
      setLoading(false)
    }
  }

  const charCount = {
    metaTitle: formData.meta_title.length,
    metaDescription: formData.meta_description.length,
    content: formData.content.length,
  }

  return (
    <div className={styles.editor}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/administrator" className={styles.backBtn}>
            ← Volver
          </Link>
          <h1>{article?.id ? 'Editar Artículo' : 'Nuevo Artículo'}</h1>
          <div className={styles.headerActions}>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className={styles.btnSecondary}
            >
              {showPreview ? 'Ocultar' : 'Vista Previa'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.container}>
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.layout}>
            {/* Editor Column */}
            <div className={styles.editorColumn}>
              {/* Title & Slug */}
              <div className={styles.section}>
                <h2>Contenido Principal</h2>
                
                <div className={styles.field}>
                  <label htmlFor="title">Título *</label>
                  <input
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Ej: Guía Completa de SEO Local para 2025"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="slug">Slug (URL) *</label>
                  <input
                    id="slug"
                    type="text"
                    value={formData.slug}
                    onChange={(e) => handleChange('slug', e.target.value)}
                    placeholder="guia-seo-local-2025"
                    required
                  />
                  <small>URL: /blog/{formData.slug || 'slug-del-articulo'}</small>
                </div>

                <div className={styles.field}>
                  <label htmlFor="excerpt">Extracto / Descripción corta *</label>
                  <textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleChange('excerpt', e.target.value)}
                    rows={3}
                    placeholder="Breve resumen del artículo (se muestra en listados)"
                    required
                  />
                </div>
              </div>

              {/* Content (Markdown) */}
              <div className={styles.section}>
                <div className={styles.fieldHeader}>
                  <label htmlFor="content">Contenido (Markdown) *</label>
                  <span className={styles.charCount}>{charCount.content} caracteres</span>
                </div>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleChange('content', e.target.value)}
                  rows={20}
                  placeholder="## Título de sección&#10;&#10;Tu contenido aquí...&#10;&#10;- Lista&#10;- De&#10;- Elementos"
                  required
                  className={styles.contentEditor}
                />
                <small>
                  Usa Markdown: ## Títulos, **negrita**, *cursiva*, - listas, [enlaces](url)
                </small>
              </div>

              {/* SEO Metadata */}
              <div className={styles.section}>
                <h2>SEO & Metadatos</h2>

                <div className={styles.field}>
                  <div className={styles.fieldHeader}>
                    <label htmlFor="meta_title">Meta Title</label>
                    <span className={`${styles.charCount} ${charCount.metaTitle > 70 ? styles.charWarning : ''}`}>
                      {charCount.metaTitle}/70
                    </span>
                  </div>
                  <input
                    id="meta_title"
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => handleChange('meta_title', e.target.value)}
                    placeholder="Título optimizado para buscadores (máx 70 caracteres)"
                  />
                </div>

                <div className={styles.field}>
                  <div className={styles.fieldHeader}>
                    <label htmlFor="meta_description">Meta Description</label>
                    <span className={`${styles.charCount} ${charCount.metaDescription > 160 ? styles.charWarning : ''}`}>
                      {charCount.metaDescription}/160
                    </span>
                  </div>
                  <textarea
                    id="meta_description"
                    value={formData.meta_description}
                    onChange={(e) => handleChange('meta_description', e.target.value)}
                    rows={3}
                    placeholder="Descripción para buscadores (máx 160 caracteres)"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="keywords">Keywords (separadas por comas)</label>
                  <input
                    id="keywords"
                    type="text"
                    value={formData.keywords}
                    onChange={(e) => handleChange('keywords', e.target.value)}
                    placeholder="seo local, google business, posicionamiento"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {/* Publish Actions */}
              <div className={styles.sidebarSection}>
                <h3>Publicación</h3>
                
                <div className={styles.checkboxField}>
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => handleChange('published', e.target.checked)}
                    />
                    <span>Publicado</span>
                  </label>
                </div>

                <div className={styles.checkboxField}>
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => handleChange('featured', e.target.checked)}
                    />
                    <span>⭐ Destacado</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={styles.btnPrimary}
                >
                  {loading ? 'Guardando...' : article?.id ? 'Actualizar' : 'Crear Artículo'}
                </button>
              </div>

              {/* Category */}
              <div className={styles.sidebarSection}>
                <h3>Categoría</h3>
                <select
                  value={formData.category_id}
                  onChange={(e) => handleChange('category_id', e.target.value)}
                  className={styles.select}
                >
                  <option value="">Sin categoría</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Featured Image */}
              <div className={styles.sidebarSection}>
                <h3>Imagen Destacada</h3>
                <input
                  type="text"
                  value={formData.featured_image}
                  onChange={(e) => handleChange('featured_image', e.target.value)}
                  placeholder="nombre-imagen.webp"
                  className={styles.input}
                />
                <small>Solo el nombre del archivo en /public/blog/</small>
                {formData.featured_image && (
                  <div className={styles.imagePreview}>
                    <img 
                      src={`/blog/${formData.featured_image}`} 
                      alt="Preview"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Delete */}
              {article?.id && (
                <div className={styles.sidebarSection}>
                  <h3>Zona de Peligro</h3>
                  {!confirmDelete ? (
                    <button
                      type="button"
                      onClick={() => setConfirmDelete(true)}
                      className={styles.btnDanger}
                    >
                      Eliminar Artículo
                    </button>
                  ) : (
                    <div className={styles.confirmDelete}>
                      <p>¿Seguro que quieres eliminarlo?</p>
                      <button
                        type="button"
                        onClick={handleDelete}
                        className={styles.btnDangerConfirm}
                        disabled={loading}
                      >
                        Sí, eliminar
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDelete(false)}
                        className={styles.btnSecondary}
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </form>

        {/* Preview */}
        {showPreview && (
          <div className={styles.preview}>
            <h2>Vista Previa</h2>
            <div className={styles.previewContent}>
              <h1>{formData.title || 'Título del artículo'}</h1>
              <p className={styles.previewExcerpt}>{formData.excerpt}</p>
              <div className={styles.previewBody}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {formData.content || '*Escribe contenido para ver la vista previa*'}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


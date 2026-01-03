'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Editor } from '@tinymce/tinymce-react'
import { createArticle, updateArticle } from './actions'
import ImagePicker from './ImagePicker'
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
  published_at?: string
}

interface ArticleEditorProps {
  article?: Article
  categories: Category[]
}

// Función para convertir Markdown a HTML
function markdownToHtml(markdown: string): string {
  if (!markdown) return ''
  
  // Si ya parece HTML, devolverlo tal cual
  if (markdown.trim().startsWith('<') && markdown.includes('</')) {
    return markdown
  }
  
  let html = markdown
  
  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  
  // Listas
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>')
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>')
  
  // Agrupar listas
  html = html.replace(/(<li>.*?<\/li>\n?)+/g, (match) => '<ul>' + match + '</ul>')
  
  // Line breaks
  html = html.replace(/\n\n+/g, '</p><p>')
  html = html.replace(/\n/g, '<br>')
  
  // Wrap in paragraphs
  if (!html.startsWith('<')) {
    html = '<p>' + html + '</p>'
  }
  
  return html
}

export default function ArticleEditor({ article, categories }: ArticleEditorProps) {
  const router = useRouter()
  const editorRef = useRef<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    content: article?.content ? markdownToHtml(article.content) : '',
    featured_image: article?.featured_image || '',
    author: article?.author || 'ESCALA Marketing',
    category_id: article?.category_id || '',
    meta_title: article?.meta_title || '',
    meta_description: article?.meta_description || '',
    keywords: article?.keywords?.join(', ') || '',
    published: article?.published || false,
    featured: article?.featured || false,
    published_at: (article && 'published_at' in article && article.published_at) ? new Date(article.published_at).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>(
    article?.featured_image ? `/blog/${article.featured_image}` : ''
  )

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      
      // Generar nombre del archivo
      const timestamp = Date.now()
      const ext = file.name.split('.').pop()
      const fileName = `${formData.slug || 'image'}-${timestamp}.${ext}`
      setFormData(prev => ({ ...prev, featured_image: fileName }))
    }
  }

  // Nuevo handler para ImagePicker
  const handleImageSelected = (file: File | null, imageName: string, preview: string) => {
    if (file) {
      // Nueva imagen subida
      setImageFile(file)
      setImagePreview(preview)
      setFormData(prev => ({ ...prev, featured_image: imageName }))
    } else {
      // Imagen existente seleccionada
      setImageFile(null)
      setImagePreview(preview)
      setFormData(prev => ({ ...prev, featured_image: imageName }))
    }
  }

  const handleSave = async () => {
    setLoading(true)
    setError('')

    try {
      // Obtener contenido del editor TinyMCE PRIMERO
      const content = editorRef.current?.getContent() || ''
      
      console.log('🔍 DEBUG - Guardando artículo:')
      console.log('- Article ID:', article?.id)
      console.log('- Content length:', content.length)
      
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
      if (!content || content.trim().length === 0) {
        throw new Error('El contenido es obligatorio')
      }

      // Si hay una nueva imagen, subirla primero a /public/blog/
      let finalImageName = formData.featured_image
      
      if (imageFile) {
        console.log('📸 Subiendo imagen a /public/blog/...')
        try {
          const uploadFormData = new FormData()
          uploadFormData.append('image', imageFile)
          uploadFormData.append('slug', formData.slug)
          
          const uploadResponse = await fetch('/api/upload-image', {
            method: 'POST',
            body: uploadFormData
          })
          
          if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json()
            throw new Error(errorData.error || 'Error al subir la imagen')
          }
          
          const uploadResult = await uploadResponse.json()
          finalImageName = uploadResult.fileName
          console.log('✅ Imagen subida:', finalImageName)
        } catch (uploadError: any) {
          console.error('❌ Error subiendo imagen:', uploadError)
          throw new Error(`Error al subir imagen: ${uploadError.message}`)
        }
      }

      // Crear FormData para enviar a Supabase
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('slug', formData.slug)
      formDataToSend.append('content', content)
      formDataToSend.append('featured_image', finalImageName)
      formDataToSend.append('author', formData.author)
      formDataToSend.append('category_id', formData.category_id)
      formDataToSend.append('meta_title', formData.meta_title)
      formDataToSend.append('meta_description', formData.meta_description)
      formDataToSend.append('keywords', formData.keywords)
      formDataToSend.append('published', formData.published.toString())
      formDataToSend.append('featured', formData.featured.toString())
      formDataToSend.append('published_at', formData.published_at)

      console.log('📤 Guardando en Supabase...')
      
      // Llamar a las Server Actions con try-catch
      let result
      try {
        if (article?.id) {
          console.log('🔄 Llamando a updateArticle con ID:', article.id)
          result = await updateArticle(article.id, formDataToSend)
        } else {
          console.log('🔄 Llamando a createArticle')
          result = await createArticle(formDataToSend)
        }
      } catch (actionError: any) {
        console.error('💥 Error llamando a Server Action:', actionError)
        throw new Error('Error al comunicarse con el servidor. Por favor, intenta de nuevo.')
      }
      
      console.log('✅ Resultado de Server Action:', result)
      
      // Verificar resultado
      if (!result || typeof result !== 'object') {
        throw new Error('Respuesta inválida del servidor')
      }
      
      if (result.error) {
        throw new Error(result.error)
      }
      
      if (!result.success) {
        throw new Error('El servidor no confirmó que se guardó correctamente')
      }
      
      // Todo OK - Redirect
      console.log('🎉 Artículo guardado exitosamente')
      router.push('/administrator')
      router.refresh()
      
    } catch (err: any) {
      console.error('❌ Error al guardar:', err)
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
              onClick={handleSave}
              className={styles.btnPrimary}
              disabled={loading}
            >
              {loading ? 'Guardando...' : 'Guardar y Cerrar'}
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

          {/* Editor TinyMCE */}
          <div className={styles.field}>
            <label>Contenido *</label>
            <Editor
              apiKey="zrk3s1w79rec2a3r59r0li1sejv9ou010c726epw91pen7kc"
              onInit={(_evt: any, editor: any) => {
                editorRef.current = editor
                
                // Registrar botón personalizado "Leer Más" (como en Joomla)
                editor.ui.registry.addButton('readmore', {
                  text: '📖 Leer Más',
                  tooltip: 'Insertar separador "Leer Más" (como Joomla)',
                  onAction: () => {
                    editor.insertContent('<hr class="readmore" />')
                  }
                })
              }}
              initialValue={formData.content}
              init={{
                height: 600,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount', 'pagebreak'
                ],
                toolbar_mode: 'wrap',
                toolbar: [
                  'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify',
                  'bullist numlist outdent indent | readmore pagebreak | removeformat | image link | code | help'
                ],
                // Autolink: Convertir URLs automáticamente en enlaces
                autolink_pattern: /^(https?:\/\/|www\.|(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,})/i,
                default_link_target: '_blank',
                link_default_protocol: 'https',
                content_style: `
                  body { font-family:Helvetica,Arial,sans-serif; font-size:16px; line-height:1.6 }
                  hr.readmore { 
                    border: none; 
                    border-top: 2px solid #e63946; 
                    margin: 30px 0;
                    position: relative;
                  }
                  hr.readmore::after {
                    content: "· · · · · Leer Más · · · · ·";
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: white;
                    padding: 0 10px;
                    color: #e63946;
                    font-weight: 600;
                    font-size: 11px;
                    letter-spacing: 2px;
                  }
                  a {
                    color: #4a7c9b;
                    text-decoration: underline;
                  }
                `,
                language: 'es',
                block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4',
                pagebreak_separator: '<!-- pagebreak -->',
                pagebreak_split_block: true,
                image_title: true,
                automatic_uploads: false,
                file_picker_types: 'image',
                file_picker_callback: (callback: any, value: any, meta: any) => {
  if (meta.filetype === 'image') {
                    const input = document.createElement('input')
                    input.setAttribute('type', 'file')
                    input.setAttribute('accept', 'image/*')
                    
                    input.onchange = (e: Event) => {
                      const target = e.target as HTMLInputElement
                      const file = target.files?.[0]
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = () => {
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
              📖 <strong>Leer Más</strong>: Separa el extracto del contenido completo (lo que se ve en listados)
            </span>
            <span className={styles.hint}>
              📄 <strong>Salto de Página</strong>: Divide un artículo largo en múltiples páginas
            </span>
            <span className={styles.hint}>
              💡 Usa el botón <strong>"Code"</strong> para alternar entre modo visual y HTML
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
            <ImagePicker
              currentImage={formData.featured_image}
              onImageSelected={handleImageSelected}
            />
            {imagePreview && (
              <div className={styles.imagePreview}>
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>

          {/* Fecha de Publicación */}
          <div className={styles.sidebarCard}>
            <h3>Fecha de Publicación</h3>
            <input
              type="datetime-local"
              value={formData.published_at}
              onChange={(e) => handleChange('published_at', e.target.value)}
              className={styles.dateInput}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

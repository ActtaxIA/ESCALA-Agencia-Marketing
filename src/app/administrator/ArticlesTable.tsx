'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getBlogImageUrl } from '@/lib/supabase/storage'
import { togglePublished, deleteArticle } from './actions'
import styles from './ArticlesTable.module.css'

interface Article {
  id: string
  title: string
  slug: string
  published: boolean
  featured: boolean
  views: number
  published_at: string | null
  created_at: string
  updated_at: string
  featured_image: string | null
  category: { name: string } | { name: string }[] | null
}

interface ArticlesTableProps {
  articles: Article[]
}

type SortField = 'title' | 'views' | 'published_at' | 'created_at'
type SortDirection = 'asc' | 'desc'

export default function ArticlesTable({ articles }: ArticlesTableProps) {
  const router = useRouter()
  
  // Cargar preferencias desde localStorage
  const [sortField, setSortField] = useState<SortField>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_sort_field')
      return (saved as SortField) || 'created_at'
    }
    return 'created_at'
  })
  
  const [sortDirection, setSortDirection] = useState<SortDirection>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_sort_direction')
      return (saved as SortDirection) || 'desc'
    }
    return 'desc'
  })
  
  const [page, setPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_page')
      return saved ? parseInt(saved) : 1
    }
    return 1
  })
  
  const [perPage, setPerPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_per_page')
      return saved ? parseInt(saved) : 10
    }
    return 10
  })
  
  const [togglingId, setTogglingId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Guardar preferencias en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('admin_sort_field', sortField)
  }, [sortField])

  useEffect(() => {
    localStorage.setItem('admin_sort_direction', sortDirection)
  }, [sortDirection])

  useEffect(() => {
    localStorage.setItem('admin_page', page.toString())
  }, [page])

  useEffect(() => {
    localStorage.setItem('admin_per_page', perPage.toString())
  }, [perPage])

  // Función para toggle publicación
  const handleTogglePublished = async (id: string, currentState: boolean) => {
    setTogglingId(id)
    try {
      await togglePublished(id, currentState)
      router.refresh()
    } catch (error: any) {
      alert('Error al cambiar el estado: ' + error.message)
    } finally {
      setTogglingId(null)
    }
  }

  // Función para borrar artículo
  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`¿Estás seguro de que quieres borrar el artículo "${title}"?\n\nEsta acción no se puede deshacer.`)) {
      return
    }

    setDeletingId(id)
    try {
      await deleteArticle(id)
      router.refresh()
    } catch (error: any) {
      alert('Error al borrar el artículo: ' + error.message)
    } finally {
      setDeletingId(null)
    }
  }

  // Función para ordenar
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  // Artículos ordenados
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      let aValue: any
      let bValue: any

      switch (sortField) {
        case 'title':
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break
        case 'views':
          aValue = a.views || 0
          bValue = b.views || 0
          break
        case 'published_at':
          aValue = a.published_at ? new Date(a.published_at).getTime() : 0
          bValue = b.published_at ? new Date(b.published_at).getTime() : 0
          break
        case 'created_at':
          aValue = new Date(a.created_at).getTime()
          bValue = new Date(b.created_at).getTime()
          break
        default:
          return 0
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }, [articles, sortField, sortDirection])

  // Paginación
  const totalPages = perPage === -1 ? 1 : Math.ceil(sortedArticles.length / perPage)
  const paginatedArticles = perPage === -1 
    ? sortedArticles 
    : sortedArticles.slice((page - 1) * perPage, page * perPage)

  // Resetear página al cambiar perPage
  const handlePerPageChange = (value: number) => {
    setPerPage(value)
    setPage(1)
  }

  // Indicador de ordenamiento
  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <span className={styles.sortIcon}>⇅</span>
    return <span className={styles.sortIconActive}>{sortDirection === 'asc' ? '↑' : '↓'}</span>
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th 
                className={styles.sortable} 
                onClick={() => handleSort('title')}
              >
                Artículo <SortIcon field="title" />
              </th>
              <th>Categoría</th>
              <th>Estado</th>
              <th 
                className={styles.sortable} 
                onClick={() => handleSort('views')}
              >
                Vistas <SortIcon field="views" />
              </th>
              <th 
                className={styles.sortable} 
                onClick={() => handleSort('created_at')}
              >
                Creación <SortIcon field="created_at" />
              </th>
              <th 
                className={styles.sortable} 
                onClick={() => handleSort('published_at')}
              >
                Publicación <SortIcon field="published_at" />
              </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paginatedArticles.map((article) => {
              const categoryData = Array.isArray(article.category) 
                ? article.category[0] 
                : article.category
              const categoryName = categoryData?.name || 'Sin categoría'
              
              return (
                <tr key={article.id}>
                  <td>
                    <div className={styles.articleCell}>
                      {article.featured_image && (
                        <img 
                          src={getBlogImageUrl(article.featured_image)} 
                          alt={article.title}
                          className={styles.thumbnail}
                        />
                      )}
                      <div>
                        <strong className={styles.articleTitle}>{article.title}</strong>
                        {article.featured && (
                          <span className={styles.badge}>⭐ Destacado</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{categoryName}</td>
                  <td>
                    <label className={styles.checkboxLabel}>
                      <input 
                        type="checkbox" 
                        checked={article.published}
                        onChange={() => handleTogglePublished(article.id, article.published)}
                        disabled={togglingId === article.id}
                        className={styles.checkbox}
                      />
                      <span className={article.published ? styles.statusPublished : styles.statusDraft}>
                        {togglingId === article.id 
                          ? '⏳ Cambiando...' 
                          : article.published ? '✓ Publicado' : '○ Borrador'}
                      </span>
                    </label>
                  </td>
                  <td className={styles.views}>{article.views || 0}</td>
                  <td className={styles.date}>
                    {new Date(article.created_at).toLocaleDateString('es-ES')}
                  </td>
                  <td className={styles.date}>
                    {article.published_at 
                      ? new Date(article.published_at).toLocaleDateString('es-ES')
                      : '—'}
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <Link 
                        href={`/administrator/articles/${article.id}`}
                        className={styles.btnEdit}
                      >
                        Editar
                      </Link>
                      <Link 
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        className={styles.btnView}
                      >
                        Ver
                      </Link>
                      <button
                        onClick={() => handleDelete(article.id, article.title)}
                        disabled={deletingId === article.id}
                        className={styles.btnDelete}
                        title="Borrar artículo"
                      >
                        {deletingId === article.id ? '⏳' : '🗑️'}
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className={styles.pagination}>
        <div className={styles.perPage}>
          <span>Mostrar:</span>
          <select 
            value={perPage} 
            onChange={(e) => handlePerPageChange(Number(e.target.value))}
            className={styles.select}
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={-1}>Todos</option>
          </select>
          <span className={styles.total}>
            {perPage === -1 
              ? `Total: ${sortedArticles.length}` 
              : `${(page - 1) * perPage + 1}-${Math.min(page * perPage, sortedArticles.length)} de ${sortedArticles.length}`}
          </span>
        </div>

        {perPage !== -1 && totalPages > 1 && (
          <div className={styles.pages}>
            <button 
              onClick={() => setPage(1)} 
              disabled={page === 1}
              className={styles.pageBtn}
            >
              « Primera
            </button>
            <button 
              onClick={() => setPage(page - 1)} 
              disabled={page === 1}
              className={styles.pageBtn}
            >
              ‹ Anterior
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => {
                // Mostrar: primera, última, actual, y 2 a cada lado
                return p === 1 || p === totalPages || Math.abs(p - page) <= 2
              })
              .map((p, idx, arr) => {
                // Añadir "..." si hay gap
                const prevPage = arr[idx - 1]
                const showEllipsis = prevPage && p - prevPage > 1

                return (
                  <span key={p}>
                    {showEllipsis && <span className={styles.ellipsis}>...</span>}
                    <button
                      onClick={() => setPage(p)}
                      className={page === p ? styles.pageActive : styles.pageBtn}
                    >
                      {p}
                    </button>
                  </span>
                )
              })}

            <button 
              onClick={() => setPage(page + 1)} 
              disabled={page === totalPages}
              className={styles.pageBtn}
            >
              Siguiente ›
            </button>
            <button 
              onClick={() => setPage(totalPages)} 
              disabled={page === totalPages}
              className={styles.pageBtn}
            >
              Última »
            </button>
          </div>
        )}
      </div>
    </>
  )
}


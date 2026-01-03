import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import LogoutButton from './LogoutButton'
import ArticlesTable from './ArticlesTable'
import styles from './admin.module.css'

export default async function AdminDashboard() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/administrator/login')
  }

  // Obtener artículos con todos los campos necesarios
  const { data: articles, error } = await supabase
    .from('articles')
    .select(`
      id,
      title,
      slug,
      published,
      featured,
      views,
      published_at,
      created_at,
      updated_at,
      featured_image,
      category:categories(name)
    `)
    .order('created_at', { ascending: false })

  const stats = {
    total: articles?.length || 0,
    published: articles?.filter(a => a.published).length || 0,
    drafts: articles?.filter(a => !a.published).length || 0,
    featured: articles?.filter(a => a.featured).length || 0,
  }

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1>Panel de Administración</h1>
            <p>{user.email}</p>
          </div>
          <div className={styles.headerActions}>
            <Link href="/" className={styles.btnSecondary}>
              Ver Sitio
            </Link>
            <Link href="/administrator/articles/new" className={styles.btnPrimary}>
              + Nuevo Artículo
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.total}</div>
          <div className={styles.statLabel}>Total Artículos</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.published}</div>
          <div className={styles.statLabel}>Publicados</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.drafts}</div>
          <div className={styles.statLabel}>Borradores</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.featured}</div>
          <div className={styles.statLabel}>Destacados</div>
        </div>
      </div>

      {/* Articles Table */}
      <div className={styles.content}>
        <div className={styles.tableHeader}>
          <h2>Artículos</h2>
        </div>

        {error && (
          <div className={styles.error}>
            Error al cargar artículos: {error.message}
          </div>
        )}

        {articles && articles.length > 0 ? (
          <ArticlesTable articles={articles} />
        ) : (
          <div className={styles.empty}>
            <p>No hay artículos todavía.</p>
            <Link href="/administrator/articles/new" className={styles.btnPrimary}>
              Crear el primero
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}


import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import ArticleEditor from '../../ArticleEditor'

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/administrator/login')
  }

  // Obtener artículo
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !article) {
    notFound()
  }

  // Obtener categorías
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name, slug')
    .order('name')

  return <ArticleEditor article={article} categories={categories || []} />
}


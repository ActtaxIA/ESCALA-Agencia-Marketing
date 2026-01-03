import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ArticleEditor from '../ArticleEditor'

export default async function NewArticlePage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/administrator/login')
  }

  // Obtener categorías
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name, slug')
    .order('name')

  return <ArticleEditor categories={categories || []} />
}


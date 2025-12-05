import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ ERROR: Variables de Supabase no encontradas')
    console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'OK' : 'MISSING')
    console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'OK' : 'MISSING')
    throw new Error('Missing Supabase environment variables')
  }

  console.log('✅ Supabase client creado correctamente')
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}


'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import styles from './admin.module.css'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/administrator/login')
    router.refresh()
  }

  return (
    <button onClick={handleLogout} className={styles.btnLogout}>
      Cerrar Sesión
    </button>
  )
}


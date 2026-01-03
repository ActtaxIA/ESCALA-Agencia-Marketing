import { PropsWithChildren } from 'react'

export default function AdminLayout({ children }: PropsWithChildren) {
  // No verificar auth aquí, lo haremos en las páginas individuales
  return <>{children}</>
}

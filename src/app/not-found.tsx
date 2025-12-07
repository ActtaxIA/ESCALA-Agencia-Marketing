import Link from 'next/link'
import { StandardLayout } from '@/components/layout'

export default function NotFound() {
  return (
    <StandardLayout>
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--stripe-7)' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
          Página no encontrada
        </h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link 
          href="/" 
          style={{
            background: 'linear-gradient(135deg, var(--stripe-7), var(--stripe-8))',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Volver a inicio
        </Link>
      </div>
    </StandardLayout>
  )
}












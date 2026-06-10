import dynamic from 'next/dynamic'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import type { Metadata } from 'next'

const Universo3D = dynamic(() => import('@/components/sections/Servicios/Universo3D'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: '100vh',
        background: '#0F1729',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F4F2EE',
        fontFamily: 'system-ui, sans-serif',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        fontSize: '0.75rem',
      }}
    >
      Despegando…
    </div>
  ),
})

export const metadata: Metadata = {
  title: 'Servicios | ESCALA Marketing Digital',
  description:
    'Explora el universo ESKALA: 8 servicios de marketing digital en 3D. Diseño web, SEO local, redes sociales, Google Ads, apps con IA, chatbots, branding y email marketing en Murcia.',
  keywords: [
    'servicios marketing digital murcia',
    'diseño web murcia',
    'seo local murcia',
    'redes sociales murcia',
    'google ads murcia',
    'apps ia murcia',
    'chatbots murcia',
    'branding murcia',
    'email marketing murcia',
  ],
  openGraph: {
    title: 'El Universo ESKALA | Servicios de Marketing Digital',
    description:
      'Travesía 3D por nuestros 8 servicios de marketing digital. Cada planeta es un servicio real para hacer crecer tu negocio en Murcia.',
    url: 'https://www.eskaladigital.com/servicios',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'ESKALA - Universo de Servicios de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Universo ESKALA | Servicios de Marketing Digital',
    description: 'Travesía 3D por nuestros 8 servicios de marketing digital en Murcia.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/servicios',
  },
}

export default function ServiciosPage() {
  return (
    <>
      <Universo3D />
      <WhatsAppButton />
    </>
  )
}

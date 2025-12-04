import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ESCALA | Agencia de Marketing Digital en Murcia',
    template: '%s | ESCALA Marketing',
  },
  description: 'Agencia de marketing digital en Murcia. Diseño web, SEO, redes sociales, Google Ads y aplicaciones con IA. Llevamos tu negocio al siguiente nivel.',
  keywords: ['agencia marketing murcia', 'marketing digital murcia', 'diseño web murcia', 'seo murcia', 'redes sociales murcia'],
  authors: [{ name: 'ESCALA Marketing' }],
  creator: 'ESCALA Marketing',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://escalamarketing.es',
    siteName: 'ESCALA Marketing',
    title: 'ESCALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESCALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={outfit.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}

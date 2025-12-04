import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Contacto/Hero'
import ContactForm from '@/components/sections/Contacto/ContactForm'
import ContactInfo from '@/components/sections/Contacto/ContactInfo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Presupuesto Sin Compromiso',
  description: 'Contacta con ESCALA Marketing en Murcia. Solicita presupuesto sin compromiso para tu proyecto de marketing digital, web o SEO. Respuesta en 24h.',
  keywords: [
    'contacto agencia marketing murcia',
    'presupuesto marketing digital',
    'consulta gratuita seo',
    'telefono escala marketing',
  ],
  openGraph: {
    title: 'Contacto | ESCALA Marketing Murcia',
    description: 'Cuéntanos tu proyecto y te enviamos presupuesto en 24 horas. Sin compromiso.',
    url: 'https://escalamarketing.es/contacto',
    siteName: 'ESCALA Marketing',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacta con ESCALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | ESCALA Marketing Murcia',
    description: 'Cuéntanos tu proyecto y te enviamos presupuesto en 24 horas.',
    images: ['/og-contacto.jpg'],
  },
  alternates: {
    canonical: 'https://escalamarketing.es/contacto',
  },
}

export default function ContactoPage() {
  return (
    <StandardLayout>
      <Hero />
      <ContactForm />
      <ContactInfo />
    </StandardLayout>
  )
}


import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Exitos/Hero'
import Testimonials from '@/components/sections/Exitos/Testimonials'
import Results from '@/components/sections/Exitos/Results'
import CTA from '@/components/sections/Exitos/CTA'

export const metadata = {
  title: 'Casos de Éxito',
  description: 'Testimonios reales de clientes satisfechos. Descubre cómo ayudamos a empresas a crecer.',
}

export default function ExitosPage() {
  return (
    <StandardLayout>
      <Hero />
      <Testimonials />
      <Results />
      <CTA />
    </StandardLayout>
  )
}


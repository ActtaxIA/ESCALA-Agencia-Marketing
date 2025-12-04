import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/QuienesSomos/Hero'
import About from '@/components/sections/QuienesSomos/About'
import Services from '@/components/sections/QuienesSomos/Services'
import Values from '@/components/sections/QuienesSomos/Values'
import CTA from '@/components/sections/QuienesSomos/CTA'

export const metadata = {
  title: 'Quiénes Somos',
  description: 'Agencia de marketing digital en Murcia. Marketing digital, desarrollo web y estrategias que generan resultados reales.',
}

export default function QuienesSomosPage() {
  return (
    <StandardLayout>
      <Hero />
      <About />
      <Services />
      <Values />
      <CTA />
    </StandardLayout>
  )
}

import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Metodologia/Hero'
import Process from '@/components/sections/Metodologia/Process'
import Benefits from '@/components/sections/Metodologia/Benefits'
import CTA from '@/components/sections/Metodologia/CTA'

export const metadata = {
  title: 'Metodología',
  description: 'Nuestra metodología probada para escalar tu negocio. Proceso claro, transparente y orientado a resultados.',
}

export default function MetodologiaPage() {
  return (
    <StandardLayout>
      <Hero />
      <Process />
      <Benefits />
      <CTA />
    </StandardLayout>
  )
}


import { StandardLayout } from '@/components/layout'
import PortfolioContent from '@/components/sections/Portfolio/PortfolioContent'

export const metadata = {
  title: 'Portfolio | Proyectos de Marketing Digital',
  description: 'Proyectos de marketing digital, diseño web y branding realizados para empresas en Murcia y toda España. Casos reales con resultados.',
}

export default function Portfolio() {
  return (
    <StandardLayout>
      <PortfolioContent />
    </StandardLayout>
  )
}

import { StripeNav } from './StripeNav'
import { Header } from './Header'
import { Footer } from './Footer'
import BackToTop from './BackToTop'
import WhatsAppButton from './WhatsAppButton'

export default function StandardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StripeNav position="left" />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      
      {/* Botones flotantes */}
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}

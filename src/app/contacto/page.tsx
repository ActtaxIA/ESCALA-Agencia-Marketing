import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Contacto/Hero'
import ContactForm from '@/components/sections/Contacto/ContactForm'
import ContactInfo from '@/components/sections/Contacto/ContactInfo'

export const metadata = {
  title: 'Contacto',
  description: 'Contacta con ESCALA Marketing. Cuéntanos tu proyecto y te ayudaremos a hacerlo realidad.',
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


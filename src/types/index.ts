// Tipos para la base de datos

export interface Service {
  id: string
  slug: string
  title: string
  description: string | null
  content: string | null
  stripe_number: number
  icon: string | null
  featured: boolean
  meta_title: string | null
  meta_description: string | null
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content: string
  featured_image: string | null
  author: string | null
  category: string | null
  tags: string[] | null
  is_published: boolean
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
  read_time: number | null
  views: number
  created_at: string
  updated_at: string
}

export interface Portfolio {
  id: string
  title: string
  slug: string
  client_name: string | null
  description: string | null
  challenge: string | null
  solution: string | null
  results: string | null
  images: string[] | null
  featured_image: string | null
  services_used: string[] | null
  url: string | null
  is_featured: boolean
  is_active: boolean
  created_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_company: string | null
  client_position: string | null
  client_image: string | null
  content: string
  rating: number
  service_id: string | null
  is_featured: boolean
  is_active: boolean
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  service_interested: string | null
  message: string
  source: string | null
  is_read: boolean
  created_at: string
}

// Tipos para la navegación
export interface NavItem {
  href: string
  label: string
  stripeNumber: number
  icon: string
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Inicio', stripeNumber: 1, icon: '🌙' },
  { href: '/quienes-somos', label: 'Nosotros', stripeNumber: 2, icon: '✦' },
  { href: '/metodologia', label: 'Metodología', stripeNumber: 3, icon: '◈' },
  { href: '/servicios', label: 'Servicios', stripeNumber: 4, icon: '☀' },
  { href: '/portfolio', label: 'Portfolio', stripeNumber: 5, icon: '◐' },
  { href: '/exitos', label: 'Éxitos', stripeNumber: 6, icon: '▲' },
  { href: '/blog', label: 'Blog', stripeNumber: 7, icon: '◆' },
  { href: '/contacto', label: 'Contacto', stripeNumber: 8, icon: '★' },
]

// Colores de las franjas
export const STRIPE_COLORS = {
  1: '#0f1729',
  2: '#1e3a5f',
  3: '#4a7c9b',
  4: '#87ceeb',
  5: '#fff5e6',
  6: '#ffb366',
  7: '#ff6b35',
  8: '#e84a23',
} as const

// Franjas claras que necesitan texto oscuro
export const LIGHT_STRIPES = [4, 5, 6]

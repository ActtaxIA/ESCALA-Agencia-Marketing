# 📖 Guía de Desarrollo - ESCALA Marketing

Esta guía contiene las instrucciones para desarrollar y mantener la web de ESCALA.

---

## 📐 Los 3 Layouts de la Web

### 1️⃣ HOME (`/`)
```
┌─────────────────────────────────────────────┐
│                                             │
│    [8 FRANJAS VERTICALES INTERACTIVAS]      │
│                                             │
│    🌙 ✦ ◈ ☀ ◐ ▲ ◆ ★                        │
│                                             │
│              ESCALA                         │
│         Agencia de Marketing                │
│                                             │
│       explora · descubre · escala           │
│                                             │
└─────────────────────────────────────────────┘
```
- **Sin Header**: No hay menú de navegación
- **Sin Footer**: No hay pie de página
- **Navegación**: Click en las franjas
- **Componente**: `<HomeStripes />`

---

### 2️⃣ SERVICIOS (`/servicios`)
```
┌─────────────────────────────────────────────┐
│  Inicio · Nosotros · Metodología · etc.     │  ← Menú transparente SIN logo
├─────────────────────────────────────────────┤
│                                             │
│    [8 FRANJAS: NOCHE→AMANECER]              │
│                                             │
│              ESCALA                         │
│         Nuestros Servicios                  │
│                  🌙                          │
│                                             │
│       8 servicios · un objetivo             │
│                                             │
└─────────────────────────────────────────────┘
```
- **Header**: Transparente, centrado, SIN logo (ya aparece ESCALA en la página)
- **Sin Footer**: No hay pie de página
- **Navegación**: Click en las franjas lleva a `/servicios/[slug]`
- **Componente**: `<ServicesStripes />`

---

### 3️⃣ TODAS LAS DEMÁS PÁGINAS
```
┌─────────────────────────────────────────────┐
│ ESCALA | Inicio Nosotros Servicios▾ [CTA]   │  ← Header blanco con logo
├──┬──────────────────────────────────────┬───┤
│  │                                      │   │
│F │        CONTENIDO DE LA PÁGINA        │ F │  ← StripeNav laterales
│R │                                      │ R │
│A │                                      │ A │
│N │                                      │ N │
│J │                                      │ J │
│A │                                      │ A │
│S │                                      │ S │
│  │                                      │   │
├──┴──────────────────────────────────────┴───┤
│               FOOTER                        │  ← Footer completo
└─────────────────────────────────────────────┘
[↑]                                       [💬]  ← Botones flotantes
```
- **Header**: Blanco, logo ESCALA, todos los links, dropdown en Servicios
- **Footer**: Completo
- **StripeNav**: Franjas laterales 60px
- **BackToTop**: `left: 80px`
- **WhatsApp**: `right: 80px`, +34 626 823 404
- **Componente**: `<StandardLayout>{children}</StandardLayout>`

---

## 🏗️ Cómo Crear una Nueva Página

### Página con StandardLayout (lo más común)

```tsx
// src/app/nueva-pagina/page.tsx
import { StandardLayout } from '@/components/layout'

export const metadata = {
  title: 'Título de la Página',
  description: 'Descripción SEO...',
}

export default function NuevaPagina() {
  return (
    <StandardLayout>
      {/* Tu contenido aquí */}
    </StandardLayout>
  )
}
```

### Página con Diseño Especial (sin StandardLayout)

```tsx
// src/app/pagina-especial/page.tsx
import MiComponenteEspecial from '@/components/sections/MiComponente'

export const metadata = {
  title: 'Página Especial',
  description: 'Descripción...',
}

export default function PaginaEspecial() {
  return <MiComponenteEspecial />
}
```

---

## 🎨 Sistema de Colores

```css
/* Variables CSS en globals.css */
:root {
  /* Franjas del día */
  --stripe-1: #0f1729;  /* Noche oscura */
  --stripe-2: #1e3a5f;  /* Azul noche */
  --stripe-3: #4a7c9b;  /* Amanecer */
  --stripe-4: #87ceeb;  /* Mañana */
  --stripe-5: #fff5e6;  /* Mediodía */
  --stripe-6: #ffb366;  /* Tarde */
  --stripe-7: #ff6b35;  /* Atardecer */
  --stripe-8: #e84a23;  /* Crepúsculo */
  
  /* Base */
  --white: #ffffff;
  --cream: #fafafa;
  --text: #1a1a2e;
  --text-light: #64748b;
}
```

---

## 📦 Componentes Reutilizables

### Sección con Fade-up
```tsx
'use client'
import { useEffect } from 'react'

export default function MiSeccion() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section>
      <div className="fade-up">Este contenido aparece con animación</div>
    </section>
  )
}
```

### Separador de Franjas
```tsx
import { StripeDivider } from '@/components/layout'

<StripeDivider />  // Añade entre secciones
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1025px) {
  /* StripeNav visible (60px) */
  /* Botones flotantes a 80px de los bordes */
}

/* Tablet */
@media (max-width: 1024px) {
  /* StripeNav más pequeño (40px) */
}

/* Móvil */
@media (max-width: 768px) {
  /* Sin StripeNav */
  /* Botones flotantes a 1rem de los bordes */
  /* Header con menú hamburguesa */
}
```

---

## ✅ Checklist Nueva Página

- [ ] Crear `src/app/[ruta]/page.tsx`
- [ ] Añadir metadata completa:
  - [ ] `title` único y descriptivo
  - [ ] `description` optimizada para SEO (150-160 caracteres)
  - [ ] `keywords` relevantes
  - [ ] **`alternates.canonical`** con URL completa (ej: `https://www.eskaladigital.com/ruta`)
  - [ ] OpenGraph y Twitter Cards
- [ ] Usar `StandardLayout` si tiene header/footer
- [ ] Añadir `StripeDivider` entre secciones (máx 1)
- [ ] Añadir animaciones `fade-up`
- [ ] Comprobar responsive
- [ ] Añadir a navegación si es necesario
- [ ] Verificar SEO (meta tags, OpenGraph)
- [ ] Optimizar imágenes a WebP

### Ejemplo de Metadata Completa

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título de la Página | ESKALA',
  description: 'Descripción breve y atractiva para SEO (150-160 caracteres)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: 'https://www.eskaladigital.com/ruta-de-la-pagina',
  },
  openGraph: {
    title: 'Título de la Página',
    description: 'Descripción para redes sociales',
    url: 'https://www.eskaladigital.com/ruta-de-la-pagina',
    images: [
      {
        url: '/og-imagen.jpg',
        width: 1200,
        height: 630,
        alt: 'Descripción de la imagen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Título de la Página',
    description: 'Descripción para Twitter',
    images: ['/og-imagen.jpg'],
  },
}
```

---

## 🔗 URLs Canónicas

**⚠️ IMPORTANTE**: Todas las páginas deben incluir `alternates.canonical` en su metadata.

### Configuración Global
- **Dominio canónico**: `https://www.eskaladigital.com` (con www)
- **metadataBase**: Configurado en `src/app/layout.tsx`
- **Redirects 301**: Configurados en `next.config.js`
  - `eskaladigital.com` → `www.eskaladigital.com`
  - `escalamarketing.es` → `www.eskaladigital.com`

### Para Páginas Estáticas
Añadir siempre:
```tsx
alternates: {
  canonical: 'https://www.eskaladigital.com/ruta-completa',
}
```

### Para Páginas Dinámicas (Blog, Portfolio)
Usar la variable de entorno:
```tsx
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eskaladigital.com'

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    // ... otros metadatos
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}`,
    },
  }
}
```

📖 **Documentación completa**: Ver `CANONICAL-URLS-SEO.md`

---

## 🖼️ Gestión de Imágenes

### Convertir imágenes a WebP

1. **Añadir imagen** original a `/images/IA/` (PNG, JPG, GIF)
2. **Ejecutar script:**
   ```bash
   node scripts/convert-images-to-webp.js
   ```
3. La imagen WebP se genera automáticamente en `/public/blog/`
4. **Reducción promedio:** 93% del tamaño original
5. Disponible inmediatamente en el selector del administrador

### Script para imagen individual

```bash
node scripts/convert-single-image.js
```

---

## 📝 Gestión del Blog

### Panel de Administración

**URL:** `/administrator`

**Funcionalidades:**
- 🔍 Buscar artículos por texto
- ➕ Crear nuevo artículo
- ✏️ Editar artículos existentes
- 👁️ Vista previa de artículos
- 🗑️ Eliminar artículos (con confirmación)
- 📊 Ver estadísticas
- 🖼️ Selector de imágenes con modal de galería

### Publicación Programada

Los artículos con `published_at` en el futuro:
- ❌ No aparecen en `/blog`
- ❌ No aparecen en el slider de destacados
- ❌ No son accesibles por URL directa
- ✅ Se publican automáticamente en la fecha programada

### Categorías del Blog

Ver documentación completa en: `docs/CATEGORIAS-BLOG.md`

Categorías disponibles:
- 📈 SEO y Posicionamiento
- 🎨 Diseño Web
- 📱 Redes Sociales
- 🎯 Publicidad Digital
- 🤖 IA / Estrategia Digital
- 📧 Email Marketing
- ✍️ Copywriting
- 📋 Casos de Estudio

---

## 🔧 Scripts Útiles

### Desarrollo
```bash
npm run dev              # Servidor de desarrollo
npm run build            # Build de producción
npm run start            # Servidor de producción
npm run lint             # Linter
```

### Imágenes
```bash
node scripts/convert-images-to-webp.js     # Convertir todas
node scripts/convert-single-image.js       # Convertir una
node scripts/delete-non-webp-images.js     # Limpiar antiguas
```

### Base de datos (Supabase)
Ver scripts SQL en carpeta `supabase/`:
- `check-article-metadata.sql` - Verificar metadatos
- `check-blog-categories.sql` - Verificar categorías
- `update-images-to-webp.sql` - Actualizar referencias
- `regenerate-excerpts-smart.sql` - Regenerar excerpts

---

*Última actualización: 4 Enero 2025*

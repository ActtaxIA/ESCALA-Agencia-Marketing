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
- [ ] Añadir metadata (title, description)
- [ ] Usar `StandardLayout` si tiene header/footer
- [ ] Añadir `StripeDivider` entre secciones
- [ ] Añadir animaciones `fade-up`
- [ ] Comprobar responsive
- [ ] Añadir a navegación si es necesario

---

*Última actualización: Diciembre 2024*

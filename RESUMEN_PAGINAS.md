# 📄 Resumen de Páginas - ESCALA Marketing

Estado actual de todas las páginas de la web.

---

## 📐 Tipos de Layout

| Layout | Header | Footer | StripeNav | Botones Flotantes |
|--------|--------|--------|-----------|-------------------|
| **Home** | ❌ | ❌ | ❌ | ❌ |
| **Servicios** | ✅ Transparente sin logo | ❌ | ❌ | ❌ |
| **StandardLayout** | ✅ Blanco con logo | ✅ | ✅ | ✅ BackToTop + WhatsApp |

---

## 🏠 Páginas Principales

### ✅ HOME (`/`)
- **Layout**: Especial (sin header, sin footer)
- **Componente**: `HomeStripes`
- **Descripción**: 8 franjas verticales interactivas representando "el viaje del día"
- **Loader**: "ESCALA" con animación
- **Elementos**: Logo, hint "explora · descubre · escala", sol en franja 6, estrellas en franja 8

### ✅ QUIÉNES SOMOS (`/quienes-somos`)
- **Layout**: StandardLayout
- **Secciones**: Hero, About, Services preview, Values, CTA
- **Descripción**: Historia, equipo y valores de ESCALA

### ✅ METODOLOGÍA (`/metodologia`)
- **Layout**: StandardLayout
- **Secciones**: Hero, Phases, Process, Tools, CTA
- **Descripción**: Proceso de trabajo y fases del proyecto

### ✅ SERVICIOS (`/servicios`)
- **Layout**: Especial (menú transparente sin logo, sin footer)
- **Componente**: `ServicesStripes`
- **Descripción**: 8 franjas con temática "noche→amanecer" (colores invertidos)
- **Elementos**: Luna en el centro, estrellas, navbar centrado
- **Navegación**: Click en cada franja lleva al servicio correspondiente

### ✅ PORTFOLIO (`/portfolio`)
- **Layout**: StandardLayout
- **Componente**: `PortfolioContent`
- **Base de datos**: ✅ Supabase (9 proyectos reales)
- **Secciones**: Hero compacto con filtros, Grid de proyectos, Stats, Modal de proyecto, CTA
- **Features**: 
  - Filtro por categoría (Web, SEO, Social, Ads, Branding, IA)
  - Modal con detalle al hacer click
  - Resultados destacados (métricas JSONB)
  - Imágenes reales de cada proyecto web
  - Link a página de detalle `/portfolio/[slug]`

### ✅ ÉXITOS (`/exitos`)
- **Layout**: StandardLayout
- **Secciones**: Hero, Testimonials, Results, CTA
- **Descripción**: Casos de éxito y testimonios de clientes

### ✅ BLOG (`/blog`)
- **Layout**: StandardLayout
- **Componente**: `BlogHero` + `FeaturedPost` + `BlogGrid`
- **Base de datos**: ✅ Supabase (9 artículos + 6 categorías)
- **Features**:
  - Buscador
  - Filtros por categoría
  - Post destacado (campo `featured = true`)
  - Grid de posts (lee desde `articles` table)
  - Sidebar con categorías dinámicas, posts populares por views
  - Newsletter subscription form
  - Botón "Cargar más"

### ✅ CONTACTO (`/contacto`)
- **Layout**: StandardLayout
- **Secciones**: Hero, Contact Form, Map, Info, CTA
- **Descripción**: Formulario de contacto y datos

---

## 🛠️ Páginas de Servicios (Landings SEO)

Todas usan `StandardLayout` con los componentes de `ServicioDetalle`:

| Servicio | URL | Target SEO |
|----------|-----|------------|
| 🌐 Diseño Web | `/servicios/diseno-web` | diseño web murcia |
| 📈 SEO Local | `/servicios/seo-local` | seo murcia |
| 📱 Redes Sociales | `/servicios/redes-sociales` | community manager murcia |
| 🎯 Google Ads | `/servicios/google-ads` | google ads murcia |
| 🤖 Apps con IA | `/servicios/apps-ia` | inteligencia artificial murcia |
| 📸 Fotografía | `/servicios/fotografia` | fotografo profesional murcia |
| ✏️ Branding | `/servicios/branding` | diseño de marca murcia |
| 📧 Email Marketing | `/servicios/email-marketing` | email marketing murcia |

### Estructura de cada landing:
1. **ServiceHero** - Badge, título, descripción, CTAs
2. **ServiceFeatures** - 6 características con iconos
3. **ServiceBenefits** - 3 beneficios clave
4. **ServiceProcess** - 4 pasos del proceso
5. **ServiceTestimonial** - Caso de éxito
6. **ServiceCTA** - Llamada a la acción final

---

## 🔧 Componentes Globales

### Header (en StandardLayout)
- Logo ESCALA
- Links: Inicio, Nosotros, Metodología, Servicios ▾, Portfolio, Éxitos, Blog
- **Dropdown Servicios**: 8 servicios con iconos
- CTA: Contactar
- Responsive: Menú hamburguesa en móvil

### Footer (en StandardLayout)
- 4 columnas: Brand, Servicios, Páginas, Contacto
- Newsletter
- Redes sociales
- Copyright

### Botones Flotantes (en StandardLayout)
- **BackToTop**: Abajo izquierda (80px en desktop, 1rem en móvil)
- **WhatsApp**: Abajo derecha (80px en desktop, 1rem en móvil)
- Teléfono: +34 626 823 404

---

## ✅ Páginas Dinámicas

### Blog
- **`/blog`** - Listado de artículos (BlogHero + FeaturedPost + BlogGrid)
- **`/blog/[slug]`** - ✅ Artículo completo con contenido, autor, métricas
  - Ejemplos: `/blog/guia-seo-local-2025`, `/blog/ia-en-marketing`

### Portfolio
- **`/portfolio`** - Listado de proyectos con filtros por categoría
- **`/portfolio/[slug]`** - ✅ Proyecto completo con desafío, solución, resultados
  - Ejemplos: `/portfolio/furgocasa-alquiler-camper`, `/portfolio/tricholand-tienda-cactus`

## ⏳ Páginas Pendientes

- [ ] `/politica-privacidad` - Política de privacidad
- [ ] `/aviso-legal` - Aviso legal
- [ ] `/cookies` - Política de cookies

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Total páginas | ~22 |
| Páginas completadas | 19 (+ 2 dinámicas) |
| Páginas dinámicas | 2 ([slug]) |
| Layouts | 3 |
| Componentes reutilizables | ~25 |
| Artículos en BD | 9 |
| Proyectos en BD | 9 |
| Categorías | 6 |

---

*Última actualización: 5 Diciembre 2024*

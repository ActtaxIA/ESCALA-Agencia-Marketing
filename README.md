# 🚀 ESCALA - Agencia de Marketing Digital

Web corporativa de **ESCALA**, agencia de marketing digital con sede en Murcia. Diseño artístico basado en el concepto visual de **"El viaje del día"** representado a través de 8 franjas de color.

---

## 📐 Estructura de Layouts

La web tiene **3 tipos de layouts** según el tipo de página:

### 🌙 Layout 1: HOME (/)
| Característica | Valor |
|----------------|-------|
| **Header/Menú** | ❌ No tiene |
| **Footer** | ❌ No tiene |
| **StripeNav lateral** | ❌ No tiene |
| **Diseño** | Fullscreen con 8 franjas verticales interactivas |
| **Navegación** | Click en las franjas |

### 🌃 Layout 2: SERVICIOS (/servicios)
| Característica | Valor |
|----------------|-------|
| **Header/Menú** | ✅ Transparente, centrado, SIN logo |
| **Footer** | ❌ No tiene |
| **StripeNav lateral** | ❌ No tiene |
| **Diseño** | Fullscreen con 8 franjas (noche→amanecer) + luna |
| **Navegación** | Click en las franjas lleva a cada servicio |

### ☀️ Layout 3: TODAS LAS DEMÁS PÁGINAS (StandardLayout)
| Característica | Valor |
|----------------|-------|
| **Header/Menú** | ✅ Blanco, logo ESCALA, todos los links, dropdown en "Servicios" |
| **Footer** | ✅ Completo con links, contacto, redes |
| **StripeNav lateral** | ✅ Solo IZQUIERDO (60px) |
| **StripeDivider** | ✅ Máximo 1 por página (antes del CTA final) |
| **Back to Top** | ✅ Abajo izquierda (80px del borde) |
| **WhatsApp** | ✅ Abajo derecha (2rem) con chat integrado |

---

## 🎨 Sistema Visual Simplificado

### Principio de diseño
> **"Menos es más"** - Las franjas de colores son un elemento distintivo pero no deben saturar.

### Uso de franjas por página:

| Elemento | Home | Servicios | Otras páginas |
|----------|------|-----------|---------------|
| **Franjas Hero** | ✅ 8 verticales | ✅ 8 verticales | ✅ En hero lateral |
| **StripeNav lateral** | ❌ | ❌ | ✅ Solo izquierdo |
| **StripeDivider** | ❌ | ❌ | ✅ Máx 1 (antes CTA) |

---

## 📱 Páginas Completadas

### Páginas Especiales (Diseño Único)
| Página | URL | Descripción |
|--------|-----|-------------|
| Home | `/` | 8 franjas verticales "viaje del día" |
| Servicios | `/servicios` | 8 franjas "noche→amanecer" con luna |

### Páginas con StandardLayout
| Página | URL | StripeDividers |
|--------|-----|----------------|
| Quiénes Somos | `/quienes-somos` | 1 (antes de CTA) |
| Metodología | `/metodologia` | 1 (antes de CTA) |
| Portfolio | `/portfolio` | 2 (mínimo necesario) |
| Éxitos | `/exitos` | 1 (antes de CTA) |
| Blog | `/blog` | 2 (mínimo necesario) |
| Contacto | `/contacto` | 1 (antes de info) |

### Páginas de Servicios (Landings SEO)
| Servicio | URL |
|----------|-----|
| 🌐 Diseño Web | `/servicios/diseno-web` |
| 📈 SEO Local | `/servicios/seo-local` |
| 📱 Redes Sociales | `/servicios/redes-sociales` |
| 🎯 Google Ads | `/servicios/google-ads` |
| 🤖 Apps con IA | `/servicios/apps-ia` |
| 📸 Fotografía | `/servicios/fotografia` |
| ✏️ Branding | `/servicios/branding` |
| 📧 Email Marketing | `/servicios/email-marketing` |

---

## 🎨 Las 8 Franjas de Color

### Home (Viaje del día)
| # | Hex | Momento | Sección |
|---|-----|---------|---------|
| 1 | `#0f1729` | Noche oscura | Inicio |
| 2 | `#1e3a5f` | Azul noche | Nosotros |
| 3 | `#4a7c9b` | Amanecer | Metodología |
| 4 | `#87ceeb` | Mañana | Servicios |
| 5 | `#fff5e6` | Mediodía | Portfolio |
| 6 | `#ffb366` | Tarde + ☀️ | Éxitos |
| 7 | `#ff6b35` | Atardecer | Blog |
| 8 | `#e84a23` | Crepúsculo + ⭐ | Contacto |

### Servicios (Noche→Amanecer - Invertido)
| # | Hex | Momento | Servicio |
|---|-----|---------|----------|
| 1 | `#e84a23` | Crepúsculo | Diseño Web |
| 2 | `#ff6b35` | Atardecer | SEO Local |
| 3 | `#1e3a5f` | Transición | Redes Sociales |
| 4 | `#0f1729` | Noche | Google Ads |
| 5 | `#0f1729` | Noche + 🌙 | Apps IA |
| 6 | `#1e3a5f` | Madrugada | Fotografía |
| 7 | `#4a7c9b` | Pre-amanecer | Branding |
| 8 | `#87ceeb` | Amanecer | Email Marketing |

---

## 🛠️ Componentes Globales

### Header (en StandardLayout)
- Logo ESCALA a la izquierda
- **Dropdown Servicios**: 8 servicios con iconos
- CTA "Contactar" destacado

### Footer (en StandardLayout)
- 4 columnas: Brand, Servicios, Páginas, Contacto
- Newsletter
- Copyright

### Botones Flotantes (en StandardLayout)
| Botón | Posición | Funcionalidad |
|-------|----------|---------------|
| ⬆️ **Back to Top** | `left: 80px` | Scroll suave arriba |
| 💬 **WhatsApp** | `right: 2rem` | Chat con respuestas rápidas |

### WhatsApp Chat
- Mensaje de bienvenida: "👋 ¡Hola! ¿Cómo estás?"
- Respuestas rápidas que rellenan el mensaje
- Se abre WhatsApp con el mensaje escrito
- Teléfono: **+34 626 823 404**

---

## 📁 Estructura de Carpetas

```
src/
├── app/
│   ├── layout.tsx              # RootLayout
│   ├── page.tsx                # Home (HomeStripes)
│   ├── globals.css             # Variables CSS
│   │
│   ├── quienes-somos/
│   ├── metodologia/
│   ├── portfolio/
│   ├── exitos/
│   ├── blog/
│   ├── contacto/
│   │
│   └── servicios/
│       ├── page.tsx            # ServicesStripes
│       └── [slug]/             # 8 landings de servicios
│
├── components/
│   ├── layout/
│   │   ├── StandardLayout.tsx  # Header + Footer + StripeNav (izq) + Botones
│   │   ├── Header.tsx          # Con dropdown servicios
│   │   ├── Footer.tsx
│   │   ├── StripeNav.tsx       # Solo izquierdo
│   │   ├── StripeDivider.tsx   # Usar con moderación
│   │   ├── BackToTop.tsx
│   │   └── WhatsAppButton.tsx  # Con chat integrado
│   │
│   └── sections/
│       ├── Home/
│       ├── Servicios/
│       ├── Blog/
│       ├── Portfolio/
│       └── ServicioDetalle/
```

---

## 🎯 Filosofía de Diseño

> **"Las franjas son el hilo conductor visual, pero no deben saturar."**

- **Home y Servicios**: Experiencia inmersiva fullscreen con franjas
- **Resto de páginas**: Diseño limpio con 1 StripeNav lateral y máximo 1 StripeDivider
- **Consistencia**: Mismos colores, misma tipografía, misma energía

---

## 📞 Contacto

**ESCALA - Agencia de Marketing Digital**
- 📍 Murcia, España
- 📧 hola@escalamarketing.es
- 📱 +34 626 823 404
- 🌐 escalamarketing.es

---

*Última actualización: Diciembre 2024*

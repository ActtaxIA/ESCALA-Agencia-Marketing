# 🚀 ESCALA - Agencia de Marketing Digital

Web corporativa de **ESCALA**, agencia de marketing digital con sede en Murcia. Diseño artístico basado en el concepto visual de **"El viaje del día"** representado a través de 8 franjas de color.

---

## ⚡ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 14.x | Framework React con App Router |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 3.x | Estilos utility-first |
| **CSS Modules** | - | Estilos encapsulados por componente |
| **AWS Amplify** | - | **Hosting y despliegue en producción** |

---

## 🚀 DESPLIEGUE EN AWS AMPLIFY

> **⚠️ IMPORTANTE: Esta web está diseñada para desplegarse en AWS Amplify**

### Requisitos previos
- Cuenta de AWS activa
- Repositorio en GitHub conectado
- Node.js 18.x o superior

### Pasos para desplegar:

#### 1️⃣ Desde la consola de AWS Amplify:
1. Ir a [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click en **"New app"** → **"Host web app"**
3. Seleccionar **GitHub** como proveedor
4. Autorizar AWS a acceder al repositorio
5. Seleccionar: `ActtaxIA/ESCALA-Agencia-Marketing`
6. Rama: `main`

#### 2️⃣ Configuración de Build:
AWS Amplify detectará automáticamente Next.js. Si no, usar esta configuración:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

#### 3️⃣ Variables de entorno (si las hay):
En Amplify Console → App settings → Environment variables:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://escalamarketing.es
```

#### 4️⃣ Dominio personalizado:
1. Amplify Console → Domain management
2. Add domain → `escalamarketing.es`
3. Configurar DNS en tu proveedor de dominio

### Comandos locales:

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción (igual que AWS)
npm run build

# Iniciar en modo producción
npm start
```

### URLs del proyecto:
| Entorno | URL |
|---------|-----|
| **Producción** | https://escalamarketing.es |
| **Preview (Amplify)** | https://main.xxxxx.amplifyapp.com |
| **Local** | http://localhost:3000 |

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

## 📱 UX Móvil

### Interacción Doble Tap (Home y Servicios)
En dispositivos táctiles (móviles/tablets), la navegación por franjas funciona con un sistema de **2 toques**:

1. **Primer toque**: La franja se expande, mostrando icono y título
2. **Segundo toque**: Navegación a la página correspondiente

Esto mejora la usabilidad ya que el usuario puede ver qué está seleccionando antes de navegar.

### Iconos Minimalistas
Los iconos de la página de Servicios usan caracteres unicode monocromáticos (□, ⚲, ∞, ◎, ❖, etc.) en lugar de emojis de colores, manteniendo la estética minimalista y profesional coherente con la Home.

---

## 🔍 SEO

### Metadatos Optimizados
Todas las páginas incluyen:
- `title` y `description` únicos y optimizados
- `keywords` relevantes por página
- **OpenGraph** para redes sociales (Facebook, LinkedIn)
- **Twitter Cards** con imágenes 1200x630
- **URLs canónicas** para evitar duplicados
- **JSON-LD Schema** (tipo `MarketingAgency`) en el layout global

### Imágenes OpenGraph Pendientes
Crear imágenes de 1200x630px en `/public/`:
- `og-default.jpg`, `og-home.jpg`, `og-quienes-somos.jpg`
- `og-metodologia.jpg`, `og-servicios.jpg`, `og-portfolio.jpg`
- `og-exitos.jpg`, `og-blog.jpg`, `og-contacto.jpg`
- Y una para cada servicio: `og-diseno-web.jpg`, etc.

---

## 🚨 REGLAS DEL PROYECTO

### Reglas Críticas (NUNCA ROMPER):
1. ❌ **NO borrar archivos** sin consentimiento previo explícito
2. ❌ **NO hacer commit/push** sin autorización explícita (esperar "commit", "push", "despliega")

### Reglas de Desarrollo:
- Minimizar creación de archivos nuevos, modificar existentes cuando sea posible
- Ejecutar scripts con PowerShell (no cmd)
- Tests E2E deben abrir Chrome visible (no headless)
- Búsquedas no inician automáticamente, solo cuando se solicita

---

## 📞 Contacto

**ESCALA - Agencia de Marketing Digital**
- 📍 Murcia, España
- 📧 hola@escalamarketing.es
- 📱 +34 626 823 404
- 🌐 escalamarketing.es

---

*Última actualización: Diciembre 2024*

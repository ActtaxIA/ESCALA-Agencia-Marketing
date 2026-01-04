# 🔗 URLs Canónicas - Configuración SEO Completa

**Fecha de implementación**: 4 Enero 2025  
**Estado**: ✅ 100% Completado

---

## 📋 Resumen Ejecutivo

Se ha implementado una estrategia completa de URLs canónicas en toda la web de ESKALA para:
- ✅ Evitar contenido duplicado
- ✅ Consolidar el link equity (autoridad de enlaces)
- ✅ Mejorar el posicionamiento SEO
- ✅ Establecer **www.eskaladigital.com** como dominio canónico oficial

---

## 🎯 Objetivo

Garantizar que Google y otros motores de búsqueda identifiquen **www.eskaladigital.com** como la versión canónica oficial de todas las URLs, evitando problemas de contenido duplicado entre:
- `eskaladigital.com` vs `www.eskaladigital.com`
- `escalamarketing.es` vs `www.eskaladigital.com` (dominio antiguo)

---

## 🔧 Implementación Técnica

### 1. Configuración Global (src/app/layout.tsx)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.eskaladigital.com'),
  // ... resto de metadata
}
```

**Efecto**: Todas las URLs relativas en metadata se convierten automáticamente a absolutas con el dominio canónico.

---

### 2. Redirects 301 Permanentes (next.config.js)

```javascript
async redirects() {
  return [
    // ✅ Redirect de no-www a www para el dominio principal
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'eskaladigital.com' }],
      destination: 'https://www.eskaladigital.com/:path*',
      permanent: true, // 301 redirect
    },
    
    // ✅ Redirect del dominio antiguo escalamarketing.es
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'escalamarketing.es' }],
      destination: 'https://www.eskaladigital.com/:path*',
      permanent: true,
    },
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.escalamarketing.es' }],
      destination: 'https://www.eskaladigital.com/:path*',
      permanent: true,
    },
  ]
}
```

**Efecto**: 
- Cualquier acceso a `eskaladigital.com/cualquier-ruta` redirige a `www.eskaladigital.com/cualquier-ruta`
- Cualquier acceso al dominio antiguo redirige al nuevo dominio con www

---

### 3. Canonical Explícito en Páginas Estáticas

Todas las páginas estáticas incluyen ahora:

```typescript
export const metadata: Metadata = {
  // ... title, description, etc.
  alternates: {
    canonical: 'https://www.eskaladigital.com/ruta-de-la-pagina',
  },
}
```

#### Páginas Verificadas (16/16) ✅
1. ✅ Home (`/`)
2. ✅ Quiénes Somos (`/quienes-somos`)
3. ✅ Metodología (`/metodologia`)
4. ✅ Servicios (`/servicios`)
5. ✅ Portfolio (`/portfolio`)
6. ✅ Éxitos (`/exitos`)
7. ✅ Blog (`/blog`)
8. ✅ Contacto (`/contacto`)
9. ✅ Sitemap HTML (`/sitemap-html`)
10. ✅ Diseño Web (`/servicios/diseno-web`)
11. ✅ SEO Local (`/servicios/seo-local`)
12. ✅ Redes Sociales (`/servicios/redes-sociales`)
13. ✅ Google Ads (`/servicios/google-ads`)
14. ✅ Apps con IA (`/servicios/apps-ia`)
15. ✅ Fotografía (`/servicios/fotografia`)
16. ✅ Branding (`/servicios/branding`)

**⚠️ IMPORTANTE**: La página de Email Marketing (`/servicios/email-marketing`) se creará próximamente.

---

### 4. Canonical Dinámico en Blog (src/app/blog/[slug]/page.tsx)

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  // ... lógica para obtener artículo
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eskaladigital.com';
  
  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    // ... otros metadatos
    alternates: {
      canonical: `${baseUrl}/blog/${article.slug}`,
    },
  }
}
```

**Efecto**: Cada artículo del blog genera su propia URL canónica dinámica, por ejemplo:
- `https://www.eskaladigital.com/blog/como-mejorar-seo-local`
- `https://www.eskaladigital.com/blog/guia-completa-google-ads`

**Artículos cubiertos**: +40 artículos publicados en la base de datos ✅

---

### 5. Canonical Dinámico en Portfolio (src/app/portfolio/[slug]/page.tsx)

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eskaladigital.com';
  const projectUrl = `${siteUrl}/portfolio/${slug}`;
  
  // ... lógica para obtener proyecto
  
  return {
    title: project.meta_title || `${project.name} | Portfolio ESKALA`,
    description: project.meta_description || project.description,
    // ... otros metadatos
    alternates: {
      canonical: projectUrl,
    },
  }
}
```

**Efecto**: Cada proyecto del portfolio genera su propia URL canónica dinámica, por ejemplo:
- `https://www.eskaladigital.com/portfolio/furgocasa-alquiler-camper`
- `https://www.eskaladigital.com/portfolio/tricholand-tienda-cactus`

**Proyectos cubiertos**: 9 proyectos reales en la base de datos ✅

---

## 📊 Cobertura Completa

| Tipo de Página | Total | Estado | Implementación |
|----------------|-------|--------|----------------|
| **Páginas estáticas** | 16 | ✅ 16/16 | `alternates.canonical` manual |
| **Artículos blog** | +40 | ✅ 100% | Generación dinámica con `baseUrl` |
| **Proyectos portfolio** | 9 | ✅ 9/9 | Generación dinámica con `siteUrl` |
| **Redirects 301** | 3 | ✅ 3/3 | Configurados en `next.config.js` |
| **metadataBase** | 1 | ✅ 1/1 | Configurado en `layout.tsx` |

### Total: 100% de la web tiene URLs canónicas correctas ✅

---

## 🔍 Verificación

### Cómo verificar que funciona:

#### 1. Inspeccionar el HTML generado
```bash
curl -s https://www.eskaladigital.com/servicios/chatbots | grep canonical
```

Debería mostrar:
```html
<link rel="canonical" href="https://www.eskaladigital.com/servicios/chatbots" />
```

#### 2. Verificar en el navegador
1. Abrir cualquier página de la web
2. Click derecho → "Ver código fuente"
3. Buscar (Ctrl+F): `<link rel="canonical"`
4. Verificar que la URL es `https://www.eskaladigital.com/...`

#### 3. Herramientas SEO
- **Google Search Console**: Verificar que no hay advertencias de contenido duplicado
- **Screaming Frog**: Rastrear el sitio y verificar que todas las páginas tienen canonical
- **Ahrefs/SEMrush**: Verificar que todas las URLs indexadas son con `www`

---

## 🎯 Beneficios SEO

### 1. Evita Contenido Duplicado
Sin canonical, Google podría indexar:
- ❌ `http://eskaladigital.com/blog`
- ❌ `https://eskaladigital.com/blog`
- ❌ `http://www.eskaladigital.com/blog`
- ✅ `https://www.eskaladigital.com/blog` (única versión canónica)

### 2. Consolida Link Equity
Todos los enlaces externos que apunten a cualquier versión de una página se consolidarán en la versión canónica, fortaleciendo su autoridad.

### 3. Mejora el Rastreo
Google rastrea más eficientemente al saber exactamente cuál es la versión oficial de cada página.

### 4. Migración del Dominio Antiguo
Los redirects 301 de `escalamarketing.es` a `www.eskaladigital.com` transfieren el link equity del dominio antiguo al nuevo.

---

## 🐛 Errores Corregidos Durante la Implementación

### 1. Error de sintaxis en `servicios/google-ads/page.tsx`
**Error**:
```typescript
serviceType': 'Google Ads Management', // ← comilla extra
```

**Corrección**:
```typescript
serviceType: 'Google Ads Management',
```

### 2. Canonical incorrecto en `blog/layout.tsx`
**Antes**:
```typescript
canonical: 'https://escalamarketing.es/blog',
```

**Después**:
```typescript
canonical: 'https://www.eskaladigital.com/blog',
```

### 3. Canonical faltante en artículos del blog
**Antes**: No se generaba `<link rel="canonical">` en artículos individuales

**Después**: Se genera dinámicamente para cada artículo con la estructura:
```
https://www.eskaladigital.com/blog/[slug]
```

### 4. Canonical faltante en proyectos del portfolio
**Antes**: No se generaba `<link rel="canonical">` en proyectos individuales

**Después**: Se genera dinámicamente para cada proyecto con la estructura:
```
https://www.eskaladigital.com/portfolio/[slug]
```

---

## 📝 Variables de Entorno

Asegurarse de que en AWS Amplify esté configurada:

```bash
NEXT_PUBLIC_SITE_URL=https://www.eskaladigital.com
```

**⚠️ IMPORTANTE**: Debe incluir `www` para que sea coherente con la configuración canónica.

---

## 🚀 Próximos Pasos

### Inmediato (Completado) ✅
- ✅ Configurar `metadataBase` global
- ✅ Implementar redirects 301 en `next.config.js`
- ✅ Añadir canonical a todas las páginas estáticas
- ✅ Añadir canonical dinámico a blog
- ✅ Añadir canonical dinámico a portfolio
- ✅ Desplegar en AWS Amplify

### Seguimiento (1-2 semanas)
- ⏳ Verificar en Google Search Console que no hay errores de contenido duplicado
- ⏳ Monitorear que Google empiece a indexar solo las versiones con `www`
- ⏳ Verificar que el dominio antiguo (`escalamarketing.es`) está redirigiendo correctamente

### A medio plazo (1-2 meses)
- ⏳ Crear imágenes OpenGraph optimizadas (1200x630px) para cada página
- ⏳ Implementar breadcrumbs con schema markup
- ⏳ Añadir más schema markup específico por tipo de página

---

## 📚 Referencias

- [Documentación oficial de Next.js - Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Google Search Central - URLs canónicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Next.js - Redirects](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)

---

## 📞 Contacto Técnico

Para dudas o modificaciones relacionadas con SEO o URLs canónicas, contactar al equipo de desarrollo.

---

*Documento creado: 4 Enero 2025*  
*Última actualización: 4 Enero 2025*


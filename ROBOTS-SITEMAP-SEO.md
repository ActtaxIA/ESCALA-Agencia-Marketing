# 🤖 Robots.txt y Sitemap - Configuración SEO

**Fecha de implementación**: 4 Enero 2025  
**Estado**: ✅ Completado

---

## 📋 Resumen

Configuración completa de `robots.txt` y `sitemap.xml` para optimizar el rastreo e indexación de Google y otros motores de búsqueda.

---

## 🤖 Robots.txt

### Ubicación
```
public/robots.txt
```

### Configuración Implementada

#### ✅ Acceso General Permitido
```
User-agent: *
Allow: /
```
Todos los bots tienen acceso general al sitio.

#### 🚫 Rutas Bloqueadas

##### Panel de Administración (CRÍTICO)
```
Disallow: /administrator
Disallow: /administrator/
```
**Razón**: Evitar que Google indexe el panel de administración privado.

##### Rutas Técnicas
```
Disallow: /api/
Disallow: /_next/
Disallow: /private/
```
**Razón**: No es necesario indexar rutas de API, archivos internos de Next.js o carpetas privadas.

##### Archivos Específicos
```
Disallow: *.json$
Disallow: *.xml$
Disallow: /sitemap-*.xml
```
**Razón**: Evitar indexar archivos de configuración o fragmentos de sitemap.

#### ✅ Rutas Explícitamente Permitidas

```
Allow: /blog
Allow: /blog/*
Allow: /portfolio
Allow: /portfolio/*
Allow: /servicios
Allow: /servicios/*
```
**Razón**: Asegurar que estas páginas importantes se indexen correctamente.

#### 📍 Sitemap
```
Sitemap: https://www.eskaladigital.com/sitemap.xml
```

#### 🖼️ Bots de Imágenes
```
User-agent: Googlebot-Image
Allow: /images/
Allow: /blog/
Allow: /portfolio/
```
**Razón**: Permitir que Google indexe todas las imágenes del blog y portfolio.

#### 🐌 Control de Bots SEO
```
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```
**Razón**: Estos bots de herramientas SEO pueden ser agresivos. Se les permite rastrear pero con un delay.

#### 🚫 Bots Maliciosos Bloqueados
```
User-agent: MJ12bot
Disallow: /

User-agent: dotbot
Disallow: /
```
**Razón**: Estos bots no aportan valor y consumen recursos del servidor.

---

## 🗺️ Sitemap XML

### Ubicación
```
src/app/sitemap.ts
```

### URL Pública
```
https://www.eskaladigital.com/sitemap.xml
```

### Contenido del Sitemap

#### Páginas Estáticas (8 páginas)
| URL | Frecuencia | Prioridad |
|-----|------------|-----------|
| `/` (Home) | weekly | 1.0 |
| `/quienes-somos` | monthly | 0.8 |
| `/metodologia` | monthly | 0.8 |
| `/servicios` | weekly | 0.9 |
| `/portfolio` | weekly | 0.9 |
| `/exitos` | monthly | 0.8 |
| `/blog` | daily | 0.9 |
| `/contacto` | monthly | 0.7 |

#### Servicios (8 páginas)
| URL | Frecuencia | Prioridad |
|-----|------------|-----------|
| `/servicios/diseno-web` | monthly | 0.8 |
| `/servicios/seo-local` | monthly | 0.8 |
| `/servicios/redes-sociales` | monthly | 0.8 |
| `/servicios/google-ads` | monthly | 0.8 |
| `/servicios/apps-ia` | monthly | 0.8 |
| `/servicios/chatbots` | monthly | 0.8 |
| `/servicios/branding` | monthly | 0.8 |
| `/servicios/email-marketing` | monthly | 0.8 |

#### Blog (Dinámico - +40 artículos)
```typescript
// Se genera dinámicamente desde Supabase
const { data: posts } = await supabase
  .from('articles')
  .select('slug, updated_at, published_at')
  .eq('published', true)
  .lte('published_at', new Date().toISOString())

// Configuración:
// - URL: /blog/{slug}
// - Frecuencia: weekly
// - Prioridad: 0.7
// - lastModified: updated_at || published_at
```

#### Portfolio (Dinámico - 9 proyectos)
```typescript
// Se genera dinámicamente desde Supabase
const { data: projects } = await supabase
  .from('portfolio_projects')
  .select('slug, updated_at')
  .eq('published', true)
  .order('order_position', { ascending: true })

// Configuración:
// - URL: /portfolio/{slug}
// - Frecuencia: monthly
// - Prioridad: 0.7
// - lastModified: updated_at
```

### Total de URLs en el Sitemap
- **Páginas estáticas**: 8
- **Servicios**: 8
- **Blog**: ~40+ (dinámico)
- **Portfolio**: 9 (dinámico)
- **TOTAL**: ~65+ URLs indexables

---

## ✅ Ventajas de esta Configuración

### 1. Seguridad
- ❌ `/administrator` NO se indexa en Google
- ❌ Rutas de API NO se indexan
- ❌ Archivos internos NO se indexan

### 2. SEO Optimizado
- ✅ Todas las páginas públicas se indexan
- ✅ Sitemap actualizado automáticamente con nuevos artículos/proyectos
- ✅ URLs canónicas en todas las páginas (`www.eskaladigital.com`)
- ✅ Prioridades correctas según importancia

### 3. Eficiencia de Rastreo
- ✅ Google conoce exactamente qué rastrear
- ✅ Sitemap XML indica cambios recientes
- ✅ Bots SEO controlados con `Crawl-delay`
- ✅ Bots maliciosos bloqueados

### 4. Gestión de Imágenes
- ✅ Googlebot-Image puede indexar todas las imágenes
- ✅ Imágenes del blog y portfolio accesibles
- ✅ Mejora ranking en Google Images

---

## 🔍 Verificación

### 1. Verificar Robots.txt

#### En el navegador:
```
https://www.eskaladigital.com/robots.txt
```

#### Con curl:
```bash
curl https://www.eskaladigital.com/robots.txt
```

#### En Google Search Console:
1. Ir a **Configuración** → **Rastreo** → **Archivo robots.txt**
2. Verificar que no hay errores
3. Probar URLs específicas (especialmente `/administrator`)

### 2. Verificar Sitemap

#### En el navegador:
```
https://www.eskaladigital.com/sitemap.xml
```

#### Con curl:
```bash
curl https://www.eskaladigital.com/sitemap.xml
```

#### En Google Search Console:
1. Ir a **Sitemaps**
2. Añadir: `https://www.eskaladigital.com/sitemap.xml`
3. Verificar que se procesa correctamente
4. Comprobar que todas las URLs se descubren

### 3. Verificar que /administrator está bloqueado

#### En Google:
```
site:www.eskaladigital.com/administrator
```
**Resultado esperado**: Sin resultados (no indexado)

#### En Google Search Console:
1. **Inspeccionar URL**: `https://www.eskaladigital.com/administrator`
2. **Resultado esperado**: "URL está bloqueada por robots.txt"

---

## 📊 Monitoreo Recomendado

### Google Search Console (Semanal)

#### Cobertura
- ✅ Verificar que todas las páginas importantes están indexadas
- ⚠️ Alertas de páginas excluidas
- ❌ Errores 404 o problemas de rastreo

#### Sitemaps
- ✅ URLs descubiertas vs. indexadas
- ✅ Fecha de última lectura del sitemap

#### Rendimiento
- 📈 Impresiones y clics
- 📈 Páginas con mejor rendimiento
- 📉 Páginas con caída de tráfico

### Herramientas Complementarias

#### Screaming Frog SEO Spider
```bash
# Configuración recomendada:
1. Mode: Spider
2. Respetar robots.txt: ✅ Activado
3. Verificar:
   - URLs rastreadas
   - URLs bloqueadas
   - Canonical correctas
   - Metadatos completos
```

#### Ahrefs Site Audit
- Verificar páginas indexables
- Detectar contenido duplicado
- Verificar enlaces internos
- Analizar profundidad de rastreo

---

## 🚨 Reglas Críticas

### NUNCA Hacer:
1. ❌ Bloquear `/blog` o `/portfolio` en robots.txt
2. ❌ Bloquear CSS o JavaScript necesario para el contenido
3. ❌ Usar `Disallow: /` (bloquea todo el sitio)
4. ❌ Bloquear el sitemap XML
5. ❌ Olvidar añadir `/administrator` al robots.txt

### SIEMPRE Hacer:
1. ✅ Verificar cambios en robots.txt en Google Search Console
2. ✅ Actualizar sitemap cuando se añaden nuevas páginas estáticas
3. ✅ Comprobar que las páginas dinámicas (blog/portfolio) se añaden automáticamente
4. ✅ Mantener el dominio canónico (`www.eskaladigital.com`) en todas partes

---

## 📞 Integración con Google Search Console

### Pasos para Enviar el Sitemap

1. **Acceder a Google Search Console**
   ```
   https://search.google.com/search-console
   ```

2. **Seleccionar propiedad**
   ```
   www.eskaladigital.com
   ```

3. **Ir a Sitemaps**
   - Menú lateral → **Sitemaps**

4. **Añadir sitemap**
   ```
   https://www.eskaladigital.com/sitemap.xml
   ```

5. **Verificar estado**
   - Estado: **Correcto**
   - URLs descubiertas: ~65+
   - URLs indexadas: Aumentará gradualmente

---

## 🔄 Mantenimiento

### Cuando Añadir una Nueva Página Estática

1. Añadir la URL al array `staticPages` en `src/app/sitemap.ts`
2. Desplegar en AWS Amplify
3. Verificar que aparece en `/sitemap.xml`
4. Esperar a que Google la descubra (1-7 días)

### Páginas Dinámicas (Blog/Portfolio)

✅ **No requiere acción**: Se añaden automáticamente al sitemap cuando:
- Se publican en Supabase
- `published = true`
- `published_at <= NOW()`

---

## 📚 Referencias

- [Google - Introducción a robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google - Crear y enviar un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Next.js - Sitemap Generation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Next.js - Robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

---

*Documento creado: 4 Enero 2025*  
*Última actualización: 4 Enero 2025*


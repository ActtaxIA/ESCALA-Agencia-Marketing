-- =====================================================
-- UPDATE SEO + TONO (NO "PLANTILLA") PARA ARTÍCULOS DEL BLOG
-- =====================================================
-- Qué hace este script:
-- - Inserta o actualiza (UPSERT) los 10 artículos del blog por `slug`
-- - Mejora el tono (más específico, menos genérico) y la estructura SEO on-page
-- - NO pisa `views` (mantiene el contador existente)
--
-- Requisitos:
-- - Ejecutar DESPUÉS de `supabase-schema.sql`
-- - Asegúrate de tener creadas las categorías con los slugs:
--   'seo-posicionamiento', 'diseno-web', 'publicidad-digital', 'estrategia-digital', 'redes-sociales'
--
-- Nota:
-- - El contenido está en Markdown. La app ya renderiza Markdown correctamente.

-- =====================================================
-- 1) SEO LOCAL 2025 (FEATURED)
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'Guía Completa de SEO Local para 2025: Domina las Búsquedas en tu Ciudad',
  'guia-seo-local-2025',
  $$Guía práctica y actualizada para ganar el “map pack” (Google Maps) y captar clientes cerca de ti: ficha de Google, reseñas, contenido local, enlaces y optimización web.$$,
  $md$
## SEO local en 2025: lo que de verdad mueve la aguja

Si tu negocio vive de clientes cercanos (Murcia, Cartagena, Alicante… o tu barrio), el SEO local no es “un extra”: es el canal más rentable cuando se trabaja bien. La diferencia suele estar en detalles: cómo está construida tu ficha, qué señales de confianza das, y si tu web confirma lo que Google “cree” de ti.

### Resumen en 60 segundos

- **Ficha (GBP) impecable**: categorías, servicios, fotos, horarios y publicaciones.
- **Reseñas con método** (y respuestas): ritmo, variedad y palabras clave naturales.
- **NAP consistente** (Nombre/Dirección/Teléfono) y citaciones reales.
- **Páginas locales** que resuelven intención: servicio + zona + prueba social.
- **Enlaces locales** (de verdad): medios, asociaciones, partners, proveedores.
- **Velocidad + UX móvil**: si tu web no carga, no compites.

---

## 1) Google Business Profile (GBP): el 80% del resultado

### Categorías: una decisión “SEO”, no estética

- Elige **categoría principal** lo más específica posible.
- Añade **categorías secundarias** coherentes (sin inventar).
- Revisa que tus **servicios** estén completos, con descripciones claras.

### Fotos: el “CTR” invisible

En local, las fotos influyen en clics, llamadas y rutas. Si estás en Murcia y compites contra negocios que suben fotos semanalmente, tu ficha se ve “parada”.

Checklist mínimo:

- 20+ fotos reales (interior, exterior, equipo, producto/servicio).
- 1–2 fotos nuevas por semana (móvil vale, pero con buena luz).
- Evita fotos genéricas de banco.

### Publicaciones (Posts): poco esfuerzo, señal constante

Hazlo simple:

- 1 post/semana (oferta, caso real, “antes/después”, evento).
- CTA claro: “Llamar”, “Reservar”, “Pedir presupuesto”.

---

## 2) Reseñas: la señal más infravalorada (y más barata)

No necesitas “más reseñas”, necesitas **mejores reseñas**:

- **Ritmo**: mejor 2/semana que 20 en un día y 3 meses en blanco.
- **Variedad**: diferentes clientes, diferentes servicios.
- **Respuestas**: siempre. Y sin copiar/pegar.

Guion breve para pedir reseña (sin ser pesado):

> “¿Te importaría dejar una reseña? Nos ayuda a que nos encuentren en Google. Te dejo el enlace directo.”

---

## 3) NAP y citaciones: coherencia quirúrgica

Tu NAP (nombre/dirección/teléfono) debe ser idéntico en:

- Web (footer + página de contacto)
- GBP
- Redes sociales
- Directorios relevantes (no 200 directorios basura)

Si tu negocio tiene varias ubicaciones, evita el caos: una página por sede, con su NAP y mapa.

---

## 4) Contenido local que posiciona (no “relleno”)

En 2025, “hacer un post genérico” no basta. Lo que posiciona es contenido que responde a intención local con señales reales:

- Servicio + zona + **caso real** (aunque sea breve)
- FAQs de clientes de tu zona
- Comparativas “cuánto cuesta / cuánto tarda / cómo se hace”

Ejemplos de títulos que convierten:

- “SEO local para clínicas en Murcia: checklist real de 30 días”
- “Diseño web para restaurantes en Murcia: lo que miramos antes de presupuestar”

---

## 5) On-page local: lo que la mayoría hace mal

### Título y meta description: intención + zona + beneficio

No “SEO local | agencia”. Mejor:

- “SEO local en Murcia: más llamadas y reservas (sin humo)”
- “Google Maps: cómo entrar en el top 3 con acciones medibles”

### Schema mínimo recomendado

- `LocalBusiness` (o subtipo)
- `FAQPage` en páginas de servicio (si hay FAQs reales)
- `BreadcrumbList`

---

## 6) Enlaces locales: calidad, no volumen

Enlaces útiles (y reales):

- Asociaciones empresariales / cámaras de comercio
- Patrocinios locales (eventos, clubs)
- Proveedores y partners (página “colaboradores”)
- Medios locales (notas de prensa con contenido de verdad)

---

## Checklist final (para aplicar esta semana)

- [ ] GBP completo (categorías, servicios, fotos, horario, posts)
- [ ] 10 reseñas nuevas en 30–45 días (sin picos artificiales)
- [ ] NAP unificado en web + GBP + redes + directorios clave
- [ ] 1 landing “servicio + zona” con prueba social y CTA
- [ ] 2 enlaces locales reales (no spam)

---

## Próximo paso

Si quieres, lo revisamos contigo y te decimos “qué tocar primero” para notar resultados antes (sin rehacerlo todo). Escríbenos aquí: [Contacto](/contacto) o mira el servicio: [SEO Local](/servicios/seo-local).
$md$,
  'guia-seo-local-2025.png',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'seo-posicionamiento' LIMIT 1),
  'SEO Local 2025: entra en el Top 3 de Google Maps',
  'SEO local 2025 paso a paso: optimiza tu ficha de Google, reseñas, NAP, contenido local y web para aparecer en el Top 3 (Google Maps).',
  ARRAY['seo local', 'google business profile', 'google maps', 'posicionamiento local', 'reseñas google', 'seo murcia'],
  true,
  true,
  '2024-11-28 10:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 2) SEO LOCAL 2024 (CHECKLIST / FUNDAMENTOS)
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'Cómo mejorar el SEO local de tu negocio en 2024',
  'como-mejorar-seo-local',
  $$Checklist realista para mejorar tu SEO local sin volverte loco: acciones que se notan en llamadas, rutas y formularios.$$,
  $md$
## Cómo mejorar tu SEO local en 2024 (sin teoría innecesaria)

Si buscas una guía corta, esta es: el SEO local funciona cuando alineas 3 cosas: **ficha**, **confianza** y **web**. Lo demás suma, pero no compensa si lo básico está flojo.

### Resumen rápido

- Reclama y completa tu **Google Business Profile**
- Consigue **reseñas** constantes (y responde)
- Unifica **NAP** en todos lados
- Mejora la **página de contacto** (móvil + mapa + CTA)
- Crea 1 landing “servicio + zona” con prueba social

---

## 1) Ficha de Google: empieza por aquí

Lo mínimo “bien”:

- Categoría principal correcta
- Horario actualizado (incluye festivos)
- Servicios detallados
- 10–20 fotos reales
- 1 publicación semanal (aunque sea simple)

---

## 2) Reseñas: tu mejor inversión (si lo haces con método)

Objetivo razonable: **10 reseñas en 30–45 días**.

Claves:

- Pídelas justo después del servicio (cuando el cliente está contento).
- No “compres” reseñas: a la larga se nota.
- Responde con contexto (no plantillas).

---

## 3) NAP consistente: donde se te escapa el posicionamiento

Revisa que el nombre/dirección/teléfono sean idénticos en:

- Web
- GBP
- Instagram/Facebook
- Directorios (solo los relevantes)

Un solo error típico: “C/” vs “Calle”, o teléfonos diferentes (fijo vs móvil). Parece pequeño, pero en local cuenta.

---

## 4) Tu web tiene que “confirmar” lo que dice la ficha

### Página de contacto (obligatoria)

Debe tener:

- Teléfono clicable (móvil)
- WhatsApp si lo usas
- Mapa embebido
- Formulario corto
- Horario y dirección en texto (no en imagen)

### Landing “servicio + zona”

Ejemplo: “SEO local en Murcia” / “Diseño web en Murcia” / “Google Ads en Murcia”.

Incluye:

- Qué haces (concreto)
- Para quién
- Beneficio / resultado
- Casos / testimonios
- CTA claro

---

## Preguntas frecuentes rápidas

**¿Cuánto tarda en notarse?**  
Si arreglas ficha + contacto + reseñas, puedes notar cambios en 2–6 semanas.

**¿Hace falta blog?**  
No para empezar. Primero ficha + landing + reseñas. Luego blog para escalar.

---

## Próximo paso

Si quieres que te digamos “qué 3 cosas arreglar primero”, escríbenos por aquí: [Contacto](/contacto). Y si quieres profundizar: [Guía SEO Local 2025](/blog/guia-seo-local-2025).
$md$,
  'como-mejorar-seo-local.png',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'seo-posicionamiento' LIMIT 1),
  'SEO local 2024: checklist para ganar clientes cerca de ti',
  'Checklist SEO local 2024: ficha de Google, reseñas, NAP y web. Acciones concretas para aparecer en búsquedas locales y conseguir más llamadas.',
  ARRAY['seo local', 'google business', 'reseñas google', 'posicionamiento local', 'google maps'],
  true,
  false,
  '2024-11-15 09:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 3) DISEÑO WEB 2025
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  '10 tendencias de diseño web para 2025',
  'tendencias-diseno-web-2025',
  $$Tendencias de diseño web 2025 explicadas “para negocio”: qué aplicar, qué evitar y cómo no cargarte conversiones por seguir modas.$$,
  $md$
## Tendencias de diseño web para 2025 (pensadas para convertir)

Las tendencias están bien… cuando no te hacen perder ventas. En 2025, la diferencia no es “más bonito”: es **más claro, más rápido y más confiable**.

### Resumen en 60 segundos

- Menos efectos, más **jerarquía** y claridad.
- Móvil primero (de verdad), con CTAs fáciles.
- Diseño “premium” sin pesar (performance).
- Accesibilidad como estándar.

---

## 1) Minimalismo con intención (no vacío)

Minimalismo no es “poner poco”. Es:

- un titular que explica qué haces
- un CTA visible
- prueba social cerca (logos, reseñas, casos)

---

## 2) Tipografía como protagonista

Una buena web se escanea. Si el usuario no entiende tu oferta en 5–8 segundos, se va.

---

## 3) Microinteracciones… pero con límite

Hover, transiciones suaves, estados de carga… sí. Pero:

- si ralentiza móvil, se convierte en “ruido”
- si distrae del CTA, resta

---

## 4) Modo oscuro (opción), no obligación

Perfecto como opción, especialmente en producto o contenido. En webs de servicio, prioriza legibilidad y confianza.

---

## 5) Diseño “AI-friendly”: contenido más estructurado

Google y los usuarios aman:

- secciones con H2/H3 claras
- bullets
- FAQs reales

---

## 6) Componentes reutilizables (consistencia)

Consistencia visual = confianza. Menos “inventos” por página, más coherencia.

---

## 7) Imágenes reales y cercanas

Para un negocio local, una foto real del equipo suele convertir más que una “foto corporativa genérica”.

---

## 8) Prueba social visible (y específica)

En 2025, sin prueba social, cuesta mucho convertir:

- reseñas (Google)
- casos de éxito
- cifras (si puedes demostrarlas)

---

## 9) Performance como requisito de diseño

Si tu web tarda 4–6 segundos en móvil, estás comprando rebote.

Checklist:

- imágenes WebP/AVIF
- lazy loading
- CSS/JS sin excesos

---

## 10) Accesibilidad integrada

Contraste, tamaños, foco en teclado… además de ser correcto, mejora conversiones.

---

## ¿Qué tendencias NO recomiendo (aunque estén de moda)?

- Popups agresivos al segundo 1
- Sliders automáticos que nadie controla
- Videos pesados en autoplay

---

## Próximo paso

Si quieres una web moderna **sin sacrificar conversiones**, mira el servicio: [Diseño Web](/servicios/diseno-web) o escríbenos: [Contacto](/contacto).
$md$,
  'tendencias-diseno-web-2025.webp',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'diseno-web' LIMIT 1),
  'Tendencias de diseño web 2025 (conversión y SEO)',
  'Tendencias de diseño web 2025 explicadas para negocio: claridad, performance, accesibilidad y prueba social. Qué aplicar y qué evitar.',
  ARRAY['tendencias diseño web 2025', 'diseño web', 'ux', 'conversion rate', 'web moderna'],
  true,
  false,
  '2024-11-10 08:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 4) GOOGLE ADS VS FACEBOOK ADS
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'Google Ads vs Facebook Ads: ¿Cuál elegir?',
  'google-ads-vs-facebook-ads',
  $$Comparativa clara (y sin “depende” eterno): cuándo usar Google Ads o Meta Ads, cómo repartir presupuesto y qué métricas mirar.$$,
  $md$
## Google Ads vs Facebook/Instagram Ads: cómo elegir sin tirar el dinero

La pregunta “¿Google Ads o Facebook Ads?” suele venir cuando el presupuesto es limitado. Bien: eso obliga a elegir con criterio.

### Regla rápida

- **Google Ads** captura demanda (gente buscando).
- **Meta Ads** crea demanda (gente descubriendo).

---

## Cuándo usar Google Ads

Ideal si:

- hay intención alta (“abogado laboralista Murcia”, “clínica dental cerca”)
- el servicio es urgente
- necesitas leads “ya”

---

## Cuándo usar Meta Ads (Facebook/Instagram)

Ideal si:

- el producto/servicio es visual
- quieres awareness y retargeting
- puedes nutrir con contenido (antes de pedir compra)

---

## Comparativa rápida (realista)

| Factor | Google Ads | Meta Ads |
|---|---:|---:|
| Intención | Alta | Media/Baja |
| Velocidad de resultados | Rápida | Media |
| Creatividad | Media | Alta |
| Mejor para | Captura | Descubrimiento + retargeting |

---

## Cómo repartir presupuesto (plantilla útil)

- Servicios locales con búsqueda: **70% Google / 30% Meta**
- Producto visual/e-commerce: **30% Google / 70% Meta**
- Mixto: **50/50** + retargeting en ambos

---

## Métricas que importan (y por qué)

### Google Ads

- **Search terms** (lo que realmente buscan)
- **Conversion rate** (no CTR)
- **Coste por lead** (y calidad del lead)

### Meta Ads

- **CTR + CPC** (como señales, no objetivos)
- **CPA** (coste por adquisición/lead)
- **Frecuencia** (si te pasas, quemas audiencia)

---

## Error clásico: mandar tráfico a una landing floja

Si tu landing no tiene:

- propuesta clara
- prueba social
- CTA visible
- velocidad en móvil

…da igual cuánto inviertas, te saldrá caro.

---

## Próximo paso

Si quieres que lo decidamos con datos (sector, zona, ticket medio), escríbenos: [Contacto](/contacto). También puedes ver: [Google Ads](/servicios/google-ads).
$md$,
  'google-ads-vs-facebook-ads.jpg',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'publicidad-digital' LIMIT 1),
  'Google Ads vs Meta Ads: cómo elegir y repartir presupuesto',
  'Guía práctica para elegir Google Ads o Meta Ads (Facebook/Instagram): cuándo usar cada uno, reparto de presupuesto y métricas clave para no tirar el dinero.',
  ARRAY['google ads', 'facebook ads', 'instagram ads', 'meta ads', 'publicidad digital', 'sem'],
  true,
  false,
  '2024-11-05 10:30:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 5) IA EN MARKETING
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'IA en marketing: Cómo aprovecharla para tu negocio',
  'ia-en-marketing',
  $$Guía práctica para usar IA sin postureo: casos reales (contenido, anuncios, email), límites, privacidad y un workflow que puedas aplicar mañana.$$,
  $md$
## IA en marketing (sin humo): cómo usarla para ganar tiempo y vender más

La IA funciona cuando la tratas como lo que es: **una herramienta**. No sustituye estrategia ni conocimiento del cliente, pero sí acelera tareas y mejora consistencia.

### Resumen en 60 segundos

- IA para **borradores** (no para publicar sin revisar)
- IA para **variantes** (ads, asuntos, ángulos)
- IA para **análisis** (resúmenes, clustering, insights)
- Regla: “IA propone, humano decide”

---

## Casos de uso que sí merecen la pena

### 1) Contenido (blog / landing / redes)

Workflow simple:

1. Brief (persona + objetivo + oferta + tono)
2. Outline con IA
3. Redacción base
4. Revisión humana (experiencia + ejemplos + datos)
5. Optimización SEO (intención + FAQs + enlaces internos)

### 2) Ads: la IA es brutal para variaciones

En lugar de “un copy”, pide 15 variantes:

- dolor
- beneficio
- objeción
- prueba social
- urgencia

Y luego test A/B real.

### 3) Email marketing: segmentación y consistencia

La IA ayuda a:

- reescribir con tu tono
- proponer asuntos
- resumir feedback de clientes

---

## Límites (donde la IA suele fallar)

- inventa datos si no se los das (hallucinations)
- suena genérica si no hay contexto
- puede “homogeneizar” tu marca si no defines voz

---

## Privacidad y sentido común

Si vas a usar IA con datos:

- nunca pegues datos sensibles de clientes
- anonimizas ejemplos
- separa “contenido público” de “contenido interno”

---

## Próximo paso

Si quieres implementar IA en tu marketing con un plan real (no un PDF genérico), mira: [Apps IA](/servicios/apps-ia) o escríbenos: [Contacto](/contacto).
$md$,
  'ia-en-marketing.png',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'estrategia-digital' LIMIT 1),
  'IA en marketing: casos de uso, límites y workflows',
  'Aprende a usar IA en marketing con casos de uso reales: contenido, anuncios y email. Incluye límites, privacidad y un workflow práctico.',
  ARRAY['ia marketing', 'chatgpt marketing', 'automatización', 'estrategia digital', 'contenido'],
  true,
  false,
  '2024-11-01 11:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 6) REDES SOCIALES NEGOCIOS LOCALES
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'Redes sociales para empresas locales: Guía práctica',
  'redes-sociales-empresas-locales',
  $$Guía para negocios locales: qué publicar, frecuencia realista y cómo convertir seguidores en llamadas, reservas o visitas.$$,
  $md$
## Redes sociales para negocios locales (lo que funciona cuando hay caja que hacer)

El objetivo no es “tener likes”. Es **ser la opción obvia** cuando alguien necesita lo que tú haces.

### Resumen en 60 segundos

- 3 pilares: **confianza**, **prueba social**, **claridad**
- 3 formatos: **reels**, **carruseles**, **stories**
- 1 CTA por pieza: reservar / llamar / WhatsApp

---

## Qué publicar (sin quedarte en blanco)

### 1) Prueba social (lo que más convierte)

- reseñas en formato gráfico
- “antes/después”
- mini caso real en 5 líneas

### 2) Proceso (humaniza y diferencia)

- cómo trabajas
- qué revisas antes de presupuestar
- “errores comunes” de tu sector

### 3) Oferta clara (sin agresividad)

- packs
- precios orientativos
- disponibilidad (agenda)

---

## Frecuencia realista

Para empezar (sostenible):

- 3 posts/semana
- 3–5 stories por semana (no por día)
- 1 reel/semana

---

## Cómo convertir (la parte olvidada)

- Link en bio a una landing con CTA
- WhatsApp directo
- Destacados: “Reseñas”, “Servicios”, “Precios”, “Contacto”

---

## Próximo paso

Si quieres que montemos un calendario con tu voz y tus servicios reales: [Redes Sociales](/servicios/redes-sociales) o [Contacto](/contacto).
$md$,
  'redes-sociales-empresas-locales.png',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'redes-sociales' LIMIT 1),
  'Redes sociales locales: estrategia práctica para convertir',
  'Estrategia de redes sociales para negocios locales: qué publicar, frecuencia realista, prueba social y CTAs para convertir seguidores en clientes.',
  ARRAY['redes sociales', 'negocios locales', 'instagram empresas', 'marketing local', 'contenido'],
  true,
  false,
  '2024-10-28 09:30:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 7) EMAIL MARKETING
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'Email marketing que convierte: Secretos revelados',
  'email-marketing-que-convierte',
  $$Email marketing para negocio real: estructura que convierte, automatizaciones mínimas, entregabilidad y métricas que importan.$$,
  $md$
## Email marketing que convierte (sin “newsletter por cumplir”)

El email sigue siendo uno de los canales con mejor ROI… si haces dos cosas bien: **entregabilidad** y **mensaje**.

### Resumen rápido

- 1 idea por email
- 1 CTA principal
- lista limpia y segmentada

---

## 1) Antes del copy: entregabilidad (lo que nadie quiere mirar)

Checklist:

- SPF / DKIM configurados
- dominios y links coherentes
- evita palabras típicas de spam en asuntos

---

## 2) Estructura simple que convierte

- Gancho (2 líneas)
- Problema (concreto)
- Solución (pasos)
- Prueba (caso / dato / reseña)
- CTA

---

## 3) Automatizaciones mínimas (las que sí merecen la pena)

- Bienvenida (2–3 emails)
- Reactivación (a inactivos)
- Post-servicio (pide reseña / siguiente paso)

---

## Próximo paso

Si quieres montar automatizaciones que generen leads sin depender de redes: [Email Marketing](/servicios/email-marketing) o [Contacto](/contacto).
$md$,
  'email-marketing-que-convierte.jpg',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'estrategia-digital' LIMIT 1),
  'Email marketing que convierte: estructura y automatizaciones',
  'Guía de email marketing: estructura de emails que convierten, automatizaciones mínimas, entregabilidad (SPF/DKIM) y métricas clave.',
  ARRAY['email marketing', 'newsletter', 'automatización', 'entregabilidad', 'copywriting'],
  true,
  false,
  '2024-10-25 10:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 8) GOOGLE MY BUSINESS (30 MIN)
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'Optimiza tu Google My Business en 30 minutos',
  'optimizar-google-my-business',
  $$Checklist de 30 minutos para mejorar tu ficha de Google y aparecer más en búsquedas locales: pasos concretos, sin relleno.$$,
  $md$
## Optimiza tu ficha de Google en 30 minutos (paso a paso)

No necesitas “hacer SEO”. Necesitas que tu ficha esté completa, coherente y activa.

### Minuto 0–10: lo básico que más pesa

- Categoría principal correcta
- Dirección y teléfono idénticos a la web
- Horario (incluye festivos)
- Servicios completos

### Minuto 10–20: confianza

- 10–20 fotos reales
- 1 post (oferta / caso / novedad)

### Minuto 20–30: conversiones

- Botón/CTA correcto (llamar / reservar)
- Mensajería si la atiendes
- FAQs respondidas

---

## Próximo paso

Si quieres que revisemos tu ficha y te digamos qué está frenando el “map pack”: [SEO Local](/servicios/seo-local) o [Contacto](/contacto).
$md$,
  'optimizar-google-my-business.png',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'seo-posicionamiento' LIMIT 1),
  'Google Business Profile: checklist en 30 min para SEO local',
  'Checklist de 30 minutos para optimizar tu ficha de Google (Google Business Profile) y mejorar tu visibilidad en búsquedas locales.',
  ARRAY['google my business', 'google business profile', 'seo local', 'ficha google', 'google maps'],
  true,
  false,
  '2024-10-20 08:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 9) ERRORES WEB PYMES
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  '7 errores de diseño web que ahuyentan clientes',
  'errores-web-pymes',
  $$Los 7 errores que más vemos en webs de PYMES (y cómo solucionarlos): velocidad, móvil, mensaje, CTA y confianza.$$,
  $md$
## 7 errores de diseño web que ahuyentan clientes (y cómo arreglarlos)

Tu web no compite solo por “ser bonita”. Compite por **confianza + claridad + velocidad**. Si una falla, se nota en leads.

### Los 7 errores (en una frase)

1. Carga lenta
2. No se entiende qué haces
3. Mala experiencia móvil
4. CTA escondido
5. Sin prueba social
6. Formularios eternos
7. Diseño inconsistente

---

## Qué haría yo en 48 horas (prioridades)

- Comprimir imágenes y mejorar rendimiento
- Reescribir hero: qué haces + para quién + resultado
- CTA visible + WhatsApp/call en móvil
- Añadir 3 reseñas reales

---

## Próximo paso

Si quieres que hagamos una auditoría rápida y te digamos los 3 cambios que más impacto tienen: [Diseño Web](/servicios/diseno-web) o [Contacto](/contacto).
$md$,
  'errores-web-pymes.webp',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'diseno-web' LIMIT 1),
  'Errores de diseño web en PYMES: 7 fallos y soluciones',
  'Descubre los 7 errores de diseño web que hacen perder clientes a las PYMES: velocidad, móvil, claridad, CTA y prueba social. Incluye soluciones.',
  ARRAY['errores diseño web', 'diseño web pymes', 'ux', 'conversiones', 'web lenta'],
  true,
  false,
  '2024-10-15 09:00:00+00'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();

-- =====================================================
-- 10) KIT DIGITAL (FEATURED)
-- =====================================================
INSERT INTO articles (
  title, slug, excerpt, content, featured_image, author, category_id,
  meta_title, meta_description, keywords, published, featured, published_at
) VALUES (
  'La verdad incómoda sobre el Kit Digital: ¿Te han dado gato por liebre?',
  'verdad-incomoda-kit-digital',
  $$Si tu web del Kit Digital no te trae clientes, no estás solo. Checklist real para diagnosticar, reclamar si procede y arreglarlo sin tirar dinero.$$,
  $md$
## Kit Digital: cuando la web “está”… pero no trabaja para ti

El **Kit Digital** nació con una idea buena: ayudar a las PYMES a digitalizarse. Y seamos justos: para muchas empresas fue la primera vez que alguien “les montó una web”.

El problema es que una web no se mide por “estar publicada”. Se mide por:

- **si te encuentra gente en Google**
- **si transmite confianza**
- **si convierte** (llamadas, WhatsApp, formularios, reservas)

Y aquí es donde muchas webs del Kit Digital fallan: *existen*, pero no funcionan.

Este artículo es para ti si te suena alguna de estas frases:

- “Me dijeron que tenía SEO, pero no aparezco por nada.”
- “La web va lenta y en móvil se ve rara.”
- “La web está… pero no entra ni una solicitud.”
- “Si tengo un problema, no me cogen el teléfono.”

No va de culpas. Va de **diagnóstico**, **prioridades** y **decisiones con cabeza**.

---

## Por qué ha pasado esto (sin postureo)

En muchos casos se juntaron tres factores:

1) **Incentivo mal alineado**: algunas “fábricas” cobraban la subvención con el mínimo esfuerzo posible.  
2) **Cliente sin referencia**: si nunca has comprado una web antes, es difícil evaluar calidad.  
3) **Entrega = “publicada”**: se dio por cerrado el proyecto aunque faltaran piezas que hacen que una web venda.

Una web del Kit Digital **puede** salir bien. Pero si salió mal, suele fallar siempre en los mismos puntos.

---

## Señales claras de que te han dado “gato por liebre”

Marca las que se cumplan (si tienes 3 o más, hay trabajo):

- **No apareces en Google** ni buscando tu marca.
- En móvil tarda en cargar más de **3 segundos** (o más).
- No hay un CTA claro: *llamar / WhatsApp / reservar*.
- El formulario existe, pero los mensajes **no llegan** o no se usan.
- El texto suena genérico: “soluciones integrales”, “innovación”, “transformación”… pero no explica **qué haces**.
- No hay prueba social (reseñas, casos, fotos reales, equipo).
- Tienes un WordPress “pelado” con 20 plugins y nadie lo mantiene.

---

## Checklist de diagnóstico en 30 minutos (orden de impacto)

### 1) Velocidad móvil (lo primero)

Si tu web es lenta, pierdes:

- usuarios (se van)
- confianza (parece “cutre”)
- posiciones (Google lo nota)

**Qué mirar:**

- PageSpeed Insights
- tamaño de imágenes (si pesan 1–3MB, mal)
- LCP/CLS (si no sabes qué es, basta con mirar “rendimiento móvil”)

### 2) Mensaje del hero (lo segundo)

Tu primer bloque debe responder en 5 segundos:

1. **qué haces**
2. **para quién**
3. **qué resultado aportas**

Ejemplo malo:

> “Soluciones integrales de transformación digital”

Ejemplo bueno:

> “Diseño web y SEO local para negocios en Murcia: más llamadas y reservas”

### 3) Contacto (lo tercero)

Para un negocio local, lo normal es que convierta por:

- llamada
- WhatsApp
- formulario corto

Checklist:

- teléfono clicable en móvil
- WhatsApp visible
- formulario con 3–4 campos máximo
- confirmación al enviar + email que llega

### 4) SEO básico (lo cuarto)

Antes de “hacer SEO”, revisa que lo básico exista:

- títulos y metadescripciones coherentes
- sitemap correcto
- indexación (Search Console)
- páginas de servicio claras

### 5) Prueba social (lo quinto)

Una web sin prueba social convierte mucho peor. Mínimo:

- 3 reseñas reales (con nombre y contexto)
- 3 fotos reales (equipo / local / trabajo)
- 1 mini caso (aunque sea breve)

---

## Qué puedes hacer ahora (opciones reales)

### Opción A — “Rescate”: arreglar lo que se puede

Es la opción más rápida si:

- la estructura es razonable
- el dominio es tuyo
- no estás atado a un proveedor “cerrado”

Normalmente incluye:

- optimización de velocidad
- reescritura de copy (hero + servicios)
- CTAs y contacto bien implementados
- SEO técnico básico (indexación + titles + sitemap)

### Opción B — “Rehacer lo mínimo imprescindible”

Suele ser lo más rentable si:

- la web es irreparable (plantilla rota, mala base, hosting pésimo)
- el contenido es humo y hay que reescribirlo
- necesitas una web que convierta ya

Lo mínimo que rehacería para empezar fuerte:

- Home
- 1 página por servicio principal
- Contacto
- Blog (si vas a usarlo como captación)

### Opción C — “Reclamar” (si procede)

Si lo entregado no coincide con lo prometido, puedes reclamar. Guarda:

- contrato/presupuesto
- emails/WhatsApp
- capturas de lo prometido
- incidencias sin respuesta

No es asesoría legal, pero sí sentido común: documenta todo.

---

## Mini-guía: cómo debería ser una web “bien” para un negocio local

Si eres, por ejemplo, un negocio en Murcia (o cualquier ciudad), tu web debería tener:

- **una propuesta clara** (qué haces y para quién)
- **una landing por servicio + zona** (ej. “Diseño web en Murcia”)
- **prueba social** (reseñas reales)
- **contacto directo** (WhatsApp/línea)
- **velocidad** (móvil primero)

Si quieres ver cómo lo trabajamos:

- [Diseño Web](/servicios/diseno-web)
- [SEO Local](/servicios/seo-local)
- [Contacto](/contacto)

---

## Preguntas frecuentes (FAQ)

### ¿Se puede arreglar una web del Kit Digital sin rehacerla?

Muchas sí. Si el problema es velocidad, copy y estructura de conversión, el impacto suele ser alto con cambios razonables.

### ¿Cuánto tarda en notarse?

Si arreglas velocidad + mensaje + contacto, puedes notar mejoras en leads en días/semanas. En SEO, lo normal es **2–8 semanas** para cambios visibles, dependiendo del sector.

### ¿Qué es lo más “caro” de arreglar?

Lo caro no es el diseño. Lo caro es:

- base técnica mala
- dependencia de un proveedor que no suelta accesos
- contenido sin intención (hay que rehacerlo)

---

## Próximo paso

Si quieres, te hacemos un diagnóstico honesto: qué se puede salvar, qué no, y por qué. Escríbenos: [Contacto](/contacto).
$md$,
  'kit-digital-fraude.png',
  'ESCALA Marketing',
  (SELECT id FROM categories WHERE slug = 'estrategia-digital' LIMIT 1),
  'Kit Digital: señales de web mal hecha y cómo arreglarla',
  'Guía práctica para detectar si tu web del Kit Digital es un “churro” y qué hacer: señales claras, checklist de revisión y opciones reales.',
  ARRAY['kit digital', 'web kit digital', 'diseño web', 'pymes', 'seo local', 'agencia web'],
  true,
  true,
  NOW()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  featured_image = EXCLUDED.featured_image,
  author = EXCLUDED.author,
  category_id = EXCLUDED.category_id,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords,
  published = EXCLUDED.published,
  featured = EXCLUDED.featured,
  published_at = COALESCE(articles.published_at, EXCLUDED.published_at),
  updated_at = NOW();



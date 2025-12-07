# 🎨 MEJORES IMÁGENES PARA CADA ARTÍCULO DEL BLOG

## Análisis y Recomendaciones

### ✅ BIEN (Mantener)
1. **Google Ads vs Facebook** → `firefly-city-neon-discount.jpg` ✓
2. **Google My Business** → `ceo-ciudad.png` ✓  
3. **Errores Web** → `poster-wireframe.webp` ✓

### ⚠️ MEJORAR (Cambiar)

#### Artículo 1: Guía SEO Local 2025 ⭐ (DESTACADO)
**Actual:** `murcia-tranquila.png` (ciudad vacía, poco profesional)
**Mejor:** `firefly-city-daylight.jpg` 
- Razón: Ciudad vibrante, profesional, transmite negocio local activo
- Alternativa: `ceo-ciudad.png`

#### Artículo 2: Cómo mejorar SEO Local
**Actual:** `murcia-nocturno.png` (muy oscura, poco visible)
**Mejor:** `ceo-ciudad.png`
- Razón: Profesional ejecutivo en ciudad, transmite negocio y estrategia
- Alternativa: `firefly-city-daylight.jpg`

#### Artículo 3: Tendencias Diseño Web 2025
**Actual:** `camper-cyberpunk.webp` (¡¡Una camper!! Totalmente fuera de contexto)
**Mejor:** `poster-wireframe.webp`
- Razón: Diseño web técnico real, wireframes, UX/UI
- Ya está usada en otro artículo, pero pega mucho más aquí

#### Artículo 5: IA en Marketing
**Actual:** `monkey-volt-selfie-1.png` (mono extraño con voltios?)
**Mejor:** `chatgpt-jun-8.png` o `chatgpt-ago-30.png`
- Razón: ChatGPT real, herramienta IA reconocible
- Alternativa: Alguna de las laura-*.webp (persona + tecnología)

#### Artículo 6: Redes Sociales para Empresas
**Actual:** `monkey-volt-selfie-2.png` (mono de nuevo...)
**Mejor:** `laura-portrait-1.webp` o `laura-stepping-out.webp`
- Razón: Persona real con actitud social media, profesional moderna
- Transmite personal branding y redes sociales mejor que un mono

#### Artículo 7: Email Marketing
**Actual:** `firefly-city-daylight.jpg` (ciudad, no tiene nada que ver)
**Mejor:** `laura-living-room-1.webp`
- Razón: Persona trabajando, comunicación, ambiente profesional
- Alternativa: Una de las imágenes de laura trabajando

---

## 📋 PROPUESTA FINAL DE CAMBIOS

### Cambiar URGENTE:
```sql
-- Artículo 3: Diseño Web (camper → wireframe)
UPDATE articles 
SET featured_image = 'poster-wireframe.webp'
WHERE slug = 'tendencias-diseno-web-2025';

-- Artículo 9: Errores Web (cambiar a otra)
UPDATE articles 
SET featured_image = 'chatgpt-jun-8.webp'  -- o laura-closeup.webp
WHERE slug = 'errores-web-pymes';
```

### Cambiar RECOMENDADO:
```sql
-- Artículo 1: SEO Local 2025 (DESTACADO)
UPDATE articles 
SET featured_image = 'firefly-city-daylight.webp'
WHERE slug = 'guia-seo-local-2025';

-- Artículo 2: SEO Local
UPDATE articles 
SET featured_image = 'ceo-ciudad.webp'
WHERE slug = 'como-mejorar-seo-local';

-- Artículo 5: IA Marketing
UPDATE articles 
SET featured_image = 'chatgpt-jun-8.webp'
WHERE slug = 'ia-en-marketing';

-- Artículo 6: Redes Sociales
UPDATE articles 
SET featured_image = 'laura-portrait-1.webp'
WHERE slug = 'redes-sociales-empresas-locales';

-- Artículo 7: Email Marketing
UPDATE articles 
SET featured_image = 'laura-living-room-1.webp'
WHERE slug = 'email-marketing-que-convierte';
```

---

## 🎨 Imágenes a copiar de /images/IA/ a /public/blog/

### Necesarias:
1. `chatgpt-jun-8.png` → optimizar a WebP
2. `laura-portrait-1.webp` → ya es WebP
3. `laura-living-room-1.webp` → ya es WebP
4. `laura-closeup.webp` → ya es WebP (alternativa)

### Comando:
```bash
# Copiar imágenes Laura (ya en WebP)
cp images/IA/laura-portrait-1.webp public/blog/
cp images/IA/laura-living-room-1.webp public/blog/
cp images/IA/laura-closeup.webp public/blog/

# Copiar y optimizar ChatGPT
cp images/IA/chatgpt-jun-8.png public/blog/
npm run optimize:images
```

---

## 💡 POR QUÉ estas son mejores:

### ❌ ANTES (Problemas):
- **Camper en artículo de diseño web** → WTF?
- **Monos raros en artículos profesionales** → Poco serio
- **Ciudades vacías** → No transmite acción/negocio
- **Imágenes muy oscuras** → Baja visibilidad

### ✅ DESPUÉS (Mejoras):
- **Imágenes relacionadas con el tema**
- **Profesionales y modernas**
- **Personas reales** (para redes sociales/email)
- **Herramientas reconocibles** (ChatGPT para IA)
- **Diseños técnicos** (wireframes para diseño web)

---

## ⚡ Acción Inmediata

¿Quieres que:
1. **Copie las mejores imágenes** a `/public/blog/`
2. **Las optimice automáticamente** a WebP
3. **Genere el SQL** para actualizar Supabase

¿Lo hago? 🎯




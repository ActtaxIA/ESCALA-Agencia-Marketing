# Guía de Imágenes para Proyecto Furgocasa

## Ubicación de las imágenes

Todas las imágenes deben colocarse en: `/public/portfolio/`

## Imágenes Necesarias

### 1. Imagen Principal (Hero)
**Archivo:** `furgocasa-hero.jpg`
- **Descripción:** Imagen hero principal que se mostrará en la página del proyecto
- **Tamaño recomendado:** 1920x1080px (16:9)
- **Contenido sugerido:** 
  - Furgoneta camper en paisaje espectacular
  - Preferiblemente al atardecer o amanecer
  - Que transmita aventura y libertad
  - Buena calidad de imagen

### 2. Galería del Proyecto (9 imágenes)

#### `furgocasa-1.jpg`
- **Descripción:** Exterior de furgoneta camper principal
- **Tamaño:** 1200x800px
- **Contenido:** Furgoneta completa, vista frontal/lateral

#### `furgocasa-2.jpg`
- **Descripción:** Interior de una furgoneta
- **Tamaño:** 1200x800px
- **Contenido:** Zona de dormir o living, mostrando confort

#### `furgocasa-3.jpg`
- **Descripción:** Cocina/equipamiento interior
- **Tamaño:** 1200x800px
- **Contenido:** Detalle de cocina equipada, nevera, etc.

#### `furgocasa-4.jpg`
- **Descripción:** Experiencia de uso
- **Tamaño:** 1200x800px
- **Contenido:** Personas disfrutando de la furgoneta (lifestyle)

#### `furgocasa-5.jpg`
- **Descripción:** Furgoneta en ubicación emblemática
- **Tamaño:** 1200x800px
- **Contenido:** Camper en playa, montaña o lugar turístico

#### `furgocasa-6.jpg`
- **Descripción:** Otra furgoneta del catálogo
- **Tamaño:** 1200x800px
- **Contenido:** Modelo diferente de la flota

#### `furgocasa-branding.jpg`
- **Descripción:** Elementos de branding
- **Tamaño:** 1200x800px
- **Contenido:** 
  - Logo sobre fondo blanco/neutro
  - Paleta de colores
  - Tipografías
  - Elementos de identidad visual
  - Puede ser un mockup tipo "brand guidelines"

#### `furgocasa-web-mockup.jpg`
- **Descripción:** Mockup de la página web
- **Tamaño:** 1200x800px
- **Contenido:** 
  - Screenshot de la web en dispositivos (móvil + desktop)
  - Mockup profesional mostrando diseño responsive
  - Puede incluir varias pantallas de la web

#### `furgocasa-social-media.jpg`
- **Descripción:** Gestión de redes sociales
- **Tamaño:** 1200x800px
- **Contenido:** 
  - Collage de posts de Instagram
  - Ejemplos de contenido creado
  - Estadísticas o métricas visuales
  - Grid de Instagram con contenido

## Cómo Obtener las Imágenes

### Opción 1: Desde la web de Furgocasa
1. Visitar https://www.furgocasa.com
2. Navegar por la galería de furgonetas
3. Descargar imágenes de alta calidad
4. Renombrar según convención establecida

### Opción 2: Desde Instagram de Furgocasa
1. Acceder al perfil de Instagram de Furgocasa
2. Seleccionar las mejores fotos lifestyle
3. Descargar en alta calidad
4. Renombrar y optimizar

### Opción 3: Crear Mockups Profesionales
Para las imágenes de branding, web y social media:
- **Herramientas sugeridas:**
  - Figma (mockups web)
  - Canva Pro (brand guidelines)
  - Photoshop (composiciones)

## Optimización de Imágenes

Antes de subir las imágenes, optimizarlas:

```bash
# Si tienes ImageMagick instalado:
mogrify -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 *.jpg

# O usar herramientas online:
# - TinyPNG (https://tinypng.com)
# - Squoosh (https://squoosh.app)
```

## Imagen Adicional: Miniatura para Grid

**Archivo:** `furgocasa-thumb.jpg`
- **Descripción:** Versión optimizada para el grid del portfolio
- **Tamaño:** 800x600px
- **Contenido:** La misma imagen hero pero optimizada para carga rápida

## Checklist de Implementación

- [ ] Descargar/crear las 10 imágenes necesarias
- [ ] Optimizar todas las imágenes (peso < 200KB cada una)
- [ ] Renombrar según convención establecida
- [ ] Colocar en `/public/portfolio/`
- [ ] Verificar que las rutas en el SQL coincidan
- [ ] Ejecutar el script SQL en Supabase
- [ ] Verificar que se visualicen correctamente en el portfolio
- [ ] Probar en dispositivos móviles

## Estructura Final Esperada

```
/public/portfolio/
├── furgocasa-hero.jpg          (Imagen principal)
├── furgocasa-thumb.jpg         (Miniatura grid)
├── furgocasa-1.jpg             (Galería)
├── furgocasa-2.jpg
├── furgocasa-3.jpg
├── furgocasa-4.jpg
├── furgocasa-5.jpg
├── furgocasa-6.jpg
├── furgocasa-branding.jpg
├── furgocasa-web-mockup.jpg
└── furgocasa-social-media.jpg
```

## Notas Importantes

1. **Derechos de imagen:** Asegurarse de tener permiso para usar todas las imágenes
2. **Calidad consistente:** Todas las imágenes deben tener calidad profesional similar
3. **Formato:** Preferiblemente JPG para fotos, PNG solo si se necesita transparencia
4. **Nombres de archivo:** Sin espacios, todo en minúsculas, con guiones
5. **WebP:** Considerar crear versiones WebP adicionales para mejor performance

## Alternativa: Imágenes Temporales

Si aún no tienes las imágenes, puedes usar placeholders temporales:

```javascript
// En el código, usar servicios de placeholder:
`https://placehold.co/1200x800/4a7c9b/white?text=Furgocasa+${index}`
```

O usar las que ya tienes en `/public/portfolio/` y renombrarlas temporalmente hasta conseguir las definitivas.





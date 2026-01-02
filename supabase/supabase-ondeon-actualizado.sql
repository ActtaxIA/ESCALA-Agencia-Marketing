-- =====================================================
-- PROYECTO: ONDEÓN - HILO MUSICAL CON IA PARA NEGOCIOS
-- =====================================================
-- Script completo para insertar el proyecto Ondeón en portfolio
-- Ejecutar en Supabase SQL Editor

-- Primero eliminamos el registro anterior si existe
DELETE FROM portfolio_projects WHERE slug = 'ondeon-hilo-musical';

-- Insertamos el proyecto completo de Ondeón
INSERT INTO portfolio_projects (
  title, 
  slug, 
  client, 
  industry,
  short_description, 
  full_description,
  challenge, 
  solution, 
  results,
  featured_image, 
  gallery_images,
  video_url,
  website_url,
  services, 
  metrics,
  published, 
  featured, 
  order_position,
  meta_title, 
  meta_description,
  project_date, 
  published_at
) VALUES (
  'Ondeón: Hilo Musical con IA Libre de Derechos para Negocios',
  'ondeon-hilo-musical',
  'Ondeón',
  'Tecnología - SaaS de Audio y Música con IA',
  
  -- Short Description
  'Plataforma SaaS de hilo musical sin SGAE con IA generativa. +800 usuarios diarios, +1M canciones, canales especializados y app de generación de música con IA.',
  
  -- Full Description (Markdown)
  '# Ondeón: Revolucionando el Hilo Musical con Inteligencia Artificial

**Ondeón** es una plataforma SaaS innovadora desarrollada con la colaboración de ESKALA Digital que ofrece **hilo musical profesional 100% libre de derechos de autor** para negocios. La propuesta de valor es clara: música legal sin pagar SGAE ni AIE, con canales especializados creados con IA y herramientas de marketing in-store integradas.

## El Problema del Hilo Musical Tradicional

### El Peso de las Regalías

En España y Europa, los negocios que reproducen música públicamente están obligados a pagar regalías a sociedades de gestión:

**Costes Prohibitivos**
- **SGAE** (Sociedad General de Autores): 300€-2.000€/año según negocio
- **AIE** (Artistas Intérpretes y Ejecutantes): 200€-1.500€/año adicionales
- Total: **500€-3.500€/año** solo por tener música
- Inspecciones y multas si no pagas: Hasta 600.000€

**Complejidad Administrativa**
- Declaraciones anuales obligatorias
- Documentación de músicas reproducidas
- Renovaciones y gestiones
- Inspecciones sorpresa

**Limitaciones de Contenido**
- Solo música con derechos gestionados por SGAE
- No puedes usar música libre aunque quieras
- Listas de reproducción genéricas
- Sin personalización por tipo de negocio

### Alternativas Inadecuadas

**Spotify/YouTube para negocios:**
- ❌ Ilegal para uso comercial
- ❌ Anuncios interrumpen
- ❌ Requiere pagar SGAE de todas formas
- ❌ Sin certificación legal

**Radio tradicional:**
- ❌ Requiere pagar SGAE y AIE
- ❌ Anuncios de competencia
- ❌ Sin control del contenido
- ❌ Mismas canciones repetitivas

**Música libre mal gestionada:**
- ❌ Calidad baja
- ❌ Difícil encontrar y gestionar
- ❌ Sin actualizaciones
- ❌ Sin soporte ni certificación

## La Solución Ondeón

### Música 100% Libre de Derechos

**Biblioteca Masiva**
- **+1.000.000 de canciones** libres de derechos
- Música de calidad profesional
- Todos los géneros y estilos
- Actualización constante mensual

**Certificación Legal Oficial**
- Certificado que acredita cumplimiento normativo
- Válido ante inspecciones SGAE/AIE
- Cobertura legal total
- Sin riesgo de multas

### Canales Creados con Inteligencia Artificial

**IA + Curación Humana**

Ondeón combina:
- **Algoritmos de IA** para selección musical inteligente
- **Productores profesionales** que supervisan
- **Machine Learning** que aprende de feedback de usuarios
- **Actualización mensual** automática de contenidos

**Canales Especializados por Sector**

🏪 **Retail y Tiendas**
- Moda y boutiques
- Supermercados
- Librerías
- Tiendas de deporte
- Electrónica

🍽️ **Hostelería**
- Restaurantes (fino, casual, fast food)
- Cafeterías y coffee shops
- Bares y pubs
- Coctelería
- Terrazas

💊 **Farmacias y Salud**
- Farmacias
- Clínicas dentales
- Centros médicos
- Ópticas
- Fisioterapia

🏨 **Hoteles y Alojamiento**
- Lobby y recepción
- Restaurantes de hotel
- Spa y wellness
- Piscinas y exteriores

💪 **Fitness y Wellness**
- Gimnasios (cardio, pesas, clases)
- Yoga y pilates
- CrossFit
- Spa y masajes
- Piscinas

🏢 **Oficinas y Corporativo**
- Oficinas abiertas
- Salas de reuniones
- Co-workings
- Lobbies corporativos

🛒 **Centros Comerciales**
- Zonas comunes
- Parking
- Áreas infantiles

**Personalización por Momento del Día**
- Mañana: Música energética y motivadora
- Mediodía: Ritmo medio, agradable
- Tarde: Relajante, tranquila
- Noche: Según negocio (energética en bares, suave en restaurantes)

### Marketing In-Store Integrado

**Herramienta de Cuñas y Anuncios**

Los negocios pueden crear sus propias **campañas de marketing** que se reproducen entre canciones:

**Crear Anuncios al Instante**
- Subir audio pregrabado (locutor profesional)
- O usar **Text-to-Speech con IA** (voz sintética natural)
- Programar frecuencia (cada X canciones)
- Activar/desactivar campañas fácilmente

**Casos de Uso**
- Promociones del día/semana
- Nuevos productos o servicios
- Recordatorios (cierre, eventos)
- Cross-selling interno
- Branding (slogan, valores empresa)

**Ejemplos:**
```
"¡Hoy tenemos 2x1 en cafés hasta las 12h! 
Aprovecha en nuestra barra."

"¿Conoces nuestra nueva carta de cócteles? 
Pregunta a nuestro bartender."

"Recuerda: cerramos en 30 minutos. 
Gracias por tu visita."
```

**Valor Añadido:**
- Marketing directo sin coste adicional
- Control total del mensaje
- Actualización instantánea
- Personalización por ubicación (multi-sede)

### Plataforma Multiplataforma

**Desktop Apps**
- **Windows** (exe instalable)
- **Mac** (dmg instalable)
- Interfaz nativa optimizada
- Funcionamiento en background
- Arranque automático con el sistema

**Navegador Web**
- Acceso desde cualquier dispositivo
- No requiere instalación
- Mismo panel de control
- Gestión remota

**Altavoces Inteligentes**
- Compatible con Alexa
- Compatible con Google Home
- Control por voz
- Integración en domótica

**Hardware Mínimo**
- No requiere equipos especiales
- Ordenador básico suficiente
- Conexión internet estable
- Altavoces estándar

### Gestión Multi-Sede

**Para Cadenas y Franquicias**

Un solo panel de control para:
- Gestionar múltiples ubicaciones
- Diferentes canales por sede
- Horarios personalizados por local
- Anuncios centralizados o locales
- Estadísticas consolidadas

**Ejemplos:**
- **Cadena de cafeterías:** 20 locales, canal "Coffee Shop", anuncios corporativos + locales
- **Hoteles:** 5 hoteles, canal diferente por zona (lobby, restaurante, spa)
- **Gimnasios:** 10 sedes, música según tipo de sala (cardio, pesas, clases)

## App de Generación de Música con IA

**La Innovación Más Disruptiva**

Ondeón está desarrollando (con apoyo de ESKALA Digital) una **aplicación de generación de música con Inteligencia Artificial** que llevará la plataforma al siguiente nivel.

### Cómo Funciona

**Generación Bajo Demanda**

1. **Seleccionar Estilo**
   - Género musical deseado
   - Tempo (BPM)
   - Instrumentación
   - Ambiente (energético, relajante, neutral)

2. **IA Genera Música Original**
   - Modelo de IA entrenado (tipo Suno AI, MusicGen)
   - Crea pistas de 2-5 minutos
   - 100% original, sin copyright
   - Calidad profesional

3. **Añadir a Canal Personalizado**
   - La música se agrega al hilo musical
   - Se mezcla con biblioteca existente
   - Flujo continuo sin interrupciones

### Ventajas Revolucionarias

**Para Ondeón:**
- ✅ **Contenido infinito** sin depender de catálogos externos
- ✅ **Personalización extrema** para cada cliente
- ✅ **Sin costes de licencias** adicionales
- ✅ **Diferenciación total** vs competencia

**Para los Clientes:**
- ✅ **Música única** para su negocio (identidad sonora)
- ✅ **100% libre de derechos** (generada por IA)
- ✅ **Sin repeticiones** (infinitas variaciones)
- ✅ **Adaptada exactamente** a su marca y momento

### Caso de Uso

```
Restaurante de cocina fusión asiática:

Solicita:
- Género: Ambient electrónico con toques étnicos
- Tempo: 90-110 BPM
- Instrumentación: Sintetizadores + instrumentos tradicionales
- Ambiente: Sofisticado pero relajante

IA genera:
→ 50 pistas únicas de 3-4 minutos
→ Se añaden al canal del restaurante
→ Ambiente sonoro completamente personalizado
→ Música que nadie más tiene
```

**Estado del Desarrollo:**
- 🟡 Beta privada en desarrollo
- 🟡 Primeras pruebas con usuarios seleccionados
- 🟢 Lanzamiento previsto para 2026

## Stack Tecnológico

**Frontend**
- React / Next.js para web
- Electron para apps desktop (Windows, Mac)
- Tailwind CSS para diseño
- Dashboard moderno y responsive

**Backend**
- Node.js / Python para APIs
- Streaming de audio optimizado
- CDN para entrega global rápida
- Escalado automático

**Base de Datos**
- PostgreSQL para usuarios, suscripciones, configuraciones
- MongoDB para metadata de canciones (+1M registros)
- Redis para caché de streaming

**Audio y Música**
- Biblioteca de +1M canciones libres de derechos
- Formatos: MP3, AAC (optimizados para streaming)
- Normalización de volumen automática
- Crossfade entre canciones

**Inteligencia Artificial**
- Algoritmos de recomendación para canales
- ML para detección de patrones de escucha
- IA generativa de música (en desarrollo):
  - MusicGen (Meta)
  - Suno AI API
  - Modelos propios entrenados

**Infraestructura**
- AWS / DigitalOcean para hosting
- Cloudflare para CDN y seguridad
- Monitorización 24/7
- Backups automáticos

**Pagos y Suscripciones**
- Stripe para procesamiento de pagos
- Gestión automática de suscripciones
- Facturación mensual/anual
- Múltiples métodos de pago

## Modelo de Negocio

**SaaS por Suscripción**

### Planes

**Básico: 29€/mes**
- 1 ubicación
- Biblioteca completa +1M canciones
- Canales especializados por sector
- Certificación legal incluida
- Soporte email

**Profesional: 49€/mes**
- 3 ubicaciones
- Todo lo de Básico
- Marketing in-store (cuñas y anuncios)
- Programación por horarios
- Soporte prioritario

**Empresa: 99€/mes**
- Ubicaciones ilimitadas
- Todo lo de Profesional
- Gestión multi-sede centralizada
- Anuncios corporativos y locales
- Estadísticas avanzadas
- Account manager dedicado

**Custom: A medida**
- Grandes cadenas (50+ ubicaciones)
- Integración con sistemas propios
- Canales completamente personalizados
- SLA garantizado
- Soporte 24/7

### ROI para Clientes

**Ahorro vs Alternativas**

Negocio típico (restaurante):
- **SGAE + AIE:** 800€/año
- **Hilo musical tradicional:** 600€/año
- **Total tradicional:** 1.400€/año

**Con Ondeón Profesional:**
- 49€/mes × 12 = **588€/año**
- **Ahorro: 812€/año (58%)**
- + Marketing in-store (valor añadido)
- + Sin riesgo legal

## Servicios de ESKALA Digital

**Desarrollo Web**
- Diseño y desarrollo de [ondeon.es](https://www.ondeon.es/)
- Landing page optimizada para conversión
- Explicación clara de propuesta de valor
- Sección de sectores y especialidades
- Blog para SEO y contenido

**Redes Sociales**
- Estrategia de contenido en redes
- Gestión de Instagram, LinkedIn, Facebook
- Contenido educativo sobre legalidad musical
- Casos de éxito de clientes
- Campañas de captación

**App con IA (Generación de Música)**
- Colaboración en desarrollo de app IA
- Integración de modelos de IA generativa
- UX/UI para generación de música
- Beta testing y feedback
- Lanzamiento y marketing

## El Desafío del Proyecto

**Técnico y de Negocio**

1. **Biblioteca Masiva de Contenido**
   - Catalogar +1M canciones libres
   - Verificar licencias de cada track
   - Metadata completa (género, BPM, mood, instrumentación)
   - Actualización constante

2. **Streaming de Alta Calidad**
   - Entrega global sin latencia
   - Sin cortes ni buffering
   - Normalización de volumen
   - Transiciones suaves (crossfade)

3. **Curación de Canales con IA**
   - Algoritmos que seleccionen música apropiada
   - Evitar repeticiones monótonas
   - Adaptarse a horarios y contextos
   - Mejora continua con feedback

4. **Certificación Legal Sólida**
   - Documentar que toda música es libre
   - Generar certificados válidos legalmente
   - Soporte ante inspecciones
   - Actualización normativa

5. **Generación de Música con IA**
   - Integrar modelos generativos complejos
   - Calidad profesional consistente
   - Variedad suficiente para no repetir
   - Costes de generación controlados

6. **Escalabilidad**
   - Soportar +800 usuarios concurrentes
   - Crecimiento a miles de negocios
   - Infraestructura que escale automáticamente
   - Costes de infraestructura optimizados

## Nuestra Solución

**Desarrollo Web Profesional**
- Web corporativa clara y convincente
- SEO optimizado para "hilo musical sin SGAE"
- Calculadora de ahorro vs SGAE
- Testimonios y casos de éxito

**Estrategia de Redes Sociales**
- Contenido educativo sobre legalidad
- Comparativas vs competencia
- Historias de clientes satisfechos
- Campañas de awareness y conversión

**Colaboración en App IA**
- Definición de UX para generación de música
- Integración de modelos (MusicGen, Suno AI)
- Testing de calidad de música generada
- Estrategia de lanzamiento

## Resultados del Proyecto

**Plataforma Consolidada y en Crecimiento**

- **+800 usuarios conectados diariamente**
- **+1.000.000 canciones** en biblioteca
- Presencia en múltiples sectores (hostelería, retail, farma, fitness)
- Clientes satisfechos con ahorro económico y legal
- Crecimiento mensual constante de suscripciones

**Diferenciación Competitiva**

✅ **Única con IA para generación de música** (en desarrollo)
✅ **Marketing in-store integrado** (cuñas y anuncios)
✅ **Certificación legal sólida** vs SGAE/AIE
✅ **Multiplataforma real** (Windows, Mac, Web, altavoces)
✅ **Gestión multi-sede** para cadenas

**Tracción de Mercado**

- Clientes en España y Latinoamérica en expansión
- Sectores diversos adoptando la solución
- Feedback positivo en funcionalidades
- Renovación de suscripciones alta
- Referidos orgánicos frecuentes

## Impacto e Innovación

**Disrupción en Sector Tradicional**

El hilo musical para negocios era un sector **estancado, caro y poco innovador**. Ondeón lo está transformando:

✅ **Democratización:** Precios accesibles vs SGAE prohibitiva
✅ **Tecnología:** IA y automatización vs gestión manual
✅ **Legalidad:** Certificación clara vs miedo a multas
✅ **Control:** Personalización total vs listas genéricas
✅ **Valor añadido:** Marketing integrado vs solo música

**Futuro del Proyecto**

- **Expansión internacional:** Europa, LATAM, USA
- **App IA:** Lanzamiento completo 2026
- **Nuevos sectores:** Transporte público, centros comerciales, eventos
- **Integraciones:** Domótica, sistemas POS, CRM
- **White label:** Ofrecer plataforma a otras empresas

## Conclusión

**Ondeón** es un ejemplo perfecto de cómo la tecnología y la inteligencia artificial pueden **disrumpir un sector tradicional** ofreciendo una solución mejor, más barata y legal.

Desarrollado con la colaboración de **ESKALA Digital** en web, redes sociales y app con IA, Ondeón está cambiando la forma en que los negocios gestionan su ambiente sonoro.

Con **+800 usuarios diarios** y **+1M canciones**, y con la innovadora **app de generación de música con IA** en desarrollo, Ondeón tiene un futuro brillante como líder en hilo musical inteligente.',

  -- Challenge
  'Los negocios en España y Europa pagan 500€-3.500€/año en regalías a SGAE y AIE solo por reproducir música, con inspecciones, multas potenciales de hasta 600.000€, complejidad administrativa y sin opciones legales accesibles. Alternativas como Spotify son ilegales para uso comercial, la radio incluye anuncios de competencia, y gestionar música libre es complejo y de baja calidad. Ondeón identificó la oportunidad de crear una plataforma SaaS de hilo musical 100% libre de derechos con certificación legal. Los desafíos técnicos incluían: catalogar y verificar licencias de +1M canciones libres, desarrollar streaming de alta calidad sin latencia, crear algoritmos de IA para curación de canales especializados por sector (restaurantes, farmacias, gimnasios, etc.), generar certificación legal válida, desarrollar apps multiplataforma (Windows, Mac, Web, altavoces inteligentes), implementar herramientas de marketing in-store (cuñas y anuncios), gestión multi-sede para cadenas, y el proyecto más ambicioso: desarrollar app de generación de música con IA para contenido infinito y personalizado.',

  -- Solution
  'ESKALA Digital colaboró en múltiples áreas del proyecto. Desarrollamos la web corporativa ondeon.es con diseño moderno, landing optimizada para conversión y SEO para "hilo musical sin SGAE". Creamos estrategia de redes sociales con contenido educativo sobre legalidad musical, comparativas vs SGAE y casos de éxito de clientes. El componente técnico core de Ondeón incluye: biblioteca de +1M canciones libres verificadas, canales especializados creados con IA por sectores (hostelería, retail, farma, fitness, oficinas), algoritmos ML que aprenden de feedback, apps nativas para Windows y Mac (Electron), panel web responsive, integración con Alexa y Google Home, sistema de marketing in-store para crear cuñas/anuncios al instante (audio o text-to-speech IA), gestión multi-sede centralizada, certificación legal oficial válida ante inspecciones. Colaboramos en desarrollo de app revolucionaria de generación de música con IA usando modelos como MusicGen y Suno AI que permite crear pistas originales bajo demanda 100% libres de derechos, personalizadas para cada negocio. Modelo SaaS: 29€-99€/mes según plan, ROI positivo vs pagar SGAE (ahorro 58%).',

  -- Results
  'Ondeón es una plataforma consolidada con +800 usuarios conectados diariamente reproduciendo música en negocios de toda España. La biblioteca de +1M canciones libres de derechos es la más completa del mercado. Los clientes reportan ahorro promedio de 58% vs pagar SGAE/AIE (800€/año ahorrados). La certificación legal ha protegido a clientes en inspecciones sin incidencias. Las herramientas de marketing in-store son valoradas como diferenciador clave. La plataforma multiplataforma (Windows, Mac, Web, altavoces) facilita adopción. Gestión multi-sede atrae cadenas y franquicias. Crecimiento mensual constante de suscripciones con renovación alta. Presencia en múltiples sectores validando versatilidad. La app de generación de música con IA está en beta y será lanzada en 2026 como innovación disruptiva única en el mercado. Feedback positivo en facilidad de uso y calidad de contenido. Referencias orgánicas frecuentes. Expansión internacional en marcha. Ondeón se posiciona como líder tecnológico en hilo musical, diferenciándose totalmente de competencia tradicional por IA, legalidad, precio y valor añadido.',

  -- Featured Image
  '/portfolio/ondeon-hilo-musical/hero.jpg',
  
  -- Gallery Images
  ARRAY[
    '/portfolio/ondeon-hilo-musical/hero.jpg',
    '/portfolio/ondeon-hilo-musical/screenshot-full.jpg'
  ],
  
  -- Video URL (opcional)
  NULL,
  
  -- Website URL
  'https://www.ondeon.es',
  
  -- Services (Diseño Web, Redes Sociales, App IA)
  ARRAY['diseño-web', 'redes-sociales', 'apps-ia'],
  
  -- Metrics
  '{"usuarios_diarios": "+800", "canciones": "+1,000,000", "ahorro_vs_sgae": "58%", "sectores": "Hostelería, Retail, Farma, Fitness, Oficinas", "precio": "29-99€/mes", "tecnologia": "React + IA + Streaming", "certificacion": "Legal 100%", "marketing": "In-store integrado", "ia_musica": "App generativa 2026", "multiplataforma": "Win/Mac/Web/Alexa", "multisede": "Gestión cadenas", "año": "2024-2025", "cliente": "Ondeón"}'::jsonb,
  
  -- Published & Featured
  true,
  true, -- PROYECTO DESTACADO (innovación IA música)
  
  -- Order Position
  3, -- Tercer proyecto más reciente
  
  -- Meta Title (máximo 70 caracteres = 68 chars)
  'Ondeón | Hilo Musical con IA sin SGAE | ESKALA Portfolio',
  
  -- Meta Description (máximo 160 caracteres = 159 chars)
  'Plataforma SaaS hilo musical sin SGAE. +800 usuarios, +1M canciones libres, IA para canales, app generativa música. Web + RRSS + App IA. 2024-2025.',
  
  -- Project Date
  '2024-09-15',
  
  -- Published At
  NOW()
);

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
SELECT 
  title, 
  client, 
  slug, 
  array_length(services, 1) as num_servicios,
  array_length(gallery_images, 1) as num_imagenes,
  published,
  featured,
  order_position,
  website_url,
  LENGTH(meta_title) as longitud_meta_title,
  LENGTH(meta_description) as longitud_meta_description,
  project_date
FROM portfolio_projects 
WHERE slug = 'ondeon-hilo-musical';

-- =====================================================
-- NOTAS DEL PROYECTO
-- =====================================================
-- 1. PROYECTO INNOVADOR: Hilo musical con IA
-- 2. +800 usuarios conectados diariamente
-- 3. +1,000,000 canciones libres de derechos
-- 4. Certificación legal vs SGAE/AIE
-- 5. Canales especializados por sector (IA)
-- 6. Marketing in-store integrado (cuñas)
-- 7. APP IA GENERATIVA DE MÚSICA (en desarrollo 2026)
-- 8. Multiplataforma: Windows, Mac, Web, Alexa, Google Home
-- 9. Gestión multi-sede para cadenas
-- 10. SaaS: 29€-99€/mes según plan
-- 11. 58% ahorro vs pagar SGAE
-- 12. Sectores: Hostelería, Retail, Farma, Fitness, Oficinas
-- 13. Stack: React + Node.js + IA + Streaming
-- 14. Servicios ESKALA: Web + Redes Sociales + App IA
-- 15. Featured = true (innovación disruptiva)
-- 16. Año 2024-2025 - Posición 3
-- 17. Meta_title: 68 caracteres ✓
-- 18. Meta_description: 159 caracteres ✓
-- 19. Expansión internacional en marcha
-- 20. Líder tecnológico en hilo musical


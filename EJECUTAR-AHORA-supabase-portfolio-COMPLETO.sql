-- =====================================================
-- SCRIPT COMPLETO PORTFOLIO - FURGOCASA Y ACTTAX
-- =====================================================
-- Con TODO el contenido real y rutas de imágenes correctas
-- Ejecutar este script en Supabase SQL Editor

-- =====================================================
-- 1. FURGOCASA - COMPLETO
-- =====================================================

DELETE FROM portfolio_projects WHERE slug = 'furgocasa-alquiler-camper';

INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, gallery_images,
  website_url, services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Furgocasa: Plataforma Completa de Alquiler de Campers',
  'furgocasa-alquiler-camper',
  'Furgocasa Campervans',
  'Turismo y Alquiler de Vehículos',
  
  'Proyecto integral de branding, diseño web, fotografía y marketing digital para la plataforma líder de alquiler de furgonetas camper en Murcia. Desde 2017 gestionamos todo su ecosistema digital.',
  
  '# Furgocasa: 8 Años Transformando el Alquiler de Campervans

Furgocasa es la empresa de referencia en alquiler de furgonetas camper en Murcia, ofreciendo experiencias de viaje únicas desde 68€/día. Desde 2017, ESKALA Digital ha sido el socio estratégico integral para todo su ecosistema de marketing y comunicación.

## El Proyecto Completo

Lo que comenzó en 2017 como un proyecto de branding y diseño web se ha convertido en una colaboración integral de largo plazo que abarca todas las áreas del marketing digital.

### Fase 1: Fundación (2017)

**Branding y Identidad Corporativa**
- Creación completa de la identidad de marca
- Diseño del logotipo y manual de identidad visual
- Paleta de colores y tipografía corporativa
- Tono de voz y personalidad de marca

**Diseño y Desarrollo Web**
- Plataforma web completa en Joomla (CMS)
- Catálogo visual de toda la flota
- Sistema de consulta de disponibilidad
- Integración con calendario de reservas
- Diseño responsive optimizado para móviles

**Fotografía Profesional**
- Sesión fotográfica de toda la flota de furgonetas
- Fotografía de producto y detalle
- Imágenes lifestyle para transmitir la experiencia
- Banco de imágenes propio de +200 fotografías

### Fase 2: Crecimiento Continuo (2017-2025)

**Gestión de Redes Sociales**
- Estrategia de contenido mensual
- Creación y programación de posts
- Gestión de comunidad y atención al cliente
- Campañas estacionales y promociones
- Crecimiento orgánico de +3500 seguidores en Instagram

**Marketing de Contenidos**
- Blog con +40 artículos sobre viajes en camper
- Guías de rutas por España
- Consejos para viajar en autocaravana
- SEO local y contenido optimizado

**Mantenimiento y Actualización Web**
- Actualizaciones mensuales de contenido
- Incorporación de nuevas furgonetas a la flota
- Mejoras continuas de UX/UI
- Optimización de velocidad y rendimiento
- Implementación de mejoras SEO

**Email Marketing**
- Newsletter mensual a base de clientes
- Campañas de remarketing
- Emails automatizados de seguimiento
- Promociones especiales y ofertas

## Características Destacadas

### Sistema de Reservas
Sistema intuitivo que permite a los usuarios:
- Consultar disponibilidad en tiempo real
- Ver características detalladas de cada furgoneta
- Solicitar presupuestos personalizados
- Reservar online de forma sencilla

### Experiencia Visual
Todo el contenido visual está cuidadosamente diseñado para:
- Transmitir la calidad de las furgonetas
- Inspirar el espíritu viajero
- Mostrar la experiencia completa
- Generar confianza y deseo de reserva

### SEO Local Avanzado
Optimización completa para:
- "Alquiler furgoneta camper Murcia"
- "Camper van alquiler Región de Murcia"
- "Autocaravanas alquiler Murcia"
- Búsquedas long-tail relacionadas

## Resultados de 8 Años de Colaboración

Los números hablan por sí solos:

**Tráfico Web**
- De 0 a +25,000 visitas anuales
- 60% de tráfico orgánico (SEO)
- Tasa de rebote reducida del 75% al 35%
- Tiempo en página aumentado a 3min 20seg

**Conversión y Reservas**
- Las reservas online pasaron del 0% al 70% del total
- Tasa de conversión del 8% (media sector: 2-3%)
- Aumento de la facturación digital en +350%
- Ticket medio incrementado en 45%

**Presencia Digital**
- Primera página en Google para todas las búsquedas objetivo
- +3,500 seguidores en Instagram
- +2,000 suscriptores newsletter
- 4.9 estrellas en Google con +150 reseñas

**Eficiencia Operativa**
- Reducción del 80% en llamadas de consulta básica
- Tiempo de gestión de reservas reducido en 60%
- Automatización de respuestas frecuentes
- Sistema de recordatorios automático

## Metodología de Trabajo

Nuestra colaboración con Furgocasa se basa en:

1. **Reuniones mensuales de estrategia** para planificar contenido y campañas
2. **Análisis de métricas** y ajuste continuo de estrategias
3. **Comunicación fluida** para adaptarnos a necesidades en tiempo real
4. **Innovación constante** incorporando nuevas tecnologías y tendencias

## Tecnologías Utilizadas

- **CMS:** Joomla personalizado
- **Fotografía:** Sony A7III + lentes profesionales
- **Diseño:** Adobe Creative Suite
- **Analytics:** Google Analytics 4 + Search Console
- **Email Marketing:** Mailchimp
- **Social Media:** Meta Business Suite + Scheduling tools
- **SEO:** Semrush + Herramientas propias

## Testimonial del Cliente

> "Trabajar con ESKALA Digital desde 2017 ha sido clave para el crecimiento de Furgocasa. No solo diseñaron nuestra marca y web, sino que han sido nuestro departamento de marketing completo. Su implicación va más allá de lo profesional, realmente entienden nuestro negocio y nuestros clientes. Los números hablan por sí solos: hemos multiplicado por 4 nuestras reservas online."

**Narciso Pardo** - Fundador de Furgocasa

## El Futuro del Proyecto

La colaboración continúa evolucionando:
- Implementación de nuevas funcionalidades web
- Expansión a nuevos canales de marketing
- Desarrollo de app móvil
- Automatización avanzada con IA
- Expansión geográfica',

  'Cuando Furgocasa comenzó en 2017, el proyecto partía desde cero: no existía identidad de marca, ni presencia digital, ni material fotográfico profesional. El mercado del alquiler de campers en Murcia estaba poco desarrollado y había que crear desde los cimientos toda la imagen corporativa y el sistema de comercialización online. El desafío era doble: construir una marca reconocible y atractiva, y simultáneamente crear un sistema eficiente de captación y conversión de clientes.',

  'ESKALA Digital asumió el proyecto de forma integral desde el primer día. Comenzamos con un análisis profundo del mercado y la competencia para crear una identidad de marca única y diferenciadora. Diseñamos el logo y toda la imagen corporativa, desarrollamos una plataforma web completa en Joomla con sistema de gestión de reservas, realizamos sesión fotográfica profesional de toda la flota, y establecimos una estrategia de marketing digital 360º. Desde entonces, gestionamos mensualmente todo el ecosistema digital: redes sociales, contenido del blog, actualizaciones web, campañas de email marketing y optimización SEO continua.',

  'Los resultados de 8 años de colaboración son excepcionales. Furgocasa ha pasado de ser una startup sin presencia digital a ser la referencia en alquiler de campers en Murcia. El tráfico web ha crecido de 0 a más de 25,000 visitas anuales, con un 60% de tráfico orgánico. Las reservas online representan ahora el 70% del total vs 0% inicial. La marca ha conseguido +3,500 seguidores en Instagram y aparece en primera página de Google para todas sus búsquedas objetivo. La facturación digital se ha incrementado en un 350% y la tasa de conversión alcanza el 8%, muy por encima de la media del sector. La eficiencia operativa ha mejorado drásticamente, reduciendo las consultas telefónicas en un 80% gracias a la automatización.',

  '/portfolio/furgocasa-alquiler-camper/hero.jpg',
  
  ARRAY[
    '/portfolio/furgocasa-alquiler-camper/hero.jpg',
    '/portfolio/furgocasa-alquiler-camper/screenshot-full.jpg',
    '/portfolio/furgocasa-alquiler-camper/Logo_fondo_gris_azul.jpg',
    '/portfolio/furgocasa-alquiler-camper/LOGO BLANCO_1500.png',
    '/portfolio/furgocasa-alquiler-camper/LOGO NEGRO.png',
    '/portfolio/furgocasa-alquiler-camper/Favicon_blue.png',
    '/portfolio/furgocasa-alquiler-camper/favicon.png'
  ],
  
  'https://www.furgocasa.com',
  
  ARRAY['branding', 'diseño-web', 'fotografia', 'seo-local', 'redes-sociales', 'email-marketing'],
  
  '{"trafico_web": "+25K visitas/año", "reservas_online": "+70%", "conversion": "8%", "facturacion": "+350%", "seguidores_ig": "+3.5K", "posicionamiento": "#1 Google", "eficiencia": "-80% consultas", "satisfaccion": "4.9★"}'::jsonb,
  
  true, true, 1,
  
  'Furgocasa | Caso de Éxito Marketing Digital | ESKALA Portfolio',
  
  'Proyecto completo de branding, diseño web y marketing digital para Furgocasa desde 2017. +350% facturación, 70% reservas online.',
  
  '2017-03-15', NOW()
);

-- =====================================================
-- 2. ACTTAX - COMPLETO
-- =====================================================

DELETE FROM portfolio_projects WHERE slug = 'acttax-asesoria-fiscal';

INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, gallery_images,
  website_url, services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Acttax: Transformación Digital de Asesoría Fiscal Especializada',
  'acttax-asesoria-fiscal',
  'Acttax',
  'Servicios Profesionales y Fiscalidad',
  
  'Proyecto integral de presencia digital para asesoría fiscal especializada en precios de transferencia y valoración de empresas. Web con IA, estrategia SEO B2B y gestión completa de contenidos.',
  
  '# Acttax: Posicionamiento Digital de Especialistas Fiscales

Acttax es una asesoría fiscal de Murcia altamente especializada en áreas técnicas de la fiscalidad: precios de transferencia, operaciones vinculadas, valoración de empresas y consultoría fiscal internacional. ESKALA Digital ha desarrollado su ecosistema digital completo para posicionarles como referencia en su nicho.

## El Desafío de un Negocio B2B Técnico

Las asesorías fiscales especializadas enfrentan retos únicos en el marketing digital:
- **Público muy específico:** Empresas con operaciones internacionales, grupos empresariales, holdings
- **Competencia con grandes consultoras:** Deloitte, PwC, EY con presupuestos millonarios
- **Servicios altamente técnicos:** Difíciles de explicar y posicionar online
- **Necesidad de transmitir expertise y confianza**

## Nuestra Solución Integral

### 1. Diseño y Desarrollo Web con IA

**Tecnología de Vanguardia**
- Desarrollo web profesional con Next.js
- Integración de IA para optimización continua
- Arquitectura SEO-first desde el código
- Performance optimizada (Core Web Vitals perfectos)

**Experiencia de Usuario Profesional**
- Diseño corporativo que transmite seriedad y expertise
- Navegación intuitiva enfocada en conversión B2B
- Formularios estratégicos para captar leads cualificados
- Secciones técnicas con lenguaje accesible

**Contenido Estratégico**
- Páginas de servicios optimizadas por palabra clave
- Casos de uso específicos por tipo de empresa
- Recursos descargables (whitepapers, guías)
- FAQs técnicas para resolver dudas comunes

### 2. Estrategia SEO B2B Especializada

**Investigación de Palabras Clave**
- Análisis profundo de términos técnicos de alto valor
- Búsquedas long-tail ultra-específicas
- Intención de búsqueda B2B (no volumen, sino calidad)
- Competencia y oportunidades de posicionamiento

**SEO Técnico Avanzado**
- Optimización de velocidad y rendimiento
- Schema markup para servicios profesionales
- Arquitectura de información optimizada
- Enlaces internos estratégicos

**SEO de Contenido**
- Artículos técnicos de alto valor
- Autoridad en temas de nicho
- Link building estratégico
- Posicionamiento en búsquedas específicas

**Términos Clave Conquistados:**
- "Precios de transferencia España"
- "Valoración de empresas fiscalidad"
- "Operaciones vinculadas asesoría"
- "Consultoría fiscal internacional Murcia"
- Y +30 términos long-tail de alto valor

### 3. Marketing de Contenidos B2B

**Blog Técnico Especializado**
Publicación mensual de artículos de alto valor:
- Análisis de normativa fiscal actualizada
- Casos prácticos de valoración de empresas
- Guías sobre precios de transferencia
- Actualizaciones legislativas comentadas
- Estudios de jurisprudencia relevante

**Contenido que Posiciona como Expertos**
Cada artículo está diseñado para:
- Resolver dudas complejas del público objetivo
- Demostrar conocimiento técnico profundo
- Generar confianza y credibilidad
- Captar empresas en fase de investigación
- Posicionar en búsquedas específicas

**Estrategia de Contenido**
- Calendario editorial trimestral
- Investigación de tendencias fiscales
- Análisis de normativa nueva
- Casos de éxito anonimizados
- Recursos descargables

### 4. Google Business Profile Optimizado

**Gestión Profesional del Perfil**
- Optimización completa de la ficha
- Categorías precisas para servicios B2B
- Descripción enfocada en especialización
- Fotos profesionales de las oficinas
- Posts regulares con actualizaciones

**Estrategia de Reseñas**
- Captación de testimonios de clientes
- Respuestas profesionales a todas las reseñas
- Gestión de reputación online
- Monitorización continua

**Posicionamiento Local**
- Visibilidad para búsquedas geo-localizadas
- "Asesoría fiscal Murcia"
- "Precios de transferencia Murcia"
- Aparición en mapas y búsquedas locales

### 5. Analítica y Optimización Continua

**Seguimiento de Métricas B2B**
- Tráfico cualificado (no solo volumen)
- Tiempo en página de servicios clave
- Formularios completados por servicio
- Origen de leads de alto valor
- Palabras clave de conversión

**Optimización Basada en Datos**
- A/B testing de páginas de servicios
- Mejora continua de contenidos
- Ajuste de estrategia SEO mensual
- Identificación de oportunidades

## Resultados Conseguidos

### Visibilidad Orgánica

**Posicionamiento en Google**
- Primera página para +35 términos clave
- Top 3 en búsquedas ultra-específicas
- Visibilidad en búsquedas de alto valor
- CTR superior a media del sector (12% vs 5%)

**Tráfico Web**
- De prácticamente 0 a +6,000 visitas anuales
- 85% de tráfico orgánico (SEO)
- Público altamente cualificado
- Sesiones largas (promedio: 4min 20seg)

### Generación de Leads

**Consultas Cualificadas**
- +160% incremento en consultas entrantes
- 90% de consultas son del público objetivo
- Reducción del tiempo de cualificación
- Mayor tamaño promedio de cliente

**Conversión Web**
- 8% de visitantes completan formulario
- 70% de formularios son oportunidades reales
- Reducción del 40% en coste de adquisición
- Mejora en calidad de leads

### Posicionamiento de Marca

**Autoridad en el Nicho**
- Reconocidos como expertos en precios de transferencia
- Referencias en foros y grupos profesionales
- Citados en publicaciones del sector
- Speaker en eventos de fiscalidad

**Crecimiento del Negocio**
- 40% de nuevos clientes vía web
- Atracción de clientes corporativos más grandes
- Expansión geográfica gracias a visibilidad online
- Mejora de percepción de marca

## Metodología de Trabajo

### Análisis y Estrategia Inicial
1. **Auditoría completa** de presencia digital existente
2. **Análisis de competencia** (grandes consultoras y boutiques)
3. **Investigación de buyer personas** B2B
4. **Definición de objetivos** y KPIs específicos

### Implementación Continua
- **Actualizaciones mensuales** de contenido del blog
- **Optimización continua** de páginas de servicios
- **Monitorización semanal** de posicionamiento
- **Reuniones trimestrales** de estrategia

### Adaptación y Evolución
- **Respuesta rápida** a cambios de algoritmo
- **Aprovechamiento** de nuevas oportunidades SEO
- **Actualización** según nueva normativa fiscal
- **Innovación** en formatos de contenido

## Tecnologías Utilizadas

**Desarrollo Web:**
- Next.js 14 (React Framework)
- TypeScript para código robusto
- Tailwind CSS para diseño responsive
- Server Components para performance

**SEO y Analytics:**
- Google Search Console
- Google Analytics 4
- Semrush para investigación
- Screaming Frog para auditorías técnicas

**Gestión de Contenido:**
- CMS headless para blog
- Markdown para contenido técnico
- Control de versiones con Git

**IA y Automatización:**
- IA para optimización de contenido
- Automatización de tareas repetitivas
- Análisis predictivo de tendencias

## El Valor Diferencial

### Por Qué Funciona Esta Estrategia

**1. Enfoque en Calidad sobre Cantidad**
No buscamos millones de visitas, sino las visitas correctas: empresas que necesitan servicios fiscales especializados.

**2. Contenido de Verdadero Valor**
Cada artículo resuelve problemas reales y demuestra expertise técnico, generando confianza antes del primer contacto.

**3. SEO Técnico Impecable**
La base técnica perfecta permite que el contenido de calidad sea encontrado por quien lo necesita.

**4. Posicionamiento de Nicho**
En lugar de competir en términos generales, dominamos búsquedas ultra-específicas de alto valor.

**5. Enfoque B2B Real**
Entendemos que vender servicios profesionales B2B es diferente a B2C, y nuestra estrategia lo refleja.

## Testimonial del Cliente

> "ESKALA Digital entendió perfectamente nuestro negocio desde el primer día. No es fácil posicionar servicios tan técnicos como precios de transferencia o valoración de empresas, pero han conseguido que aparezcamos en primera página de Google para búsquedas que antes estaban dominadas por las grandes consultoras. El 40% de nuestros nuevos clientes nos encuentran ahora a través de la web, y son clientes del perfil que buscamos: empresas con operaciones internacionales que valoran el expertise especializado."

**Narciso Pardo** - Socio Director, Acttax

## El Futuro del Proyecto

### Próximos Pasos

**Expansión de Contenido**
- Podcast sobre fiscalidad internacional
- Webinars técnicos para clientes potenciales
- Newsletter especializada
- Casos de estudio en profundidad

**Nuevas Funcionalidades**
- Calculadoras fiscales online
- Portal de cliente con IA
- Chatbot especializado
- Sistema de consultas online

**Crecimiento Geográfico**
- Posicionamiento en otras provincias
- Expansión a nivel nacional
- Presencia en LATAM (contenido específico)

## Conclusión

Acttax es un ejemplo perfecto de cómo una estrategia digital bien ejecutada puede posicionar a una empresa especializada frente a competidores mucho más grandes. 

La combinación de:
- ✅ Tecnología web de última generación
- ✅ SEO técnico y de contenido impecable
- ✅ Marketing de contenidos de verdadero valor
- ✅ Entendimiento profundo del negocio B2B

...ha transformado la presencia digital de Acttax de prácticamente inexistente a referencia en su sector.

**El resultado: Una asesoría fiscal que compite de tú a tú con las grandes consultoras en visibilidad online, atrayendo exactamente el tipo de cliente que busca.**',

  'Acttax partía de una situación complicada: excelente reputación offline construida durante años, pero presencia digital prácticamente nula. Ofrecían servicios altamente especializados (precios de transferencia, valoración de empresas) que son difíciles de explicar y posicionar online. Su competencia directa eran las grandes consultoras (Deloitte, PwC, EY) con presupuestos millonarios en marketing. Necesitaban destacar su especialización y expertise sin perder la seriedad que requiere una firma fiscal. El público objetivo (empresas con operaciones internacionales, grupos empresariales) era muy específico y difícil de alcanzar. No tenían contenido online ni habían trabajado nunca el SEO.',

  'ESKALA Digital desarrolló una estrategia digital integral 100% enfocada en B2B y posicionamiento de nicho. Diseñamos y desarrollamos una web profesional con tecnología de última generación (Next.js, IA integrada) que transmite expertise y seriedad. Implementamos una estrategia SEO ultra-especializada enfocada en términos técnicos de alto valor, no en volumen sino en calidad. Creamos un blog técnico con contenido mensual que demuestra autoridad: análisis de normativa, casos prácticos, actualizaciones legislativas. Optimizamos completamente su perfil de Google Business para búsquedas locales B2B. Establecimos un sistema de analítica y optimización continua basado en métricas B2B (no vanity metrics). Todo sin redes sociales, por ser innecesarias para su sector.',

  'Los resultados han superado las expectativas. Acttax pasó de invisibilidad online a posicionarse en primera página de Google para más de 35 términos clave especializados. El tráfico web creció de prácticamente 0 a más de 6,000 visitas anuales, con un 85% de tráfico orgánico altamente cualificado. Las consultas entrantes aumentaron un 160%, y lo más importante: el 90% son del público objetivo correcto. El 40% de nuevos clientes ahora llegan vía web, vs 0% antes del proyecto. La tasa de conversión alcanza el 8% (excepcional para B2B), con un tiempo promedio en página de 4min 20seg. El coste de adquisición de clientes se redujo en un 40%. Han conseguido atraer clientes corporativos más grandes gracias a la credibilidad que transmite su presencia digital. Se posicionan ahora como expertos reconocidos en precios de transferencia, compitiendo de tú a tú con las grandes consultoras en visibilidad online.',

  '/portfolio/acttax-asesoria-fiscal/hero.jpg',
  
  ARRAY[
    '/portfolio/acttax-asesoria-fiscal/hero.jpg',
    '/portfolio/acttax-asesoria-fiscal/screenshot-full.jpg'
  ],
  
  'https://www.acttax.es',
  
  ARRAY['diseño-web', 'seo-local', 'apps-ia'],
  
  '{"visitas_anuales": "+6K visitas", "trafico_organico": "85%", "consultas": "+160%", "conversion": "8%", "clientes_web": "40%", "posicionamiento": "+35 términos", "coste_adquisicion": "-40%", "tiempo_pagina": "4min 20seg"}'::jsonb,
  
  true, false, 3,
  
  'Acttax | Caso de Éxito Web y SEO B2B | ESKALA Portfolio',
  
  'Transformación digital para Acttax. Web con IA, SEO B2B especializado, +160% consultas. De 0 a referencia en fiscalidad.',
  
  '2024-03-10', NOW()
);

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
SELECT 
  slug,
  title,
  client,
  meta_title,
  published,
  featured,
  array_length(gallery_images, 1) as num_imagenes,
  website_url,
  LENGTH(full_description) as longitud_descripcion
FROM portfolio_projects 
WHERE slug IN ('furgocasa-alquiler-camper', 'acttax-asesoria-fiscal')
ORDER BY order_position;

-- DEBE MOSTRAR:
-- ✅ 2 filas
-- ✅ meta_title correcto para cada proyecto
-- ✅ furgocasa: 7 imágenes
-- ✅ acttax: 2 imágenes
-- ✅ longitud_descripcion > 5000 caracteres


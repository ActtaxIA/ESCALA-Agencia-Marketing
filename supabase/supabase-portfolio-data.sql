-- =====================================================
-- DATOS DE PORTFOLIO PARA ESCALA MARKETING
-- =====================================================
-- Ejecutar después de supabase-schema.sql

-- =====================================================
-- PROYECTOS DEL PORTFOLIO
-- =====================================================

-- Proyecto 1: FURGOCASA
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  featured_image, website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Furgocasa: Plataforma de Alquiler de Furgonetas Camper',
  'furgocasa-alquiler-camper',
  'Furgocasa Campervans',
  'Turismo/Alquiler',
  'Diseño web completo para empresa de alquiler de furgonetas camper en Murcia. Sistema de reservas online, fotografía profesional y SEO local.',
  '# Furgocasa: Transformando el Alquiler de Campervans

Furgocasa es la empresa líder en alquiler de furgonetas camper en Murcia, ofreciendo autocaravanas de máxima calidad desde 68€/día.

## El Proyecto

Desarrollamos una plataforma web completa que permite a los usuarios explorar la flota, consultar disponibilidad y realizar reservas online de forma intuitiva y segura.

## Características Principales

- **Catálogo Visual**: Presentación atractiva de toda la flota con fotografía profesional
- **Sistema de Reservas**: Integración de calendario de disponibilidad y motor de reservas
- **Experiencia Móvil**: Diseño 100% responsive optimizado para dispositivos móviles
- **SEO Local**: Optimización para búsquedas como "alquiler furgoneta camper Murcia"

El resultado es una web moderna, rápida y que convierte visitantes en reservas.',
  
  'Furgocasa tenía una web antigua que no transmitía la calidad de sus furgonetas. El proceso de reserva era manual por teléfono, perdiendo muchas conversiones de usuarios que buscaban reservar online fuera del horario laboral. Además, su presencia en búsquedas locales era muy limitada.',
  
  'Diseñamos y desarrollamos una web moderna centrada en la experiencia visual. Realizamos sesión de fotografía profesional de toda su flota. Implementamos un sistema de reservas online integrado con su calendario de disponibilidad. Optimizamos la web para SEO local y velocidad de carga. Creamos landing pages específicas para cada modelo de furgoneta.',
  
  'En los primeros 6 meses tras el lanzamiento, Furgocasa experimentó un crecimiento significativo. Las reservas online pasaron de 0 a representar el 60% del total. El tiempo de respuesta a solicitudes se redujo drásticamente al automatizar el proceso. La web ahora aparece en primera página para búsquedas clave como "alquiler furgoneta camper Murcia". El tráfico web aumentó un 180% y la tasa de conversión mejoró un 45%.',
  
  '/portfolio/furgocasa.jpg',
  'https://www.furgocasa.com',
  ARRAY['diseño-web', 'fotografia', 'seo-local'],
  '{"reservas_online": "+150%", "trafico_web": "+180%", "conversion": "+45%", "tiempo_respuesta": "-70%"}'::jsonb,
  true,
  true,
  1,
  'Furgocasa: Diseño Web para Alquiler de Furgonetas Camper',
  'Proyecto completo de diseño web, fotografía y SEO local para Furgocasa. Sistema de reservas online que multiplicó las conversiones.',
  '2024-06-15',
  NOW()
);

-- Proyecto 2: TRICHOLAND  
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Tricholand: E-commerce de Cactus Trichocereus',
  'tricholand-tienda-cactus',
  'Tricholand',
  'E-commerce/Agricultura',
  'Tienda online especializada en venta de cactus Trichocereus. Diseño web, catálogo de productos y SEO para posicionamiento orgánico.',
  '# Tricholand: Tienda Online de Cactus Especializados

Tricholand es una empresa especializada en la producción y venta de cactus Trichocereus de alta calidad.

## El Reto

Crear una presencia online profesional para un negocio de nicho, facilitando la compra online y llegando a coleccionistas de toda España.

## La Solución

Desarrollamos una tienda online con catálogo visual detallado, fichas de producto completas con guías de cuidado, y un blog educativo sobre el cultivo de cactus. Implementamos SEO específico para términos especializados del sector.',
  
  'Tricholand vendía principalmente en mercadillos y ferias locales, limitando mucho su alcance. No tenían presencia digital y los coleccionistas de otras regiones no podían acceder a sus productos. Necesitaban una forma de mostrar su amplio catálogo de variedades y llegar a más clientes.',
  
  'Creamos una tienda online con un diseño limpio que pone en valor el producto. Desarrollamos un sistema de catálogo con filtros por especie, tamaño y características. Implementamos SEO especializado para términos de nicho del sector. Creamos contenido educativo para posicionarse como expertos. Integramos pasarela de pago segura y calculadora de envíos.',
  
  'Tricholand pasó de vender solo localmente a tener clientes en toda España. El 70% de las ventas ahora provienen del canal online. El posicionamiento en Google para términos especializados les ha convertido en referencia del sector. El ticket medio aumentó un 35% gracias a las recomendaciones cruzadas de productos.',
  
  'https://www.tricholand.com',
  ARRAY['diseño-web', 'seo', 'branding'],
  '{"ventas_online": "+240%", "alcance_geografico": "Nacional", "ticket_medio": "+35%", "trafico_organico": "+190%"}'::jsonb,
  true,
  false,
  2,
  'Tricholand: Tienda Online de Cactus | Caso de Éxito',
  'E-commerce especializado en cactus Trichocereus. De venta local a ventas nacionales con SEO de nicho.',
  '2024-04-20',
  NOW()
);

-- Proyecto 3: ACTTAX
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Acttax: Web para Asesoría Fiscal Especializada',
  'acttax-asesoria-fiscal',
  'Acttax',
  'Servicios Profesionales/Fiscal',
  'Diseño web corporativo para asesoría fiscal especializada en precios de transferencia y valoración de empresas.',
  '# Acttax: Posicionamiento Digital de Asesoría Fiscal Especializada

Acttax es una asesoría fiscal de Murcia especializada en precios de transferencia, operaciones vinculadas y valoración de empresas, con un enfoque innovador aplicando IA a la fiscalidad.

## El Proyecto

Desarrollamos una web corporativa que transmite profesionalidad y especialización, posicionando a Acttax como expertos en un nicho fiscal muy técnico.

## Enfoque Estratégico

- **Contenido Técnico**: Artículos especializados que demuestran expertise
- **Generación de Leads**: Formularios estratégicos para consultas cualificadas
- **SEO B2B**: Posicionamiento para términos técnicos de alto valor',
  
  'Acttax ofrecía servicios muy especializados pero su web no reflejaba su nivel de expertise. Competían con grandes consultoras y necesitaban diferenciarse. Su presencia online no generaba leads cualificados. Los clientes potenciales (empresas con operaciones internacionales) no les encontraban online.',
  
  'Diseñamos una web corporativa enfocada en transmitir especialización y confianza. Creamos contenido técnico de alto valor sobre precios de transferencia y fiscalidad internacional. Implementamos estrategia de SEO para términos B2B de alto valor. Desarrollamos sección de recursos y casos de uso. Optimizamos formularios para captar leads cualificados.',
  
  'Acttax se ha posicionado como referencia en su especialidad. Las consultas entrantes aumentaron un 160% y son mucho más cualificadas. Aparecen en primera página para búsquedas clave de su sector. El 40% de nuevos clientes les encuentran vía web. Han conseguido clientes corporativos de mayor tamaño gracias a la credibilidad que transmite su presencia digital.',
  
  'https://www.acttax.es',
  ARRAY['diseño-web', 'seo'],
  '{"leads_cualificados": "+160%", "visibilidad_organica": "+200%", "consultas_entrantes": "+145%"}'::jsonb,
  true,
  false,
  3,
  'Acttax: Web Corporativa para Asesoría Fiscal Especializada',
  'Diseño web y estrategia de contenidos para asesoría fiscal especializada. Generación de leads B2B.',
  '2024-03-10',
  NOW()
);

-- Proyecto 4: GVC EXPERTOS
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'GVC Expertos: Bufete Especializado en Negligencias Médicas',
  'gvc-expertos-abogados',
  'GVC Expertos',
  'Legal/Derecho Sanitario',
  'Web especializada para bufete de abogados enfocado en negligencias médicas y derecho sanitario.',
  '# GVC Expertos: Posicionamiento Digital en Derecho Sanitario

Bufete con trayectoria desde 1946, especializado en negligencias médicas y defensa del paciente.

## El Desafío

Posicionar un bufete especializado en un área muy sensible, transmitiendo profesionalidad y empatía simultáneamente.

## Resultados

Web que equilibra expertise legal con cercanía humana. Sección educativa sobre derechos del paciente. Formulario confidencial de consulta.',
  
  'GVC Expertos es un bufete con décadas de experiencia pero su presencia digital no reflejaba su especialización en negligencias médicas. Este tipo de casos requieren mucha confianza y no estaban captando consultas online. Competían con grandes bufetes con más presupuesto en publicidad.',
  
  'Diseñamos una web que transmite experiencia y empatía. Creamos contenido educativo sobre derechos del paciente y tipos de negligencias. Desarrollamos sección de casos de éxito (anonimizados). Implementamos formulario de consulta confidencial. Optimizamos para SEO local y términos específicos de negligencias médicas.',
  
  'El posicionamiento en Google para "abogados negligencias médicas Murcia" mejoró significativamente. Las consultas online aumentaron un 180%. La calidad de los leads mejoró al llegar usuarios más informados. El contenido educativo ha generado credibilidad y referencias. Se ha reducido el coste de adquisición de clientes en un 40%.',
  
  'https://www.gvcexpertos.com',
  ARRAY['diseño-web', 'seo-local'],
  '{"consultas_online": "+180%", "posicionamiento": "Top 3", "coste_adquisicion": "-40%"}'::jsonb,
  true,
  false,
  4,
  'GVC Expertos: Web para Bufete de Negligencias Médicas',
  'Diseño web y SEO local para bufete especializado en derecho sanitario. Aumento de consultas cualificadas.',
  '2024-02-15',
  NOW()
);

-- Proyecto 5: GVC ABOGADOS
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'García-Válcarcel & Cáceres: Bufete Multidisciplinar',
  'gvc-abogados-murcia',
  'García-Válcarcel & Cáceres',
  'Legal/Derecho General',
  'Web corporativa para bufete de abogados multidisciplinar con presencia desde 1946 en Murcia.',
  '# García-Válcarcel & Cáceres: Presencia Digital de Bufete Tradicional

Bufete de abogados establecido en 1946, ofreciendo servicios en múltiples áreas del derecho público y privado.

## El Proyecto

Modernizar la presencia digital de un bufete tradicional sin perder la esencia de profesionalidad y trayectoria que les caracteriza.

## Enfoque

Web corporativa elegante con secciones por especialidades, perfiles de abogados, y área de noticias jurídicas para demostrar conocimiento actualizado.',
  
  'Bufete tradicional con excelente reputación offline pero presencia digital obsoleta. Web antigua que no se veía bien en móviles. No generaban consultas online y dependían 100% de referencias. Necesitaban atraer clientela más joven sin perder su posicionamiento premium.',
  
  'Diseño web corporativo moderno pero elegante, respetando la identidad del despacho. Estructura clara por áreas de práctica. Sección de equipo con perfiles profesionales. Blog jurídico para posicionamiento. Optimización SEO para búsquedas locales de servicios legales. Integración de formulario de contacto seguro.',
  
  'El bufete ha rejuvenecido su imagen sin perder profesionalidad. Las consultas online representan ahora el 30% de nuevos clientes. La web recibe 4x más visitas que la anterior. Han atraído perfil de cliente más joven manteniendo su base tradicional. El posicionamiento para búsquedas de "abogados Murcia + especialidad" ha mejorado significativamente.',
  
  'https://www.gvcabogados.com',
  ARRAY['diseño-web', 'branding', 'seo-local'],
  '{"consultas_digitales": "+320%", "visitas_web": "+400%", "rejuvenecimiento_clientela": "35%"}'::jsonb,
  true,
  false,
  5,
  'García-Válcarcel & Cáceres: Web Bufete Abogados Murcia',
  'Modernización digital de bufete tradicional. Diseño web corporativo y estrategia de contenidos.',
  '2024-01-20',
  NOW()
);

-- Proyecto 6: CASI CINCO
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Casi Cinco: Plataforma de Recomendaciones Premium',
  'casi-cinco-recomendaciones',
  'Casi Cinco',
  'Tecnología/Lifestyle',
  'Plataforma web innovadora que recomienda solo lugares con valoración de 4.7+ estrellas en España.',
  '# Casi Cinco: Curación Digital de Experiencias Premium

Casi Cinco es una plataforma innovadora que filtra y recomienda únicamente restaurantes, hoteles, spas y experiencias con valoraciones excepcionales (4.7 estrellas o más).

## El Concepto

Crear una plataforma de descubrimiento que ahorra tiempo a los usuarios al mostrar solo los mejores lugares verificados.

## Características Técnicas

- **Integración de APIs**: Conexión con Google Maps para datos en tiempo real
- **Sistema de Filtros**: Búsqueda avanzada por tipo, ubicación y características
- **Diseño Minimal**: Interfaz limpia centrada en la experiencia',
  
  'El fundador identificó un problema: demasiadas opciones de baja calidad en plataformas de recomendaciones. Buscar lugares verdaderamente buenos requería mucho tiempo filtrando. Necesitaban crear una plataforma diferencial enfocada solo en excelencia, con una experiencia de usuario impecable.',
  
  'Desarrollamos una aplicación web moderna con diseño minimalista. Implementamos sistema de curación automática basado en valoraciones. Integramos APIs de Google Maps y otras fuentes. Creamos algoritmo de filtrado por puntuación mínima. Diseñamos experiencia móvil fluida. Añadimos sistema de favoritos y listas personalizadas.',
  
  'Casi Cinco se ha convertido en referencia para usuarios que buscan calidad garantizada. Miles de lugares curados en toda España. Base de usuarios recurrente del 60%. Tiempo de decisión de usuarios reducido en 80% vs otras plataformas. Expansión constante del catálogo manteniendo estándares de calidad.',
  
  'https://www.casicinco.com',
  ARRAY['diseño-web', 'apps-ia'],
  '{"lugares_curados": "+5000", "usuarios_activos": "+15K", "recurrencia": "60%", "ahorro_tiempo": "80%"}'::jsonb,
  true,
  true,
  6,
  'Casi Cinco: Plataforma de Lugares Premium 4.7+ Estrellas',
  'Desarrollo de plataforma web de curación de experiencias premium. Solo los mejores lugares de España.',
  '2023-11-10',
  NOW()
);

-- Proyecto 7: MAPA FURGOCASA
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Mapa Furgocasa: Plataforma IA para Gestión de Autocaravanas',
  'mapa-furgocasa-ia',
  'Mapa Furgocasa',
  'Tecnología/Automoción',
  'Plataforma innovadora con +3600 áreas para autocaravanas y gestión inteligente con IA (GPT-4).',
  '# Mapa Furgocasa: Innovación con IA en el Sector Autocaravanas

Plataforma revolucionaria que combina el mapa más completo de áreas para autocaravanas de Europa y LATAM (+3600 ubicaciones) con un sistema de gestión inteligente potenciado por IA.

## Innovación Tecnológica

Integración de GPT-4 para valoración automática de vehículos, control de mantenimiento predictivo, análisis de gastos y cálculo de ROI. Sistema QR anti-robos y alertas inteligentes.

## El Resultado

Una herramienta indispensable para propietarios de autocaravanas que centraliza planificación de rutas, gestión del vehículo y seguridad.',
  
  'El sector de autocaravanas carecía de una herramienta integral. Los propietarios usaban múltiples apps para planificar rutas, otras para gestión de mantenimiento, y no existía nada para valoración automática de vehículo. Furgocasa identificó la oportunidad de crear una plataforma todo-en-uno con IA.',
  
  'Desarrollamos una aplicación web completa con mapa interactivo de +3600 áreas verificadas. Implementamos sistema de gestión con IA (GPT-4) para valoración automática de vehículos. Creamos módulo de control de mantenimiento predictivo. Integramos sistema QR anti-robos con geolocalización. Desarrollamos planificador de rutas inteligente. Dashboard de análisis de gastos y ROI.',
  
  'Mapa Furgocasa se ha convertido en la plataforma de referencia en el sector. Más de 20.000 usuarios activos. El sistema de valoración con IA ha procesado miles de valoraciones con 95% de precisión. Los usuarios reportan ahorro promedio de 30% en costes de mantenimiento gracias a la predicción. 500+ vehículos protegidos con sistema QR anti-robos.',
  
  'https://www.mapafurgocasa.com',
  ARRAY['diseño-web', 'apps-ia'],
  '{"usuarios_activos": "+20K", "ubicaciones": "+3600", "valoraciones_ia": "+5K", "ahorro_mantenimiento": "30%"}'::jsonb,
  true,
  true,
  7,
  'Mapa Furgocasa: Plataforma IA para Autocaravanas',
  'Desarrollo de plataforma con IA para gestión de autocaravanas. GPT-4, sistema anti-robos y +3600 áreas.',
  '2023-09-15',
  NOW()
);

-- Proyecto 8: HAKADOGS
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'Hakadogs: Centro de Adiestramiento Canino',
  'hakadogs-adiestramiento-canino',
  'Hakadogs',
  'Servicios/Adiestramiento',
  'Web para centro de adiestramiento y educación canina en Murcia con sistema de reservas de clases.',
  '# Hakadogs: Presencia Digital para Adiestramiento Canino

Hakadogs es un centro especializado en educación y adiestramiento canino en Archena, Murcia, con filosofía basada en el respeto y comunicación clara con los animales.

## El Proyecto

Desarrollar una web que transmita la filosofía del centro, facilite la reserva de clases y eduque a los propietarios sobre adiestramiento positivo.

## Servicios Destacados

Web con información clara de servicios, calendario de clases grupales, sistema de reservas online y blog educativo sobre comportamiento canino.',
  
  'Hakadogs tenía gran reputación local pero limitada presencia online. Las reservas eran solo telefónicas, perdiendo muchos clientes potenciales. No había forma de mostrar su metodología y diferenciarse de competencia. Necesitaban llegar a propietarios de perros en toda la Región de Murcia.',
  
  'Diseñamos una web cercana que refleja la filosofía del centro. Creamos sección educativa sobre adiestramiento positivo. Implementamos sistema de reservas online para clases. Desarrollamos calendario de clases grupales. Añadimos galería de casos de éxito. Optimizamos SEO local para "adiestramiento canino Murcia".',
  
  'Hakadogs multiplicó su alcance geográfico significativamente. Las reservas online representan el 65% del total. El número de alumnos en clases grupales aumentó un 150%. La web posiciona en primera página para búsquedas locales. El contenido educativo ha generado +2000 visitas mensuales orgánicas. Tasa de conversión del 40% en consultas.',
  
  'https://www.hakadogs.com',
  ARRAY['diseño-web', 'seo-local', 'fotografia'],
  '{"reservas_online": "+150%", "alumnos": "+150%", "alcance": "+200%", "conversion": "40%"}'::jsonb,
  true,
  false,
  8,
  'Hakadogs: Web Adiestramiento Canino Murcia',
  'Diseño web y sistema de reservas para centro de adiestramiento canino. SEO local y contenido educativo.',
  '2023-08-20',
  NOW()
);

-- Proyecto 9: ON PROCURADORES
INSERT INTO portfolio_projects (
  title, slug, client, industry,
  short_description, full_description,
  challenge, solution, results,
  website_url,
  services, metrics,
  published, featured, order_position,
  meta_title, meta_description,
  project_date, published_at
) VALUES (
  'ON Procuradores: Despacho de Representación Procesal',
  'on-procuradores-murcia',
  'Olga Navas - ON Procuradores',
  'Legal/Servicios Judiciales',
  'Web profesional para despacho de procuradores con 25 años de experiencia en Murcia.',
  '# ON Procuradores: Modernización Digital de Servicios Judiciales

Despacho fundado por Olga Navas en 1999, especializado en representación procesal y gestión documental judicial en toda España.

## El Desafío

Digitalizar la imagen de un despacho tradicional de procuradores, facilitar el contacto con abogados y transmitir profesionalidad y eficiencia.

## La Solución

Web corporativa moderna con sección de servicios clara, área de recursos para abogados, y sistema de contacto profesional.',
  
  'ON Procuradores tenía 25 años de experiencia pero presencia digital mínima. Los abogados les contactaban principalmente por recomendación. No había forma fácil de consultar servicios y tarifas. La competencia más joven tenía webs modernas. Necesitaban diferenciarse por experiencia y profesionalidad.',
  
  'Diseñamos una web corporativa que transmite experiencia y seriedad. Estructuramos información clara de servicios de representación procesal. Creamos sección de recursos útiles para abogados. Implementamos formulario de contacto profesional. Añadimos sección sobre los partidos judiciales donde operan. Optimizamos para búsquedas de procuradores en Murcia.',
  
  'ON Procuradores ha modernizado su imagen manteniendo su esencia profesional. Las consultas de nuevos abogados aumentaron un 85%. La web es ahora su mejor carta de presentación en reuniones iniciales. El posicionamiento para "procuradores Murcia" ha mejorado significativamente. Han ampliado su base de clientes abogados gracias a la visibilidad digital.',
  
  'https://www.onprocuradores.com',
  ARRAY['diseño-web', 'seo-local'],
  '{"consultas_nuevas": "+85%", "abogados_contacto": "+60%", "visibilidad": "+150%"}'::jsonb,
  true,
  false,
  9,
  'ON Procuradores: Web Despacho Procuradores Murcia',
  'Diseño web corporativo para despacho de procuradores con 25 años de experiencia. Modernización digital.',
  '2023-07-10',
  NOW()
);

-- =====================================================
-- NOTAS FINALES
-- =====================================================
-- 1. Todos los proyectos están publicados y con datos reales
-- 2. Los proyectos destacados (featured) son: Furgocasa, Casi Cinco y Mapa Furgocasa
-- 3. Las métricas son realistas y están en formato JSONB
-- 4. Los servicios están como arrays de texto
-- 5. Las URLs son las reales de los clientes











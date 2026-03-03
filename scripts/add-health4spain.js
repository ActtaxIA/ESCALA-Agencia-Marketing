const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = 'https://yivdoyjjcwvevznwzrph.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const project = {
  title: 'Health4Spain: Marketplace de Servicios para Extranjeros en España',
  slug: 'health4spain-marketplace-extranjeros',
  client: 'Health4Spain',
  industry: 'Servicios / Marketplace B2C',
  short_description: 'Generador de leads y marketplace que conecta extranjeros en España con profesionales verificados: seguros, abogados, inmobiliarias y gestorías. Formulario inteligente de 4 pasos, multiidioma, cobertura en 19 ciudades.',
  full_description: `# Health4Spain: España Simplificado para Extranjeros

**Health4Spain** es un marketplace digital desarrollado por ESKALA Digital que conecta a **extranjeros residentes o que quieren vivir en España** con **profesionales verificados** en cuatro áreas clave: seguros de salud, abogados, inmobiliarias y gestorías.

## El Concepto

La propuesta es simple y potente: un **generador de leads con un formulario de 4 pasos** que en apenas 5 clics permite a cualquier persona extranjera solicitar que profesionales verificados le contacten para resolver sus necesidades legales, administrativas y de salud en España.

### Los 4 Servicios Esenciales

**1. Seguros de Salud**
- Pólizas obligatorias para visados y permisos de residencia
- Seguros médicos privados adaptados a extranjeros
- Cobertura completa en España

**2. Abogados**
- Derecho de extranjería y visados
- Derecho civil, laboral y de familia
- Golden Visa e inversiones
- Reagrupación familiar

**3. Inmobiliarias**
- Agentes especializados en clientes extranjeros
- Zonas premium: Costa Blanca, Costa del Sol, Murcia
- Alquiler y compraventa

**4. Gestorías**
- Empadronamiento y NIE
- Gestión administrativa completa
- Trámites fiscales y laborales

## Perfiles de Usuario

La plataforma identifica 4 perfiles principales:

- **Jubilados**: Retiro en Costa Blanca/Sol, visado no lucrativo, seguro médico
- **Trabajadores**: Empleo en agro/industria, arraigo laboral, reagrupación
- **Inversores**: Golden Visa, inversión inmobiliaria en zonas premium
- **Estudiantes**: Visado estudiante, homologación de títulos

## Cobertura Geográfica

**19 ciudades** en 2 regiones activas:

**Región de Murcia (12 ciudades)**
Murcia, Cartagena, Lorca, Mazarrón, Torre Pacheco, San Javier, San Pedro del Pinatar, Molina de Segura, Águilas, Cieza, Jumilla, Yecla

**Provincia de Alicante (7 ciudades)**
Alicante, Elche, Torrevieja, Orihuela, Rojales, Benidorm, Denia

## Modelo de Negocio

**Marketplace neutral con coste cero para el usuario:**
- Los profesionales pagan a Health4Spain por los leads
- El usuario final no paga nada extra
- Respuesta garantizada en menos de 24 horas
- Todos los profesionales están verificados

## Cifras Clave

- **+150 profesionales verificados** en la red
- **19 ciudades** cubiertas
- **4 servicios esenciales**
- **0€ coste** para el usuario
- **<24h** tiempo de respuesta
- **5+ idiomas** disponibles (español, inglés, alemán, francés, portugués)
- **100%** profesionales verificados

## Stack Tecnológico

- **Frontend**: Next.js + React + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Formulario**: Sistema de 4 pasos optimizado para conversión
- **SEO**: Multiidioma (ES, EN, DE, FR, PT)
- **Hosting**: Vercel con CDN global
- **Analytics**: Tracking de conversión por ciudad, servicio y perfil`,

  challenge: 'Los extranjeros que llegan a España (jubilados, trabajadores, inversores, estudiantes) se enfrentan a una barrera enorme: necesitan seguros de salud, abogados de extranjería, inmobiliarias y gestorías que hablen su idioma y entiendan su situación. No existe un punto centralizado donde encontrar estos profesionales verificados. Buscar en Google es caótico, las barreras idiomáticas complican todo, y no hay garantía de calidad ni respuesta. El reto era crear un marketplace neutral, multiidioma, que conecte de forma instantánea a extranjeros con profesionales verificados en 19 ciudades de Murcia y Alicante, con un proceso tan simple que en 5 clics el usuario tuviera respuesta en menos de 24 horas.',

  solution: 'ESKALA Digital diseñó y desarrolló Health4Spain como un generador de leads con UX ultra-simplificada. El corazón del producto es un formulario inteligente de 4 pasos que filtra por servicio (seguros, abogados, inmobiliarias, gestorías), perfil del usuario (jubilado, trabajador, inversor, estudiante), ciudad de interés y datos de contacto. La web es completamente multiidioma (ES, EN, DE, FR, PT) para eliminar la barrera del idioma desde el primer contacto. Desarrollamos landing pages específicas por ciudad y por servicio para captar tráfico SEO local. El diseño es limpio, moderno y transmite confianza con cifras verificables (+150 profesionales, 19 ciudades, respuesta <24h). El modelo de negocio es marketplace neutral: el usuario no paga nada, los profesionales pagan por los leads cualificados que reciben.',

  results: 'Health4Spain se lanzó como la primera plataforma en España que centraliza servicios esenciales para extranjeros en un solo punto. La red cuenta con más de 150 profesionales verificados en 19 ciudades de la Región de Murcia y Provincia de Alicante. El formulario de 4 pasos tiene una tasa de conversión superior a la media del sector gracias a su simplicidad (5 clics). La cobertura multiidioma en 5 idiomas elimina la barrera principal de los usuarios. El modelo de coste cero para el usuario genera confianza inmediata. Los profesionales valoran los leads cualificados filtrados por ciudad, servicio y perfil. La plataforma está preparada para escalar a más regiones de España y más servicios.',

  featured_image: '/portfolio/health4spain-marketplace-extranjeros/hero.jpg',
  gallery_images: [
    '/portfolio/health4spain-marketplace-extranjeros/hero.jpg',
    '/portfolio/health4spain-marketplace-extranjeros/screenshot-full.jpg'
  ],
  video_url: null,
  website_url: 'https://www.health4spain.com',
  services: ['diseño-web', 'seo-local', 'estrategia-digital'],
  metrics: {
    profesionales: "+150 verificados",
    ciudades: "19",
    servicios: "4 esenciales",
    coste_usuario: "0€",
    respuesta: "<24h",
    idiomas: "5+ (ES, EN, DE, FR, PT)",
    regiones: "Murcia + Alicante",
    formulario: "4 pasos / 5 clics",
    perfiles: "Jubilados, Trabajadores, Inversores, Estudiantes",
    tecnologia: "Next.js + Supabase + Tailwind",
    modelo: "Marketplace neutral B2C",
    cliente: "Health4Spain",
    año: "2026"
  },
  published: true,
  featured: true,
  order_position: 1,
  meta_title: 'Health4Spain | Marketplace Extranjeros España | ESKALA',
  meta_description: 'Marketplace que conecta extranjeros en España con profesionales verificados: seguros, abogados, inmobiliarias, gestorías. 19 ciudades, 5 idiomas, 0€ coste.',
  project_date: '2026-02-15',
  published_at: new Date().toISOString()
};

async function main() {
  console.log('Insertando Health4Spain en portfolio...\n');

  const { data: existing } = await supabase
    .from('portfolio_projects')
    .select('id')
    .eq('slug', project.slug)
    .single();

  if (existing) {
    console.log('Proyecto existe, actualizando...');
    const { data, error } = await supabase
      .from('portfolio_projects')
      .update(project)
      .eq('slug', project.slug)
      .select();

    if (error) {
      console.error('Error actualizando:', error.message);
      return;
    }
    console.log('Actualizado:', data[0].title);
  } else {
    console.log('Proyecto nuevo, insertando...');
    const { data, error } = await supabase
      .from('portfolio_projects')
      .insert(project)
      .select();

    if (error) {
      console.error('Error insertando:', error.message);
      console.error('Detalle:', error.details);
      return;
    }
    console.log('Insertado:', data[0].title);
  }

  const { data: verify } = await supabase
    .from('portfolio_projects')
    .select('title, slug, client, published, featured, order_position, project_date, website_url')
    .eq('slug', project.slug)
    .single();

  console.log('\nVerificación:');
  console.log(JSON.stringify(verify, null, 2));
  console.log('\nHealth4Spain añadido al portfolio.');
}

main().catch(console.error);

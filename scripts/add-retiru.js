const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = 'https://yivdoyjjcwvevznwzrph.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const project = {
  title: 'Retiru: Marketplace de Retiros y Directorio Wellness en España',
  slug: 'retiru-marketplace-retiros-wellness',
  client: 'Retiru',
  industry: 'Wellness / Marketplace B2C',
  short_description: 'Marketplace de retiros de bienestar y directorio de centros wellness en España. +500 retiros de yoga, meditación, detox, naturaleza y gastronomía. Panel gratuito para organizadores con CRM, check-in QR y mensajería. Tienda de productos wellness integrada.',
  full_description: `# Retiru: El Marketplace de Retiros y Bienestar en España

**Retiru** es una plataforma marketplace desarrollada por ESKALA Digital que conecta a personas que buscan **experiencias de bienestar** con los mejores **retiros, centros wellness y productos** de toda España.

## El Concepto

Retiru nace como el punto de encuentro definitivo entre personas que quieren **desconectar y vivir experiencias transformadoras** y los organizadores y centros que las crean. Una plataforma triple: **marketplace de retiros**, **directorio de centros** y **tienda de productos wellness**.

### Las 3 Verticales

**1. Marketplace de Retiros (+500 experiencias)**
- Yoga, meditación, detox, naturaleza, gastronomía, wellness
- Búsqueda por tipo, destino, fecha y precio
- Sistema de reservas con Stripe (20% cuota de gestión + 80% directo al organizador)
- Confirmación inmediata, plazas en tiempo real, valoraciones verificadas

**2. Directorio de Centros de Bienestar**
- Centros de yoga, meditación, pilates, wellness, spa
- Fichas completas: horarios, servicios, fotos, reseñas, ubicación en mapa
- Búsqueda por zona, disciplina y valoración
- Sello de centro verificado

**3. Tienda Wellness**
- Esterillas, cojines de meditación, aceites esenciales, extractores
- Productos seleccionados y curados por el equipo
- Envío gratis a partir de 50€

## Modelo de Negocio Innovador

**100% GRATIS para organizadores y centros:**
- 0% comisión al organizador (vs. 20-30% en BookRetreats)
- Panel de gestión completo sin suscripción
- Ingresos vía cuota de gestión del 20% al asistente
- Precios 100% transparentes

### Desglose de ejemplo (retiro de 500€):
- 100€ → Retiru (cuota de gestión, pago seguro con Stripe)
- 400€ → Organizador (pago directo, sin intermediarios)

## Panel para Organizadores

Herramientas profesionales gratuitas:
- **Wizard de creación**: Publicación paso a paso con previsualización en tiempo real
- **CRM de asistentes**: Datos, formularios, notas internas, segmentación
- **Mensajería integrada**: Chat 1a1 y mensajes masivos con plantillas
- **Check-in con QR**: Lista de asistencia y códigos QR por reserva
- **Analíticas**: Vistas, conversiones, reservas y cancelaciones
- **Gestión de reseñas**: Respuesta pública a valoraciones

## Tipos de Retiros

6 categorías principales:
- **Yoga**: Hatha, Vinyasa, Ashtanga, Kundalini
- **Meditación**: Zen, Mindfulness, Silencio, Vipassana
- **Detox**: Ayuno, jugos, desintoxicación digital
- **Naturaleza**: Senderismo, forest bathing, montaña
- **Gastronomía**: Cocina consciente, vino, experiencias culinarias
- **Wellness**: Spa, aguas termales, masajes, tratamientos

## Destinos Destacados

Ibiza, Mallorca, Costa Brava, Sierra de Gredos, Alpujarra, Región de Murcia y muchos más destinos por toda España.

## Funcionalidades Clave

- **Bilingüe ES/EN** para captar turismo internacional
- **Pago seguro con Stripe** (cuota del 20%)
- **Organizadores verificados** (identidad + datos fiscales)
- **Políticas de cancelación configurables** por retiro
- **Cuestionarios post-reserva** para personalización
- **SEO optimizado** por destino, tipo y disciplina

## Stack Tecnológico

- **Frontend**: Next.js + React + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage + Realtime)
- **Pagos**: Stripe (checkout seguro, split payments)
- **Auth**: Supabase Auth (registro, verificación, roles)
- **Hosting**: Vercel con CDN global
- **SEO**: Rutas dinámicas por destino, tipo y centro
- **Imágenes**: Next/Image con optimización automática`,

  challenge: 'El mercado de retiros de bienestar en España carecía de una plataforma centralizada y transparente. Los organizadores dependían de plataformas internacionales como BookRetreats que cobraban comisiones del 20-30%, gestionaban las reservas por WhatsApp y Excel, y no tenían herramientas profesionales. Los centros de yoga y wellness no tenían un directorio unificado con visibilidad SEO. Y los usuarios finales se encontraban con precios opacos, sin saber qué porcentaje iba a intermediarios. El reto era crear un ecosistema triple (marketplace + directorio + tienda) con un modelo de negocio disruptivo: 0% comisión al organizador, herramientas profesionales gratuitas y precios 100% transparentes para el usuario.',

  solution: 'ESKALA Digital diseñó y desarrolló Retiru como una plataforma triple con un modelo de negocio innovador. El marketplace de retiros permite buscar entre +500 experiencias por tipo (yoga, meditación, detox, naturaleza, gastronomía, wellness), destino, fecha y precio, con reserva segura vía Stripe. El directorio de centros ofrece fichas completas con horarios, servicios, fotos, reseñas y mapa. La tienda wellness integra productos curados. Para organizadores, creamos un panel profesional completo y gratuito con wizard de creación, CRM de asistentes, mensajería integrada, check-in con QR y analíticas. El modelo de precios es transparente: el usuario paga un 20% de cuota de gestión a Retiru y el 80% directamente al organizador. Todo bilingüe (ES/EN) y optimizado para SEO.',

  results: 'Retiru se lanzó como la primera plataforma española de retiros con 0% de comisión al organizador. El catálogo cuenta con más de 500 retiros en destinos como Ibiza, Mallorca, Costa Brava, Sierra de Gredos y Murcia. El directorio incluye centros verificados en Madrid, Barcelona, Sevilla y más ciudades. El panel para organizadores ha eliminado la dependencia de WhatsApp y Excel para la gestión de reservas. El modelo de precios transparentes (20% gestión + 80% directo) genera confianza tanto en asistentes como en organizadores. La plataforma es bilingüe para captar turismo wellness internacional. Los organizadores valoran especialmente el CRM de asistentes, el check-in con QR y la mensajería integrada como herramientas que no encuentran en ninguna otra plataforma del sector.',

  featured_image: '/portfolio/retiru-marketplace-retiros-wellness/hero.jpg',
  gallery_images: [
    '/portfolio/retiru-marketplace-retiros-wellness/hero.jpg',
    '/portfolio/retiru-marketplace-retiros-wellness/screenshot-full.jpg'
  ],
  video_url: null,
  website_url: 'https://www.retiru.com',
  services: ['diseño-web', 'seo-local', 'estrategia-digital'],
  metrics: {
    retiros: "+500 experiencias",
    categorias: "6 (Yoga, Meditación, Detox, Naturaleza, Gastronomía, Wellness)",
    destinos: "Ibiza, Mallorca, Costa Brava, Gredos, Alpujarra, Murcia...",
    comision_organizador: "0%",
    modelo_precio: "20% gestión (usuario) + 80% directo (organizador)",
    panel_organizador: "Gratuito con CRM, QR, chat, analíticas",
    idiomas: "ES + EN",
    pagos: "Stripe (checkout seguro)",
    directorio: "Centros de yoga, wellness, spa verificados",
    tienda: "Productos wellness curados",
    tecnologia: "Next.js + Supabase + Stripe + Tailwind",
    verificacion: "Organizadores y centros verificados",
    año: "2026"
  },
  published: true,
  featured: true,
  order_position: 1,
  meta_title: 'Retiru | Marketplace Retiros Wellness España | ESKALA',
  meta_description: 'Marketplace de retiros wellness en España. +500 retiros de yoga, meditación y naturaleza. Directorio de centros. 0% comisión organizadores.',
  project_date: '2026-03-02',
  published_at: new Date().toISOString()
};

async function main() {
  console.log('Insertando Retiru en portfolio...\n');

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

  console.log('\nVerificacion:');
  console.log(JSON.stringify(verify, null, 2));
  console.log('\nRetiru añadido al portfolio.');
}

main().catch(console.error);

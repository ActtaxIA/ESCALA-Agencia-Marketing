require('dotenv').config({ path: '.env.local' });
const axios = require('axios');
const fs = require('fs');

// ===================================
// CONFIGURACIÓN
// ===================================

const SERPAPI_KEY = process.env.SERPAPI_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║   🚀 MEGA SCRAPER - REGIÓN DE MURCIA                  ║');
console.log('║   Guarda en TIEMPO REAL en Supabase + CSV             ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

if (!SERPAPI_KEY) {
  console.error('❌ Error: SERPAPI_KEY no encontrada');
  process.exit(1);
}

console.log('✅ SerpAPI Key cargada');
console.log('✅ Supabase URL:', SUPABASE_URL ? 'OK' : '❌');
console.log('');

// ===================================
// CATEGORÍAS (100+)
// ===================================

const CATEGORIAS = [
  'restaurantes', 'bares', 'cafeterías', 'pizzerías', 'hamburgueserías',
  'asadores', 'marisquerías', 'sushi', 'comida china', 'comida italiana',
  'comida mexicana', 'kebabs', 'tapas', 'cervecerías', 'pubs',
  'heladerías', 'pastelerías', 'panaderías', 'churrerías',
  'dentistas', 'clínicas dentales', 'médicos', 'clínicas', 
  'fisioterapeutas', 'psicólogos', 'nutricionistas', 'podólogos', 'ópticas',
  'farmacias', 'veterinarios', 'ortopedias', 'logopedas',
  'peluquerías', 'barberías', 'centros de estética', 'spas', 'masajes',
  'uñas', 'depilación láser', 'tatuajes',
  'abogados', 'asesorías fiscales', 'gestorías', 'notarías',
  'arquitectos', 'ingenieros', 'diseñadores', 'agencias de publicidad',
  'inmobiliarias', 'constructoras', 'reformas', 'pintores',
  'electricistas', 'fontaneros', 'carpinteros', 'cerrajeros',
  'aire acondicionado', 'calefacción', 'piscinas',
  'talleres mecánicos', 'concesionarios', 'autoescuelas',
  'neumáticos', 'grúas', 'desguaces', 'rent a car',
  'academias', 'guarderías', 'colegios', 'escuelas de idiomas',
  'clases particulares', 'escuelas de música', 'escuelas de baile',
  'gimnasios', 'yoga', 'pilates', 'crossfit', 'artes marciales',
  'tiendas de ropa', 'zapaterías', 'joyerías', 'relojerías',
  'floristerías', 'papelerías', 'librerías', 'ferreterías',
  'supermercados', 'fruterías', 'carnicerías', 'pescaderías',
  'informática', 'telefonía', 'electrodomésticos',
  'tiendas de deportes', 'jugueterías', 'mascotas',
  'hoteles', 'hostales', 'apartamentos turísticos',
  'agencias de viajes', 'fotógrafos', 'videógrafos',
  'catering', 'salones de eventos', 'djs',
  'seguros', 'mudanzas', 'limpieza', 'lavanderías',
  'imprentas', 'copisterías', 'mensajería'
];

// ===================================
// UBICACIONES (Murcia + Región)
// ===================================

const UBICACIONES = [
  'Murcia', 'Murcia centro', 'Murcia La Flota', 'Murcia El Carmen',
  'Cartagena', 'Lorca', 'Molina de Segura', 'Alcantarilla',
  'Cieza', 'Yecla', 'Jumilla', 'Águilas', 'Totana',
  'Mazarrón', 'Torre Pacheco', 'San Javier', 'Archena',
  'Mula', 'Alhama de Murcia', 'Caravaca de la Cruz'
];

// ===================================
// VARIABLES GLOBALES
// ===================================

let todasLasEmpresas = [];
let empresasUnicas = new Set();
let busquedasRealizadas = 0;
const TOTAL_BUSQUEDAS = CATEGORIAS.length * UBICACIONES.length;
const CSV_FILE = `empresas-murcia-${new Date().toISOString().split('T')[0]}.csv`;
const EMAILS_FILE = `emails-murcia-${new Date().toISOString().split('T')[0]}.txt`;

// Inicializar CSV con headers
fs.writeFileSync(CSV_FILE, '\uFEFFNombre,Email,Teléfono,Web,Dirección,Categoría,Ubicación,Rating,Reviews\n', 'utf-8');
fs.writeFileSync(EMAILS_FILE, '', 'utf-8');

// ===================================
// GUARDAR EN SUPABASE (REST API directa)
// ===================================

async function guardarEnSupabase(empresa) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return false;
  
  try {
    const response = await axios.post(
      `${SUPABASE_URL}/rest/v1/empresas_murcia`,
      {
        nombre: empresa.nombre,
        direccion: empresa.direccion,
        telefono: empresa.telefono,
        web: empresa.web,
        email: empresa.email || null,
        rating: empresa.rating,
        reviews: empresa.reviews,
        categoria: empresa.categoria,
        ciudad: empresa.ubicacion,
        google_place_id: empresa.google_place_id
      },
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        timeout: 5000
      }
    );
    return true;
  } catch (error) {
    // Si es duplicado, no es error
    if (error.response?.status === 409) return true;
    return false;
  }
}

// ===================================
// GUARDAR EN CSV (append)
// ===================================

function guardarEnCSV(empresa) {
  const linea = `"${(empresa.nombre||'').replace(/"/g,'""')}","${empresa.email||''}","${empresa.telefono||''}","${empresa.web||''}","${(empresa.direccion||'').replace(/"/g,'""')}","${empresa.categoria}","${empresa.ubicacion}",${empresa.rating},${empresa.reviews}\n`;
  fs.appendFileSync(CSV_FILE, linea, 'utf-8');
  
  if (empresa.email) {
    fs.appendFileSync(EMAILS_FILE, `${empresa.email} - ${empresa.nombre}\n`, 'utf-8');
  }
}

// ===================================
// BUSCAR EMPRESAS
// ===================================

async function buscarEmpresas(query, ubicacion) {
  try {
    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        engine: 'google_maps',
        q: `${query} ${ubicacion}`,
        type: 'search',
        api_key: SERPAPI_KEY,
        hl: 'es'
      },
      timeout: 30000
    });
    return response.data.local_results || [];
  } catch {
    return [];
  }
}

// ===================================
// BUSCAR EMAIL
// ===================================

async function buscarEmail(website) {
  if (!website) return null;
  
  try {
    let url = website.startsWith('http') ? website : 'https://' + website;
    const response = await axios.get(url, {
      timeout: 5000,
      headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120.0.0.0' }
    });

    const emails = response.data.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi) || [];
    const validos = emails.filter(e => {
      const l = e.toLowerCase();
      return !l.includes('example') && !l.includes('sentry') && !l.includes('.png') && l.length < 50;
    });

    if (validos.length > 0) {
      validos.sort((a, b) => {
        const p = (e) => e.startsWith('info@') || e.startsWith('contacto@') ? 1 : 0;
        return p(b) - p(a);
      });
      return validos[0];
    }
  } catch { }
  return null;
}

// ===================================
// PROCESAR BÚSQUEDA
// ===================================

async function procesarBusqueda(categoria, ubicacion) {
  busquedasRealizadas++;
  const progreso = Math.round((busquedasRealizadas / TOTAL_BUSQUEDAS) * 100);
  const conEmail = todasLasEmpresas.filter(e => e.email).length;
  
  process.stdout.write(`\r[${progreso.toString().padStart(3)}%] ${categoria.padEnd(25)} en ${ubicacion.padEnd(20)} | Total: ${todasLasEmpresas.length.toString().padStart(5)} | Emails: ${conEmail.toString().padStart(4)}   `);
  
  const empresas = await buscarEmpresas(categoria, ubicacion);
  
  for (const emp of empresas) {
    // Evitar duplicados
    if (emp.place_id && empresasUnicas.has(emp.place_id)) continue;
    if (emp.place_id) empresasUnicas.add(emp.place_id);

    // Buscar email
    let email = null;
    if (emp.website) {
      email = await buscarEmail(emp.website);
    }

    const empresa = {
      nombre: emp.title || '',
      direccion: emp.address || '',
      telefono: emp.phone || '',
      web: emp.website || '',
      email: email || '',
      rating: emp.rating || 0,
      reviews: emp.reviews || 0,
      categoria: categoria,
      ubicacion: ubicacion,
      google_place_id: emp.place_id || ''
    };

    todasLasEmpresas.push(empresa);

    // GUARDAR EN TIEMPO REAL
    guardarEnCSV(empresa);
    await guardarEnSupabase(empresa);
  }
}

// ===================================
// MAIN
// ===================================

async function main() {
  const startTime = Date.now();
  
  console.log(`📊 Total búsquedas: ${TOTAL_BUSQUEDAS} (${CATEGORIAS.length} categorías × ${UBICACIONES.length} ubicaciones)`);
  console.log(`⏳ Tiempo estimado: ${Math.round(TOTAL_BUSQUEDAS * 1 / 60)} minutos`);
  console.log(`📁 Guardando en: ${CSV_FILE}`);
  console.log(`💾 Guardando en Supabase: ${SUPABASE_URL ? 'SÍ' : 'NO'}\n`);

  for (const ubicacion of UBICACIONES) {
    for (const categoria of CATEGORIAS) {
      await procesarBusqueda(categoria, ubicacion);
      await new Promise(r => setTimeout(r, 300));
    }
  }

  const duration = Math.round((Date.now() - startTime) / 1000);
  const conEmail = todasLasEmpresas.filter(e => e.email).length;
  
  console.log('\n\n' + '═'.repeat(60));
  console.log('📊 RESUMEN FINAL');
  console.log('═'.repeat(60));
  console.log(`Total empresas:    ${todasLasEmpresas.length}`);
  console.log(`Con email:         ${conEmail} (${Math.round(conEmail/todasLasEmpresas.length*100)}%)`);
  console.log(`Tiempo:            ${Math.floor(duration/60)}m ${duration%60}s`);
  console.log(`Archivo CSV:       ${CSV_FILE}`);
  console.log(`Archivo emails:    ${EMAILS_FILE}`);
  console.log('═'.repeat(60));
  console.log('\n✅ ¡COMPLETADO! Revisa el CSV o Supabase.\n');
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  console.log(`\n💾 Datos guardados hasta ahora en: ${CSV_FILE}`);
  process.exit(1);
});

require('dotenv').config();
const { getJson } = require('serpapi');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// ===================================
// CONFIGURACIÓN
// ===================================

const SERPAPI_KEY = process.env.SERPAPI_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SERPAPI_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Error: Faltan variables de entorno en .env');
  console.error('Necesitas: SERPAPI_KEY, SUPABASE_URL, SUPABASE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Categorías a buscar en Murcia
const CATEGORIAS = [
  'restaurante',
  'hotel',
  'gimnasio',
  'peluquería',
  'abogado',
  'dentista',
  'clínica',
  'óptica',
  'inmobiliaria',
  'taller mecánico',
  'autoescuela',
  'tienda de ropa',
  'cafetería',
  'panadería',
  'centro de estética',
  'fisioterapia',
  'veterinario',
  'ferretería',
  'floristería',
  'joyería',
  'agencia de viajes',
  'papelería',
  'librería',
  'zapatería'
];

// Estadísticas globales
const stats = {
  totalBuscadas: 0,
  totalEncontradas: 0,
  conEmail: 0,
  conWeb: 0,
  conTelefono: 0,
  guardadas: 0,
  errores: 0
};

// ===================================
// BÚSQUEDA CON SERPAPI (GOOGLE MAPS)
// ===================================

async function buscarEmpresasConSerpAPI(categoria, ciudad = 'Murcia') {
  console.log(`\n🔍 Buscando: ${categoria} en ${ciudad}...`);
  stats.totalBuscadas++;

  try {
    const params = {
      engine: 'google_maps',
      q: `${categoria} ${ciudad} España`,
      type: 'search',
      api_key: SERPAPI_KEY,
      hl: 'es',
      gl: 'es',
      num: 20 // Máximo 20 resultados por búsqueda
    };

    const response = await getJson(params);
    const resultados = response.local_results || [];

    console.log(`   ✅ Encontrados ${resultados.length} resultados`);
    stats.totalEncontradas += resultados.length;

    for (const empresa of resultados) {
      await procesarEmpresa(empresa, categoria);
      
      // Esperar 1 segundo entre empresas
      await sleep(1000);
    }

    return resultados.length;

  } catch (error) {
    console.error(`   ❌ Error en búsqueda:`, error.message);
    stats.errores++;
    return 0;
  }
}

// ===================================
// PROCESAR CADA EMPRESA
// ===================================

async function procesarEmpresa(empresa, categoria) {
  console.log(`\n📍 ${empresa.title || 'Sin nombre'}`);

  const datos = {
    nombre: empresa.title || null,
    direccion: empresa.address || null,
    telefono: empresa.phone || null,
    web: empresa.website || null,
    email: null,
    rating: empresa.rating || 0,
    reviews: empresa.reviews || 0,
    categoria: categoria,
    ciudad: 'Murcia',
    google_place_id: empresa.place_id || null,
    horario: empresa.hours ? JSON.stringify(empresa.hours) : null,
    tipo: empresa.type || null,
    latitud: empresa.gps_coordinates?.latitude || null,
    longitud: empresa.gps_coordinates?.longitude || null
  };

  // Actualizar stats
  if (datos.telefono) stats.conTelefono++;
  if (datos.web) stats.conWeb++;

  console.log(`   📞 Tel: ${datos.telefono || '❌'}`);
  console.log(`   🌐 Web: ${datos.web ? '✅' : '❌'}`);
  console.log(`   ⭐ Rating: ${datos.rating} (${datos.reviews} reviews)`);

  // Si tiene web, intentar extraer email
  if (datos.web) {
    datos.email = await buscarEmailEnWeb(datos.web);
    if (datos.email) {
      console.log(`   📧 Email: ${datos.email} ✅`);
      stats.conEmail++;
    } else {
      console.log(`   📧 Email: ❌ No encontrado`);
    }
  }

  // Guardar en Supabase
  await guardarEmpresa(datos);
}

// ===================================
// SCRAPE EMAIL DE LA WEB
// ===================================

async function buscarEmailEnWeb(url) {
  // Normalizar URL
  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }

  const paginasABuscar = [
    url,
    `${url}/contacto`,
    `${url}/contact`,
    `${url}/contactar`,
    `${url}/sobre-nosotros`,
    `${url}/about`,
    `${url}/es/contacto`,
    `${url}/es/contact`
  ];

  for (const pagina of paginasABuscar) {
    try {
      const response = await axios.get(pagina, {
        timeout: 5000,
        maxRedirects: 5,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      const html = response.data;
      
      // Regex para encontrar emails
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi;
      const emails = html.match(emailRegex);

      if (emails && emails.length > 0) {
        // Filtrar emails no válidos
        const emailsValidos = emails.filter(email => {
          const lower = email.toLowerCase();
          return !lower.includes('example.com') &&
                 !lower.includes('domain.com') &&
                 !lower.includes('yourdomain') &&
                 !lower.includes('sentry') &&
                 !lower.includes('schema.org') &&
                 !lower.includes('facebook.com') &&
                 !lower.includes('google.com') &&
                 !lower.includes('twitter.com') &&
                 !lower.includes('instagram.com') &&
                 !lower.includes('linkedin.com') &&
                 !lower.includes('wordpress.com') &&
                 !lower.includes('wix.com') &&
                 !lower.includes('jpg') &&
                 !lower.includes('png') &&
                 !lower.includes('gif') &&
                 !lower.endsWith('.js') &&
                 !lower.endsWith('.css');
        });

        // Ordenar por relevancia
        emailsValidos.sort((a, b) => {
          const prioA = getEmailPriority(a);
          const prioB = getEmailPriority(b);
          return prioB - prioA;
        });

        if (emailsValidos.length > 0) {
          return emailsValidos[0];
        }
      }

    } catch (error) {
      // Continuar con la siguiente página
      continue;
    }
  }

  return null;
}

function getEmailPriority(email) {
  const lower = email.toLowerCase();
  if (lower.startsWith('info@')) return 10;
  if (lower.startsWith('contacto@')) return 10;
  if (lower.startsWith('contact@')) return 10;
  if (lower.startsWith('hola@')) return 9;
  if (lower.startsWith('hello@')) return 9;
  if (lower.startsWith('admin@')) return 8;
  if (lower.startsWith('gerencia@')) return 8;
  if (lower.startsWith('ventas@')) return 7;
  if (lower.startsWith('comercial@')) return 7;
  return 5;
}

// ===================================
// GUARDAR EN SUPABASE
// ===================================

async function guardarEmpresa(empresa) {
  try {
    // Verificar si ya existe
    const { data: existe } = await supabase
      .from('empresas_murcia')
      .select('id')
      .eq('google_place_id', empresa.google_place_id)
      .maybeSingle();

    if (existe) {
      console.log(`   ⚠️  Ya existe en DB - Actualizando...`);
      
      const { error } = await supabase
        .from('empresas_murcia')
        .update({
          ...empresa,
          updated_at: new Date().toISOString()
        })
        .eq('google_place_id', empresa.google_place_id);

      if (error) {
        console.error(`   ❌ Error actualizando:`, error.message);
        stats.errores++;
      } else {
        console.log(`   ✅ Actualizada en DB`);
        stats.guardadas++;
      }
    } else {
      const { error } = await supabase
        .from('empresas_murcia')
        .insert(empresa);

      if (error) {
        console.error(`   ❌ Error guardando:`, error.message);
        stats.errores++;
      } else {
        console.log(`   ✅ Guardada en DB`);
        stats.guardadas++;
      }
    }

  } catch (error) {
    console.error(`   ❌ Error DB:`, error.message);
    stats.errores++;
  }
}

// ===================================
// EXPORTAR A CSV
// ===================================

async function exportarACSV() {
  console.log('\n📊 Exportando a CSV...');
  
  try {
    const { data: empresas, error } = await supabase
      .from('empresas_murcia')
      .select('*')
      .order('rating', { ascending: false });

    if (error) throw error;

    const csv = [
      'Nombre,Dirección,Teléfono,Web,Email,Rating,Reviews,Categoría,Ciudad',
      ...empresas.map(e => 
        `"${(e.nombre || '').replace(/"/g, '""')}","${(e.direccion || '').replace(/"/g, '""')}","${e.telefono || ''}","${e.web || ''}","${e.email || ''}",${e.rating},${e.reviews},"${e.categoria || ''}","${e.ciudad || ''}"`
      )
    ].join('\n');

    const filename = `empresas-murcia-${new Date().toISOString().split('T')[0]}.csv`;
    fs.writeFileSync(filename, csv, 'utf-8');
    
    console.log(`✅ CSV exportado: ${filename}`);
    console.log(`   Total empresas: ${empresas.length}`);
    console.log(`   Con email: ${empresas.filter(e => e.email).length}`);

  } catch (error) {
    console.error('❌ Error exportando CSV:', error.message);
  }
}

// ===================================
// MOSTRAR ESTADÍSTICAS
// ===================================

function mostrarEstadisticas() {
  console.log('\n');
  console.log('═══════════════════════════════════════');
  console.log('📊 ESTADÍSTICAS FINALES');
  console.log('═══════════════════════════════════════');
  console.log(`Categorías buscadas:     ${stats.totalBuscadas}`);
  console.log(`Empresas encontradas:    ${stats.totalEncontradas}`);
  console.log(`Empresas guardadas:      ${stats.guardadas}`);
  console.log(`Con teléfono:            ${stats.conTelefono} (${Math.round(stats.conTelefono/stats.totalEncontradas*100)}%)`);
  console.log(`Con web:                 ${stats.conWeb} (${Math.round(stats.conWeb/stats.totalEncontradas*100)}%)`);
  console.log(`Con email:               ${stats.conEmail} (${Math.round(stats.conEmail/stats.totalEncontradas*100)}%)`);
  console.log(`Errores:                 ${stats.errores}`);
  console.log('═══════════════════════════════════════\n');
}

// ===================================
// UTILIDADES
// ===================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ===================================
// EJECUTAR SCRIPT
// ===================================

async function ejecutarScript() {
  console.log('╔════════════════════════════════════════════╗');
  console.log('║   🚀 SCRAPER DE EMPRESAS - MURCIA         ║');
  console.log('║   Powered by SerpAPI + Supabase           ║');
  console.log('╚════════════════════════════════════════════╝\n');

  const startTime = Date.now();

  // Verificar conexión a Supabase
  console.log('🔌 Verificando conexión a Supabase...');
  const { error: testError } = await supabase.from('empresas_murcia').select('count').limit(1);
  if (testError) {
    console.error('❌ Error conectando a Supabase:', testError.message);
    console.error('💡 Asegúrate de haber ejecutado el SQL: supabase-empresas-murcia.sql');
    process.exit(1);
  }
  console.log('✅ Conexión exitosa\n');

  // Buscar en cada categoría
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoria = CATEGORIAS[i];
    console.log(`\n[${i + 1}/${CATEGORIAS.length}] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    
    await buscarEmpresasConSerpAPI(categoria);
    
    // Esperar 2 segundos entre categorías (respetar rate limits)
    if (i < CATEGORIAS.length - 1) {
      console.log('\n⏳ Esperando 2 segundos...');
      await sleep(2000);
    }
  }

  // Exportar resultados
  await exportarACSV();

  // Mostrar estadísticas
  mostrarEstadisticas();

  const endTime = Date.now();
  const duration = Math.round((endTime - startTime) / 1000);
  
  console.log(`⏱️  Tiempo total: ${duration} segundos\n`);
  console.log('✅ ¡Script completado!\n');
}

// Ejecutar
ejecutarScript().catch(error => {
  console.error('❌ Error fatal:', error);
  process.exit(1);
});


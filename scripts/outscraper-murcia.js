/**
 * Script para extraer empresas de Murcia usando Outscraper API
 * VERSIÓN CORREGIDA - Maneja respuestas asíncronas
 */

require('dotenv').config({ path: '.env.local' });
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const OUTSCRAPER_API_KEY = process.env.OUTSCRAPER_API_KEY;

if (!OUTSCRAPER_API_KEY) {
  console.error('❌ Error: OUTSCRAPER_API_KEY no encontrada en .env.local');
  process.exit(1);
}

// Categorías principales para buscar (reducidas para optimizar créditos)
const CATEGORIAS = [
  'restaurantes',
  'bares',
  'clinicas dentales',
  'abogados',
  'gimnasios',
  'peluquerias',
  'inmobiliarias',
  'talleres mecanicos',
  'fontaneros',
  'electricistas',
  'farmacias',
  'veterinarios',
  'academias',
  'asesores fiscales',
  'arquitectos',
  'fotografos',
  'floristeria',
  'clinica fisioterapia',
  'psicologo',
  'reformas hogar',
  'marketing publicidad',
  'informatica ordenadores',
  'cerrajero',
  'aire acondicionado',
  'autoescuelas',
];

// Ubicaciones principales
const UBICACIONES = [
  'Murcia',
  'Cartagena',
  'Lorca',
  'Molina de Segura',
  'Alcantarilla',
];

const OUTPUT_FILE = path.join(__dirname, `../outscraper-murcia-${new Date().toISOString().split('T')[0]}.csv`);
const JSON_FILE = path.join(__dirname, `../outscraper-murcia-${new Date().toISOString().split('T')[0]}.json`);
const EMAILS_FILE = path.join(__dirname, `../emails-outscraper-${new Date().toISOString().split('T')[0]}.txt`);

// Headers para CSV
const CSV_HEADERS = 'nombre,direccion,telefono,web,email,rating,reviews,categoria,ciudad,google_place_id\n';

let totalEmpresas = 0;
let empresasConEmail = 0;
let todasEmpresas = [];
let todosEmails = [];

// Inicializar CSV
fs.writeFileSync(OUTPUT_FILE, CSV_HEADERS);
fs.writeFileSync(EMAILS_FILE, '');

async function enviarSolicitud(query) {
  try {
    const response = await axios.get(
      `https://api.app.outscraper.com/maps/search-v3`,
      {
        params: {
          query: query,
          limit: 50,
          language: 'es',
          region: 'ES',
        },
        headers: {
          'X-API-KEY': OUTSCRAPER_API_KEY,
        },
        timeout: 30000,
      }
    );

    return response.data;
  } catch (error) {
    console.error(`   ⚠️ Error enviando solicitud: ${error.message}`);
    return null;
  }
}

async function esperarResultados(taskId, maxIntentos = 30) {
  const url = `https://api.outscraper.cloud/requests/${taskId}`;
  
  for (let i = 0; i < maxIntentos; i++) {
    try {
      const response = await axios.get(url, {
        headers: {
          'X-API-KEY': OUTSCRAPER_API_KEY,
        },
        timeout: 30000,
      });

      if (response.data.status === 'Success') {
        return response.data;
      } else if (response.data.status === 'Error') {
        console.error(`   ❌ Error en tarea: ${response.data.error}`);
        return null;
      }

      // Todavía pendiente, esperar
      process.stdout.write('.');
      await sleep(2000);
    } catch (error) {
      console.error(`   ⚠️ Error obteniendo resultados: ${error.message}`);
      return null;
    }
  }

  console.log(`   ⚠️ Timeout esperando resultados`);
  return null;
}

function procesarResultados(data, categoria, ubicacion) {
  let encontrados = 0;

  if (!data || !data.data) return 0;

  for (const grupo of data.data) {
    if (!Array.isArray(grupo)) continue;

    for (const empresa of grupo) {
      const datos = {
        nombre: empresa.name || '',
        direccion: empresa.full_address || '',
        telefono: empresa.phone || '',
        web: empresa.site || '',
        email: '', // Outscraper básico no incluye email, hay que usar enrichment
        rating: empresa.rating || 0,
        reviews: empresa.reviews || 0,
        categoria: categoria,
        ciudad: empresa.city || ubicacion,
        google_place_id: empresa.place_id || '',
      };

      // Evitar duplicados
      if (datos.google_place_id && todasEmpresas.some(e => e.google_place_id === datos.google_place_id)) {
        continue;
      }

      todasEmpresas.push(datos);
      totalEmpresas++;
      encontrados++;

      // Guardar en CSV
      const linea = `"${datos.nombre.replace(/"/g, '""')}","${datos.direccion.replace(/"/g, '""')}","${datos.telefono}","${datos.web}","${datos.email}","${datos.rating}","${datos.reviews}","${datos.categoria}","${datos.ciudad}","${datos.google_place_id}"\n`;
      fs.appendFileSync(OUTPUT_FILE, linea);
    }
  }

  return encontrados;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║   🚀 OUTSCRAPER - Extracción de Empresas de Murcia        ║');
  console.log('║   (API Asíncrona - Espera resultados)                     ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  console.log(`✅ API Key cargada`);
  console.log(`📊 Categorías: ${CATEGORIAS.length}`);
  console.log(`📍 Ubicaciones: ${UBICACIONES.length}`);
  console.log(`🔍 Total búsquedas: ${CATEGORIAS.length * UBICACIONES.length}`);
  console.log(`📁 CSV: ${OUTPUT_FILE}`);
  console.log(`💰 Créditos estimados: ~$${((CATEGORIAS.length * UBICACIONES.length * 50) / 1000 * 2).toFixed(2)}\n`);

  const startTime = Date.now();
  let busquedasCompletadas = 0;
  const totalBusquedas = CATEGORIAS.length * UBICACIONES.length;

  for (const categoria of CATEGORIAS) {
    for (const ubicacion of UBICACIONES) {
      const query = `${categoria} en ${ubicacion}, Murcia, España`;
      busquedasCompletadas++;
      
      const porcentaje = ((busquedasCompletadas / totalBusquedas) * 100).toFixed(1);
      process.stdout.write(`\n[${porcentaje.padStart(5)}%] ${categoria.padEnd(25)} | ${ubicacion.padEnd(15)} `);

      // Enviar solicitud
      const respuesta = await enviarSolicitud(query);

      if (!respuesta) {
        console.log('❌ Error');
        continue;
      }

      if (respuesta.status === 'Pending' && respuesta.id) {
        // Esperar resultados asíncronos
        process.stdout.write('⏳');
        const resultados = await esperarResultados(respuesta.id);
        
        if (resultados) {
          const encontrados = procesarResultados(resultados, categoria, ubicacion);
          console.log(` ✅ +${encontrados} (Total: ${totalEmpresas})`);
        } else {
          console.log(' ❌ Sin datos');
        }
      } else if (respuesta.data) {
        // Respuesta directa (raro pero posible)
        const encontrados = procesarResultados(respuesta, categoria, ubicacion);
        console.log(` ✅ +${encontrados} (Total: ${totalEmpresas})`);
      }

      // Pausa entre requests para no saturar
      await sleep(1000);
    }
  }

  // Guardar JSON final
  fs.writeFileSync(JSON_FILE, JSON.stringify(todasEmpresas, null, 2));

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log('\n\n════════════════════════════════════════════════════════════');
  console.log('📊 RESUMEN FINAL');
  console.log('════════════════════════════════════════════════════════════');
  console.log(`Total empresas:     ${totalEmpresas}`);
  console.log(`Tiempo:             ${duration} minutos`);
  console.log(`CSV:                ${OUTPUT_FILE}`);
  console.log(`JSON:               ${JSON_FILE}`);
  console.log('════════════════════════════════════════════════════════════');
  console.log('\n💡 Para buscar emails, ejecuta: npm run scraper:emails');
  console.log('   (Usa el CSV generado para buscar emails en las webs)\n');
}

ejecutar().catch(console.error);

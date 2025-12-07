/**
 * Script para extraer emails de todas las empresas
 * Lee los CSVs existentes y busca emails en las webs
 * Genera CSV limpio: Nombre Empresa, Email
 */

require('dotenv').config({ path: '.env.local' });
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Archivos de entrada
const CSV_OUTSCRAPER = path.join(__dirname, '../outscraper-murcia-2025-12-06.csv');
const CSV_SERPAPI = path.join(__dirname, '../empresas-murcia-2025-12-06.csv');

// Archivo de salida
const OUTPUT_CSV = path.join(__dirname, '../EMAILS-MURCIA-FINAL.csv');
const OUTPUT_SOLO_EMAILS = path.join(__dirname, '../lista-emails-murcia.txt');

let empresasProcesadas = 0;
let emailsEncontrados = 0;
let empresasConEmail = [];

// Regex para encontrar emails
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi;

// Emails a ignorar
const EMAILS_IGNORAR = [
  'example.com', 'domain.com', 'email.com', 'test.com',
  'sentry.io', 'schema.org', 'w3.org', 'google.com',
  'facebook.com', 'twitter.com', 'instagram.com',
  'wordpress.com', 'wix.com', 'squarespace.com',
  'cloudflare.com', 'jsdelivr.net', 'jquery.com',
  '.png', '.jpg', '.gif', '.svg', '.css', '.js',
  'noreply', 'no-reply', 'mailer-daemon', 'postmaster'
];

function esEmailValido(email) {
  if (!email) return false;
  const lower = email.toLowerCase();
  return !EMAILS_IGNORAR.some(ignorar => lower.includes(ignorar));
}

function priorizarEmail(emails) {
  if (!emails || emails.length === 0) return null;
  
  // Prioridad: info@ > contacto@ > hola@ > otros
  const prioridades = ['info@', 'contacto@', 'contact@', 'hola@', 'hello@', 'reservas@', 'admin@'];
  
  for (const prio of prioridades) {
    const encontrado = emails.find(e => e.toLowerCase().startsWith(prio));
    if (encontrado) return encontrado;
  }
  
  return emails[0];
}

async function buscarEmailEnWeb(url, nombre) {
  if (!url || url.includes('/url?q=')) return null;
  
  // Limpiar URL
  let urlLimpia = url;
  if (!urlLimpia.startsWith('http')) {
    urlLimpia = 'https://' + urlLimpia;
  }
  urlLimpia = urlLimpia.replace(/\/+$/, '');

  const paginasABuscar = [
    urlLimpia,
    `${urlLimpia}/contacto`,
    `${urlLimpia}/contact`,
    `${urlLimpia}/contactar`,
    `${urlLimpia}/sobre-nosotros`,
    `${urlLimpia}/about`,
    `${urlLimpia}/quienes-somos`,
  ];

  const emailsEncontrados = new Set();

  for (const pagina of paginasABuscar) {
    try {
      const response = await axios.get(pagina, {
        timeout: 8000,
        maxRedirects: 3,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        validateStatus: status => status < 400
      });

      const html = response.data;
      const emails = html.match(EMAIL_REGEX);

      if (emails) {
        emails.forEach(email => {
          if (esEmailValido(email)) {
            emailsEncontrados.add(email.toLowerCase());
          }
        });
      }

      // Si encontramos emails, no seguir buscando
      if (emailsEncontrados.size > 0) break;

    } catch (error) {
      // Ignorar errores silenciosamente
    }
  }

  return priorizarEmail(Array.from(emailsEncontrados));
}

function parsearCSV(contenido, columnaWeb, columnaNombre) {
  const lineas = contenido.split('\n');
  const empresas = [];

  for (let i = 1; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    if (!linea) continue;

    // Parsear CSV con comillas
    const campos = [];
    let campo = '';
    let dentroComillas = false;

    for (let j = 0; j < linea.length; j++) {
      const char = linea[j];
      if (char === '"') {
        dentroComillas = !dentroComillas;
      } else if (char === ',' && !dentroComillas) {
        campos.push(campo);
        campo = '';
      } else {
        campo += char;
      }
    }
    campos.push(campo);

    if (campos.length > Math.max(columnaWeb, columnaNombre)) {
      empresas.push({
        nombre: campos[columnaNombre]?.replace(/"/g, '').trim(),
        web: campos[columnaWeb]?.replace(/"/g, '').trim(),
      });
    }
  }

  return empresas;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║   📧 EXTRACTOR MASIVO DE EMAILS - MURCIA                  ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Cargar empresas de ambos CSVs
  let todasEmpresas = [];

  // CSV Outscraper: nombre(0), direccion(1), telefono(2), web(3), email(4)
  if (fs.existsSync(CSV_OUTSCRAPER)) {
    const contenido = fs.readFileSync(CSV_OUTSCRAPER, 'utf8');
    const empresas = parsearCSV(contenido, 3, 0); // web=3, nombre=0
    console.log(`✅ Outscraper: ${empresas.length} empresas cargadas`);
    todasEmpresas = todasEmpresas.concat(empresas);
  }

  // CSV SerpAPI: Nombre(0), Email(1), Telefono(2), Web(3)
  if (fs.existsSync(CSV_SERPAPI)) {
    const contenido = fs.readFileSync(CSV_SERPAPI, 'utf8');
    const empresas = parsearCSV(contenido, 3, 0); // web=3, nombre=0
    console.log(`✅ SerpAPI: ${empresas.length} empresas cargadas`);
    todasEmpresas = todasEmpresas.concat(empresas);
  }

  // Eliminar duplicados por nombre
  const nombresUnicos = new Set();
  todasEmpresas = todasEmpresas.filter(e => {
    if (!e.nombre || nombresUnicos.has(e.nombre.toLowerCase())) return false;
    nombresUnicos.add(e.nombre.toLowerCase());
    return true;
  });

  // Filtrar solo las que tienen web
  const empresasConWeb = todasEmpresas.filter(e => e.web && e.web.length > 5 && !e.web.includes('/url?q='));

  console.log(`\n📊 Total empresas únicas: ${todasEmpresas.length}`);
  console.log(`🌐 Con web válida: ${empresasConWeb.length}`);
  console.log(`📁 Guardando en: ${OUTPUT_CSV}\n`);

  // Inicializar archivos de salida
  fs.writeFileSync(OUTPUT_CSV, 'Nombre Empresa,Email\n');
  fs.writeFileSync(OUTPUT_SOLO_EMAILS, '');

  const startTime = Date.now();
  const total = empresasConWeb.length;

  // Procesar en lotes para no saturar
  const BATCH_SIZE = 5;
  const DELAY_BETWEEN_BATCHES = 500;

  for (let i = 0; i < empresasConWeb.length; i += BATCH_SIZE) {
    const lote = empresasConWeb.slice(i, i + BATCH_SIZE);
    
    const promesas = lote.map(async (empresa) => {
      const email = await buscarEmailEnWeb(empresa.web, empresa.nombre);
      empresasProcesadas++;
      
      if (email) {
        emailsEncontrados++;
        empresasConEmail.push({ nombre: empresa.nombre, email });
        
        // Guardar en tiempo real
        const lineaCSV = `"${empresa.nombre.replace(/"/g, '""')}","${email}"\n`;
        fs.appendFileSync(OUTPUT_CSV, lineaCSV);
        fs.appendFileSync(OUTPUT_SOLO_EMAILS, email + '\n');
      }
      
      return email;
    });

    await Promise.all(promesas);

    // Mostrar progreso
    const porcentaje = ((empresasProcesadas / total) * 100).toFixed(1);
    const velocidad = (empresasProcesadas / ((Date.now() - startTime) / 1000)).toFixed(1);
    process.stdout.write(`\r[${porcentaje.padStart(5)}%] Procesadas: ${empresasProcesadas}/${total} | Emails: ${emailsEncontrados} | ${velocidad}/seg   `);

    await sleep(DELAY_BETWEEN_BATCHES);
  }

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log('\n\n════════════════════════════════════════════════════════════');
  console.log('📊 RESUMEN FINAL');
  console.log('════════════════════════════════════════════════════════════');
  console.log(`Empresas procesadas: ${empresasProcesadas}`);
  console.log(`Emails encontrados:  ${emailsEncontrados} (${((emailsEncontrados/empresasProcesadas)*100).toFixed(1)}%)`);
  console.log(`Tiempo:              ${duration} minutos`);
  console.log('════════════════════════════════════════════════════════════');
  console.log(`\n📁 CSV con nombre+email: ${OUTPUT_CSV}`);
  console.log(`📧 Solo emails:          ${OUTPUT_SOLO_EMAILS}`);
  console.log('════════════════════════════════════════════════════════════\n');
}

ejecutar().catch(console.error);





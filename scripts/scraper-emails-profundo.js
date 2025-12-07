require('dotenv').config({ path: '.env.local' });
const axios = require('axios');
const fs = require('fs');

// ===================================
// CONFIGURACIÓN
// ===================================

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║   🔍 SCRAPER PROFUNDO DE EMAILS - FASE 2              ║');
console.log('║   Busca emails en TODAS las páginas de cada web      ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

const CSV_FILE = 'empresas-murcia-2025-12-06.csv';
const EMAILS_ENCONTRADOS_FILE = 'emails-encontrados-profundo.txt';
const CSV_ACTUALIZADO_FILE = 'empresas-murcia-actualizado.csv';

// Páginas a buscar en cada web
const PAGINAS_A_BUSCAR = [
  '',
  '/contacto',
  '/contact',
  '/contacta',
  '/contactanos',
  '/about',
  '/about-us',
  '/sobre-nosotros',
  '/quienes-somos',
  '/quien-somos',
  '/nosotros',
  '/equipo',
  '/team',
  '/aviso-legal',
  '/legal',
  '/politica-privacidad',
  '/privacy',
  '/terminos',
  '/terms',
  '/info',
  '/empresa',
  '/company'
];

let emailsEncontrados = 0;
let websEscaneadas = 0;

// ===================================
// LEER CSV ACTUAL
// ===================================

function leerCSV() {
  if (!fs.existsSync(CSV_FILE)) {
    console.log('⏳ Esperando a que se cree el CSV...');
    return [];
  }
  
  const contenido = fs.readFileSync(CSV_FILE, 'utf-8');
  const lineas = contenido.split('\n').slice(1); // Saltar header
  
  return lineas.filter(l => l.trim()).map(linea => {
    const campos = linea.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
    return {
      nombre: (campos[0] || '').replace(/"/g, ''),
      email: (campos[1] || '').replace(/"/g, ''),
      telefono: (campos[2] || '').replace(/"/g, ''),
      web: (campos[3] || '').replace(/"/g, ''),
      direccion: (campos[4] || '').replace(/"/g, ''),
      categoria: (campos[5] || '').replace(/"/g, ''),
      ubicacion: (campos[6] || '').replace(/"/g, ''),
      rating: parseFloat(campos[7]) || 0,
      reviews: parseInt(campos[8]) || 0
    };
  });
}

// ===================================
// BUSCAR EMAIL EN UNA PÁGINA
// ===================================

async function buscarEmailEnPagina(url) {
  try {
    const response = await axios.get(url, {
      timeout: 8000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'es-ES,es;q=0.9'
      },
      maxRedirects: 3
    });

    const html = response.data;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi;
    const emails = html.match(emailRegex) || [];

    // Filtrar emails válidos
    const validos = emails.filter(e => {
      const l = e.toLowerCase();
      return !l.includes('example') && 
             !l.includes('domain') &&
             !l.includes('sentry') &&
             !l.includes('wix') &&
             !l.includes('wordpress') &&
             !l.includes('facebook') &&
             !l.includes('google') &&
             !l.includes('twitter') &&
             !l.includes('.png') &&
             !l.includes('.jpg') &&
             !l.includes('.gif') &&
             !l.includes('.webp') &&
             !l.endsWith('.js') &&
             !l.endsWith('.css') &&
             !l.includes('schema.org') &&
             !l.includes('yourdomain') &&
             !l.includes('yoursite') &&
             l.length > 5 &&
             l.length < 50;
    });

    return validos;
  } catch {
    return [];
  }
}

// ===================================
// SCRAPING PROFUNDO DE UNA WEB
// ===================================

async function scrapearWebProfundo(website, nombre) {
  if (!website) return null;
  
  let baseUrl = website;
  if (!baseUrl.startsWith('http')) {
    baseUrl = 'https://' + baseUrl;
  }
  
  // Limpiar URL
  baseUrl = baseUrl.replace(/\/$/, '');
  
  let todosLosEmails = [];
  
  for (const pagina of PAGINAS_A_BUSCAR) {
    const url = baseUrl + pagina;
    const emails = await buscarEmailEnPagina(url);
    todosLosEmails = todosLosEmails.concat(emails);
    
    // Si ya encontramos emails buenos, no seguir
    if (todosLosEmails.length > 0) {
      const mejores = todosLosEmails.filter(e => 
        e.startsWith('info@') || 
        e.startsWith('contacto@') || 
        e.startsWith('contact@') ||
        e.startsWith('hola@')
      );
      if (mejores.length > 0) break;
    }
  }
  
  if (todosLosEmails.length === 0) return null;
  
  // Eliminar duplicados y ordenar por prioridad
  const unicos = [...new Set(todosLosEmails)];
  unicos.sort((a, b) => {
    const getPrio = (e) => {
      const l = e.toLowerCase();
      if (l.startsWith('info@')) return 10;
      if (l.startsWith('contacto@')) return 10;
      if (l.startsWith('contact@')) return 9;
      if (l.startsWith('hola@')) return 9;
      if (l.startsWith('hello@')) return 8;
      if (l.startsWith('reservas@')) return 7;
      if (l.startsWith('admin@')) return 6;
      return 5;
    };
    return getPrio(b) - getPrio(a);
  });
  
  return unicos[0];
}

// ===================================
// GUARDAR EMAIL ENCONTRADO
// ===================================

function guardarEmailEncontrado(empresa, email) {
  const linea = `${email} - ${empresa.nombre} (${empresa.web})\n`;
  fs.appendFileSync(EMAILS_ENCONTRADOS_FILE, linea, 'utf-8');
}

// ===================================
// ACTUALIZAR CSV
// ===================================

function actualizarCSV(empresas) {
  const BOM = '\uFEFF';
  const header = 'Nombre,Email,Teléfono,Web,Dirección,Categoría,Ubicación,Rating,Reviews\n';
  const rows = empresas.map(e => 
    `"${(e.nombre||'').replace(/"/g,'""')}","${e.email||''}","${e.telefono||''}","${e.web||''}","${(e.direccion||'').replace(/"/g,'""')}","${e.categoria||''}","${e.ubicacion||''}",${e.rating},${e.reviews}`
  ).join('\n');
  
  fs.writeFileSync(CSV_ACTUALIZADO_FILE, BOM + header + rows, 'utf-8');
}

// ===================================
// MAIN
// ===================================

async function main() {
  // Inicializar archivo de emails
  fs.writeFileSync(EMAILS_ENCONTRADOS_FILE, '# Emails encontrados con scraping profundo\n\n', 'utf-8');
  
  console.log('⏳ Leyendo CSV actual...\n');
  
  // Loop infinito para procesar continuamente
  while (true) {
    const empresas = leerCSV();
    
    if (empresas.length === 0) {
      console.log('📭 CSV vacío, esperando 10 segundos...');
      await new Promise(r => setTimeout(r, 10000));
      continue;
    }
    
    // Filtrar empresas con web pero sin email
    const sinEmail = empresas.filter(e => e.web && !e.email);
    const yaEscaneadas = new Set();
    
    // Cargar webs ya escaneadas
    if (fs.existsSync(EMAILS_ENCONTRADOS_FILE)) {
      const contenido = fs.readFileSync(EMAILS_ENCONTRADOS_FILE, 'utf-8');
      contenido.split('\n').forEach(linea => {
        const match = linea.match(/\((.*?)\)$/);
        if (match) yaEscaneadas.add(match[1]);
      });
    }
    
    // Filtrar las que aún no hemos escaneado
    const pendientes = sinEmail.filter(e => !yaEscaneadas.has(e.web));
    
    if (pendientes.length === 0) {
      process.stdout.write(`\r🔄 Sin nuevas webs por escanear. Total escaneadas: ${websEscaneadas} | Emails: ${emailsEncontrados}. Esperando...`);
      await new Promise(r => setTimeout(r, 5000));
      continue;
    }
    
    console.log(`\n📊 Empresas en CSV: ${empresas.length}`);
    console.log(`🌐 Con web pero sin email: ${sinEmail.length}`);
    console.log(`🔍 Pendientes de escanear: ${pendientes.length}\n`);
    
    for (let i = 0; i < pendientes.length; i++) {
      const empresa = pendientes[i];
      websEscaneadas++;
      
      process.stdout.write(`\r[${i+1}/${pendientes.length}] ${empresa.nombre.substring(0, 30).padEnd(30)} → Escaneando...`);
      
      const email = await scrapearWebProfundo(empresa.web, empresa.nombre);
      
      if (email) {
        emailsEncontrados++;
        empresa.email = email;
        guardarEmailEncontrado(empresa, email);
        process.stdout.write(`\r[${i+1}/${pendientes.length}] ${empresa.nombre.substring(0, 30).padEnd(30)} → 📧 ${email.padEnd(35)}\n`);
        
        // Actualizar en el array original
        const idx = empresas.findIndex(e => e.web === empresa.web);
        if (idx >= 0) empresas[idx].email = email;
      } else {
        // Marcar como escaneada aunque no tenga email
        fs.appendFileSync(EMAILS_ENCONTRADOS_FILE, `NO_EMAIL - ${empresa.nombre} (${empresa.web})\n`, 'utf-8');
      }
      
      // Pausa entre webs
      await new Promise(r => setTimeout(r, 500));
    }
    
    // Actualizar CSV con los nuevos emails
    actualizarCSV(empresas);
    
    console.log(`\n\n✅ Ronda completada. Emails encontrados: ${emailsEncontrados}`);
    console.log(`📁 CSV actualizado: ${CSV_ACTUALIZADO_FILE}`);
    console.log(`📧 Lista de emails: ${EMAILS_ENCONTRADOS_FILE}`);
    console.log('\n⏳ Esperando 30 segundos para siguiente ronda...\n');
    
    await new Promise(r => setTimeout(r, 30000));
  }
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});



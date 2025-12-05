const fs = require('fs');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Proyectos con sus URLs
const projects = [
  { slug: 'furgocasa-alquiler-camper', url: 'https://www.furgocasa.com' },
  { slug: 'mapa-furgocasa-ia', url: 'https://www.mapafurgocasa.com' },
  { slug: 'tricholand-tienda-cactus', url: 'https://www.tricholand.com' },
  { slug: 'acttax-asesoria-fiscal', url: 'https://www.acttax.es' },
  { slug: 'gvc-expertos-abogados', url: 'https://www.gvcexpertos.com' },
  { slug: 'gvc-abogados-murcia', url: 'https://www.gvcabogados.com' },
  { slug: 'casi-cinco-recomendaciones', url: 'https://www.casicinco.com' },
  { slug: 'hakadogs-adiestramiento-canino', url: 'https://www.hakadogs.com' },
  { slug: 'on-procuradores-murcia', url: 'https://www.onprocuradores.com' }
];

// Función para descargar screenshot usando API gratuita
function downloadScreenshot(url, outputPath) {
  return new Promise((resolve, reject) => {
    // Usar servicio gratuito de screenshots - screenshotmachine.com (free tier)
    // O simplemente usar placeholder.com con un gradiente
    const screenshotUrl = `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=1024x768`;
    
    console.log(`📸 Capturando: ${url}`);
    
    const file = fs.createWriteStream(outputPath);
    
    https.get(screenshotUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Guardado: ${outputPath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

// Función para crear placeholder si el screenshot falla
function createPlaceholder(slug, outputPath) {
  // Por ahora simplemente crear un archivo vacío o skip
  console.log(`⚠️  Placeholder para: ${slug}`);
  return Promise.resolve();
}

async function captureAllScreenshots() {
  console.log('🚀 Iniciando captura de screenshots...\n');
  
  const results = [];
  
  for (const project of projects) {
    const outputPath = `public/portfolio/${project.slug}.jpg`;
    
    try {
      await downloadScreenshot(project.url, outputPath);
      results.push({
        slug: project.slug,
        url: project.url,
        image: `/portfolio/${project.slug}.jpg`,
        success: true
      });
      
      // Esperar 2 segundos entre requests para no abusar del servicio gratuito
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.log(`❌ Error en ${project.url}:`, error.message);
      results.push({
        slug: project.slug,
        url: project.url,
        image: null,
        success: false,
        error: error.message
      });
    }
  }
  
  // Generar SQL para actualizar la base de datos
  console.log('\n📊 RESULTADOS:');
  console.log(JSON.stringify(results, null, 2));
  
  console.log('\n💾 SQL para actualizar Supabase:\n');
  results.forEach(r => {
    if (r.success) {
      console.log(`UPDATE portfolio_projects SET featured_image = '${r.image}' WHERE slug = '${r.slug}';`);
    }
  });
  
  // Guardar resultados
  fs.writeFileSync('screenshot-results.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Resultados guardados en screenshot-results.json');
}

captureAllScreenshots().catch(console.error);


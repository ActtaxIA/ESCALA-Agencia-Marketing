const websites = [
  'https://www.furgocasa.com',
  'https://www.tricholand.com',
  'https://www.acttax.es',
  'https://www.gvcexpertos.com',
  'https://www.gvcabogados.com',
  'https://www.casicinco.com',
  'https://www.mapafurgocasa.com',
  'https://www.hakadogs.com',
  'https://www.onprocuradores.com'
];

async function fetchWebsite(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  
  const html = await response.text();
  
  return {
    url: url,
    statusCode: response.status,
    html: html
  };
}

function extractInfo(html) {
  const info = {
    title: '',
    description: '',
    keywords: '',
    h1: [],
    services: []
  };
  
  // Extraer título
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) info.title = titleMatch[1].trim();
  
  // Extraer meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (descMatch) info.description = descMatch[1].trim();
  
  // Extraer meta keywords
  const keyMatch = html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["']/i);
  if (keyMatch) info.keywords = keyMatch[1].trim();
  
  // Extraer H1
  const h1Matches = html.match(/<h1[^>]*>([^<]+)<\/h1>/gi);
  if (h1Matches) {
    info.h1 = h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()).slice(0, 3);
  }
  
  // Buscar palabras clave de servicios
  const serviceKeywords = [
    'diseño web', 'desarrollo web', 'seo', 'marketing', 'branding',
    'alquiler', 'servicios', 'tratamiento', 'asesoría', 'consultoría',
    'abogados', 'peritos', 'eventos', 'adiestramiento', 'procuradores'
  ];
  
  const lowerHtml = html.toLowerCase();
  info.services = serviceKeywords.filter(keyword => lowerHtml.includes(keyword));
  
  return info;
}

async function scrapeAll() {
  console.log('🚀 Iniciando scraping de portfolio...\n');
  
  const results = [];
  
  for (const website of websites) {
    try {
      console.log(`📡 Visitando: ${website}`);
      const data = await fetchWebsite(website);
      const info = extractInfo(data.html);
      
      results.push({
        url: website,
        status: data.statusCode,
        ...info
      });
      
      console.log(`✅ ${website} - ${info.title}`);
      console.log(`   Descripción: ${info.description.substring(0, 100)}...`);
      console.log(`   H1: ${info.h1.join(', ')}`);
      console.log(`   Servicios detectados: ${info.services.join(', ')}\n`);
      
    } catch (error) {
      console.log(`❌ Error en ${website}: ${error.message}\n`);
      results.push({
        url: website,
        error: error.message
      });
    }
    
    // Esperar un poco entre requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Guardar resultados en JSON
  const fs = require('fs');
  fs.writeFileSync('portfolio-data.json', JSON.stringify(results, null, 2));
  
  console.log('\n✅ Scraping completado!');
  console.log('📄 Resultados guardados en: portfolio-data.json\n');
  
  // Generar resumen
  console.log('📊 RESUMEN:');
  results.forEach(r => {
    if (!r.error) {
      console.log(`\n${r.url}:`);
      console.log(`  - Título: ${r.title}`);
      console.log(`  - Industria: ${r.services.slice(0, 3).join(', ')}`);
    }
  });
}

scrapeAll().catch(console.error);


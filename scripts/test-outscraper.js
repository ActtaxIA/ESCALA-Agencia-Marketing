/**
 * Test para ver qué devuelve Outscraper
 */

require('dotenv').config({ path: '.env.local' });
const axios = require('axios');

const OUTSCRAPER_API_KEY = process.env.OUTSCRAPER_API_KEY;

console.log('🔍 Probando Outscraper API...\n');
console.log('API Key:', OUTSCRAPER_API_KEY ? OUTSCRAPER_API_KEY.substring(0, 20) + '...' : 'NO ENCONTRADA');

async function test() {
  try {
    // Probar con una búsqueda simple
    const query = 'restaurantes Murcia España';
    
    console.log(`\n📍 Buscando: "${query}"`);
    
    const response = await axios.get(
      `https://api.app.outscraper.com/maps/search-v3`,
      {
        params: {
          query: query,
          limit: 5, // Solo 5 para probar
          language: 'es',
          region: 'ES',
        },
        headers: {
          'X-API-KEY': OUTSCRAPER_API_KEY,
        },
        timeout: 60000,
      }
    );

    console.log('\n📊 Respuesta completa:');
    console.log('Status:', response.status);
    console.log('Headers:', JSON.stringify(response.headers, null, 2));
    console.log('\n📄 Data:');
    console.log(JSON.stringify(response.data, null, 2));

  } catch (error) {
    console.error('\n❌ Error:');
    console.error('Message:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

test();





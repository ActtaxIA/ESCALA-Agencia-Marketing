require('dotenv').config({ path: '.env.local' });
const { getJson } = require('serpapi');
const { createClient } = require('@supabase/supabase-js');

const SERPAPI_KEY = process.env.SERPAPI_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔍 PRUEBA RÁPIDA - Solo 2 categorías\n');

if (!SERPAPI_KEY) {
  console.error('❌ SERPAPI_KEY no encontrada');
  process.exit(1);
}

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Supabase credentials no encontradas');
  process.exit(1);
}

console.log('✅ Credenciales cargadas');
console.log('   SerpAPI:', SERPAPI_KEY.substring(0, 20) + '...');
console.log('   Supabase:', SUPABASE_URL);

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testBusqueda() {
  console.log('\n🔍 Buscando restaurantes en Murcia...\n');
  
  try {
    const params = {
      engine: 'google_maps',
      q: 'restaurante Murcia España',
      type: 'search',
      api_key: SERPAPI_KEY,
      hl: 'es',
      gl: 'es',
      num: 5 // Solo 5 para la prueba
    };

    const response = await getJson(params);
    const resultados = response.local_results || [];

    console.log(`✅ Encontrados ${resultados.length} restaurantes\n`);

    for (let i = 0; i < Math.min(3, resultados.length); i++) {
      const empresa = resultados[i];
      console.log(`${i + 1}. ${empresa.title || 'Sin nombre'}`);
      console.log(`   📞 ${empresa.phone || '❌'}`);
      console.log(`   🌐 ${empresa.website || '❌'}`);
      console.log(`   ⭐ ${empresa.rating || 0} (${empresa.reviews || 0} reviews)`);
      console.log('');
    }

    // Intentar guardar uno en Supabase
    if (resultados.length > 0) {
      const primera = resultados[0];
      
      console.log('💾 Intentando guardar en Supabase...');
      
      const { data, error } = await supabase
        .from('empresas_murcia')
        .insert({
          nombre: primera.title,
          direccion: primera.address,
          telefono: primera.phone,
          web: primera.website,
          rating: primera.rating || 0,
          reviews: primera.reviews || 0,
          categoria: 'restaurante',
          ciudad: 'Murcia',
          google_place_id: primera.place_id
        });

      if (error) {
        console.error('❌ Error Supabase:', error.message);
      } else {
        console.log('✅ Guardado correctamente en Supabase!');
      }
    }

    console.log('\n✅ Prueba completada!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testBusqueda();




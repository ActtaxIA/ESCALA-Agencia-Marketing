/**
 * Genera SQL para actualizar las referencias a imágenes WebP
 * 
 * Uso: node scripts/generate-update-sql.js
 */

const fs = require('fs').promises;
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'public', 'blog');

// Mapeo de slugs a imágenes (basado en blog-images-mapping.txt)
const articleImageMap = {
  'guia-seo-local-2025': 'guia-seo-local-2025',
  'como-mejorar-seo-local': 'como-mejorar-seo-local',
  'tendencias-diseno-web-2025': 'tendencias-diseno-web-2025',
  'google-ads-vs-facebook-ads': 'google-ads-vs-facebook-ads',
  'ia-en-marketing': 'ia-en-marketing',
  'redes-sociales-empresas-locales': 'redes-sociales-empresas-locales',
  'email-marketing-que-convierte': 'email-marketing-que-convierte',
  'optimizar-google-my-business': 'optimizar-google-my-business',
  'errores-web-pymes': 'errores-web-pymes'
};

async function generateSQL() {
  console.log('🔧 Generando SQL para actualizar referencias de imágenes...\n');

  try {
    const files = await fs.readdir(BLOG_DIR);
    const webpFiles = files.filter(f => f.endsWith('.webp'));

    let sql = `-- =====================================================
-- ACTUALIZAR IMÁGENES FEATURED A FORMATO WEBP OPTIMIZADO
-- =====================================================
-- Este script actualiza las referencias a imágenes WebP optimizadas
-- Ejecutar en Supabase después de optimizar las imágenes

`;

    for (const [slug, baseName] of Object.entries(articleImageMap)) {
      // Buscar si existe versión WebP
      const webpName = `${baseName}.webp`;
      
      if (webpFiles.includes(webpName)) {
        sql += `-- ${slug}\n`;
        sql += `UPDATE articles \n`;
        sql += `SET featured_image = '${webpName}'\n`;
        sql += `WHERE slug = '${slug}';\n\n`;
      }
    }

    sql += `-- Verificar actualización
SELECT slug, title, featured_image 
FROM articles 
WHERE published = true
ORDER BY published_at DESC;
`;

    // Guardar SQL
    const sqlPath = path.join(process.cwd(), 'update-blog-images-webp.sql');
    await fs.writeFile(sqlPath, sql);

    console.log(`✅ SQL generado: update-blog-images-webp.sql`);
    console.log(`📝 Actualiza ${Object.keys(articleImageMap).length} artículos\n`);
    console.log('🚀 Siguiente paso: Ejecuta este SQL en Supabase\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

generateSQL();



/**
 * Script para optimizar y convertir imágenes del blog a WebP
 * Reduce el tamaño de las imágenes en ~70-80%
 * 
 * Uso: node scripts/optimize-blog-images.js
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'public', 'blog');
const QUALITY = 85; // Calidad WebP (80-90 es óptimo)
const MAX_WIDTH = 1200; // Ancho máximo para imágenes
const MAX_HEIGHT = 800; // Alto máximo

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).toLowerCase();
  
  // Solo procesar imágenes (no WebP ya optimizados)
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return null;
  }

  try {
    const originalStats = await fs.stat(filePath);
    const originalSize = originalStats.size;

    // Nuevo nombre con extensión .webp
    const newFileName = fileName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const newFilePath = path.join(BLOG_DIR, newFileName);

    console.log(`\n🔄 Procesando: ${fileName}`);
    console.log(`   Tamaño original: ${(originalSize / 1024).toFixed(0)} KB`);

    // Convertir a WebP con optimización
    await sharp(filePath)
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: QUALITY,
        effort: 6 // Máxima compresión (0-6)
      })
      .toFile(newFilePath);

    const newStats = await fs.stat(newFilePath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`   ✅ Convertido a: ${newFileName}`);
    console.log(`   📦 Nuevo tamaño: ${(newSize / 1024).toFixed(0)} KB`);
    console.log(`   💾 Reducción: ${reduction}%`);

    return {
      original: fileName,
      new: newFileName,
      originalSize,
      newSize,
      reduction: parseFloat(reduction)
    };

  } catch (error) {
    console.error(`   ❌ Error procesando ${fileName}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando optimización de imágenes del blog...\n');
  console.log(`📁 Directorio: ${BLOG_DIR}\n`);

  try {
    const files = await fs.readdir(BLOG_DIR);
    const imageFiles = files.filter(f => 
      /\.(png|jpg|jpeg)$/i.test(f)
    );

    if (imageFiles.length === 0) {
      console.log('ℹ️  No hay imágenes PNG/JPG para optimizar');
      return;
    }

    console.log(`📊 Encontradas ${imageFiles.length} imágenes para optimizar\n`);

    const results = [];
    for (const file of imageFiles) {
      const filePath = path.join(BLOG_DIR, file);
      const result = await optimizeImage(filePath);
      if (result) {
        results.push(result);
      }
    }

    // Resumen
    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN DE OPTIMIZACIÓN');
    console.log('='.repeat(60));

    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

    console.log(`\n✅ Imágenes procesadas: ${results.length}`);
    console.log(`📦 Tamaño original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📦 Tamaño nuevo total: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Reducción total: ${totalReduction}%`);
    console.log(`💰 Espacio ahorrado: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB\n`);

    // Lista de archivos convertidos
    console.log('📝 Archivos convertidos:');
    results.forEach(r => {
      console.log(`   ${r.original} → ${r.new}`);
    });

    console.log('\n⚠️  IMPORTANTE: Actualiza el SQL para usar las nuevas extensiones .webp');
    console.log('   Ejecuta: node scripts/generate-update-sql.js\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Ejecutar
optimizeAllImages();


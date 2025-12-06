/**
 * 🎯 SISTEMA DE OPTIMIZACIÓN AUTOMÁTICA DE IMÁGENES
 * 
 * Este script vigila las carpetas de imágenes y automáticamente:
 * - Convierte PNG/JPG a WebP
 * - Optimiza el tamaño
 * - Redimensiona si es necesario
 * - Elimina las originales pesadas
 * 
 * Uso: 
 *   npm run watch:images    (vigilar cambios)
 *   npm run optimize:images (optimizar una vez)
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');

// ====================================
// CONFIGURACIÓN
// ====================================
const CONFIG = {
  // Directorios a vigilar
  watchDirs: [
    'public/blog',
    'public/portfolio',
    'public/images',
    'images'
  ],
  
  // Configuración de optimización
  webp: {
    quality: 85,        // 85 es un buen balance calidad/tamaño
    effort: 6,          // Máxima compresión
  },
  
  // Dimensiones máximas
  maxWidth: 1920,
  maxHeight: 1080,
  
  // Para miniaturas (thumbnails)
  thumbnails: {
    blog: { width: 800, height: 600 },
    portfolio: { width: 1200, height: 800 }
  },
  
  // Eliminar originales después de convertir
  deleteOriginals: false, // ⚠️ Cambiar a true cuando estés seguro
  
  // Extensiones a procesar
  extensions: ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']
};

// ====================================
// FUNCIONES DE OPTIMIZACIÓN
// ====================================

/**
 * Optimiza una imagen individual
 */
async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName);
  
  // Solo procesar imágenes permitidas
  if (!CONFIG.extensions.includes(ext)) {
    return null;
  }

  try {
    const dir = path.dirname(filePath);
    const originalStats = await fs.stat(filePath);
    const originalSize = originalStats.size;

    // Si es muy pequeña (< 50KB), probablemente ya está optimizada
    if (originalSize < 50 * 1024) {
      console.log(`⏭️  Omitiendo ${fileName} (ya es pequeña: ${(originalSize / 1024).toFixed(0)} KB)`);
      return null;
    }

    // Nombre del archivo WebP
    const baseName = fileName.replace(/\.(png|jpg|jpeg)$/i, '');
    const webpName = `${baseName}.webp`;
    const webpPath = path.join(dir, webpName);

    // Si ya existe el WebP, no procesar
    try {
      await fs.access(webpPath);
      console.log(`⏭️  Ya existe ${webpName}, omitiendo...`);
      return null;
    } catch {
      // No existe, continuar
    }

    console.log(`\n🔄 Optimizando: ${fileName}`);
    console.log(`   📦 Tamaño original: ${(originalSize / 1024).toFixed(0)} KB`);

    // Procesar imagen
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Redimensionar si es muy grande
    let processImage = image;
    if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
      console.log(`   📐 Redimensionando de ${metadata.width}x${metadata.height}`);
      processImage = processImage.resize({
        width: CONFIG.maxWidth,
        height: CONFIG.maxHeight,
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convertir a WebP
    await processImage
      .webp(CONFIG.webp)
      .toFile(webpPath);

    const newStats = await fs.stat(webpPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`   ✅ Convertido a: ${webpName}`);
    console.log(`   📦 Nuevo tamaño: ${(newSize / 1024).toFixed(0)} KB`);
    console.log(`   💾 Reducción: ${reduction}%`);

    // Eliminar original si está configurado
    if (CONFIG.deleteOriginals) {
      await fs.unlink(filePath);
      console.log(`   🗑️  Original eliminado`);
    }

    return {
      original: fileName,
      new: webpName,
      originalSize,
      newSize,
      reduction: parseFloat(reduction)
    };

  } catch (error) {
    console.error(`   ❌ Error procesando ${fileName}:`, error.message);
    return null;
  }
}

/**
 * Procesa todas las imágenes en un directorio
 */
async function processDirectory(dirPath) {
  try {
    // Verificar que el directorio existe
    try {
      await fs.access(dirPath);
    } catch {
      console.log(`⚠️  Directorio no existe: ${dirPath}`);
      return [];
    }

    const files = await fs.readdir(dirPath);
    const imageFiles = files.filter(f => 
      CONFIG.extensions.some(ext => f.endsWith(ext))
    );

    if (imageFiles.length === 0) {
      return [];
    }

    console.log(`\n📁 Procesando: ${dirPath}`);
    console.log(`   Encontradas ${imageFiles.length} imágenes`);

    const results = [];
    for (const file of imageFiles) {
      const filePath = path.join(dirPath, file);
      const result = await optimizeImage(filePath);
      if (result) {
        results.push(result);
      }
    }

    return results;

  } catch (error) {
    console.error(`❌ Error en directorio ${dirPath}:`, error.message);
    return [];
  }
}

/**
 * Procesa todos los directorios configurados
 */
async function optimizeAll() {
  console.log('🚀 OPTIMIZACIÓN AUTOMÁTICA DE IMÁGENES');
  console.log('=' .repeat(60));
  console.log(`📅 ${new Date().toLocaleString('es-ES')}\n`);

  const allResults = [];

  for (const dir of CONFIG.watchDirs) {
    const dirPath = path.join(process.cwd(), dir);
    const results = await processDirectory(dirPath);
    allResults.push(...results);
  }

  // Resumen
  if (allResults.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN');
    console.log('='.repeat(60));

    const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = allResults.reduce((sum, r) => sum + r.newSize, 0);
    const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

    console.log(`\n✅ Imágenes optimizadas: ${allResults.length}`);
    console.log(`📦 Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📦 Tamaño optimizado: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Reducción total: ${totalReduction}%`);
    console.log(`💰 Espacio ahorrado: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB\n`);
  } else {
    console.log('\n✨ No hay imágenes nuevas para optimizar\n');
  }
}

/**
 * Modo vigilancia: observa cambios en tiempo real
 */
function watchMode() {
  console.log('👀 MODO VIGILANCIA ACTIVADO');
  console.log('=' .repeat(60));
  console.log('Vigilando cambios en:');
  CONFIG.watchDirs.forEach(dir => console.log(`  - ${dir}`));
  console.log('\nLas nuevas imágenes se optimizarán automáticamente...\n');

  const watchPaths = CONFIG.watchDirs.map(dir => 
    path.join(process.cwd(), dir, '**/*.{png,jpg,jpeg,PNG,JPG,JPEG}')
  );

  const watcher = chokidar.watch(watchPaths, {
    ignored: /(^|[\/\\])\../, // ignorar archivos ocultos
    persistent: true,
    ignoreInitial: false, // procesar archivos existentes al inicio
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    }
  });

  watcher
    .on('add', async (filePath) => {
      console.log(`\n📥 Nueva imagen detectada: ${path.basename(filePath)}`);
      await optimizeImage(filePath);
    })
    .on('change', async (filePath) => {
      console.log(`\n🔄 Imagen modificada: ${path.basename(filePath)}`);
      await optimizeImage(filePath);
    })
    .on('error', error => {
      console.error('❌ Error del watcher:', error);
    });

  // Mantener el proceso vivo
  process.on('SIGINT', () => {
    console.log('\n\n👋 Deteniendo vigilancia...');
    watcher.close();
    process.exit(0);
  });
}

// ====================================
// EJECUCIÓN
// ====================================

const args = process.argv.slice(2);

if (args.includes('--watch') || args.includes('-w')) {
  watchMode();
} else {
  optimizeAll()
    .then(() => {
      console.log('✅ Optimización completada\n');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Error fatal:', error);
      process.exit(1);
    });
}


const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(process.cwd(), 'images', 'IA');
const DEST_DIR = path.join(process.cwd(), 'public', 'blog');

// Extensiones de imagen soportadas
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif'];

async function convertImagesToWebp() {
  console.log('🎨 Iniciando conversión de imágenes a WebP...\n');
  console.log(`📂 Origen: ${SOURCE_DIR}`);
  console.log(`📂 Destino: ${DEST_DIR}\n`);

  // Verificar que existan los directorios
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ No existe el directorio: ${SOURCE_DIR}`);
    process.exit(1);
  }

  if (!fs.existsSync(DEST_DIR)) {
    console.log(`📁 Creando directorio: ${DEST_DIR}`);
    fs.mkdirSync(DEST_DIR, { recursive: true });
  }

  // Leer todos los archivos
  const files = fs.readdirSync(SOURCE_DIR);
  
  // Filtrar solo imágenes (excluir webp ya existentes)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });

  console.log(`🖼️  Encontradas ${imageFiles.length} imágenes para convertir\n`);

  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of imageFiles) {
    const sourcePath = path.join(SOURCE_DIR, file);
    const fileName = path.parse(file).name;
    const destPath = path.join(DEST_DIR, `${fileName}.webp`);

    try {
      // Verificar si ya existe la versión webp
      if (fs.existsSync(destPath)) {
        console.log(`⏭️  Ya existe: ${fileName}.webp`);
        skipped++;
        continue;
      }

      // Convertir a webp
      await sharp(sourcePath)
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);

      const originalSize = fs.statSync(sourcePath).size;
      const newSize = fs.statSync(destPath).size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${file} → ${fileName}.webp`);
      console.log(`   💾 ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% menor)\n`);
      
      converted++;
    } catch (error) {
      console.error(`❌ Error convirtiendo ${file}:`, error.message);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN:');
  console.log(`✅ Convertidas: ${converted}`);
  console.log(`⏭️  Ya existían: ${skipped}`);
  console.log(`❌ Errores: ${errors}`);
  console.log('='.repeat(50));
}

// Ejecutar
convertImagesToWebp().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});


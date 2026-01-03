const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'public', 'blog');

// Extensiones a eliminar
const EXTENSIONS_TO_DELETE = ['.png', '.jpg', '.jpeg'];

function deleteNonWebpImages() {
  console.log('🗑️  Eliminando imágenes PNG y JPG de /public/blog...\n');
  console.log(`📂 Directorio: ${BLOG_DIR}\n`);

  // Verificar que exista el directorio
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`❌ No existe el directorio: ${BLOG_DIR}`);
    process.exit(1);
  }

  // Leer todos los archivos
  const files = fs.readdirSync(BLOG_DIR);
  
  // Filtrar archivos PNG, JPG, JPEG
  const filesToDelete = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return EXTENSIONS_TO_DELETE.includes(ext);
  });

  if (filesToDelete.length === 0) {
    console.log('✅ No hay archivos PNG o JPG para eliminar');
    return;
  }

  console.log(`🗑️  Encontrados ${filesToDelete.length} archivos para eliminar:\n`);

  let deleted = 0;
  let errors = 0;
  let totalSize = 0;

  for (const file of filesToDelete) {
    const filePath = path.join(BLOG_DIR, file);
    
    try {
      const stats = fs.statSync(filePath);
      const size = stats.size;
      totalSize += size;
      
      fs.unlinkSync(filePath);
      console.log(`✅ Eliminado: ${file} (${(size / 1024).toFixed(0)}KB)`);
      deleted++;
    } catch (error) {
      console.error(`❌ Error eliminando ${file}:`, error.message);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN:');
  console.log(`✅ Eliminados: ${deleted} archivos`);
  console.log(`💾 Espacio liberado: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`❌ Errores: ${errors}`);
  console.log('='.repeat(50));
}

// Ejecutar
deleteNonWebpImages();


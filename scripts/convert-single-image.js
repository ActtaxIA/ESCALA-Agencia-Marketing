const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_FILE = 'images/IA/20260103_1449_Marketing Clínicas Dentales_simple_compose_01ke21v7che5s9nvzy0t8khhxp.png';
const DEST_DIR = path.join(process.cwd(), 'public', 'blog');
const OUTPUT_NAME = 'marketing-clinicas-dentales-agenda-lista-espera.webp';

async function convertSingleImage() {
  console.log('🎨 Convirtiendo imagen a WebP...\n');

  const sourcePath = path.join(process.cwd(), SOURCE_FILE);
  const destPath = path.join(DEST_DIR, OUTPUT_NAME);

  // Verificar que existe el archivo
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ No existe el archivo: ${sourcePath}`);
    process.exit(1);
  }

  // Verificar que existe el directorio destino
  if (!fs.existsSync(DEST_DIR)) {
    console.log(`📁 Creando directorio: ${DEST_DIR}`);
    fs.mkdirSync(DEST_DIR, { recursive: true });
  }

  try {
    console.log(`📂 Origen: ${SOURCE_FILE}`);
    console.log(`📂 Destino: public/blog/${OUTPUT_NAME}\n`);

    const originalSize = fs.statSync(sourcePath).size;

    // Convertir a webp
    await sharp(sourcePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(destPath);

    const newSize = fs.statSync(destPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Conversión exitosa!`);
    console.log(`   💾 Tamaño original: ${(originalSize / 1024).toFixed(0)} KB`);
    console.log(`   💾 Tamaño nuevo: ${(newSize / 1024).toFixed(0)} KB`);
    console.log(`   📉 Reducción: ${savings}%\n`);
    console.log(`🎉 Imagen guardada en: public/blog/${OUTPUT_NAME}`);

  } catch (error) {
    console.error(`❌ Error convirtiendo imagen:`, error.message);
    process.exit(1);
  }
}

convertSingleImage();


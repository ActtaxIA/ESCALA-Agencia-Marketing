const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceIcon = path.join(__dirname, '../src/app/icon.png');
const publicDir = path.join(__dirname, '../public');

// Tamaños requeridos por Google y navegadores
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 180, name: 'apple-touch-icon.png' }, // Apple touch icon
  { size: 192, name: 'android-chrome-192x192.png' }, // Android
  { size: 512, name: 'android-chrome-512x512.png' }, // Android
];

async function generateFavicons() {
  console.log('🎨 Generando favicons en múltiples tamaños...\n');

  if (!fs.existsSync(sourceIcon)) {
    console.error('❌ No se encontró el archivo icon.png en src/app/');
    process.exit(1);
  }

  // Crear directorio public si no existe
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    // Leer el icono original
    const iconBuffer = fs.readFileSync(sourceIcon);
    const metadata = await sharp(iconBuffer).metadata();
    console.log(`📏 Icono original: ${metadata.width}x${metadata.height}px\n`);

    // Generar cada tamaño
    for (const { size, name } of sizes) {
      const outputPath = path.join(publicDir, name);
      
      await sharp(iconBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Fondo transparente
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${name} (${size}x${size}px) generado`);
    }

    // Generar favicon.ico con múltiples tamaños embebidos
    console.log('\n🔄 Generando favicon.ico...');
    await sharp(iconBuffer)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    
    console.log('✅ favicon.ico (32x32px) generado');

    console.log('\n✅ ¡Todos los favicons generados exitosamente!');
    console.log('\n📋 Archivos creados en /public:');
    sizes.forEach(({ name }) => console.log(`   - ${name}`));
    console.log('   - favicon.ico\n');

  } catch (error) {
    console.error('❌ Error al generar favicons:', error);
    process.exit(1);
  }
}

generateFavicons();


/**
 * Obtiene la URL pública de una imagen en Supabase Storage
 * NOTA: Esta función construye la URL manualmente para evitar problemas de SSR/Client
 * @param fileName - Nombre del archivo (ej: "mi-imagen.png")
 * @param bucket - Nombre del bucket (por defecto "blog-images")
 * @returns URL pública de la imagen
 */
export function getPublicImageUrl(fileName: string | null, bucket: string = 'blog-images'): string {
  if (!fileName) {
    return '/eskala_digital_opengraph.png' // Imagen por defecto
  }

  // Construir URL pública manualmente (sin usar cliente de Supabase)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  
  if (!supabaseUrl) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_URL no está definida')
    return '/eskala_digital_opengraph.png'
  }

  return `${supabaseUrl}/storage/v1/object/public/${bucket}/public/${fileName}`
}

/**
 * Obtiene la URL pública de una imagen del blog
 * Si la imagen está en Supabase Storage, devuelve la URL de Supabase
 * Si no, devuelve la ruta local /blog/
 */
export function getBlogImageUrl(fileName: string | null): string {
  if (!fileName) {
    return '/eskala_digital_opengraph.png'
  }

  // Si fileName incluye dominio de Supabase, devolverlo tal cual
  if (fileName.startsWith('http')) {
    return fileName
  }

  // Si la imagen aún está en /public/blog/ (compatibilidad)
  if (fileName.includes('/')) {
    return fileName
  }

  // Por defecto, asumir que está en Supabase Storage
  return getPublicImageUrl(fileName)
}



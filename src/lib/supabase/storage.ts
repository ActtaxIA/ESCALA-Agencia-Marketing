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
 * Prioridad:
 * 1. Si empieza con http -> URL completa (ya es una URL de Supabase o externa)
 * 2. Si incluye "/" -> Ruta relativa (ej: /blog/imagen.png)
 * 3. Si NO incluye "/" -> PRIMERO intenta /blog/{fileName} (compatibilidad con imágenes antiguas)
 * 4. Si falla, intenta Supabase Storage
 */
export function getBlogImageUrl(fileName: string | null): string {
  if (!fileName) {
    return '/eskala_digital_opengraph.png'
  }

  // Si fileName incluye dominio de Supabase o es URL completa, devolverlo tal cual
  if (fileName.startsWith('http')) {
    return fileName
  }

  // Si la imagen tiene "/" (ruta relativa), devolverla tal cual
  if (fileName.includes('/')) {
    return fileName
  }

  // Por defecto, asumir que está en /public/blog/ (compatibilidad con imágenes antiguas)
  // Las nuevas imágenes subidas por el CMS irán a Supabase Storage y tendrán URLs completas
  return `/blog/${fileName}`
}




/**
 * Componente Image Optimizado
 * 
 * Siempre usa imágenes WebP optimizadas automáticamente.
 * Incluye lazy loading, placeholder blur y dimensiones responsive.
 * 
 * Uso:
 *   <OptimizedImage 
 *     src="/blog/mi-imagen.webp" 
 *     alt="Descripción"
 *   />
 */

import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes = '100vw'
}: OptimizedImageProps) {
  // Asegurar que la ruta es correcta
  const imageSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Convertir automáticamente a WebP si no lo es ya
  const webpSrc = imageSrc.endsWith('.webp') 
    ? imageSrc 
    : imageSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  if (fill) {
    return (
      <Image
        src={webpSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
      />
    );
  }

  return (
    <Image
      src={webpSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      quality={85}
      sizes={sizes}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
    />
  );
}



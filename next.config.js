/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizado para AWS Amplify
  output: 'standalone',
  
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'escalamarketing.es',
      },
    ],
    // Formatos optimizados
    formats: ['image/avif', 'image/webp'],
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirecciones SEO
  async redirects() {
    return [
      // Redirigir www a no-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.escalamarketing.es' }],
        destination: 'https://escalamarketing.es/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

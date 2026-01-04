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
        hostname: 'www.eskaladigital.com',
      },
      {
        protocol: 'https',
        hostname: 'eskaladigital.com',
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

  // Redirecciones SEO: forzar www como canónico
  async redirects() {
    return [
      // Redirigir sin www a con www (URL canónica)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'eskaladigital.com' }],
        destination: 'https://www.eskaladigital.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

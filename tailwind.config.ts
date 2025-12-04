import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stripe: {
          1: '#0f1729',
          2: '#1e3a5f',
          3: '#4a7c9b',
          4: '#87ceeb',
          5: '#fff5e6',
          6: '#ffb366',
          7: '#ff6b35',
          8: '#e84a23',
        },
        background: '#ffffff',
        foreground: '#1a1a2e',
        muted: '#64748b',
        cream: '#fafafa',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

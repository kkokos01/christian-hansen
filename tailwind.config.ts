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
        primary: {
          DEFAULT: '#0D2C3A', // adjusted to be slightly greener while maintaining depth
          medium: '#1B3A4B', // previous primary color
          light: '#234B61',
          dark: '#0A2231',
        },
        accent: {
          DEFAULT: '#E5EEF3', // light blue
          light: '#F0F5F8',
          dark: '#DAE5EC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config

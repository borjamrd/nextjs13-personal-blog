import type { Config } from 'tailwindcss'
const { colors } = require('tailwindcss/colors')

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme: any) => ({
        dark: {
          css: {
            '--tw-prose-code': theme('colors.pink[900]'),
          }
        }
      }),
      colors: {
        ...colors,
        'light-gold': '#f5bc51',
        'dark-gold': '#533519',
        'discord': '#7289da',
        'discord-dark': '#282b30',
        'accents-1': '#333',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
export default config

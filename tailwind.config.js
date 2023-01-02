const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./Components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6F9FF',
          200: '#DDE6FC',
          500: '#0247FE',
          700: '#023BD4',
          gray: '#444444',
          'gray-light': '#8E8E8E',
          black: '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['Manrope', ...fontFamily.sans],
      },
      fontSize: {
        '4xl': '2.5rem',
        '4.5xl': '2.625rem',
      },
      lineHeight: {
        14: '56px',
      }
    },
  },
  plugins: [],
}
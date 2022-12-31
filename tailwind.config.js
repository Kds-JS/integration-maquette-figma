const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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
        }
      },
      fontFamily: {
        sans: ['Manrope', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}

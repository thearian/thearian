/** @type {import('tailwindcss').Config} */
const {colors} = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'zinc-1000': '#101315'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        floatin: 'float ease-in-out 1s'
      },
      keyframes: {
        float: {
          '0%  ': { transform: 'translate(0px, 200px)', opacity: 0 },
          '100%': { transform: 'translate(0px, 0px)', opacity: 'auto' }
        }
      }
    },
  },
  plugins: [],
}

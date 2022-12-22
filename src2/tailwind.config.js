/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontSize: {
      xs: '0.7rem',
    },
    extend: {
      colors: {
        'blue1': '#0f95ce',
        'blue2': '#002e5d',
        'blue3': '#012951',
        'white1': '#e7f8ff',
        'white2': '#ffffff'
      }
    },
  },
  plugins: [],
}

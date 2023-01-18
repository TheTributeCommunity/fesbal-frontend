/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#058CCC'
      },
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'Arial']
      },
    },
  },
  plugins: [],
}

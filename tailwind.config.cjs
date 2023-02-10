/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0F95CE',
        'secondary-color': '#002E5D',
        'warning-color': '#EB5757',
        'hover-primary-color': '#2D7DB5',
        'hover-warning-color': '#D14A4A',
        'focus-primary-color': '#3085d6',
        'focus-warning-color': '#EB5757',
        'dark-blue': '#058CCC',
      },
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'Arial']
      },
      backgroundImage: { 'page': 'linear-gradient(169.42deg, #ffffff 10.03%, #e8f8ff 35.86%, #e8f8ff 68.88%, #ffffff 89.63%)' },
      backgroundColor: {
        'mask-opaque': 'rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        'table': '0px 4px 8px rgba(0, 46, 93, 0.08)',
      },
    },
  },
  plugins: [],
}

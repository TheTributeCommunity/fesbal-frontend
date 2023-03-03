/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
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
                'ghost-white': '#F9FDFF',
            },
            fontFamily: {
                'roboto-flex': ['Roboto Flex', 'Arial']
            },
            fontWeight: {
                'light': 300,
                'normal': 400,
                'medium': 500,
                'semibold': 600,
                'bold': 700,
            },
            fontSize: {
                'mega-title': ['2rem', { lineHeight: '2.375rem', fontWeight: 'bold' }],
                'big-title': ['1.5rem', { lineHeight: '1.75rem', fontWeight: 'bold' }],
                'medium-title': ['1.5rem', { lineHeight: '1.75rem', fontWeight: 'medium' }],
                'mini-title': ['1rem', { lineHeight: '1.25rem', fontWeight: 'bold' }],
                'text': ['1rem', { lineHeight: '1.5rem', fontWeight: 'light' }],
                'label': ['0.75rem', { lineHeight: '0.875rem', fontWeight: 'medium' }],
                'input': ['1rem', { lineHeight: '1.25rem', fontWeight: 'normal' }],
                'button': ['1rem', { lineHeight: '1.25rem', fontWeight: 'semibold' }],
                'big-link': ['1rem', { lineHeight: '1.25rem', fontWeight: 'semibold' }],
                'small-link': ['0.75rem', { lineHeight: '1.25rem', fontWeight: 'semibold' }],
                'mega-input': ['2rem', { lineHeight: '2.375rem', fontWeight: 'normal' }],
                'big-input': ['1.5rem', { lineHeight: '1.75rem', fontWeight: 'normal' }],
            },
            backgroundImage: {'page': 'linear-gradient(169.42deg, #ffffff 10.03%, #e8f8ff 35.86%, #e8f8ff 68.88%, #ffffff 89.63%)'},
            backgroundColor: {
                'mask-opaque': 'rgba(0, 0, 0, 0.2)',
            }
        },
    },
    plugins: [],
}

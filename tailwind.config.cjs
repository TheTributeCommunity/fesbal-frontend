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
                'sans': ['Roboto Flex', 'Arial'],
                'roboto-flex': ['Roboto Flex', 'Arial']
            },
            fontSize: {
                'mega-title': ['2rem', { lineHeight: '2.375rem', fontWeight: '700' }],
                'big-title': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '700' }],
                'medium-title': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '500' }],
                'mini-title': ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],
                'text': ['1rem', { lineHeight: '1.5rem', fontWeight: '300' }],
                'label': ['0.75rem', { lineHeight: '0.875rem', fontWeight: '500' }],
                'input': ['1rem', { lineHeight: '1.25rem', fontWeight: '400' }],
                'button': ['1rem', { lineHeight: '1.25rem', fontWeight: '600' }],
                'big-link': ['1rem', { lineHeight: '1.25rem', fontWeight: '600' }],
                'small-link': ['0.75rem', { lineHeight: '1.25rem', fontWeight: '600' }],
                'mega-input': ['2rem', { lineHeight: '2.375rem', fontWeight: '400' }],
                'big-input': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '400' }],
                'small-label': ['0.625rem', { lineHeight: '0.875rem', fontWeight: '400' }],
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

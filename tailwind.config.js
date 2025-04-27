/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#fff0f7',
          100: '#ffdfed',
          200: '#ffc0da',
          300: '#ff9bbf',
          400: '#ff77a9',
          500: '#ff5293',
          600: '#ff2d7a',
          700: '#ff0066',
          800: '#d70057',
          900: '#b30047',
        },
        yellow: {
          400: '#ffd700',
          500: '#ffcc00',
          600: '#e6b800',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
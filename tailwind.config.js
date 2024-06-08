/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        purple: '#AD1FEA',
        blue: '#4661E6',
        orange: '#f49f85',
        'light-blue': '#62bcfa',
        navy: '#3a4374',
        gray: '#647196',
        'off-white': '#f2f4ff',
        'bg-color': '#f7f8fd',
        red: '#d73737',
        'red-hover': '#e98888',
        'blue-hover': '#7C91F9',
        'purple-hover': '#C75AF6',
        'navy-hover': '#656EA3',
      },
      backgroundImage: {
        'hero-desktop':
          "url('./src/assets/suggestions/desktop/background-header.png')",
        'hero-tablet':
          "url('./src/assets/suggestions/tablet/background-header.png')",
        'hero-mobile':
          "url('./src/assets/suggestions/mobile/background-header.png')",
      },
    },
  },
  plugins: [],
};

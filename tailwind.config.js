import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        bgPrimary: '#f7f8fd',
        tagPrimary: '#f2f4ff',
        tagText: '#4661e6',
        secondary: '#3a4374',
        navy: '#373f68',
        orange: '#f49f85',
        lightBlue: '#62bcfa',
        body: '#647196',
        purple: '#ad1fea',
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
  plugins: [daisyui],
};

/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'hero-mobile':
          'url(./src/assets/suggestions/mobile/background-header.png)',
        'hero-tablet':
          'url(./src/assets/suggestions/tablet/background-header.png)',
        'hero-desktop':
          'url(./src/assets/suggestions/desktop/background-header.png)',
      },
      colors: {
        purple: '#AD1FEA',
        blue: '#4661E6',
        navy: '#3A4374',
        backgroundColor: '#F7F8FD',
        gray: '#647196',
        red: '#D73737',
        orange: '#F49F85',
        lightBlue: '#62BCFA',
        offWhite: '#F7F8FD',
        purpleHover: '#C75AF6',
        blueHover: '#7C91F9',
        navyHover: '#656EA3',
        redHover: '#E98888',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f4f7ff',
          200: '#f2f5ff',
          300: '#287eff',
          400: '#0167ff',
        },
        secondary: {
          400: '#c7cadc',
          500: '#8a9dbd',
          700: '#5c7598',
          800: '#23243b',
        },
      },
    },
  },
  plugins: [],
};

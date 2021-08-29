const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'accent-1': '#333',
          green: colors.emerald
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  };
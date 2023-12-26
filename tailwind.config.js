/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      fontFamily: {
        sans: ['Josefin sans', 'sans-serif'],
        alata: ['Alata'],
      },
      backgroundImage: {
        'headerImgDesk': 'url(/assets/desktop/image-hero.jpg)',
        'headerImgMob': 'url(/assets/mobile/image-hero.jpg)',
      },



    },
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
    },
  })
})
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '830px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'smh' : {'min' : '240px', 'max': '312px'},
      'vsmm': { 'max': '312px' },
      'vsmmm': {'max': '400px'},
      'smm': { 'max': '639px' },
      'mdmh' : {'min' : '313px', 'max': '830px'},
      'mdm': { 'max': '830px' },
      'lgm': { 'max': '1024px' },
      'lgt': { 'min': '240px', 'max' : '1230px' },
      'smtmd': { 'min': '640px', 'max': '767px' },
      'mdtlg': { 'min': '830px', 'max': '1024px' },
      // Small to medium 
      // 'lgt': { 'min': '1025px', 'max': '1270px' },
    },

    extend: {},
  },
  plugins: [Myclass],
}

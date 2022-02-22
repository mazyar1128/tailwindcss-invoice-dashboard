const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:{
      'xs': '350px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
       
      },
      fontFamily: {
        'montserrat': ['Montserrat','sans-serif'],
        'poppins': ['Poppins','sans-serif'],
       
      }
      
    }
  },
  plugins: [],
}

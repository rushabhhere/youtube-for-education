module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
      'roboto':['Roboto']
      },
    fontWeight:{
      mono:['Roboto Mono']
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


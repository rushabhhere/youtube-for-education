module.exports = {
  // mode: 'jit',
  purge: [
    // './public/**/*.html',
    // './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto'],
      mono: ['Roboto Mono'],
    },
    screens: {
      sm: '500px',
      md: '650px',
      lg: '950px',
      xl: '1280px',
      '2xl': '1536px',
      hoverable: { raw: '(hover: hover)' },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

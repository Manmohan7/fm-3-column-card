module.exports = {
  purge: {
    content: ["./src/**/*.js", "./public/index.html"],
    options: {
      safelist: ['bg-orange', 'bg-cyan-light', 'bg-cyan-dark', 'text-orange', 'text-cyan-light', 'text-cyan-dark']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "hsl(31, 77%, 52%)",
      cyan: {
        light: "hsl(184, 100%, 22%)",
        dark: "hsl(179, 100%, 13%)"
      },
      white: "hsla(0, 0%, 100%, 0.75)",
      gray: "hsl(0, 0%, 95%)"
    },
    fontFamily: {
      big: ['Big Shoulders Display', "cursive"],
      lexend: ['Lexend Deca', 'sans-serif']
    },
    fontSize: {
      '4xl': '2.5rem'
    },
    extend: {
      spacing: {
        '22': '5.5rem',
        '30': '7.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

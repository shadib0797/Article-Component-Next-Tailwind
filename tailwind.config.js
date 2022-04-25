module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope'],
      },
      colors: {
        'grayish-blue-vd': 'hsl(217, 19%, 35%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'grayish-blue-l': 'hsl(210, 46%, 95%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
      },
    },
  },
  plugins: [],
}

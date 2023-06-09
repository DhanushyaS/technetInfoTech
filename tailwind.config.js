/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('D:/consult//technet/src/assets/background.jpg')"
      },
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
      },
      
      fontFamily: {
        Barlow: "Barlow Condensed, sans-serif",
        Bellefair: "Bellefair"
      },
      container: {
        padding: '3.5rem',
        center: true
      }
  },
},
  plugins: [],
}

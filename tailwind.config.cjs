/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      ss: '640px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
      
    },
  
    extend: {
      colors: {
        'black':"black",
        'primary': '#e2e8f0',
        'secondary': '#1fb6ff',
        'yellow': '#ffc82c',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
   
        backgroundImage: {
          'bg4': "url('src/assets/bg4.jpg')",
          'bg1': "url('src/assets/bg1.jpg')",
        }
    },
  },
  plugins: [],
}

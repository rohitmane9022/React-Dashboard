/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#EF4444",
        "primary-second":"#fbd69e"
      },  
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Nunito:['Nunito Sans', 'sans-serif'],
        Outfit:['Outfit', 'sans-serif'],
        DM:['DM Sans','sans-serif'],
        Montserrat:['Montserrat','sans-serif']

      },
    },
  },
  plugins: [],
}


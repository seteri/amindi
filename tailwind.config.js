/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily:{
        Roboto:["Roboto, sans-serif"]

      },
      colors:{
        "weather-primary": "#FFF1DC",
        "weather-secondary": "#3A98B9",
      },
      container:{
        padding: "2rem",
        center: true,
      },
      screens:{
        sm: "640px",
        md: "768px",
      }
    },
  },
  plugins: [],
}

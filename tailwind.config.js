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
        "weather-primary": "#B9F3E4",
        "weather-secondary": "#EA8FEA",
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

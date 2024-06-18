/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#4dd2ff",
        secondary: "#00664d",
      },
      container:{
        center: true,
        padding:{
          default: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}
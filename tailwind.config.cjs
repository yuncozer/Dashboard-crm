/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6276e5",
        secondary: {
          900: "#1b1f2b",
          100: "#171a29"
        }  
      }
    },
  },
  plugins: [],
}
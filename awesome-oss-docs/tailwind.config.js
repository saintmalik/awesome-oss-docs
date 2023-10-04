/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        btn: 'rgba(104, 205, 115, 1)'
      },
      backgroundColor:{
        bgColor: 'rgba(0, 75, 255, 1)'
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: '#008080',
        navColor: '#000080',
        cardBg: '#C0C0C0'
      }
    },
  },
  plugins: [],
}


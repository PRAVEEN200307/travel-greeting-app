/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./greeting.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
         Arov:['"Arvo",serif'],
         cookie:['"Cokkie",cursive'],
      }
    },
  },
  plugins: [],
}


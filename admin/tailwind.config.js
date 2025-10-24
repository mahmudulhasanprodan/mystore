/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center : true,
    },
    
    extend: {
    fontFamily: {
       Montserrat : "var(--Montserrat)",
    },
    },
  },
  plugins: [],
}
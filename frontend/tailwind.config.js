/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Montserrat: "var(--Montserrat)",
      Roboto: "var(--Roboto)",
      Anton: "var(--Anton)",
    },
    extend: {
      colors: {
        iconColor: "var(--iconColor)",
        TopHColor: "var(--TopHColor)",
        CommonColor: "var(--CommonColor)",
      },
    },
  },
  plugins: [],
};
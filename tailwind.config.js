/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00203F",
        seconday: "#ADEFD1",
        button: "#B69950",
      },
    },
  },
  plugins: [],
};

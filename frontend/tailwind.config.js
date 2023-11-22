/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        smooch: ["Smooch Sans", "sans-serif"],
      },
      colors: {
        red: "#aa0404",
        darkRed: "#6a0c0c",
        yellow: "#fbca03",
        darkYellow: "#ba7e10"
      },
    },
  },
  plugins: [],
};

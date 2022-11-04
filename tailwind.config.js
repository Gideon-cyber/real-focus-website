/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "840px",
      lg: "1200px",
    },
    extend: {
      backgroundColor: {
        text: "linear-gradient(135deg, #81FFEF 0%, #F067B4 100%)",
      },
      colors: {
        likeBlack: "#1e1e1e",
      },
    },
  },
  plugins: [],
};

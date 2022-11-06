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
        card: "rgba(134, 137, 137, 0.6)",
      },
      colors: {
        likeBlack: "#1e1e1e",
        lightBlack: "#3A3B3B",
      },
      fontWeight: {
        "b-300": "300",
        "b-400": "400",
        "b-500": "500",
        "b-600": "600",
        "b-700": "700",
        "b-800": "800",
        "b-900": "900",
        "bold-max": "1000",
      },
    },
  },
  plugins: [],
};

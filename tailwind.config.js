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
      animation: {
        ChangeBg:
          "ChangeBg 30s ease-in-out infinite alternate-reverse forwards running",
      },
      keyframes: {
        ChangeBg: {
          // "0%": { backgroundColor: "#FFEFBD", backgroundOpacity: "0.5" },
          // "25%": { backgroundColor: "#E1EDFF", backgroundOpacity: "0.5" },
          // "50%": { backgroundColor: "#FFFFFF", backgroundOpacity: "1" },
          // "100%": { backgroundColor: "#FFEFBD", backgroundOpacity: "0.5" },
          "0%": {
            backgroundImage:
              "linear-gradient(rgba(4, 4, 4, 0.85), rgba(4, 4, 4, 0.6)), url(/phone4.jpg)",
          },
          "35%": {
            backgroundImage:
              "linear-gradient(rgba(4, 4, 4, 0.85), rgba(4, 4, 4, 0.6)), url(/phone2.jpg)",
          },
          "70%": {
            backgroundImage:
              "linear-gradient(rgba(4, 4, 4, 0.85), rgba(4, 4, 4, 0.6)), url(/phone9.jpg)",
          },
          "100%": {
            backgroundImage:
              "linear-gradient(rgba(4, 4, 4, 0.85), rgba(4, 4, 4, 0.6)), url(/repair1.jpg)",
          },
        },
      },
    },
  },
  plugins: [],
};

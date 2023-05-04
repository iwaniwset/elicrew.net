/** @type {import('tailwindcss').Config} */
// const textShadow = require("tailwindcss-textshadow");
// const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#0065C0",
        secondary: "#8D8741",
        textBase: "text-amber-500",
        textPrimary: "#BC986A",
        textSecondary: "#FBEEC1",
        thirdColor: "#DAAD86",
      },
      // fontFamily: {
      //   sofia: ["var(--font-sofia", ...fontFamily.sofia],
      // },
      // textShadow: {
      //   default: textShadow["text-shadow-md"],
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [require("flowbite/plugin", "tailwindcss-textshadow")],
};

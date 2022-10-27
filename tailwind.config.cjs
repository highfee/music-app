/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksands: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        cover: "url('src/assets/icons/spiral.svg')",
        song: "url('src/assets/images/img1.svg')",
      },
      colors: {
        black: "#191624",
        iconHome: "#FACD66",
        sideIcon: "#EFEEE0",
      },
      animation: {
        slideup: "slideup 1s ease-in-out",
        slidedown: "slidedown 1s ease-in-out",
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        wave: "wave 700ms linear",
        slowfade: "slowfade 2.2s ease-in-out",
        rotate: "rotate 6s infinite linear",
        loader: "loader 2s infinite linear",
      },

      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(.8)" },
          "50%": { transform: "scale(1)" },
          // "100%": { transform: "scale(0)" },
        },
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
        loader: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

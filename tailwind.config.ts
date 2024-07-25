import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        bitOfSugar: "rgb(244,242,236)",
        blackBean: "#282222",
        bloodorange: "#fe4b03",
        coconut: "#fefefe",
        grapefruit: "#fd5956",
        jasmineRice: "#f1eeec",
        licorice: "#1A1110",
        oyster: "rgb(187, 179, 178)",
        peachPuff: "rgb(255, 218, 185)",
        smashedPumpkin: "#ff6d3a",
        stainless: "#d4d4d8",
        tangerine: "#f28500",
        tilapiaScale: "rgb(164,180,182)",
        wildWatermelon: "#FD5B78",
      },
      fontFamily: {
        body: [
          "Gotham",
          "Sofia",
          "filson-pro",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Geneva",
          "sans-serif",
        ],
        logo: ["Cherry Cream Soda"],
        display: [
          "Horta",
          "hortaregular",
          "Circular",
          "Gotham",
          "Ogonek-Light",
          "Georgia",
          "Times",
          "Surveyor",
          "Bodoni",
          "abril-display",
          "serif",
        ],
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
};
export default config;

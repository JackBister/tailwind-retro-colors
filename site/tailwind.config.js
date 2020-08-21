const { nes } = require("../tailwind-retro-colors");

module.exports = {
  purge: ["./index.html", "./src/index.ts"],
  theme: {
    colors: nes,
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

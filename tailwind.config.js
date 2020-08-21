const { nes } = require("../tailwind-retro-colors");

module.exports = {
  purge: ["./index.html"],
  theme: {
    colors: nes,
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

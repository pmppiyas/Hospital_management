const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      keyframes: {
        border: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        border: "border 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animate-border": {
          "background-size": "200% 200%",
          "background-clip": "padding-box",
        },
      });
    }),
  ],
};

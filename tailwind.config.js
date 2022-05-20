module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        whiteShadow: "3px 3px 0px #f9f9f9",
      },
      colors: {
        ur_black: "#000000",
        ur_dark_gray: "#474747",
        ur_gray: "#8f8f8f",
        ur_light_gray: "#b3b3b3",
        ur_soft_gray: "#d6d6d6",
        ur_white: "#f9f9f9",
        ur_dark_blue: "#004bac",
        ur_blue: "#2e89ff",
        ur_soft_blue: "#88bbff",
        ur_dark_red: "#ac0006",
        ur_red: "#ff2e35",
        ur_soft_red: "#ff888b",
        ur_dark_purple: "#8400ac",
        ur_purple: "#ce2eff",
        ur_soft_purple: "#e388ff",
        ur_dark_green: "#28ac00",
        ur_green: "#5fff2e",
        ur_soft_green: "#a3ff88",
      },
    },
  },
  plugins: [],
};

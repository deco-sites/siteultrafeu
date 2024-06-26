import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        greenPrimary: "#228042",
        grayPrimary: "#686868",
        graySecondary: "#E9E9E9",
        whitePrimary: "#F6F6F6",
        purplePrimary: "#32026A",
        blackPrimary: "#1C1C1C",
        grayTertiary: "#D9D9D9",
      },
      borderRadius: {
        "card": "5px",
      },
    },
  },
};

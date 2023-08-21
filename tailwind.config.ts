import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      Barriecito: ["Barriecito", "cursive"],
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      VarelaRound: ["Varela Round", "sans-serif"],
      YsabeauInfant: ["Ysabeau Infant", "sans-serif"],
      Viga: ["Viga", "sans-serif"],
      fantasy: ["fantasy"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

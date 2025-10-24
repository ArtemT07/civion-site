import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#1A1A1A",
        concrete: "#F3F3F3",
        civionBlue: "#1C89FF",
        metal: "#7C808A",
      }
    },
  },
  plugins: [],
};
export default config;

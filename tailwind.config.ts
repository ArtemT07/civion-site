// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F7F9FC",       // светлый фон
          card: "#FFFFFF",     // карточки
          text: "#101418",     // основной текст
          mute: "#7C8794",     // вторичный текст
          primary: "#177BFF",  // электрический синий
          accent: "#2A3A4A",   // графит/заголовки/иконки
        },
      },
      boxShadow: {
        soft: "0 8px 24px rgba(16,20,24,0.06)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        freelab: {
          dark: "#0a0a0a",
          light: "#f5f5f5",
          accent: "#ff3366", 
          muted: "#888888",
        },
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #ff336640 0deg, #00000000 180deg, #ff336640 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;
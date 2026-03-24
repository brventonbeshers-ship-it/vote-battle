import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: '480px' },
      fontSize: { '2xs': ['0.65rem', '1rem'] },
      zIndex: { 60: '60', 70: '70', 80: '80' },
      transitionDuration: { 400: '400ms', 600: '600ms' },
      screens: { xs: '480px' },
      zIndex: { 60: '60', 70: '70', 80: '80' },
      fontSize: { '2xs': ['0.65rem', '1rem'] },
      screens: { xs: '480px' },
      transitionDuration: { 400: '400ms', 600: '600ms' },
      fontSize: { '2xs': ['0.65rem', '1rem'] },
      zIndex: { 60: '60', 70: '70', 80: '80' },
      zIndex: { 60: '60', 70: '70', 80: '80' },
      screens: { xs: '480px' },
      transitionDuration: { 400: '400ms', 600: '600ms' },
      fontSize: { '2xs': ['0.65rem', '1rem'] },
      fontSize: { '2xs': ['0.65rem', '1rem'] },
      zIndex: { 60: '60', 70: '70', 80: '80' },
      screens: { xs: '480px' },
      transitionDuration: { 400: '400ms', 600: '600ms' },
      fontSize: { '2xs': ['0.65rem', '1rem'] },
      zIndex: { 60: '60', 70: '70', 80: '80' },
      screens: { xs: '480px' },
      transitionDuration: { 400: '400ms', 600: '600ms' },
      colors: {
        primary: "#6C5CE7",
        secondary: "#A29BFE",
        accent: "#FD79A8",
        pink: "#E84393",
        dark: "#0a0a0a",
        "dark-card": "rgba(20, 10, 30, 0.7)",
        "dark-border": "rgba(108, 92, 231, 0.2)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(108, 92, 231, 0.3), 0 0 40px rgba(253, 121, 168, 0.15)",
        "glow-sm": "0 0 10px rgba(108, 92, 231, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

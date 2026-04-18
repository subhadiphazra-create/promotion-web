import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: "#E8D5C4",
        blush: "#F2B5B5",
        gold: "#C9A84C",
        "gold-light": "#E8D48A",
        "gold-dark": "#8B6914",
        cream: "#FAF7F2",
        "warm-white": "#FDFAF6",
        charcoal: "#1A1A1A",
        "dark-brown": "#2D1B0E",
        mocha: "#5C3D2E",
        rose: "#C4677A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8D48A 50%, #C9A84C 100%)",
        "luxury-gradient": "linear-gradient(180deg, #1A1A1A 0%, #2D1B0E 100%)",
        "blush-gradient": "linear-gradient(135deg, #F2B5B5 0%, #E8D5C4 100%)",
        "hero-gradient": "linear-gradient(135deg, #1A1A1A 0%, #3D2214 60%, #5C3D2E 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.4)" },
          "70%": { boxShadow: "0 0 0 10px rgba(201, 168, 76, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

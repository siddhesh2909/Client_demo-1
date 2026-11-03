import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#641E32",
        "maroon-deep": "#3D101D",
        gold: "#C6A15B",
        "gold-light": "#E6C887",
        "gold-deep": "#9E7B3B",
        cream: "#FFF7EB",
        kesari: "#D98235",
        charcoal: "#242020",
        "charcoal-deep": "#1A1617",
      },
      fontFamily: {
        serif: ["'Rozha One'", "Cinzel", "serif"],
        display: ["Cinzel", "serif"],
        marathi: ["Gotu", "'Rozha One'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "spin-slow": "spin 24s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

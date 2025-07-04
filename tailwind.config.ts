import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      fontFamily: {
        notoSansKR: ["var(--font-notoSansKR)"],
        GWT: ["GWT"],
      },
      colors: {
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        yellow: "hsl(var(--yellow))",
        blue: {
          "100": "hsl(var(--blue-100))",
          "200": "hsl(var(--blue-200))",
        },
        gray: {
          "100": "hsl(var(--gray-100))",
          "200": "hsl(var(--gray-200))",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        highlight: "hsl(var(--highlight))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        text: {
          secondary: "hsl(var(--text-secondary))",
          background: "hsl(var(--text-background))",
        },
      },
      keyframes: {
        bounceAndShake: {
          "0%": { transform: "scale(0.8)" },
          "10%": { transform: "scale(1)" },
          "30%": { transform: "rotate(-5deg) scale(1)" },
          "40%": { transform: "rotate(5deg) scale(1)" },
          "50%": { transform: "rotate(-5deg) scale(1)" },
          "60%": { transform: "rotate(0deg) scale(1)" },
          "80%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        bounceAndShake: "bounceAndShake 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

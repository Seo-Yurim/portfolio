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
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        notoSansKR: ["var(--font-notoSansKR)"],
        GWT: ["GWT"],
        GWS: ["GWS"],
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
      dropShadow: {
        title: "22px 18px 0px rgba(229, 229, 229, 1)",
        darkTitle: "22px 18px 0px rgba(43, 39, 68, 1)",
      },
      boxShadow: {
        "right-down": "4px 4px 4px rgba(0, 0, 0, 0.25)",
        "left-up": "-4px -4px 4px rgba(0, 0, 0, 0.25)",
        "inner-right": "inset -4px -4px 4px rgba(0, 0, 0, 0.25)",
        "inner-left": "inset 4px 4px 4px rgba(0, 0, 0, 0.25)",
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

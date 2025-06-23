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
        white: "var(--white)",
        black: "var(--black)",
        yellow: "var(--yellow)",
        blue: {
          "100": "var(--blue-100)",
          "200": "var(--blue-200)",
        },
        gray: {
          "100": "var(--gray-100)",
          "200": "var(--gray-200)",
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        text: {
          secondary: "var(--text-secondary)",
          background: "var(--text-background)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

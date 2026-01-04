import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          DEFAULT: "#FFF56E",
          50: "#FFFEF5",
          100: "#FFFDE6",
          200: "#FFFACC",
          300: "#FFF899",
          400: "#FFF56E",
          500: "#E6DC63",
          600: "#CCC358",
        },
        // Dark palette
        dark: {
          DEFAULT: "#0F0F0F",
          50: "#1A1A1A",
          100: "#141414",
          200: "#0F0F0F",
          300: "#0A0A0A",
        },
        // Gray palette
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      borderRadius: {
        lg: "16px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 245, 110, 0.15)",
        "glow-lg": "0 0 40px rgba(255, 245, 110, 0.2)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 8px 40px rgba(0, 0, 0, 0.12)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;

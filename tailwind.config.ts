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
        // Brand gradient colors
        brand: {
          cyan: "#d0f7fb",
          blue: "#83a6ff",
          orange: "#ff966b",
          coral: "#ffb4a2",
        },
        // Gray palette - refined
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F4",
          200: "#E8EAED",
          300: "#DADCE0",
          400: "#9AA0A6",
          500: "#5F6368",
          600: "#3C4043",
          700: "#202124",
          800: "#1A1A1A",
          900: "#0F0F0F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
        sm: "0 2px 8px rgba(0, 0, 0, 0.06)",
        md: "0 4px 16px rgba(0, 0, 0, 0.08)",
        lg: "0 8px 32px rgba(0, 0, 0, 0.10)",
        xl: "0 16px 48px rgba(0, 0, 0, 0.12)",
        "gradient-glow": "0 8px 24px rgba(131, 166, 255, 0.25)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

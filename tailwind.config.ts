import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          base:    "#07080F",
          card:    "#0D0F1C",
          elevated:"#111428",
          glass:   "rgba(13,15,28,0.7)",
        },
        border: {
          subtle:  "#1A1D35",
          muted:   "#252850",
          accent:  "rgba(99,102,241,0.25)",
        },
        indigo: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)",
        "gradient-accent-subtle":
          "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 100%)",
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        "card":    "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.25), 0 0 40px rgba(99,102,241,0.08)",
        "glow-sm": "0 0 20px rgba(99,102,241,0.2)",
        "glow-md": "0 0 40px rgba(99,102,241,0.15), 0 0 80px rgba(139,92,246,0.08)",
        "btn":     "0 4px 16px rgba(99,102,241,0.4)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer":    "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

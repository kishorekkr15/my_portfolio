export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
        card: "#141414",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        grotesk: ["Host Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        "text-reveal": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

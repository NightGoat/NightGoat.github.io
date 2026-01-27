/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0d10",
        foreground: "#e5e7eb",
        accent: "#6366f1",
      },
    },
  },
  plugins: [],
};

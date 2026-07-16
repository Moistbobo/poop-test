/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poop: {
          50: "#fdf8f3",
          100: "#f6eadd",
          200: "#ead3b8",
          300: "#dbb28a",
          400: "#cc8e5e",
          500: "#bc6f3e",
          600: "#9a552f",
          700: "#7c4228",
          800: "#633525",
          900: "#512c22",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}


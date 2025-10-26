/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9EDF6",
        secondary: "#111C43",
        accent: "#F59E0B",  // amber-500 tone
        textDark: "#1E293B",
        textLight: "#A3AED1",
        background: "#F0F1F7",
      },
    },
  },
  plugins: [],
}

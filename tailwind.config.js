/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#c9a66b',
        'secondary-color': '#1a1a1a',
        'accent-color': '#8b0000',
        'text-color': '#e0e0e0',
        'background-color': '#0a0a0a',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

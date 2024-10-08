/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plex-mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
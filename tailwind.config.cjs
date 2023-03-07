/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dunbar-tall': ['Dunbar Tall'],
        'neue-kabel': ['Neue Kabel']
      },
      colors: {
        'axon-theme': '#F9ED56',
      },
    },
  },
  plugins: [],
};

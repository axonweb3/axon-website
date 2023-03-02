/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dunbar: ['Dunbar Tall'],
      },
      colors: {
        'axon-theme': '#F9ED56',
      },
      backgroundImage: {
        hero: "url('/img/hero-background.png')",
      }
    },
  },
  plugins: [],
};

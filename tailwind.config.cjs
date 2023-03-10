/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'logo-width': '173px',
        'logo-height': '86px',
        'button-width': '186px',
        'button-height': '48px',
      },
      fontFamily: {
        'dunbar-tall': ['dunbar-tall'],
        'neue-kabel': ['neue-kabel'],
        'alfarn-2': ['alfarn-2'],
      },
      colors: {
        'axon-theme': '#F9ED56',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ghost: '#E5F0F4',
        overlay: 'rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
};

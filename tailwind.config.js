const konstaConfig = require('konsta/config');

/** @type {import('tailwindcss').Config} */
module.exports = konstaConfig({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
       backgroundImage: {
        'main-background': "url('https://i.im.ge/2022/07/24/FDQ0gW.png')"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']

    },
  },
  plugins: [],
});

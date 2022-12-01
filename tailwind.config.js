/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}",
              
  ],
  theme: {
    extend: {
      colors: {
        'white-900': '#ffffff',  
        'white-600': '#F0F0F0',
        'white-400': '#EDEDED',
        'gray-300': '#C6C6D3',
        'gray-400': '#A1A1AA',
        'black-300': '#3F3F46',
        'black-400': '#27272A',
        'black-500': '#3E3E41',
        'black-600': '#1C1C1C',
        'black-700': '#09090A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    },
    
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#240CF3', 
        secondary: '#C6F906', 
        accent: '#848689', 
        hoverColor: '#B9E024', 
        textColor: '#0A0D14', 
        secondaryTextColor: '#525866', 
        backgroundColor: '#F4F7FB',

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        serif: ['Merriweather', 'serif'], 
      },
    },
  },
  plugins: [],
}
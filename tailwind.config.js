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
        accent: '#868c98',
        hoverColor: '#B9E024',
        textColor: '#0A0D14',
        secondaryTextColor: '#525866',
        backgroundColor: '#F4F7FB',
        buttonhover:'#B9E024',
        bluehover:'#2563EB',
        whitehover:'#ffffffbf',
        darkhover:'#0A0D14'
      },
      fontFamily: {
        // Primary font stack - Inter first, then system sans-serif fallback
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        
        // Secondary font stack - Another sans-serif option
        'sans-secondary': ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        
        'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
     
      top: {
        '9': '18rem',   
        '72': '18rem',    
      },
      screens: {
        'custom-md': '982px',
      },
      fontWeight:
      {
        'light': 330,}
    },
  },
  plugins: [],
}
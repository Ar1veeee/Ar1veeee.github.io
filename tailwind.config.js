/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '500px',
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik']
      },
      colors:{
        primary: '#0c4a6e',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737, #FCAF45)',
        'linkedin-gradient': 'linear-gradient(45deg, #0077B5, #0A66C2)',
        'github-gradient': 'linear-gradient(45deg, #000000, #24292F)',
        'gmail-gradient': 'linear-gradient(45deg, #D93025, #EA4335)',
        'whatsapp-gradient': 'linear-gradient(45deg, #25D366, #128C7E)',
        'telegram-gradient': 'linear-gradient(45deg, #0088CC, #229ED9)',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}


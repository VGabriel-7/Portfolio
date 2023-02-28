/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        default_Black: '#121214',
        default_White: '#E1E1E6',
        default_Green: '#48D361',
        default_Purple: '#8257E5'
      },
      backgroundImage: {
        default_Gradient: 'linear-gradient(180deg, #FA0000, #FFE600, #33FF00, #00FFD1, #0029FF, #FA00FF, #FF008A)'
      },
      keyframes: {
        iniciation: {
          from: {
            opacity: 0
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      },
      animation: {
        iniciation: 'iniciation 0.7s forwards'
      },
      boxShadow: {
        default_Shadow: '5px 5px 15px rgb(130, 87, 229, 0.30)'
      }
    }
  },
  plugins: []
}

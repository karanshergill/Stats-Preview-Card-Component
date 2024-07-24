/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'Primary-Very-Dark-Blue': 'hsl(233, 47%, 7%)',
        'Primary-Dark-Desaturated-Blue': 'hsl(244, 38%, 16%)',
        'Primary-Soft-Voilet': 'hsl(277, 64%, 61%)',
        'Neutral-White': 'hsl(0, 0%, 100%)',
        'Neutral-Slightly-Transparent-White-Head': 'hsla(0, 0%, 100%, 0.75)',
        'Neutral-Slightly-Transparent-White-Para' : 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        'Inter': ["Lexend Deca", 'sans-serif'],
        'Lexend': ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}


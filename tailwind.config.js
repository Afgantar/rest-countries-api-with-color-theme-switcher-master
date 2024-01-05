/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'mobile' : '420px',
        'tablet' : '640px',
        'big-tablet' : '820px',
        'desktop' : '1440px',
      },
      colors : {
        'dark-blue' : 'hsl(209, 23%, 22%)',
        'very-dark-blue' : 'hsl(207, 26%, 17%)',
        'very-dark-blue-txt' : 'hsl(200, 15%, 8%)',
        'dark-gray' : 'hsl(0, 0%, 52%)',
        'very-light-gray' : 'hsl(0, 0%, 98%)',
        'white' : 'hsl(0, 0%, 100%)',
      },
      transitionDuration : {
        '400' : '400ms',
      },
      keyframes : {
        rotateIn : {
          'from' : { transform: 'rotate(-180deg) scale(0.5)', opacity: 0 },
          'to' : { transform: 'rotate(0) scale(1)', opacity: 1 },
        },
        slideRight : {
          'from' : { transform: 'translateX(-240px)', opacity: 0 },
          'to' : { transform: 'translateX(0)', opacity: 1 },
        },
        summon : {
          'from' : { transform: 'scale(0.5)', opacity: 0 },
          'to' : { transform: 'scale(1)', opacity: 1 }
        },
        drop : {
          'from' : { transform: 'translateY(-120px)', opacity: 0 },
          'to' : { transform: 'translateY(0)', opacity: 1 },
        },
        optionDrop : {
          'from' : { transform: 'translateY(-80px)', opacity: 0 },
          'to' : { transform: 'translateY(6px)', opacity: 1 },
        },
        reverseOptionDrop : {
          'from' : { transform: 'translateY(6px)', opacity: 1 },
          'to' : { transform: 'translateY(-80px)', opacity: 0 },
        },
      },
      animation : {
        'rotateIn' : 'rotateIn ease-in-out 0.4s forwards',
        'slideRight' : 'slideRight ease-in-out 1s forwards',
        'summon' : 'summon ease-in-out 1s forwards',
        'drop' : 'drop ease-in-out 1s forwards',
        'optionDrop' : 'optionDrop ease-in-out 0.5s forwards',
        'reverseOptionDrop' : 'reverseOptionDrop ease-in-out 0.5s forwards'
      },
      boxShadow : {
        'heavy' : '0 0 4px 4px rgb(0, 0, 0, 0.1)',
        'light' : '0 0 5px 2px rgb(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}


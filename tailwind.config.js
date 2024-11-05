module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'], // Add your preferred cursive font here
      },
      keyframes: {
        rotateUpward: {
          '0%': { transform: 'rotateX(0deg)', opacity: '0' },
          '100%': { transform: 'rotateX(360deg)', opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'rotate-upward': 'rotateUpward 1s ease-out forwards',
    },
    },
  },
  plugins: [],
 
}
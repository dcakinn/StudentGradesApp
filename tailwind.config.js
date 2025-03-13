
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', 
        secondary: '#ffed4a', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      spacing: {
        128: '32rem', 
      },
    },
  },
  plugins: [],
}

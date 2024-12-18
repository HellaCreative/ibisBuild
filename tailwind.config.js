/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#D94D23',
          dark: '#B70D24',
          light: '#FF6B47'
        },
        accent: {
          teal: '#39CCCC'
        }
      }
    }
  },
  plugins: [],
}

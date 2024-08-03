/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d60c1',
        lightBlue: '#dbedf7',
        dark: '#1e1e1e',
        light: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Allura','cursive'],
        cursive2: ['Pacifico','cursive']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3 rem',
          lg: '4 rem',
          xl: '5 rem',
        }
      },
    },
  },
  plugins: [],
}


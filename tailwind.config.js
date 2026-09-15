/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#0e4a36',
          850: '#0b402e',
          900: '#073324',
          950: '#031c13',
        },
        mint: {
          50: '#f4fbf7',
          100: '#e8f7ef',
          200: '#d5efe1',
          300: '#b5e1c9',
          400: '#8fccac',
        },
        peach: {
          50: '#fff7f5',
          100: '#fdeee9',
          200: '#fcdcd4',
        },
        softblue: {
          50: '#f3f8fc',
          100: '#e6f1f9',
          200: '#d0e5f4',
        },
        lavender: {
          50: '#f7f6fd',
          100: '#ecebf9',
          200: '#dedbf5',
        },
        sand: {
          50: '#fffbf5',
          100: '#fef3e5',
          200: '#fce6cd',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',       // White
          dark: '#F7C5C5',          // Tea Rose
        },
        accent:    '#BE2E1D',       // Rich Red
        muted:     '#9B6B6B',       // Warm Rose-Brown – secondary text
        ivory:     '#FEF0F0',       // Blush White
        teal:      '#8B1A1A',       // Cherry Red – hero / footer / menu
        'tea-rose': '#F7C5C5',      // Tea Rose alias
      },
      fontFamily: {
        serif: ['"Gaston Honey"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        paper: '#f5f3ed',
        ink: '#222720',
        muted: '#66695f',
        orange: {
          DEFAULT: '#e95126',
          light: '#ff6b42',
          soft: '#ffcfb5'
        },
        line: '#d8d9cf',
        green: {
          DEFAULT: '#dce4d3',
          light: '#e9ece2',
          dark: '#4d5946'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'xs': '0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px -1px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
}

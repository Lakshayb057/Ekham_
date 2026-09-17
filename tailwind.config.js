/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ekhum: {
          bg: '#FAF8F5',
          card: '#FFFFFF',
          'card-subtle': '#F4F0EB',
          'card-warm': '#F7F3EE',
          border: '#E8E2D8',
          'border-dark': '#24352D',
          orange: '#EB5E28',
          'orange-hover': '#D84E1A',
          'orange-light': '#FDF2EB',
          'orange-subtle': '#FFF7F2',
          dark: '#14201A',
          'dark-deep': '#0E1713',
          'dark-card': '#1C2922',
          'dark-card-hover': '#23342C',
          text: '#1C2421',
          'text-dark': '#0E1412',
          muted: '#6A756F',
          'muted-light': '#939D97',
          green: '#2A724E',
          'green-light': '#E9F4EE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(28, 36, 33, 0.04)',
        'card': '0 10px 30px -5px rgba(20, 32, 26, 0.06), 0 0 1px 1px rgba(20, 32, 26, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(20, 32, 26, 0.12), 0 0 1px 1px rgba(235, 94, 40, 0.1)',
        'floating': '0 20px 50px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

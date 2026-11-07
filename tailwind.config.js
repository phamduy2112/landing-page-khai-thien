/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#ECE3DA',
        },
        champagne: {
          50: '#FBF9F5',
          100: '#F5EFE3',
          200: '#EBDDC5',
          300: '#DFC7A3',
          400: '#D2AF80',
          500: '#C59A62',
          600: '#B08047',
          700: '#8F6233',
        },
        wood: {
          50: '#FDF8F3',
          100: '#FBEEDF',
          200: '#F5DCBE',
          300: '#EBC395',
          400: '#DEA268',
          500: '#D28542',
          600: '#B45309',
          700: '#9A3412',
          800: '#78350F',
          900: '#451A03',
        },
        dark: {
          DEFAULT: '#111518',
          card: '#161B20',
          sub: '#334155',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

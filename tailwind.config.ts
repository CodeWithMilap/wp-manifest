import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      redHat: ['var(--font-red-hat)'],
      inter: ['var(--font-inter)'],
      noto: ['var(--font-noto)'],
    },
    animation: {
      'border': 'border 4s linear infinite',
    },
    keyframes: {
      'border': {
        to: { '--border-angle': '360deg' },
      }
    },
    colors: {
      primary: '#212529',
      secondary: '#343a40',
      black: '#111216',
      white: '#FFFFFF',
      background: '#111216',
      background2: '#18181b',
      'Grey-900': '#323232',
      'Grey-700': '#565656',
      'Grey-500': '#7B7B7B',
      'Grey-300': '#CCCCCC',
      'Grey-100': '#F4F4F4',
      'dark': '#27272A',
      'light': '#e4e4e7',
      Errors: '#E10000',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;

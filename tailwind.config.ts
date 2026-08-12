import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        cosmic: '#070811',
        navy: '#131525',
        heritage: '#986A2D',
        crest: '#CA8F36',
        luminous: '#F3CB70',
        champagne: '#F5DE9D',
        ivory: '#FDF5D1',
      },
      boxShadow: {
        halo: '0 0 0 1px rgba(243, 203, 112, 0.35), 0 16px 36px rgba(7, 8, 17, 0.55)',
      },
      backgroundImage: {
        cosmic:
          'radial-gradient(circle at 15% 20%, rgba(202, 143, 54, 0.16), transparent 38%), radial-gradient(circle at 80% 5%, rgba(243, 203, 112, 0.12), transparent 28%), radial-gradient(circle at 70% 70%, rgba(19, 21, 37, 0.95), rgba(7, 8, 17, 1) 62%), linear-gradient(160deg, #070811 0%, #131525 45%, #070811 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;

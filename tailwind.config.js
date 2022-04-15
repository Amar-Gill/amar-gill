module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-3': 'repeat(3, minmax(0, max-content))',
      },
    },
  },
  plugins: [],
};

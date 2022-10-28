/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     colors: {
      white: '#ffffff',
      gray_50: '#ded7d7',
      gray_100: '#6f7889',
      gray_300: '#3f4b62',
      green_300: '#ade8ad',
      green_900: '#61cb61',
      blue_transparent: 'rgba(46, 119, 242, 0.1)',
      blue_500: '#144552',
      blue_900: '#0f1e3b',
      black_500: '#161617',
      facebook: '#3b5998',
      attention: '#e81111',
      backgroundOverlay: 'rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}
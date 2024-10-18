/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '980px', // Custom breakpoint for extra small devices
        'leptop': '1140px',
        '3xl': '1600px', // Custom breakpoint for extra large devices
      },
    },
  },
  plugins: [],
}


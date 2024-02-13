/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        screens: {
          xxs: '320px',
          xs: '350px',
          sm: '480px',
          md: '640px',
          md1: '768px',
          lg: '1024px',
          xlg: '1420px'
        }
      },
    },
    plugins: [],
    important: true
}
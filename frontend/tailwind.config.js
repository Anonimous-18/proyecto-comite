/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#c3d9ed', // Reemplaza 'mi-color' por el nombre de tu color y '#ff6600' por el valor hexadecimal que desees
        'azul-aqua': '#52c4da', // Reemplaza 'mi-color' por el nombre de tu color y '#ff6600' por el valor hexadecimal que desees
        'azul-marino': '#0087df', // Reemplaza 'mi-color' por el nombre de tu color y '#ff6600' por el valor hexadecimal que desees
        'azul-oscuro': '#005fba', // Reemplaza 'mi-color' por el nombre de tu color y '#ff6600' por el valor hexadecimal que desees
        'negro': '#005fba', // Reemplaza 'mi-color' por el nombre de tu color y '#ff6600' por el valor hexadecimal que desees
      },
    },
  },
  plugins: [],
}


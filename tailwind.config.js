  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {gridTemplateColumns: {
        // Simple 16 column grid
       '7': 'repeat(7, minmax(0, 2fr))',

        // Complex site-specific column configuration
       'footer': '200px minmax(900px, 1fr) 100px',
      }},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
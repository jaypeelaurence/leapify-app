const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcssNesting(),
    tailwindcss('tailwind.config.js'),
  ]
}
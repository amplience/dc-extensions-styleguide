const perfectionist = require('perfectionist');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    require('postcss-prettify'),
    perfectionist(),
    require('postcss-import'),
    postcssCustomProperties({
      preserve: false,
      importFrom: 'styles/core.css'
    })
  ]
}
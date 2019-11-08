const perfectionist = require('perfectionist');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    perfectionist(),
    require('postcss-import'),
    postcssCustomProperties({
      preserve: false,
      importFrom: 'styles/core.css'
    })
  ]
}
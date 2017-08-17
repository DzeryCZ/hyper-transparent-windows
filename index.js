const parse = require('parse-color');

const DEFAULT_COLOR = 'rgba(0, 0, 0, 0.9)';
const DEFAULT_ALPHA = 0.9;

function makeTransparent(color, alpha = DEFAULT_ALPHA) {
  if (!color) return DEFAULT_COLOR;
  const { rgb } = parse(color);
  if (!rgb) return color;
  return `rgba(${rgb.join(', ')}, ${alpha})`;
}

module.exports.decorateBrowserOptions = browserOptions => {
  return Object.assign({}, browserOptions, {
      backgroundColor: false,
      frame: null,
      transparent:null,
      show: null,
      acceptFirstMouse: true,
      transparent: true,
      frame: false
    });
};

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor: 'rgba(0,0,0,0.08)',
    css: `
      ${config.css || ''}
      html,body {
        background-color: ${makeTransparent(config.backgroundColor)} !important;
      }
    `
  })
);
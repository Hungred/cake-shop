const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwindcss(), // 注意這裡的改變，現在用這個插件
    require('autoprefixer'),
  ],
};
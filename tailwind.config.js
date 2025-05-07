/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // 確保這些路徑是對應到你的項目中所有使用 Tailwind 的檔案
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

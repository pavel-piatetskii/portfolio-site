/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'van-backgr': "url('data/images/background.png')",
        'doc-download': "url('data/images/doc_download.png')",
        'pdf-download': "url('data/images/pdf_download.png')",
      },
      colors: {
        'van-cyan': '#285064',
      },
    },
  },
  plugins: [],
}
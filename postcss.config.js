// let purgecss = {};
// if (process.env.NODE_ENV === "production") {
//   purgecss = {
//     content: [
//       "./output/**/*.html",
//       "./frontend/**/*.js",
//       "./src/**/*.md",
//       "./src/**/*.html",
//       "./src/**/*.liquid",
//     ],
//     defaultExtractor: (content) => {
//       const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
//       const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
//       return broadMatches.concat(innerMatches);
//     },
//   };
// }

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    // "@fullhuman/postcss-purgecss": {},
  },
};

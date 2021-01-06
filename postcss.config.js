// let purgecss = {};
// if (process.env.NODE_ENV === "production") {
//   purgecss = {
//     content: [
//       "./output/**/*.html",
//       "./frontend/**/*.js",
//       "./src/**/*.md",
//       "./src/**/*.html",
//       "./src/**/*.slim",
//     ],
//     defaultExtractor: (content) => {
//       const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
//       const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
//       return broadMatches.concat(innerMatches);
//     },
//   };
// }

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    // require("@fullhuman/postcss-purgecss")(purgecss)
  ],
};

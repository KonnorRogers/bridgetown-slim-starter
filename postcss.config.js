const plugins = {
  "tailwindcss": {},
  "autoprefixer": {},
}

if (process.env.NODE_ENV === "production") {
  const purgecss = {
    content: [
      "./output/**/*.html",
      "./frontend/**/*.js",
      "./src/**/*.md",
      "./src/**/*.html",
      "./src/**/*.slim",
    ],
    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
      return broadMatches.concat(innerMatches);
    },
  };

  plugins["@fullhuman/postcss-purgecss"] = purgecss;
}

module.exports = {
  plugins
};

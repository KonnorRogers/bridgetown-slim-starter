// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    frontend: "/dist",
    ".bridgetown": { url: "/", static: true },
    output: { url: "/", static: true, resolve: false },
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        name: "bridgetown",
        cmd: "bin/bridgetown build",
        watch: "$1 --watch --quiet",
      },
    ],
    "@snowpack/plugin-postcss",
  ],
  devOptions: {
    port: 4000,
    hmrDelay: 1000,
    open: "none",
  },
  buildOptions: {
    metaUrlPath: "output/dist/javascript",
    out: "output"
  },
  optimize: {
    entrypoints: ["dist/javascript/index.js"],
    preload: false,
    bundle: true,
    splitting: false,
    treeshake: true,
    minify: true,
    manifest: true,
    target: "es2018",
  },
}

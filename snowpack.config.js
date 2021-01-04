const mount = {
  output: "/",
};

const plugins = [
  ["@snowpack/plugin-postcss"],
  [
    "@snowpack/plugin-run-script",
    {
      cmd: "bundle exec bridgetown build",
      watch: "$1 --watch",
    },
  ],
];

const installOptions = {
  NODE_ENV: true,
};

const devOptions = {
  // Default port of bridgetown
  port: 4000,
  open: "none",
  output: "stream",
  hmrDelay: 300,
};

const buildOptions = {
  clean: true,
  metaDir: "",
  // Default output directory of Bridgetown
  out: "output",
};

module.exports = {
  mount,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};

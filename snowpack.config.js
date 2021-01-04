const mount = {
  frontend: "/frontend",
  output: {url: "/", static: true}
};

const plugins = [
  ["@snowpack/plugin-postcss"],
  [
    "@snowpack/plugin-run-script",
    {
      name: "Bridgetown",
      cmd: "bundle exec bridgetown serve",
      watch: "$1 --watch"
    }
  ]
];

const installOptions = {
  NODE_ENV: true,
};

const devOptions = {
  port: 4000,
  open: "none",
  output: "stream",
  hmrDelay: 300,
};

const buildOptions = {
  clean: true,
  metaDir: "",
  out: "output",
};

module.exports = {
  mount,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};

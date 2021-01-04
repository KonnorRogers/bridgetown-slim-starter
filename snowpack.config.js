const mount = {
  frontend: "/frontend",
  output: "/"
};

const plugins = [
  ["@snowpack/plugin-postcss"],
  [
    "@snowpack/plugin-run-script",
    {
      cmd: "bundle exec bridgetown serve",
      watch: "$1 --watch",
    },
  ],
];

const proxy = {
  "/*": "127.0.0.1:4000"
}

const installOptions = {
  NODE_ENV: true,
};

const devOptions = {
  // Default port of bridgetown
  port: 4001,
  open: "none",
  output: "stream",
  hmrDelay: 1000,
};

const buildOptions = {
  clean: true,
  metaDir: "",
  out: "output",
};

module.exports = {
  mount,
  proxy,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};

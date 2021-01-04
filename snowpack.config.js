const mount = {
  frontend: "/frontend",
};

const plugins = [
  ["@snowpack/plugin-postcss"]
  ["@snowpack/plugin-run-script"]
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
  out: "output/frontend",
};

module.exports = {
  mount,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};

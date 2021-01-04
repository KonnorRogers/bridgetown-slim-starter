const mount = {
  frontend: "/frontend",
};

const plugins = [
  ["@snowpack/plugin-postcss"],
];

const installOptions = {
  NODE_ENV: true,
};

const devOptions = {
  port: 4002,
  open: "none",
  output: "stream",
  baseUrl: "/",
};

const buildOptions = {
  metaDir: "frontend",
  out: "output",
};

module.exports = {
  mount,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};

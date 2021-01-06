const mount = {
  frontend: "/frontend",
  output: "/",
};

const plugins = [
  // ['@snowpack/plugin-build-script', { cmd: 'postcss', input: ['.css'], output: ['.css'] }],
  ["@snowpack/plugin-postcss"],
  ['@snowpack/plugin-run-script', { cmd: 'bundle exec bridgetown build', watch: '$1 --watch' }]
];

const installOptions = {
  NODE_ENV: true,
};

const devOptions = {
  port: 4000,
  hmrDelay: 1000,
  output: "stream",
  baseUrl: "/",
};

const buildOptions = {
  clean: true,
  metaDir: "frontend/javascript",
  out: "public",
};

module.exports = {
  mount,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};

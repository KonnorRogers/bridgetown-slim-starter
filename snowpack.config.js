const mount = {
  frontend: "/frontend",
  output: "/",
  public: { url: "/", static: true, resolve: false }
};

const plugins = [
  ['@snowpack/plugin-build-script', { cmd: 'postcss', input: ['.css'], output: ['.css'] }],
  ['@snowpack/plugin-run-script', { cmd: 'bridgetown build', watch: '$1 --watch' }]
];

const installOptions = {
  NODE_ENV: true,
};

const devOptions = {
  port: 4000,
  hmrDelay: 400,
  open: "none",
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

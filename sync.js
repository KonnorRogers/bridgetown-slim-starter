const browserSync = require("browser-sync").create();

// You can change these configuration values:
const bridgetownProxy = "http://localhost:4001"
const snowpackProxy = "http://localhost:4002"
const port = 4000
const uiPort = 4003

// Browsersync
browserSync.init({
  open: true,
  notify: false,
  middleware: [
    {
      route: "/frontend",
      handle: function(req, res, next) {
        if (!(/^\/frontend/.test(req.url))) {
          next()
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        req.url = snowpackProxy + "/" + req.url
        res.end()
        next()
      }
    }
  ],
  proxy: {
    target: bridgetownProxy,
  },
  port: port,
  files: "output/index.html",
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  },
  reloadDelay: 0,
  injectChanges: false,
  ui: {
    port: uiPort
  },
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        return snippet + match;
      },
    },
  },
});

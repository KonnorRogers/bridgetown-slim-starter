const concurrently = require('concurrently');

// By default, configure Bridgetown to use port 4001 so Browsersync can use 4000
// See also Browsersync settings in sync.js

// Concurrently
concurrently([
  { command: "NODE_ENV=development yarn snowpack build --watch", name: "Snowpack", prefixColor: "yellow" },
  { command: "BRIDGETOWN_ENV=development bundle exec bridgetown serve --watch", name: "Bridgetown", prefixColor: "green" },
  { command: "yarn sync", name: "Live", prefixColor: "blue" }
], {
  restartTries: 3,
  killOthers: ['failure', 'success'],
}).then(() => { console.log("Done."); console.log('\x033[0G'); }, () => { });

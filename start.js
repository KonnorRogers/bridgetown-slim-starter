const concurrently = require('concurrently');

// Concurrently
concurrently([
  { command: "NODE_ENV=development yarn snowpack-serve", name: "Snowpack", prefixColor: "yellow" },
  { command: "BRIDGETOWN_ENV=development yarn bridgetown-serve", name: "Bridgetown", prefixColor: "green" },
  { command: "yarn sync", name: "Live", prefixColor: "blue" }
], {
  restartTries: 3,
  killOthers: ['failure', 'success'],
}).then(() => { console.log("Done."); console.log('\x033[0G'); }, () => { });

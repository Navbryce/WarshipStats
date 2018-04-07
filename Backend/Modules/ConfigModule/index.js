var fs = require('fs');
var config = null;
const appPath = process.env.SHIP_APP; // Path points to parent directory of ship app. Ship scraper should be set under the SHIP_APP environment variable

var configContents = fs.readFileSync(appPath + '/config.json').toString();
config = JSON.parse(configContents);

function getConfig () {
  return config;
}

module.exports = {
  getConfig: getConfig
};

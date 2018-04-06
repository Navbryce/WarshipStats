// Dependencies
const express = require('express');
const configModule = require('./Modules/ConfigModule');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Contains most of the ship functions (Getting ships, adding new ships...)
const ships = require(path.join(__dirname, 'Routes/ships.js'));
const graphs = require(path.join(__dirname, 'Routes/graphs.js'));
const root = path.join(__dirname, '..'); // Get root path

const config = configModule.getConfig();

const app = express();

// Used to convert JSON post data to objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes ships functions to ships route
app.use('/ships', ships);
// Routes graph functions to the graphs route
app.use('/graphs', graphs);
// Fixes Dependencies, CSS, pictures paths
app.use(express.static(path.join(root, 'dist')));

// For anything other than /ships go to the Angular App (Build using the 'ng build' command)
app.get('*', (req, res) => {
  res.sendFile(path.join(root, '/dist/index.html'));
});

const port = config.port;
app.set('port', (process.env.PORT || port));
const server = http.createServer(app);

// If no backendIP is configured, try to launch the app without a preconfigured ip
if (config.backendIP == null || config.backendIP.length === 0) {
  server.listen(app.get('port'), function () {
    console.log('Backend express app listening @ ' + config.backendIP + ':' + app.get('port'));
  });
} else {
  server.listen(app.get('port'), config.backendIP, function () {
    console.log('Backend express app listening @ ' + config.backendIP + ':' + app.get('port'));
  });
}

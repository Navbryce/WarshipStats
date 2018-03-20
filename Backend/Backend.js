// Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Contains most of the ship functions (Getting ships, adding new ships...)
const ships = require(path.join(__dirname, 'Routes/ships.js'));
const root = path.join(__dirname, '..');

const app = express();

// Used to convert JSON post data to objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes ships functions to ships route
app.use('/ships', ships);
// Fixes Dependencies, CSS, pictures paths
app.use(express.static(path.join(root, 'dist')));

// For anything other than /ships go to the Angular App (Build using the 'ng build' command)
app.get('*', (req, res) => {
  res.sendFile(path.join(root, '/dist/index.html'));
});

const port = '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, '192.168.1.82', function () {
  console.log('Backend express app listening @ localhost:3000');
});

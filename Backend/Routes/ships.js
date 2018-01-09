const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

var shipSchema = mongoose.Schema({
  scrapeURL: String,
  configuration: String,
  displayName: String,
  name: String,
  importantDates: [Object],
  awards: [Object],
  armament: [Object],
  armor: [Object],
  description: String,
  physicalAttributes: Object,
  pictures: [Object],
  any: Object // Catch all. Ships are dynamic and don't always have the same attributes
});
var Ship = mongoose.model('ships', shipSchema);

// Connect to Mongo Database 'ABoat'
var connectedToDatabase = false;
mongoose.connect('mongodb://localhost/ABoat', { useMongoClient: true });
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'Error when connecting to database.'));
database.once('open', function () {
  connectedToDatabase = true;
});

router.get('/', function (req, res) {
  res.send('You have attempted to access the ships backend. Return to main page.');
});

router.post('/getAllShips', function (req, res) {
  getAllShips().then((data) => {
    res.json(data);
  });
});

// filter must be in the format of MongoQuerying syntax. returns promise if successful
function getShips (filter) {
  if (connectedToDatabase) {
    return Ship.find(filter).exec(); // Returns ship promise
  } else {
    throw new Error('The server is not connected to a database');
  }
}
// returns promise
function getAllShips () {
  var filter = {};
  var promise = getShips(filter);
  return promise;
}

module.exports = router;

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

router.get('/getAllShips', function (req, res) {
  getAllShips({}).then((data) => {
    res.json(data);
  });
});

router.get('/getMin', function (req, res) {
  getShipsAfterName('Iowa', 2, {displayName: {$eq: "Monitor"}}).then((data) => {
    res.json(data);
  });
});

// Filter must be in the format of MongoQuerying syntax. returns promise if successful. a limit of 0 is equivalent to no limit
function getShips (filter, limit) {
  if (connectedToDatabase) {
    return Ship.find(filter).sort({displayName: 1}).limit(limit).exec(); // Returns ship promise
  } else {
    throw new Error('The server is not connected to a database');
  }
}
// Returns promise
function getAllShips () {
  var filter = {};
  var promise = getShips(filter, 0);
  return promise;
}

// Returns proimse. Gets the {numberOfShips} ships with a displayName > minDisplayName. Ships must also meet filter. Each 'filter' for a field should be in the form of an OBJECT!
function getShipsAfterName (minDisplayName, numberOfShips, filter) {
  if (filter.displayName != null) { // If the filter already has something on it, add the minimum filter to the existing one
    filter.displayName.$gt = minDisplayName;
  } else {
    filter.displayName = {$gt: minDisplayName}; // There is no filter for the displayName
  }
  if (connectedToDatabase) {
    return getShips(filter, numberOfShips);
  } else {
    throw new Error('The server is not connected to a database');
  }
}

module.exports = router;

const express = require('express');
const router = express.Router();
const childProcess = require('child_process');
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

router.get('/scrapeShips', function (req, res) {
  var ships = [
    {
      url: 'https://en.wikipedia.org/wiki/USS_Missouri_(BB-63)',
      configuration: '0'
    }
  ];
  scrapeShips(ships);
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

// Returns promise. Gets the {numberOfShips} ships with a displayName > minDisplayName. Ships must also meet filter. Each 'filter' for a field should be in the form of an OBJECT!
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

// Scrape ships. Parameter must be an array of objects with "url" and "configuration attributes". Will add the scraped ships to the Mongo database
function scrapeShips (arrayOfScrapeShips) {
  var JSONships = JSON.stringify(arrayOfScrapeShips);
  var spawnProcess = childProcess.spawn;
  var process = spawnProcess('py', ['A:/DevenirProjectsA/ABoatScraping/scraper.py', JSONships]); // Path points to scraper script
  /* For debugging
  process.stdout.on('data', function (data) {
    console.log('Python Scraper Output: ' + data);
  });
  */
}
module.exports = router;

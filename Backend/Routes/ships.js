const express = require('express');
const router = express.Router();
const childProcess = require('child_process');
var mongoose = require('mongoose');

// Allows post requests from outside domains. Disable when not developing angular-end of application
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

var shipSchema = mongoose.Schema({
  scrapeURL: String,
  configuration: String,
  displayName: String,
  name: String,
  importantDates: Object,
  awards: Object,
  armament: Object,
  armor: Object,
  description: String,
  physicalAttributes: Object,
  pictures: Object,
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

router.post('/getShips', function (req, res) {
  // Request should include the number of ships and the greatest (alphabetically) ship name
  // console.log('Parameters received for getShips:' + JSON.stringify(req.body));
  var shipName = req.body.shipName;
  var numberOfShips = req.body.numberOfShips;
  var requestedFilters = req.body.filters;
  var rangeIntFilters = requestedFilters.rangeIntFilters; // Filters that can be formatted into the form of an int to another int. Should be an array of objects with a key, minValue, and maxValue
  var sortUnformatted = req.body.sort;
  var sortObject = getSortObject(sortUnformatted.sortBy, sortUnformatted.sortOrder);
  var filter = {displayName: {}}; // Initializes the filter. Probalby should create a constructor to do this
  getContainsFilter(filter, requestedFilters.shipNeedle); // Gets the ships with only a certain string in their name
  addRangeIntFilters(filter, rangeIntFilters); // Adds the filters for complement, speed, ....
  getShipsAfterName(shipName, filter, sortObject, numberOfShips).then((data) => {
    res.json(data);
  });
});

router.post('/scrapeShips', function (req, res) {
  console.log(req.body);
  var shipsToScrape = req.body.ships;
  scrapeShips(shipsToScrape);
  res.json('Scrape job submitted');
});

// Filter must be in the format of MongoQuerying syntax. returns promise if successful. a limit of 0 is equivalent to no limit
function getShips (filter, sortObject, limit) {
  // console.log(sortObject);
  // console.log('FILTER:' + JSON.stringify(filter));
  if (connectedToDatabase) {
    return Ship.find(filter).sort(sortObject).limit(limit).exec(); // Returns ship promise
  } else {
    throw new Error('The server is not connected to a database');
  }
}

// Returns promise. Gets the {numberOfShips} ships with a displayName > minDisplayName. Ships must also meet filter. Each 'filter' for a field should be in the form of an OBJECT!
function getShipsAfterName (minDisplayName, filter, sort, numberOfShips) {
  if (filter.displayName != null) { // If the filter already has something on it, add the minimum filter to the existing one
    filter.displayName.$gt = minDisplayName;
  } else {
    filter.displayName = {$gt: minDisplayName}; // There is no filter for the displayName
  }
  if (connectedToDatabase) {
    return getShips(filter, sort, numberOfShips);
  } else {
    throw new Error('The server is not connected to a database');
  }
}

// Scrape ships. Parameter must be an array of objects with "url" and "configuration attributes". Will add the scraped ships to the Mongo database
function scrapeShips (arrayOfScrapeShips) {
  var JSONships = JSON.stringify(arrayOfScrapeShips);
  var spawnProcess = childProcess.spawn;
  var process = spawnProcess('py', ['A:/DevenirProjectsA/ABoatScraping/scraper.py', JSONships]); // Path points to scraper script
  // For debugging
  process.stdout.on('data', function (data) {
    console.log('Python Scraper Output: ' + data);
  });
}

// Get filter that selects everything that contains a name. will modify an existing filter object.
function getContainsFilter (filter, needle) {
  filter.displayName.$regex = '(?i)(.*' + needle + '.*)'; // Selects all ships containing needle. (?i) makes it case insensitive
  return filter; // Sort of unecessary
}

// Get sort object (order - 1 or -1) (sortPath (string) - displayName, armament.normalGun)
function getSortObject (sortPath, order) {
  var sortObject = {};
  sortObject[sortPath] = order; // Have to do it this way because converting a string (sortPath) to a key on an object
  return sortObject;
}
function addRangeIntFilters (existingFilterObject, rangeIntFilters) {
  // console.log(JSON.stringify(rangeIntFilters));
  for (var rangeFilterCounter = 0; rangeFilterCounter < rangeIntFilters.length; rangeFilterCounter++) {
    var rangeFilter = rangeIntFilters[rangeFilterCounter];
    // console.log(JSON.stringify(rangeFilter));
    var rangeObject = createRangeFilter(rangeFilter.minValue, rangeFilter.maxValue); // Creates an object with {$lt: value, $gt: value}
    existingFilterObject = setFilter(existingFilterObject, rangeFilter.key, rangeObject); // Sets the above object to the filter key (complement, speed, ...)
  }
  return existingFilterObject; // Return modified object
}
function createRangeFilter (minValue, maxValue) { // Returns a range object of integer values for mongo queries
  var object = {
    $gt: minValue,
    $lt: maxValue
  };
  // console.log(JSON.stringify(object));
  return object;
}
function setFilter (existingFilter, filterKey, filterObject) {
  existingFilter[filterKey] = filterObject;
  return existingFilter;
}

module.exports = router;

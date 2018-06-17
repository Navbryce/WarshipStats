var Ships = require('../Modules/ShipModule');
const configModule = require('../Modules/ConfigModule');
const LogModule = require('../Modules/LogModule');
const express = require('express');
const router = express.Router();
const childProcess = require('child_process');
var Promise = require('promise');
const scraperDir = process.env.SHIP_SCRAPER; // Path points to parent directory of ship scraper. Ship scraper should be set under the SHIP_SCRAPER environment variable

// Get config
const config = configModule.getConfig();

// Generate logs
var shipCreationLog = new LogModule.LogWriter('ships-route/', 'ship-creation-log', config.keepLogs); // false -- don't keep existing log contents

// Allows post requests from outside domains. Disable when not developing angular-end of application
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
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
  var filter = {displayName: {}, $and: []}; // Initializes the filter. Probalby should create a constructor to do this
  getContainsFilter(filter, requestedFilters.shipNeedle); // Gets the ships with only a certain string in their name
  addRangeIntFilters(filter, rangeIntFilters); // Adds the filters for complement, speed, ....
  Ships.getShipsAfterName(shipName, filter, sortObject, numberOfShips).then((data) => {
    res.json(data);
  });
});

router.post('/scrapeShips', function (req, res) {
  console.log(req.body);
  var shipsToScrape = req.body.ships;
  var promise = scrapeShips(shipsToScrape);
  promise.then((data) => {
    res.json(data); // data should just be "complete"
  });
});

// Scrape ships. Parameter must be an array of objects with "url" and "configuration attributes". Will add the scraped ships to the Mongo database
function scrapeShips (arrayOfScrapeShips) {
  var JSONships = JSON.stringify(arrayOfScrapeShips);
  return spawnScrapeProcess('py', JSONships, true); // returns promise that returns "complete" when the process completes
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
    var rangeObject = createRangeFilter(rangeFilter.minValue, rangeFilter.maxValue); // Creates an object with {$lt: value, $gt: value}

    if (rangeFilter.minValue == 0) { // includes boats with null for the field and ones that meet the original filter
      var orArray = [];
      var normalFilter = {};
      normalFilter[rangeFilter.key] = rangeObject;
      orArray.push(normalFilter);
      var nullFilter = {};
      nullFilter[rangeFilter.key] = null; // include null values
      orArray.push(nullFilter);
      var filterObject = {$or: orArray};
      existingFilterObject['$and'].push(filterObject); // I honestly think it's silly. I can't put a series of $or conditions for a certain field under that field's property key  like {field: $or :[{}, {}]}. I need to put them in the next level's or statement. They're also placed in an and in case there are multiple or statements.
    } else {
      existingFilterObject = setFilter(existingFilterObject, rangeFilter.key, rangeObject); // Sets the above object to the filter key (complement, speed, ...)
    }
  }
  return existingFilterObject; // Return modified object
}
function createRangeFilter (minValue, maxValue) { // Returns a range object of integer values for mongo queries
  var object;
  if (minValue == 0) { // if a minvalue is zero, you want to include null fields. $or statement is added in addRangeFilters
    object = {
      $lte: maxValue
    };
  } else {
    object = {
      $gte: minValue,
      $lte: maxValue
    };
  }

  // console.log(JSON.stringify(object));
  return object;
}
function setFilter (existingFilter, filterKey, filterObject) {
  existingFilter[filterKey] = filterObject;
  return existingFilter;
}
function spawnScrapeProcess (commandString, JSONships, tryAgain) { // returns promise that will return "complete" when the process completes
  var spawnProcess = childProcess.spawn;
  var process = spawnProcess(commandString, [scraperDir + '/scraper.py', JSONships]); // Path points to scraper script
  // For debugging
  process.stdout.on('data', function (data) {
    console.log('Python Scraper Output: ' + data);
    shipCreationLog.log('Python Scraper Out: ' + data);
  });
  return new Promise((resolve, reject) => { // a nested promise on the on error. pretty ugly but it should work
    process.on('exit', (exit) => {
      console.log('EXIT CODE: ' + exit);
      resolve('complete');
    });
    process.on('error', function (err) { // normal try/catches don't work
      console.error(err);
      shipCreationLog.log('Python Scraper Out Error: ' + err);
      if (tryAgain) { // prevents an infinite loop
        spawnScrapeProcess('python3', JSONships, false).then((backupResult) => {
          resolve(backupResult); // if another scrape process is started, resolve the original promise with this promise's result
        }); // Some servers have python3 as the command not py
      } else {
        resolve(err); // an error occured and it couldn't scrape succesfully
      }
    });
  });
}

module.exports = router;

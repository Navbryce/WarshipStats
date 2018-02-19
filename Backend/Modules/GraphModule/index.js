
var mongoose = require('mongoose');

var edgeSchema = mongoose.Schema({
  any: String
});
var Edge = mongoose.model('edges', edgeSchema);

// Connect to Mongo Database 'ABoat'
var connectedToDatabase = false;
mongoose.connect('mongodb://localhost/ABoat', { useMongoClient: true });
var database = mongoose.connection;


database.on('error', console.error.bind(console, 'Error when connecting to database.'));
database.once('open', function () {
  connectedToDatabase = true;
  database.db.listCollections().toArray(function(err, names) {
      if (err) {
          console.log(err);
      }
      else {
          console.log("TEST");
          names.forEach(function(e,i,a) {
              console.log("--->>", e.name);
          });
      }
  });
});

// Filter must be in the format of MongoQuerying syntax. returns promise if successful. a limit of 0 is equivalent to no limit
function getEdges (filter, sortObject) {
    // console.log(sortObject);
   console.log('FILTER:' + JSON.stringify(filter));
  if (connectedToDatabase) {
    return Edge.find(filter).sort(sortObject).exec(); // Returns ship promise
  } else {
    console.log("Error. Not connected to database")
    throw new Error('The server is not connected to a database');
  }
}

function getAllEdges () { // Returns promise
  return getEdges({}, {});
}

module.exports = {
  getEdges: getEdges,
  getAllEdges: getAllEdges
};

const express = require('express');
const router = express.Router();
var graphs = require('../Modules/GraphModule');

// Allows post requests from outside domains. Disable when not developing angular-end of application
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
router.get('/', function (req, res) {
  res.send('You have attempted to access the graphs backend. Return to main page.');
});
router.post('/getAllEdges', (req, res) => {
  var edgesPromise = graphs.getEdgesWithPictures({}, {});
  edgesPromise.then((edges) => {
    res.send(JSON.stringify(edges));
  });
});
module.exports = router;

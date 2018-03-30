export function arrayToMap (shipsArray) { // Converts array of ships to map based on URL
  var shipsMap = {};
  for (var shipCounter = 0; shipCounter < shipsArray.length; shipCounter++) {
    var ship = shipsArray[shipCounter]
    shipsMap[ship.scrapeURL] = ship;
  }
  return shipsMap;
}

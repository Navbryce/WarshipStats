
export function convertDistance (distance: any) {
  // The function will convert distance (lower, the more related) to a relatedness factor (higher, the more related)
  var factor = null;
  var distanceString = "" + distance
  // for some reason if the distance is infinity in the database, it gets converted to null at some point. so if it's null (infinity), the relatedness should be 0
  if (distance == null || distanceString.toLowerCase() == "infinity") {
    factor = 0;
  } else {
    factor = roundValue(1/distance);
  }
  return factor;
}
function roundValue (value: number) {
  value = Math.round(value * 100)/100; // Math.Round rounds to the nearest integer
  var valueString = "" + value;  // Sometimes Math.Round does not round to two digits because of the /100. Converting to string automatically rounds
  valueString = valueString.substr(0, 4); // Because of commas
  value = parseFloat(valueString);
  return value;
}

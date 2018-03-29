
export function convertDistance (distance: any) {
  // The function will convert distance (lower, the more related) to a relatedness factor (higher, the more related)
  var factor = null;
  var distanceString = "" + distance
  // for some reason if the distance is infinity in the database, it gets converted to null at some point. so if it's null (infinity), the relatedness should be 0 
  if (distance == null || distanceString.toLowerCase() == "infinity") {
    factor = 0;
  } else {
    factor = 1/distance;
  }
  return factor;
}

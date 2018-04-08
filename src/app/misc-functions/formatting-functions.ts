export function capitalizeFirstLetter (value: string): string {
  value = value + ""; // Convert value to a string a if it is a number
  if (value.length > 0) {
    var firstLetter = value.substring(0, 1).toUpperCase();
    var restOfString = ""
    if (value.length > 1) {
      restOfString = value.substring(1);
    }
    value = firstLetter + restOfString;
  }
  return value;
}

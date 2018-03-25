export function sortEdges (edges) {
  sortEdgesRec(edges, 0, edges.length - 1);
}
function sortEdgesRec (edges, startingIndex, endIndex) {
  if ( startingIndex  < endIndex ) {
    var pivotValue = edges[startingIndex].magnitude;

    var lastEmptyLowIndex = startingIndex;
    // console.log(startingIndex + "-" + endIndex + ":" + pivotValue);
    for (var edgeCounter = startingIndex + 1; edgeCounter < edges.length; edgeCounter++) { // skip the first index because that is our pivot point
      var magnitude = edges[edgeCounter].magnitude;
      if (magnitude < pivotValue) {
        lastEmptyLowIndex += 1; // Things that have already been swapped can't be swapped out again because of increment
        swapInArray(edges, lastEmptyLowIndex, edgeCounter);
      }
    }
    swapInArray(edges, startingIndex, lastEmptyLowIndex); // Put pivot point in middle (the element at lastEmptyLowIndex is already below pivot, so putting it farther below shouldn't effect it)

    sortEdgesRec(edges, startingIndex, lastEmptyLowIndex); // right before pivot point
    sortEdgesRec(edges, lastEmptyLowIndex + 1, endIndex);
  }
}
function swapInArray (array: Array<any>, swapIndex0: number, swapIndex1: number): void {
  // Swap
  var tempSwapHolder = array[swapIndex1];
  array[swapIndex1] = array[swapIndex0];
  array[swapIndex0] = tempSwapHolder;
}

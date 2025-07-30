var numArray = [10, 11, 34, 2, 56, 78, 12];
var count = 0;
let searchKey = 12;
var isFound = false;
var low = 0;
var up = numArray.length - 1;
// sort array
numArray.sort((a, b) => a - b);

while (low <= up) {
  count++;
  var mid = Math.floor((low + up) / 2);
  if (numArray[mid] == searchKey) {
    isFound = true;
    break;
  } else if (numArray[mid] < searchKey) {
    low = mid + 1;
  } else if (numArray[mid] > searchKey) {
    up = mid - 1;
  }
}
console.log(isFound ? "Number Found" : "Number not found");
console.log("Total exicution time " + count);

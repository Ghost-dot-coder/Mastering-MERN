// nested array
var nestedArray = [
  [10, 20],
  [40, 50, 20],
  [8, 9, 10],
];
for (let subArray of nestedArray) {
  for (let num of subArray) {
    if (num < 10) {
      console.log(num);
    }
  }
}

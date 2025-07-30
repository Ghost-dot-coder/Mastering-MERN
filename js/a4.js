// predict logic of problem
// input =[4, 5, 6]   [7, 8, 9]
// output = [11,10,9]  [17,16,15]

var input = [4, 5, 6];
var result = [];
sum = 0;
for (let num of input) {
  sum += num;
}
for (let num of input) {
  result.push(sum - num);
}

console.log(result);

var numArray = [1, 2, 3, 13, 54, 12];
const oddArray = numArray.filter((num) => num % 2 != 0);
console.log(`Odd Numbers are: ${oddArray}`);

// Map function
console.log(`Squares are: ${numArray.map((square) => square ** 2)}`);

// print a new array with values satisfying the given condition , if existing value is >50  then decriment its value by 1 else increment its value by 1
console.log(numArray.map((nums) => (nums > 50 ? nums + 1 : nums - 1)));

// Least value
console.log(`Least value: ${numArray.reduce((a, b) => (a < b ? a : b))}`);

// highest value
console.log(`highest value: ${numArray.reduce((a, b) => (a > b ? a : b))}`);

// sum of values
console.log(`sum value: ${numArray.reduce((a, b) => a + b)}`);

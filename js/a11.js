numArray = [
  [10, 11],
  [20, [30, 40]],
  [50, 24],
];
flatArray = numArray.flat(Infinity);
console.log(flatArray.filter((num) => num < 50));
console.log(flatArray.map((num) => num ** 2));

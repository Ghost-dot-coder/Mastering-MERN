var a = 2;
var b = 5;

if (a > b) {
  console.log(`${a} is larger`);
} else if (a < b) {
  console.log(`${b} is larger`);
} else {
  console.log("Numbers are equal");
}
console.log(
  a > b ? `${a} is larger` : a < b ? `${b} is larger` : "Numbers are equal"
);

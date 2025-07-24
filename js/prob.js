n = 15;
console.log(
  n % 15 == 0
    ? "fizzbuzz"
    : n % 5 == 0
    ? "buzz"
    : n % 3 == 0
    ? "fizz"
    : "not divisible by 3,5,15"
);


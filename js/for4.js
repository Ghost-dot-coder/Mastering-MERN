// wap to check the prime numbers
const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("Enter any number:");

var num = Number(input);
var isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
  }
}

console.log(isPrime ? "Prime Number" : "not Prime Number");

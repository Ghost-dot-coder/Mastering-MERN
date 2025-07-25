// check if the 3 digit num is armstrong

prompt = require("prompt-sync")({ sigint: true });
var input = prompt("Enter number to check: ");
len = input.length;
num = Number(input);
arm = 0;
while (num > 0) {
  let lastdigit = num % 10;
  arm += lastdigit ** len;
  num = Math.floor(num / 10);
}
console.log(input == arm ? "Armstrong" : "not armstrong");

// wap to find factorial of a number
prompt = require("prompt-sync")({ sigint: true });
var i = 1;
const num = Number(prompt("Enter the number: "));
var fact = 1;
while (i <= num) {
  fact *= i;
  i++;
}

console.log(fact);

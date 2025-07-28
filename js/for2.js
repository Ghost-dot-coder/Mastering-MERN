// Wap to print from 1 to 10 using for loop

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// wap to find factorial
prompt = require("prompt-sync")({ sigint: true });
const num = Number(prompt("Enter the number: "));
var fact = 1;

for (let j = 1; j <= num; j++) {
  fact *= j;
}
console.log("\n" + fact);

// predict the logic

// 2    3   4    5
// logic
// output
// 24  369  4936

// predict the logic

// 2    3   4    5
// logic
// output
// 24  369  4936

const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("Enter number: ");
num = Number(input);

let result;
var i = 1;
var str = "";
while (i <= num) {
  str += i;
  i++;
}
console.log(`input = ${input}
    output = ${str * num}`);

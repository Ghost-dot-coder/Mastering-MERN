const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("Enter number: ");
num = Number(input);

var i = 1;
var term = "";
var sum = 0;
while (i <= num) {
  //3+33+333+3333...
  term += num;
  sum += Number(term);
  i++;
}
console.log(`Input = ${input}
    output ${sum}`);

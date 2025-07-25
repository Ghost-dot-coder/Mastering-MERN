// wap to reverse a number
prompt = require("prompt-sync")({ sigint: true });
var input = prompt("Enter number to reverse: ");
num = Number(input);
m = "";

while (0 < num) {
  n = num % 10;
  m += n;
  num = Math.floor(num / 10);
}

console.log(m);

// var reverseNum = "";
// while (num > 0) {
//   let lastDigit = num % 10;
//   reverseNum += lastDigit;
//   num = Math.floor(num / 10);
// }
// console.log(reverseNum);

// palindrome

console.log(input == m ? "Palindrome" : "not palindrome");

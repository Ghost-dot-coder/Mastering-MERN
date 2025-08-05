// Wap to print all vowels from the given string

const prompt = require("prompt-sync")({ sigint: true });
const data = prompt("Enter a Word:").toLowerCase();

var vowels = ["a", "e", "i", "o", "u"];

console.log(data.split("").filter((char) => vowels.includes(char)));

var str = "Malayalam";
console.log(`No. of charecters: ${str.length}`);
console.log(`To uppercase: ${str.toUpperCase()}`);
console.log(`To lower case: ${str.toLowerCase()}`);

console.log(`To take substring: ${str.substring(0, 3)}`);
console.log(`To take substring: ${str.slice(0, -3)}`);
console.log(`To check if the first letter is "M": ${str.startsWith("M")}`);
console.log(`To check if the Last letter is "M": ${str.endsWith("M")}`);

var sentance = "Language is JS";
console.log(sentance.split(" "));
console.log(sentance.split(""));
console.log(str.includes("Ma"));

var word = "     Hello World      ";
console.log(`Char count using just length: ${word.length}`);
console.log(`char count after trim: ${word.trim().length}`);

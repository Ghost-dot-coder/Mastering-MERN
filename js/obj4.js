// find first recursive charecter from the given pattern
pattern = "ABBCCAADA";
// ans: B
output = {};
charArray = pattern.split(" ");

for (let char of charArray) {
  if (char in output) {
    console.log(`${char} is the first recursive charecter`);
    break;
  } else {
    output[char] = 1;
  }
}

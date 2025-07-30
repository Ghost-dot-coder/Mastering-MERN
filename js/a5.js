// print duplicate elements
duplcateArray = [10, 20, 30, 10, 40, 20, 50];
duplicates = [];
for (let i = 0; i < duplcateArray.length; i++) {
  for (let j = i + 1; j < duplcateArray.length; j++) {
    if (duplcateArray[i] == duplcateArray[j]) {
      console.log(duplcateArray[i]);
      break;
    }
  }
}

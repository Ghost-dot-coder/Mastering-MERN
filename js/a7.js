// sum of pair is 6
pairArray = [2, 3, 4, 5];
pairsum = 6;

for (let i = 0; i < pairArray.length; i++) {
  for (let j = i + 1; j < pairArray.length; j++) {
    if (pairArray[i] + pairArray[j] == pairsum) {
      console.log(`${pairArray[i]},${pairArray[j]}`);
    }
  }
}

// print commmon number from following arrays
a1 = [10, 11, 12, 20, 30];
a2 = [11, 20, 21, 30, 31];

for (let a of a1) {
  for (let b of a2) {
    if (a == b) {
      console.log(a);
      break;
    }
  }
}

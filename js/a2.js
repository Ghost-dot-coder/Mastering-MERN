var expenses = [23000, 45000, 55000, 22000, 10000, 12000, 97000];
sum = 0;
largest = 0;
lowest = expenses[0];
// Find highest expense
for (let i in expenses) {
  if (expenses[i] > largest) {
    largest = expenses[i];
  }
}
console.log(largest);

// Find lowest expense
for (let i of expenses) {
  if (i < lowest) {
    lowest = i;
  }
}
console.log(lowest);

// Find total expense
for (let exp of expenses) {
  sum += exp;
}
console.log(`Total expense = ${sum}`);

const days = ["Monday", "Tuesday", "Wednesday"];
console.log(days);
console.log(`Datatype of array: ${typeof days}`);
console.log(`Elements in array: ${days.length}`);
console.log(`1st element of array: ${days[0]}`);
console.log(`Last element of array: ${days[days.length - 1]}`);

days.push("Thursday");
console.log(days);
days.unshift("Sunday");
console.log(days);
days.pop();
console.log(days);
days.shift();
console.log(days);

// Iteration of elements in array using three methods
console.log("Iteration of array using normal for loop");
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

console.log("Iteration of array using for-of loop");
for (let day of days) {
  console.log(day);
}

console.log("Iteration of array using for-in loop");
for (let index in days) {
  console.log(days[index]);
}

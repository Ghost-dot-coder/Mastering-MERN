// wap to print second largest number among 3 unique numbers and print them in ascending order

let num1 = 12,
  num2 = 7,
  num3 = 20;
// num1 is largest
if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(`Second largest is ${num2}`);
    console.log(`Ascending order: ${num3}, ${num2}, ${num1}`);
  }
}
// num2 is largest
if (num1 > num1 && num2 > num3) {
  if (num2 > num3) {
    console.log(`Second largest is ${num1}`);
    console.log(`Ascending order: ${num3}, ${num1}, ${num2}`);
  }
}
// num3 is largest
if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        console.log(`Second largest is ${num1}`);
        console.log(`Ascending order: ${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`Second largest is ${num2}`);
        console.log(`Ascending order: ${num1}, ${num2}, ${num3}`);
    }
}

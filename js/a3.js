// wap to check if the elemnt 2 is in array or not
var numArray = [10, 11, 34, 2, 56, 78, 12];
var flag = false;
for (let i of numArray) {
  if (i == 2) {
    flag = true;
    break;
  }
}
if (flag == true) {
  console.log("2 Found in array");
} else {
  console.log("2 not in array");
}

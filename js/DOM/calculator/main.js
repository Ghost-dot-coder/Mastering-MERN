// display content in calc screen
function displayContent(content) {
  result.value += content;
}
// clear button
function calcScreenClear() {
  result.value = "";
}
// calculate result
function calcOutput() {
  result.value = eval(result.value);
}
// backspace
function backSpace() {
  result.value = result.value.slice(0, -1);
}

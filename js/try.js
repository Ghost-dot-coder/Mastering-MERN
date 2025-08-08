exp = "%3+5*10";

try {
  console.log("try");
  result = eval(exp);
  console.log(result);
} catch (error) {
  console.log("catch\nInvalid");
} finally {
  console.log("Finallly");
}
console.log("Completed execution");

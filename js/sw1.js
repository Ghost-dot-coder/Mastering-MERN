// prompt sync

const prompt = require("prompt-sync")({ sigint: true });

const day = prompt("Enter a day: ");

switch (day) {
  case "monday":
    console.log("This is weekday");
    break;
  case "tuesday":
    console.log("This is weekday");
    break;
  case "wednesday":
    console.log("This is weekday");
    break;
  case "thursday":
    console.log("This is weekday");
    break;
  case "friday":
    console.log("This is weekday");
    break;
  case "saturday":
    console.log("This is holiday");
    break;
  case "sunday":
    console.log("This is holiday");
    break;
  default:
    console.log("Try with another day");
}
console.log("Task Completed");

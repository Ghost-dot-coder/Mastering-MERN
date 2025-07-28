// function isEligible(age) {
//   if (age <= 17) {
//     console.log("Not Eligible");
//   } else {
//     console.log("Eligible");
//   }
// }

const vote = (age) => (age >= 18 ? "Eligible" : "not Eligible");

console.log(vote(17));

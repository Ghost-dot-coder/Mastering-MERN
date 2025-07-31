// [id,name, designation,location, salary,experience]
employee = [
  [1000, "Neel", "developer", "kochi", 25000, 3],
  [1001, "Max", "tester", "TVM", 15000, 2],
  [1002, "Maxwell", "QA", "kochi", 35000, 4],
  [1003, "Vyom", "QA", "kochi", 45000, 5],
  [1004, "Laisha", "tester", "TVM", 55000, 7],
  [1005, "Aahan", "developer", "TVM", 15000, 1],
  [1006, "Aahil", "QA", "kochi", 20000, 2],
  [1007, "Shayan", "developer", "kochi", 30000, 3],
  [1008, "Nihaan", "developer", "TVM", 25000, 3],
];

// 1. Print all Employee Name
for (let emp of employee) {
  console.log(emp[1]);
}
// 2. print Total number of employees
console.log(`total no of employees: ${employee.length}`);

// 3. print developer employee details :filter
for (let dev of employee) {
  if (dev[2] == "developer") {
    console.log(dev);
  }
}
// 4. print employee whose salary > 30000  :filter
console.log("sal Greater:");

for (let sal of employee) {
  if (sal[4] > 30000) {
    console.log(`${sal[1]}`);
  }
}
// 5. print details of employee Laisha

for (let name of employee) {
  if (name[1] == "Laisha") {
    console.log(`Laisha: ${name}`);
  }
}
// 6. Sort employee based on their salary in decending order
console.log("Salary in descending order");

employee.sort((a, b) => b[4] - a[4]);
for (let asc of employee) {
  console.log(asc);
}
// 7. sort employee based on their experience in ascending order
console.log("Expirence in ascending order");

employee.sort((a, b) => a[5] - b[5]);
for (let exp of employee) {
  console.log(exp);
}

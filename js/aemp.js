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
// ------------forEach-----------
console.log("-----emp names using for each-------");

employee.forEach((emp) => {
  console.log(emp);
});

// 2. print Total number of employees
console.log(`total no of employees: ${employee.length}`);

// 3. print developer employee details :filter
console.log("-----Developers-------");
employee
  .filter((emp) => emp[2] == "developer")
  .forEach((emp) => console.log(emp[1]));

// 4. print employee whose salary > 30000  :filter
console.log("-----Sal greater-------");
employee.filter((emp) => emp[4] > 30000).forEach((emp) => console.log(emp[1]));

// 5. print details of employee Laisha
console.log("-----Find Laisha-------");
const empname = employee.find((item) => item[1] == "Laisha");
console.log(empname);

// 6. Sort employee based on their salary in decending order
console.log("-------Salary in descending order---------");
employee.sort((a, b) => b[4] - a[4]).forEach((emp) => console.log(emp));

// 7. sort employee based on their experience in ascending order
console.log("---------Expirence in ascending order-----------");
employee.sort((a, b) => a[5] - b[5]).forEach((exp) => console.log(exp));

//Find Employes with Highest salary
console.log("Highest salary");
console.log(employee.reduce((emp1, emp2) => (emp1[4] > emp2[4] ? emp1 : emp2)));
// Find Employees with least salary
console.log("least salary");
console.log(employee.reduce((emp1, emp2) => (emp1[4] < emp2[4] ? emp1 : emp2)));
console.log(
  employee.reduceRight((emp1, emp2) => (emp1[4] < emp2[4] ? emp1 : emp2))
);

//Find total salary of all employees
console.log("Total salary of employees");
console.log(employee.reduce((sum, emp) => sum + emp[4], 0));

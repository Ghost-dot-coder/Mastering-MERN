const employee = {
  empId: 1000,
  empName: "Neel",
  empDesig: "Developer",
  empSalary: "60000",
  empExp: 4,
};

console.log(typeof employee);
console.log(employee);
console.log(`Employee name: ${employee["empName"]}`);
console.log(`Employee Designation: ${employee.empDesig}`);

console.log(`Is key empExp in employee object: ${"empExp" in employee}`);
console.log(
  `Is key empName in employee object: ${employee.hasOwnProperty("empName")}`
);

console.log("Inserting data.....");

employee["empGender"] = "Male";
employee.empLocation = "Kochi";

Object.assign(employee, { empVaccinated: true });
console.log(employee);

employee.empVaccinated = false;
console.log(employee);

console.log(`All keys of employee object: `);
console.log(Object.keys(employee));

console.log(`All values of employee object: `);
console.log(Object.values(employee));

console.log("Display object in an array:");
console.log(Object.entries(employee));

delete employee.empLocation;
console.log(employee);

for (let key in employee) {
  console.log(`${key}:${employee[key]}`);
}

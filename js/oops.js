class Employee {
  constructor(id, name, salary, desig) {
    this.empid = id;
    this.empName = name;
    this.empSalary = salary;
    this.empDesig = desig;
  }
  printEmpName() {
    console.log(this.empName);
  }
}
const emp1 = new Employee(1, "Sulu", 23000, "Tester");
emp1.printEmpName();

const emp2 = new Employee(2, "Ram", 23000, "Designer");
emp2.printEmpName();

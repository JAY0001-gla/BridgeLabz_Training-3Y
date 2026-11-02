class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent) / 100;
    return this.salary;
  }
}

const employees = [
  new Employee(101, "Amit Verma", "Engineering", 60000),
  new Employee(102, "Priya Singh", "HR", 45000),
  new Employee(103, "Rahul Mehta", "Finance", 52000),
  new Employee(104, "Neha Gupta", "Marketing", 48000),
  new Employee(105, "Karan Patel", "Engineering", 70000)
];

console.log("Annual Salary of Each Employee:");
employees.forEach((employee) => {
  console.log(`${employee.name} (${employee.department}): Rs.${employee.getAnnualSalary()}`);
});

const totalPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`\nTotal Annual Payout: Rs.${totalPayout}`);

employees[0].applyBonus(10);
console.log("\nAfter 10% bonus for Amit Verma:");
console.log(`New Monthly Salary: Rs.${employees[0].salary}`);
console.log(`New Annual Salary: Rs.${employees[0].getAnnualSalary()}`);

const newTotalPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Updated Total Annual Payout: Rs.${newTotalPayout}`);

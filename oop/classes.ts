// Classes

class Employee {
  name: string;
  salary?: number;
  constructor(name: string, salary?: number) {
    this.name = name;
    this.salary = salary;
  }
  greet() {
    console.log("Hi " + this.name);
  }
  printSalary() {
    if (!this.salary) {
      console.log("Es wurde noch kein Gehalt hinterlegt");
    } else {
      console.log("Your salary is " + this.salary);
    }
  }
}

const employees: Employee[] = [];

employees.push(new Employee("Jane", 64000));
employees.push(new Employee("John", 45000));
employees.push(new Employee("Jim", 34000));
employees.push(new Employee("New Employee"));

employees.forEach((employee) => {
  employee.greet();
  employee.printSalary();
});

// We need this line to tell TypeScript that this file is a module.
// This way we can use the same variable names in all of the files without running into conflicts.
export {};

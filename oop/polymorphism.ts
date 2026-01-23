// Inheritance

class Employee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  greet() {
    console.log("Hi " + this.name);
  }
  calculateSalary() {
    return Math.floor(this.salary * 1.1);
  }
}

class Manager extends Employee {
  department: string;
  bonus: number;
  constructor(
    name: string,
    salary: number,
    department: string,
    bonus: number = 0
  ) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus;
  }
  calculateSalary(): number {
    const result = super.calculateSalary();
    return result + this.bonus;
  }
}

const employees: Employee[] = [];
employees.push(new Manager("Jane", 64000, "finance", 10000));
employees.push(new Manager("PoorJane", 64000, "finance", 5000));
employees.push(new Employee("John", 45000));
employees.push(new Employee("Jim", 34000));

for (const employee of employees) {
  employee.greet();
  console.log("Salary: ", employee.calculateSalary());
}

// We need this line to tell TypeScript that this file is a module.
// This way we can use the same variable names in all of the files without running into conflicts.
export {};

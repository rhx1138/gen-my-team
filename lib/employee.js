const { createPromptModule } = require('inquirer');

// create employee class with name, id, email, and role
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
}

module.exports = Employee;
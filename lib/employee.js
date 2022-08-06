<<<<<<< HEAD
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
=======

// create employee class with name, id, email, and role
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
// get name from user
  getName() {
    return this.name;
  }
// get id from user
  getId() {
    return this.id;
  }
// get email from user
  getEmail() {
    return this.email;
  }
// get role from user
  getRole() {
    return "Employee";
  }
};
>>>>>>> new-feature

module.exports = Employee;
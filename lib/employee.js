
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

module.exports = Employee;
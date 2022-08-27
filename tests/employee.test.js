// npm run test

const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("GetRoleName", () => {
  test("it should return Employee", () => {
    // actual test
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
  });
});

// test for name
describe("GetEmployeeName", () => {
    test("it should return name Ryan", () => {
      // actual test
      const employee = new Employee('Ryan', '1', 'ryan@gmail.com');
      expect(employee.getName()).toBe("Ryan");
    });
  });


// test for id
describe("GetEmployeeId", () => {
    test("it should return id 1", () => {
      // actual test
      const employee = new Employee('Ryan', '1', 'ryan@gmail.com' );   
      expect(employee.getId()).toBe("1");
    });
  });


// test for email
describe("GetEmployeeEmail", () => {
    test("it should return email", () => {
      // actual test
      const employee = new Employee('Ryan', '1', 'ryan@gmail.com' );
      expect(employee.getEmail()).toBe("ryan@gmail.com");
    });
  });


// test for role
describe("GetEmployeeRole", () => {
    test("it should return role", () => {
      // actual test
      const employee = new Employee('Ryan', '1', 'ryan@gmail.com' );
      expect(employee.getRole()).toBe("Employee");  
    });
  });

  
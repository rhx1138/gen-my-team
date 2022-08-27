const { expect } = require("@jest/globals");
const Manager = require("../lib/manager");

describe("GetRoleName", () => {
  test("it should return manager", () => {
    // actual test
    const employee = new Manager();
    expect(employee.getRole()).toBe("Manager");
  });
});
const { expect } = require("@jest/globals");
const Intern = require("../lib/intern");

describe("GetRoleName", () => {
  test("it should return intern", () => {
    // actual test
    const employee = new Intern();
    expect(employee.getRole()).toBe("Intern");
  });
});
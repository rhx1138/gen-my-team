const { expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe("GetRoleName", () => {
  test("it should return engineer", () => {
    // actual test
    const employee = new Engineer();
    expect(employee.getRole()).toBe("Engineer");
  });
});

// test for github
describe("GetEngineerGithub", () => {
    test("it should return name Ryan", () => {
      // actual test
      const employee = new Engineer('Ryan', '1', 'ryan@gmail.com', 'rhx1138');
      expect(employee.getGithub()).toBe("rhx1138");
    });
  });
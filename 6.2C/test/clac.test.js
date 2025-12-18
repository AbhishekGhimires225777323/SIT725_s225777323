const { expect } = require("chai");
const { add } = require("../calc");

describe("Calculation function: add()", () => {
  it("should correctly add two positive numbers", () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it("should correctly add negative and positive numbers", () => {
    const result = add(-5, 10);
    expect(result).to.equal(5);
  });

  it("should throw an error if inputs are not numbers", () => {
    expect(() => add("a", 5)).to.throw("Inputs must be numbers");
  });
});

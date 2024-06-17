import { sum } from "../sum";
// const sum = require("../sum");

describe("sum", () => {
  it("should return the sum of two positive integers", () => {
    const input1 = 5;
    const input2 = 7;
    const expected = 12;
    const result = sum(input1, input2);
    expect(result).toBe(expected);
  });
});

const sum = require("../sum");
// import sum from "./sum";

describe("sum", () => {
	it("should return the sum of two positive integers", () => {
		const input1 = 5;
		const input2 = 7;
		const expected = 12;
		const result = sum(input1, input2);
		expect(result).toBe(expected);
	});

	it("should return the sum of two negative integers", () => {
		const input1 = -3;
		const input2 = -7;
		const expected = -10;
		const result = sum(input1, input2);
		expect(result).toBe(expected);
	});

	it("should return the sum of a positive and a negative integer", () => {
		const input1 = 8;
		const input2 = -4;
		const expected = 4;
		const result = sum(input1, input2);
		expect(result).toBe(expected);
	});

	it("should return the sum of two decimal numbers", () => {
		const input1 = 3.5;
		const input2 = 2.5;
		const expected = 6;
		const result = sum(input1, input2);
		expect(result).toBe(expected);
	});

	it("should return the sum of adding 0 to a number", () => {
		const input1 = 10;
		const input2 = 0;
		const expected = 10;
		const result = sum(input1, input2);
		expect(result).toBe(expected);
	});

	it("should return the sum of adding two large numbers", () => {
		const input1 = 1000000000;
		const input2 = 2000000000;
		const expected = 3000000000;
		const result = sum(input1, input2);
		expect(result).toBe(expected);
	});
});

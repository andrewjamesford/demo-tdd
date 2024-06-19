import { sum } from "../sum";

describe("sum", () => {
	it("should return the correct sum when input1 and input2 are positive integers", () => {
		// Arrange
		const input1 = 1;
		const input2 = 2;
		const expected = 3;

		// Act
		const actual = sum(input1, input2);

		// Assert
		expect(actual).toBe(expected);
	});
});

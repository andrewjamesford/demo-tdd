const {
	addToCart,
	removeFromCart,
	getTotalPrice,
	clearCart,
	showCart,
} = require("../cartOperations");

describe("Tests for shopping cart operations", () => {
	let cart = [];

	beforeEach(() => {
		cart = [
			{ id: 1, name: "Milk", price: 10 },
			{ id: 2, name: "Bread", price: 20 },
		];
		addToCart(cart);
	});

	test("addToCart should add an item to the cart", () => {
		const newItem = { id: 3, name: "Eggs", price: 30 };
		const newCart = [
			{ id: 1, name: "Milk", price: 10 },
			{ id: 2, name: "Bread", price: 20 },
			{ id: 3, name: "Eggs", price: 30 },
		];
		addToCart(newItem);
		expect(newCart).toContainEqual(newItem);
	});

	test("removeFromCart should remove an item from the cart", () => {
		removeFromCart(cart, 1);
		expect(cart).not.toContainEqual([{ id: 1, name: "Milk", price: 10 }]);
	});

	test("getTotalPrice should return the total price of the cart", () => {});

	test("clearCart should empty the cart", () => {
		// Arrange
		// Act
		// Assert
	});

	test("showCart should return the cart", () => {
		// Arrange
		// Act
		// Assert
	});

	test("addToCart should not add an item to the cart if it already exists", () => {
		// Arrange
		// Act
		// Assert
	});

	test("removeFromCart should not remove an item from the cart if it doesn't exist", () => {
		// Arrange
		// Act
		// Assert
	});

	test("getTotalPrice should return 0 if the cart is empty", () => {
		// Arrange
		// Act
		// Assert
	});

	test("showCart should return an empty array if the cart is empty", () => {
		clearCart(cart);
		const returnedCart = showCart(cart);
		expect(returnedCart).toEqual([]);
	});
});

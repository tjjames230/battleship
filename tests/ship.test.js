const { Ship } = require("../src/js/components/ship");

describe("Ship", () => {
	let newShip = new Ship(5, 0);

	test("ship created test", () => {
		expect(newShip.isSunk).toBeDefined();
	});

	test("ship has constructor", () => {
		expect(Ship.constructor).toBeDefined();
	});
});

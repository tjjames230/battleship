const { Ship } = require("../src/js/components/ship");

describe("Ship", () => {
	let newShip = new Ship(5);
	console.log(newShip);

	test("ship created test", () => {
		expect(newShip).toEqual({ length: 5, numberHit: 0 });
	});

	test("ship has been hit", () => {
		newShip.hit();
		expect(newShip.numberHit).toBe(1);
	});
});

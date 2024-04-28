const { Ship } = require("../src/js/components/ship");

describe("Ship", () => {
	let newShip;

	beforeEach(() => {
		newShip = new Ship(3);
	});

	test("ship created test", () => {
		expect(newShip).toEqual({ length: 3, numberHit: 0 });
	});

	test("ship has been hit", () => {
		newShip.hit(0, 0);
		expect(newShip.numberHit).toBe(1);
	});

	test("ensure ships created are greater than 1 and less than 6", () => {
		expect(newShip.length > 1 && newShip.length < 6).toBe(true);
	});

	test("check ship is sunk when length = numberHit", () => {
		expect(sunkShip.isSunk()).toBe(true);
	});
});

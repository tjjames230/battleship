const { Ship } = require("../src/js/components/ship");

describe("Ship", () => {
	let newShip;

	beforeEach(() => {
		newShip = new Ship(3);
	});

	test("ship created test", () => {
		expect(newShip).toEqual({ length: 3, numberHit: 0, position: [] });
	});

	test("ship has been hit", () => {
		newShip.hit(0, 0);
		expect(newShip.numberHit).toBe(1);
	});

	test("ships created are greater than 1 and less than 6", () => {
		expect(newShip.length > 1 && newShip.length < 6).toBe(true);
	});

	test("test ship placement in bounds", () => {
		newShip.setPosition(2, 2, "vertical");
		expect(newShip.getPosition()).toEqual([
			[2, 2],
			[3, 2],
			[4, 2],
		]);
	});

	test("test ship placement out of bounds", () => {
		newShip.setPosition(-1, 12, "horizontal");
		expect(newShip.getPosition()).toEqual([]);
	});
});

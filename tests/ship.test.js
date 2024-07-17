const { Ship } = require("../src/js/ship");

describe("Ship", () => {
	let ship1;
	let ship2;

	beforeEach(() => {
		ship1 = new Ship(3);
		ship2 = new Ship(5);
	});

	test("ship created test", () => {
		expect(ship1).toEqual({ length: 3, _numberHit: 0, _position: [] });
		expect(ship2).toEqual({ length: 5, _numberHit: 0, _position: [] });
	});

	test("ship has been hit", () => {
		ship1.position = { x: 2, y: 2, dir: "vertical" };
		ship1.hit(3, 2);
		ship1.hit(3, 2);
		ship1.hit(2, 2);
		expect(ship1.numberHit).toBe(2);
	});

	test("ship has been sunk", () => {
		ship1.position = { x: 2, y: 2, dir: "vertical" };
		ship1.hit(2, 2);
		ship1.hit(3, 2);
		ship1.hit(4, 2);
		expect(ship1.isSunk()).toBe(true);
	});

	test("ships created are greater than 1 and less than 6", () => {
		expect(ship1.length > 1 && ship1.length < 6).toBe(true);
	});

	test("test ship placement in bounds", () => {
		ship1.position = { x: 2, y: 2, dir: "vertical" };
		expect(ship1.position).toEqual([
			[2, 2],
			[3, 2],
			[4, 2],
		]);

		ship2.position = { x: 5, y: 2, dir: "vertical" };
		expect(ship2.position).toEqual([
			[5, 2],
			[6, 2],
			[7, 2],
			[8, 2],
			[9, 2],
		]);
	});

	test("test ship placement out of bounds", () => {
		// scenario 1
		ship1.position = { x: -1, y: 12, dir: "horizontal" };
		expect(ship1.position).toEqual([]);

		// scenario 2 - starting position is within bounds, but middle or end is out of bounds
		ship2.position = { x: 8, y: 2, dir: "vertical" };
		expect(ship2.position).toEqual([]);
	});
});

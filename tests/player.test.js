const { Player } = require("../src/js/player");
const { Ship } = require("../src/js/ship");
const { Gameboard } = require("../src/js/gameboard");

describe("Player", () => {
	let playerOne;
	let playerTwo;

	beforeEach(() => {
		playerOne = new Player("p1", true);
		playerTwo = new Player("p2", false);
	});

	test("player created successfully", () => {
		expect(playerOne.name).toBe("p1");

		const expectedShips = [
			{ length: 2, _numberHit: 0, _position: [] },
			{ length: 3, _numberHit: 0, _position: [] },
			{ length: 3, _numberHit: 0, _position: [] },
			{ length: 4, _numberHit: 0, _position: [] },
			{ length: 5, _numberHit: 0, _position: [] },
		];

		playerOne.ships.forEach((ship, index) => {
			expect(ship).toMatchObject(expectedShips[index]);
			expect(ship).toBeInstanceOf(Ship);
		});

		expect(playerOne.playerBoard).toBeInstanceOf(Gameboard);
		expect(playerOne.playerBoard.board).toEqual([
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
		]);
	});

	test("player one makes attack on player two", () => {
		playerOne.makeAttack(2, 2, playerTwo);
		expect(playerTwo.playerBoard.board).toEqual([
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "O", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
		]);
	});
});

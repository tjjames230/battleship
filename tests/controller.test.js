const { GameController } = require("../src/js/controller");
const { Player } = require("../src/js/player");

describe("Game Controller", () => {
	let playerOne;
	let controller;

	beforeEach(() => {
		playerOne = new Player("p1");
		controller = new GameController();
	});

	test("checking if player winner is determined", () => {
		expect(controller.checkWinner(playerOne)).toEqual(false);

		playerOne.ships.map((ship) => {
			ship._numberHit = ship.length;
		});

		expect(controller.checkWinner(playerOne)).toEqual(true);
	});
});

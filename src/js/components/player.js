const { Ship } = require("./ship");
const { Gameboard } = require("./gameboard");

class Player {
	constructor(name) {
		this.name = name;
		this.ships = this.initializieShips();
		this.playerBoard = new Gameboard();
		this.turn = false;
	}

	initializieShips() {
		const shipSizes = [2, 3, 3, 4, 5];
		return shipSizes.map((size) => new Ship(size));
	}

	makeAttack(x, y) {
		this.board.receiveAttack(x, y);
	}
}

module.exports = { Player };

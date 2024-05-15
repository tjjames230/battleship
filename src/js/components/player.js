const { Ship } = require("./ship");
const { Gameboard } = require("./gameboard");

class Player {
	constructor(name) {
		this.name = name;
		this.ships = this.initializieShips();
		this.board = this.initializePlayerBoard();
	}

	initializieShips() {
		const shipSizes = [2, 3, 4, 4, 5];
		return shipSizes.map((size) => new Ship(size));
	}

	initializePlayerBoard() {
		const playerBoard = new Gameboard();
		return playerBoard.board;
	}
}

module.exports = { Player };

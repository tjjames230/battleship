const { Ship } = require("./ship");
const { Gameboard } = require("./gameboard");

class Player {
	constructor(name) {
		const ship1 = new Ship(2);
		const ship2 = new Ship(3);
		const ship3 = new Ship(4);
		const ship4 = new Ship(4);
		const ship5 = new Ship(5);

		this.name = name;
		this.ships = [ship1, ship2, ship3, ship4, ship5];
		this.board = new Gameboard();
	}
}

module.exports = { Player };

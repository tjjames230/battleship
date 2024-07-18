const { Ship } = require("./ship");
const { Gameboard } = require("./gameboard");

class Player {
	constructor(name, turn) {
		this.name = name;
		this.ships = this.initializieShips();
		this.playerBoard = new Gameboard();
		this.turn = turn;
	}

	initializieShips() {
		const shipSizes = [2, 3, 3, 4, 5];
		return shipSizes.map((size) => new Ship(size));
	}

	setShipPositions() {
		// method will run after a click event that sets the x and y to the values based on click. Will need to run for each ship.
	}

	updateBoard() {
		// method will update values on the playerboard after all ship positions have been set
	}

	makeAttack(x, y, otherPlayer) {
		otherPlayer.playerBoard.receiveAttack(x, y);
		otherPlayer.ships.map((ship) => {
			ship.hit(x, y);
		});
		this.updateTurn();
	}

	updateTurn() {
		if (this.turn) {
			this.turn = false;
		} else {
			this.turn = true;
		}
	}

	drawBoard() {
		const body = document.querySelector("body");
		const board = document.createElement("section");
		board.classList.add("gameboard");
		body.appendChild(board);

		for (let i = 0; i < this.playerBoard.board.length; i++) {
			for (let j = 0; j < this.playerBoard.board[i].length; j++) {
				const tile = document.createElement("div");
				tile.classList.add("tile");
				board.appendChild(tile);

				tile.addEventListener("click", () => {
					if (this.turn === true) {
						console.log(fetchCoordinates(i, j));
					}
				});
			}
		}

		const fetchCoordinates = (x, y) => [x, y];
	}
}

module.exports = { Player };

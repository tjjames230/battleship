class GameController {
	gameOver = false;

	checkGameOver() {
		return this.gameOver;
	}

	updateGameOver(val) {
		if (typeof val === "boolean") {
			this.gameOver = val;
		}
	}

	checkWinner(player) {
		const allShipsSunk = player.ships.every((ship) => {
			return ship.isSunk() === true;
		});

		if (allShipsSunk) {
			this.updateGameOver(true);
			return this.checkGameOver();
		} else {
			return false;
		}
	}
}

module.exports = { GameController };

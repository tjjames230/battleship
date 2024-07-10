class GameController {
	static gameOver = false;

	static checkGameOver() {
		return this.gameOver;
	}

	static updateGameOver(val) {
		if (typeof val === Boolean) {
			this.gameOver = val;
		}
	}
}

module.exports = { GameController };

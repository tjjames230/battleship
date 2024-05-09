class Ship {
	constructor(length) {
		this.length = length;
		this.numberHit = 0;
		this.position = [];
	}

	hit(x, y) {
		this.numberHit++;
	}

	isSunk() {
		if (this.length === this.numberHit) {
			return true;
		}
	}

	getPosition() {
		return this.position;
	}

	setPosition(x, y, dir) {
		if (dir === "horizontal") {
			this.position = [
				[x, y],
				[x, y + 1],
				[x, y + 2],
			];
		} else if (dir === "vertical") {
			this.position = [
				[x, y],
				[x + 1, y],
				[x + 2, y],
			];
		}
	}
}

module.exports = { Ship };

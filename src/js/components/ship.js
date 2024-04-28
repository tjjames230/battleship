class Ship {
	constructor(length) {
		this.length = length;
		this.numberHit = 0;
		this.position = [
			[0, 0],
			[0, 1],
			[0, 2],
		];
	}

	hit(x, y) {
		this.numberHit++;
	}

	isSunk() {
		if (this.length === this.numberHit) {
			return true;
		}
	}
}

module.exports = { Ship };

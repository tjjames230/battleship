class Ship {
	constructor(length, numberHit = 0) {
		this.length = length;
		this.numberHit = numberHit;
	}

	hit() {
		this.numberHit++;
	}

	isSunk() {
		if (this.length === this.numberHit) {
			return true;
		}
	}
}

module.exports = { Ship };

class Ship {
	constructor(length, hit) {
		length = this.length;
		hit = this.hit;
	}

	isSunk() {
		if (length === hit) {
			return true;
		}
	}
}

module.exports = { Ship };

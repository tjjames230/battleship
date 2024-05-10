class Ship {
	constructor(length) {
		this.length = length;
		this._numberHit = 0;
		this._position = [];
	}

	hit(x, y) {
		this._numberHit++;
	}

	get numberHit() {
		return this._numberHit;
	}

	isSunk() {
		if (this.length === this._numberHit) {
			return true;
		}
	}

	get position() {
		return this._position;
	}

	set position(pos) {
		// making sure the coordinates given are valid and do not exceed the board

		if (pos.x < 0 || pos.y < 0) {
			console.log("invalid positions, try again");
			return;
		}

		if (pos.dir === "horizontal") {
			if (pos.x > 9 || pos.y + this.length - 1 > 9) {
				console.log("invalid positions, try again");
				return;
			}

			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x, pos.y + i]);
			}
		} else if (pos.dir === "vertical") {
			if (pos.x + this.length - 1 > 9 || pos.y > 9) {
				console.log("invalid positions, try again");
				return;
			}

			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x + i, pos.y]);
			}
		}
	}
}

module.exports = { Ship };

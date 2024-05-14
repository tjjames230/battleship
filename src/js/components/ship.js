class Ship {
	constructor(length) {
		this.length = length;
		this._numberHit = 0;
		this._position = [];
	}

	hit(x, y) {
		for (let i = 0; i < this.position.length; i++) {
			if (x == this.position[i][0] && y == this.position[i][1]) {
				this._numberHit++;
				this.position[i] = [];
				console.log(this.position);
			}
		}
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
		if (!pos || typeof pos !== "object" || !pos.x || !pos.y || !pos.dir) {
			console.log("invalid object");
			return false;
		}

		if (pos.x < 0 || pos.y < 0) {
			console.log("invalid positions, try again");
			return false;
		}

		if (pos.dir === "horizontal") {
			// if the width of the ship doesn't fit on board, return
			if (pos.x > 9 || pos.y + this.length - 1 > 9) {
				console.log("invalid positions, try again");
				return false;
			}

			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x, pos.y + i]);
			}
		} else if (pos.dir === "vertical") {
			// if the height of the ship doesn't fit on board, return
			if (pos.x + this.length - 1 > 9 || pos.y > 9) {
				console.log("invalid positions, try again");
				return false;
			}

			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x + i, pos.y]);
			}
		}
	}

	/* TRYING TO CONVERT
	checkValidPlacement(pos) {
		if (!checkInvalidWidth(pos)) {
			return false;
		}

		function checkInvalidWidth(pos) {
			if (pos.dir === "horizontal") {
				if (pos.x > 9 || pos.y + this.length - 1 > 9) {
					console.log("invalid positions, try again");
					return false;
				}
			}
		}

		return true;
	}
	*/
}

module.exports = { Ship };

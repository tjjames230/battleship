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
		// has to pass valid checks
		if (!checkValidPlacement(pos, this)) {
			return false;
		}

		if (pos.dir === "horizontal") {
			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x, pos.y + i]);
			}
		} else if (pos.dir === "vertical") {
			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x + i, pos.y]);
			}
		}

		function checkValidPlacement(pos, ship) {
			if (!checkValidCoordinates(pos)) {
				return false;
			} else if (!checkValidWidth(pos, ship)) {
				return false;
			} else if (!checkValidHeight(pos, ship)) {
				return false;
			}

			function checkValidCoordinates(pos) {
				if (!pos || typeof pos !== "object" || !pos.x || !pos.y || !pos.dir) {
					console.log("invalid object");
					return false;
				}

				if (pos.x < 0 || pos.y < 0) {
					console.log("invalid positions, try again");
					return false;
				}

				return true;
			}

			function checkValidWidth(pos, ship) {
				if (pos.dir === "horizontal") {
					if (pos.x > 9 || pos.y + ship.length - 1 > 9) {
						console.log("invalid positions, try again");
						return false;
					}
				}

				return true;
			}

			function checkValidHeight(pos, ship) {
				if (pos.dir === "vertical") {
					if (pos.x + ship.length - 1 > 9 || pos.y > 9) {
						console.log("invalid positions, try again");
						return false;
					}
				}

				return true;
			}

			return true;
		}
	}
}

module.exports = { Ship };

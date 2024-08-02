export { UI };
import { Player } from "./player";

class UI {
	static playerOne = new Player("p1", true);
	static playerTwo = new Player("p2", false);
	static body = document.querySelector("body");
	static boardCtn = document.createElement("main");

	static loadSetup() {
		this.loadHeader("setup");
		this.boardCtn.id = "gameboard-ctn";
		this.loadButtonSelection();
		this.loadShipSelection();
		this.displayShipPlacementBoard(this.playerOne);
		this.body.appendChild(this.boardCtn);
		this.shipPlacementHover();
		this.getShipDirection();
	}

	static loadButtonSelection() {
		// adding buttons for direction of ship placement
		const btnCtn = document.createElement("section");
		btnCtn.id = "button-ctn";
		btnCtn.innerHTML = `
			<button class="active-btn" id="btn-horizontal">
				Horizontal
			</button>
			<button id="btn-vertical">
				Vertical
			</button>
		`;
		this.body.appendChild(btnCtn);

		// adding event listeners for buttons to select direction for ship placement
		const btns = Array.from(document.querySelectorAll("button"));
		btns.map((btn) => {
			btn.addEventListener("click", () => {
				if (btn.classList == "") {
					for (let i = 0; i < btns.length; i++) {
						btns[i].classList.remove("active-btn");
					}

					btn.classList.add("active-btn");
				}
			});
		});
	}

	static loadShipSelection() {
		const shipSelectionCtn = document.createElement("section");
		shipSelectionCtn.id = "ship-selection-ctn";

		for (let i = 0; i < this.playerOne.ships.length; i++) {
			const currentShipCtn = document.createElement("div");
			const currentShip = this.playerOne.ships[i];

			currentShipCtn.classList.add("ship-ctn");
			currentShipCtn.addEventListener("click", () => {
				const allShipCtns = Array.from(document.querySelectorAll(".ship-ctn"));
				allShipCtns.map((shipCtn) => {
					shipCtn.classList.remove("active-placement");
					this.playerOne.ships.map((ship) => (ship.setting = false));
				});
				currentShipCtn.classList.add("active-placement");
				currentShip.setting = true;
			});

			for (let j = 0; j < this.playerOne.ships[i].length; j++) {
				const currentShipTile = document.createElement("div");
				currentShipTile.classList.add("placement-tile");
				currentShipCtn.appendChild(currentShipTile);
			}

			shipSelectionCtn.appendChild(currentShipCtn);
		}

		shipSelectionCtn.firstChild.classList.add("active-placement");
		this.playerOne.ships[0].setting = true;
		this.body.appendChild(shipSelectionCtn);
	}

	static loadHeader(page) {
		const h1 = document.createElement("h1");

		if (page === "setup") {
			h1.innerText = "Place your ships";
		} else {
			h1.innerText = "Error";
		}

		this.body.appendChild(h1);
	}

	static displayShipPlacementBoard(player) {
		const board = document.createElement("section");
		board.classList.add("gameboard");

		for (let i = 0; i < player.playerBoard.board.length; i++) {
			for (let j = 0; j < player.playerBoard.board[i].length; j++) {
				const tile = document.createElement("div");
				tile.classList.add(`${player.name}-tile`);
				tile.setAttribute("data-x", i);
				tile.setAttribute("data-y", j);
				board.appendChild(tile);
			}
		}

		this.boardCtn.appendChild(board);
	}

	static getShipSelectionLength() {
		const ships = Array.from(document.querySelectorAll(".ship-ctn"));

		for (let i = 0; i < ships.length; i++) {
			if (ships[i].classList == "ship-ctn active-placement") {
				return ships[i].childElementCount;
			}
		}
	}

	static getShipDirection() {
		const btns = Array.from(document.querySelectorAll("button"));
		for (let i = 0; i < btns.length; i++) {
			if (btns[i].classList == "active-btn") {
				return btns[i].innerText.toLowerCase();
			}
		}
	}

	static shipPlacementHover() {
		const boardTiles = Array.from(document.querySelectorAll(".p1-tile"));
		boardTiles.map((tile) => {
			tile.addEventListener("mouseover", () => {
				let length = this.getShipSelectionLength();
				let direction = this.getShipDirection();

				tile.classList.add("direct-hover");

				if (direction === "horizontal") {
					if (length > 1 && tile.dataset.y < 9) {
						const tile2 = tile.nextSibling;
						tile2.classList.add("indirect-hover");

						if (length > 2 && tile.dataset.y < 8) {
							const tile3 = tile2.nextSibling;
							tile3.classList.add("indirect-hover");

							if (length > 3 && tile.dataset.y < 7) {
								const tile4 = tile3.nextSibling;
								tile4.classList.add("indirect-hover");

								if (length > 4 && tile.dataset.y < 6) {
									const tile5 = tile4.nextSibling;
									tile5.classList.add("indirect-hover");
								}
							}
						}
					}
				} else if (direction === "vertical") {
					if (length > 1 && tile.dataset.x < 9) {
						const tile2 = boardTiles[boardTiles.indexOf(tile) + 10];
						tile2.classList.add("indirect-hover");

						if (length > 2 && tile.dataset.x < 8) {
							const tile3 = boardTiles[boardTiles.indexOf(tile2) + 10];
							tile3.classList.add("indirect-hover");

							if (length > 3 && tile.dataset.x < 7) {
								const tile4 = boardTiles[boardTiles.indexOf(tile3) + 10];
								tile4.classList.add("indirect-hover");

								if (length > 4 && tile.dataset.x < 6) {
									const tile5 = boardTiles[boardTiles.indexOf(tile4) + 10];
									tile5.classList.add("indirect-hover");
								}
							}
						}
					}
				}
			});

			tile.addEventListener("mouseleave", () => {
				let length = this.getShipSelectionLength();
				let direction = this.getShipDirection();

				tile.classList.remove("direct-hover");

				if (direction === "horizontal") {
					if (length > 1 && tile.dataset.y < 9) {
						const tile2 = tile.nextSibling;
						tile2.classList.remove("indirect-hover");

						if (length > 2 && tile.dataset.y < 8) {
							const tile3 = tile2.nextSibling;
							tile3.classList.remove("indirect-hover");

							if (length > 3 && tile.dataset.y < 7) {
								const tile4 = tile3.nextSibling;
								tile4.classList.remove("indirect-hover");

								if (length > 4 && tile.dataset.y < 6) {
									const tile5 = tile4.nextSibling;
									tile5.classList.remove("indirect-hover");
								}
							}
						}
					}
				} else if (direction === "vertical") {
					if (length > 1 && tile.dataset.x < 9) {
						const tile2 = boardTiles[boardTiles.indexOf(tile) + 10];
						tile2.classList.remove("indirect-hover");

						if (length > 2 && tile.dataset.x < 8) {
							const tile3 = boardTiles[boardTiles.indexOf(tile2) + 10];
							tile3.classList.remove("indirect-hover");

							if (length > 3 && tile.dataset.x < 7) {
								const tile4 = boardTiles[boardTiles.indexOf(tile3) + 10];
								tile4.classList.remove("indirect-hover");

								if (length > 2 && tile.dataset.x < 6) {
									const tile5 = boardTiles[boardTiles.indexOf(tile4) + 10];
									tile5.classList.remove("indirect-hover");
								}
							}
						}
					}
				}
			});
		});
	}
}

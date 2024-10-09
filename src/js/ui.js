export { UI };
import { Player } from "./player";

class UI {
	static playerOne = new Player("p1", true);
	static playerTwo = new Player("p2", false);
	static body = document.querySelector("body");
	static boardCtn = document.createElement("main");

	static loadSetup() {
		this.body.innerHTML = "";
		this.boardCtn.innerHTML = "";
		this.addConfirmationMenu();
		this.loadHeader("setup");
		this.boardCtn.id = "gameboard-ctn";
		this.loadButtonSelection();
		this.loadShipSelection();
		this.displayShipPlacementBoard(this.playerOne);
		this.body.appendChild(this.boardCtn);
		this.shipPlacementHover();
		this.getShipDirection();
		this.shipPlacementClick();
	}

	static loadBattle() {
		this.body.innerHTML = "";
		this.boardCtn.innerHTML = "";
		this.loadHeader("p1");
		this.boardCtn.id = "gameboard-ctn";
		this.setPlayerTwoShips();
		this.displayShipPlacementBoard(this.playerOne);
		this.displayShipPlacementBoard(this.playerTwo);
		this.body.appendChild(this.boardCtn);
		this.updateTileStyling(
			this.playerOne.playerBoard.board,
			this.playerOne.name
		);
		this.loadAttackEventListener();
	}

	static shipPlacementClick() {
		const boardTiles = Array.from(document.querySelectorAll(".p1-tile"));
		boardTiles.forEach((tile) => {
			tile.addEventListener("click", () => {
				const xCoord = Number(tile.dataset.x);
				const yCoord = Number(tile.dataset.y);
				const direction = this.getShipDirection();
				const length = this.getShipSelectionLength();
				const newShipPosition = [];
				const oldShipPosition = [];

				// putting the new coordinates in an array
				for (let i = 0; i < length; i++) {
					if (direction === "horizontal") {
						newShipPosition.push([xCoord, yCoord + i]);
					} else if (direction === "vertical") {
						newShipPosition.push([xCoord + i, yCoord]);
					}
				}

				if (this.playerOne.checkValidShipPlacement(newShipPosition)) {
					switch (length) {
						// if any ship other than size 3 are selected, will set position
						case 2:
						case 4:
						case 5:
							this.playerOne.ships.forEach((ship) => {
								if (ship.length === length) {
									if (ship.position.length > 0) {
										ship.position.forEach((coordinate) =>
											oldShipPosition.push(coordinate)
										);
									}

									ship.position = {
										x: xCoord,
										y: yCoord,
										dir: direction,
									};
									ship.isSet = true;
								}
							});
							break;

						// if either of the size 3 ships are selected, will set positon of the selected one
						case 3:
							const ship = document.querySelector(".active-placement");

							if (ship.id === "ship3-1") {
								if (this.playerOne.ships[1].position.length > 0) {
									this.playerOne.ships[1].position.forEach((coordinate) =>
										oldShipPosition.push(coordinate)
									);
								}

								this.playerOne.ships[1].position = {
									x: xCoord,
									y: yCoord,
									dir: direction,
								};
								this.playerOne.ships[1].isSet = true;
							} else if (ship.id === "ship3-2") {
								if (this.playerOne.ships[2].position.length > 0) {
									this.playerOne.ships[2].position.forEach((coordinate) =>
										oldShipPosition.push(coordinate)
									);
								}

								this.playerOne.ships[2].position = {
									x: xCoord,
									y: yCoord,
									dir: direction,
								};
								this.playerOne.ships[2].isSet = true;
							}
							break;
					}

					this.playerOne.updateBoardState(oldShipPosition);
					this.updateTileStyling(
						this.playerOne.playerBoard.board,
						this.playerOne.name
					);
				}

				// add the end of click event, see if all ships are set
				if (this.checkAllShipsPlaced(this.playerOne.ships)) {
					this.loadConfirmationMenu();
				}
			});
		});
	}

	static checkAllShipsPlaced(arr) {
		return arr.every((ship) => ship.isSet === true);
	}

	// this will run after board is updated to reset styles for all tiles and then apply only to tiles that have been selected
	static updateTileStyling(board, player) {
		let tiles;

		if (player === "p1") {
			tiles = Array.from(document.querySelectorAll(".p1-tile"));
		} else {
			tiles = Array.from(document.querySelectorAll(".p2-tile"));
		}

		tiles.forEach((tile) => {
			tile.classList.remove("ship-placed");
		});

		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (player !== "p2" && board[i][j] === "A") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("ship-placed");
				} else if (board[i][j] === "X") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("hit");
				} else if (board[i][j] === "O") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("miss");
				}
			}
		}
	}

	static addConfirmationMenu() {
		this.body.innerHTML = `
		<div id="confirmation-menu-bg">
			<div id="confirmation-menu">
				<p>All ships have been placed.</p>
				<h3>Continue?</h3>
				<div id="confirmation-btns">
					<button id="confirmation-yes">Yes</button>
					<button id="confirmation-no">No</button>
				</div>
			</div>
		</div>
		`;
	}

	static loadConfirmationMenu() {
		const menubg = document.querySelector("#confirmation-menu-bg");
		menubg.style.display = "flex";

		const yesBtn = document.querySelector("#confirmation-yes");
		const noBtn = document.querySelector("#confirmation-no");

		yesBtn.addEventListener("click", () => {
			// load both boards to play the game
			this.loadBattle();
		});

		noBtn.addEventListener("click", () => {
			// reload board to set ship positions
			this.playerOne.clear();
			this.loadSetup();
		});
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

			// add unique id to the 3 length ships
			if (shipSelectionCtn.childElementCount === 1) {
				currentShipCtn.id = "ship3-1";
			} else if (shipSelectionCtn.childElementCount === 2) {
				currentShipCtn.id = "ship3-2";
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
		} else if (page === "p1") {
			h1.innerText = "Player One, make your move.";
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

	static setPlayerTwoShips() {
		for (let i = 0; i < this.playerTwo.ships.length; i++) {
			const ship = this.playerTwo.ships[i];

			while (ship.position.length === 0) {
				const newShipPosition = [];

				// randomly getting the x coordinate
				let xCoord = Math.floor(Math.random() * 10);

				// randomly getting the y coordinate
				let yCoord = Math.floor(Math.random() * 10);

				// randomly getting the direction
				let direction =
					Math.floor(Math.random() * 2) === 0 ? "vertical" : "horizontal";

				for (let i = 0; i < ship.length; i++) {
					if (direction === "horizontal") {
						newShipPosition.push([xCoord, yCoord + i]);
					} else if (direction === "vertical") {
						newShipPosition.push([xCoord + i, yCoord]);
					}
				}

				if (this.playerTwo.checkValidShipPlacement(newShipPosition)) {
					ship.position = {
						x: xCoord,
						y: yCoord,
						dir: direction,
					};

					ship.isSet = true;
				}
			}

			this.playerTwo.updateBoardState();
		}
	}

	static loadAttackEventListener() {
		const tiles = Array.from(document.querySelectorAll(".p2-tile"));

		tiles.forEach((tile) => {
			// will need to add if statement that checks if tile already has "hit" or "miss" class added so it doesn't apply the hover class
			tile.addEventListener("mouseover", () => {
				if (
					!tile.classList.contains("hit") &&
					!tile.classList.contains("miss")
				) {
					tile.classList.add("direct-hover");
				}
			});

			tile.addEventListener("mouseleave", () => {
				tile.classList.remove("direct-hover");
			});

			tile.addEventListener("click", () => {
				if (
					!tile.classList.contains("hit") &&
					!tile.classList.contains("miss")
				) {
					const xCoord = Number(tile.dataset.x);
					const yCoord = Number(tile.dataset.y);

					tile.classList.remove("direct-hover");

					// update ps ships state
					let hitStatus = this.playerTwo.ships.some((ship) => {
						let hitResult = ship.hit(xCoord, yCoord);
						let sink = ship.isSunk();

						if (hitResult) {
							if (sink) {
								const h1 = document.querySelector("h1");
								h1.innerText = "Player One: Hit & Sunk";
							} else {
								const h1 = document.querySelector("h1");
								h1.innerText = "Player One: Hit";
							}

							return true;
						}

						return false;
					});

					if (!hitStatus) {
						const h1 = document.querySelector("h1");
						h1.innerText = "Player One: Miss";
					}

					// update p2 board state
					this.playerTwo.playerBoard.receiveAttack(xCoord, yCoord);

					// update p2 board UI
					this.updateTileStyling(
						this.playerTwo.playerBoard.board,
						this.playerTwo.name
					);

					// after each turn, playerTwo will randomly select a tile
					this.playerTwoAttack();

					console.log(this.playerTwo.ships);
				}
			});
		});
	}

	static playerTwoAttack() {
		let correctAttack = false;
		while (!correctAttack) {
			// randomly getting the x coordinate
			let xCoord = Math.floor(Math.random() * 10);

			// randomly getting the y coordinate
			let yCoord = Math.floor(Math.random() * 10);

			if (
				this.playerOne.playerBoard.board[xCoord][yCoord] == "-" ||
				this.playerOne.playerBoard.board[xCoord][yCoord] == "A"
			) {
				this.playerOne.playerBoard.receiveAttack(xCoord, yCoord);

				this.updateTileStyling(
					this.playerOne.playerBoard.board,
					this.playerOne.name
				);

				correctAttack = true;
			}
		}
	}
}

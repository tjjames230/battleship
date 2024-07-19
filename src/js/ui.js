export { UI };
import { Player } from "./player";

class UI {
	static playerOne = new Player("p1", true);
	static playerTwo = new Player("p2", false);

	static loadHome() {
		this.placeShips();
	}

	static placeShips() {
		this.drawBoard(this.playerOne);
		this.drawBoard(this.playerTwo);
		this.addTileEventListeners(this.playerOne);
		this.addTileEventListeners(this.playerTwo);
	}

	static drawBoard(player) {
		const body = document.querySelector("body");
		const board = document.createElement("section");
		board.classList.add("gameboard");
		body.appendChild(board);

		for (let i = 0; i < player.playerBoard.board.length; i++) {
			for (let j = 0; j < player.playerBoard.board[i].length; j++) {
				const tile = document.createElement("div");
				tile.classList.add(`${player.name}-tile`);
				tile.setAttribute("data-x", i);
				tile.setAttribute("data-y", j);
				board.appendChild(tile);
			}
		}
	}

	static addTileEventListeners(player) {
		const tiles = Array.from(document.querySelectorAll(`.${player.name}-tile`));

		tiles.map((tile) => {
			tile.addEventListener("click", () => {
				console.log(tile.dataset.x, tile.dataset.y);
			});
		});
	}
}

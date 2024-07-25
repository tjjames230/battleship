export { UI };
import { Player } from "./player";

class UI {
	static playerOne = new Player("p1", true);
	static playerTwo = new Player("p2", false);
	static body = document.querySelector("body");

	static loadSetup() {
		const h1 = document.createElement("h1");
		h1.innerText = "Place your ships";
		this.body.appendChild(h1);
		this.displayShipPlacementBoard(this.playerOne);
	}

	static displayShipPlacementBoard(player) {
		const board = document.createElement("section");
		const boardCtn = document.createElement("main");
		boardCtn.id = "gameboard-ctn";
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

		boardCtn.appendChild(board);
		this.body.appendChild(boardCtn);
	}
}

export { UI };
import { Player } from "./player";

class UI {
	static playerOne = new Player("p1", true);
	static playerTwo = new Player("p2", false);

	static loadHome() {
		this.placeShips();
	}

	static placeShips() {
		console.log("hi");
		console.log(this.playerOne);
	}
}

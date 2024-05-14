const { Gameboard } = require("../src/js/components/gameboard");

describe("Gameboard", () => {
	let gameboardOne;
	let gameboardTwo;

	beforeEach(() => {
		gameboardOne = new Gameboard();
		gameboardTwo = new Gameboard();
	});

	test("gameboard successfully created", () => {
		expect(gameboardOne.board).toEqual([
			/* row will be the first input for position */
			/*------------0----1----2----3----4----5----6----7----8----9*/
			/* Row 0 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 1 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 2 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 3 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 4 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 5 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 6 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 7 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 8 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
			/* Row 9 */ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
		]);
	});
});

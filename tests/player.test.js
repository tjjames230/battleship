const { Player } = require("../src/js/components/player");

describe("Player", () => {
	let playerOne;
	let playerTwo;

	beforeEach(() => {
		playerOne = new Player("p1");
		playerTwo = new Player("p2");
	});

	test("player created successfully", () => {
		console.log(playerOne);
		expect(playerOne).toEqual({
			name: "p1",
			ships: [
				{ length: 2, _numberHit: 0, _position: [] },
				{ length: 3, _numberHit: 0, _position: [] },
				{ length: 4, _numberHit: 0, _position: [] },
				{ length: 4, _numberHit: 0, _position: [] },
				{ length: 5, _numberHit: 0, _position: [] },
			],
			board: [
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
			],
		});
	});
});

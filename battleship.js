// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;
var letterArray = ["A","B","C","D","E","F","G","H","I","J"];
var fireLocation;
var letter;
var letterSpot;
var number;
var hits = 0;
var hitCount = 17
//var message;
// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0, //uppercase
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9,
	"a": 0, //lowercase
	"b": 1,
	"c": 2,
	"d": 3,
	"e": 4,
	"f": 5,
	"g": 6,
	"h": 7,
	"i": 8,
	"j": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
		square.textContent = letterArray[j] + (i + 1);
		square.style.backgroundColor = "black";
		square.style.color = "white";
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

function fireTorpedo() {
	// Your game logic will go here!
	fireLocation = document.getElementById("input").value;
	letter = fireLocation.substring(0, 1); // get location of letter
	number = fireLocation.substring(1, 3) -1; // get location of number
	letterSpot = letterConversion[letter]; // converts letter to point

	if(gameBoard[letterSpot][number] == 0){ //if miss
		document.getElementById("s"+ letterSpot + number).style.backgroundColor = "white";
		document.getElementById("s"+ letterSpot + number).style.color = "black";
		document.getElementById("line2").textContent = "Miss...";
	}
	else if(gameBoard[letterSpot][number] == 1 && document.getElementById("s"+ letterSpot + number).style.backgroundColor != "red"){ //if hit
		document.getElementById("s"+ letterSpot + number).style.backgroundColor = "red";
		document.getElementById("info").textContent = hitCount + " hits left.";
		document.getElementById("line2").textContent = "Hit!";
		hits++; //closer to winning
		hitCount--; //lower display
	}

	document.getElementById("info").textContent = hitCount + " hits left."; //add text to board


	if(hits >= 17){
		gameBoardContainer.textContent = "YOU HAVE SUNK ALL MY BATTLESHIPS!" //gameover message
	}

	document.getElementById("input").value = null; //clear the textbox
}

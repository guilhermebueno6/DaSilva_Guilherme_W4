(() => {
	console.log("fired");

	// set up the puzzle pieces and boards
	//const is shor for constant -> variabes that shouldnt change
	const piecesBoard = document.querySelector(".puzzle-pieces"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
	dropZones = document.querySelectorAll(".drop-zone");

	let draggablePieces = piecesBoard.querySelectorAll("img");

	// WARNING If youre trying to target muktiple things at once, use the querySelectorAll!!!!!

//debugger;



function switchImage(){
	console.log(this);

//grab corresponding bgd image (0, 1, 2 or 3) and get it from the images folder (background1.jpg as an example)
	let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;


	//set the background image style on the dropzone container
	puzzleBoard.style.backgroundImage = `url(${bgImage})`;



//	debugger;
}
	puzzleSelectors.forEach(thumbnail => {
		thumbnail.addEventListener("click", switchImage);
	});

// loop through the draggable images
//this lets us drag stuff => not that hard
	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e){
			console.log('draggin...');

//dataTransfer object has two methods, setter and getter
//set data on the drag, and retrieve it on the drop
			e.dataTransfer.setData("text/plain",this.id);
		});
	});

	//this is the drag and drop functionality => this is for the drop zones
	dropZones.forEach(zone => {
		zone.addEventListener("dragover",function(e){
			e.preventDefault();
			console.log('dragged sumpin over me');
		});
		zone.addEventListener("drop",function(e){
			console.log('You dropped sumpin on me');

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log("You dragged", draggedElement);

			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});
	});

})();

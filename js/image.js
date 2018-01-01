
//previous needs to be saved in a variable to be compared to and then double in size, the new doube sized image is the new previous size
//original size needs to be saved in a variable to reset to
//first click doubles the original image, consequent clicks double the previous image



$($ => {


	let kitten = $("#image")
	
	let originalHeight = kitten.height()
	let originalWidth = kitten.width()

	let currentWidth = 
	let currentHeight =  


	kitten.on("click", () => {
		kitten.css({
			height: originalHeight * 2,
			width: originalWidth *2,
		
        });

	});

});




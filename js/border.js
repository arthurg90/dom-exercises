$(document).ready($ => {

	let border = $("#border");
	let black = true;

	border.on("click", () => {		
		border.css({
			borderColor: black ? "red" : "black",
		});

		black = !black;
	})
});




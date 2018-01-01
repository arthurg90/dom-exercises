const cols = 5;
let items = $(".item");

let row = index => Math.floor(index / cols);
let col = index => (index % cols);

items.each((index, el) => {
    let item = $(el);

    item.css({
    	top: row(index) * 50,
    	left: col(index) * 50,
    })
});



/*

let col1 = $(".col-1");
let col2 = $(".col-2");
let col3 = $(".col-3");
let col4 = $(".col-4");
let col5 = $(".col-5");

let row1 = $(".row-1");
let row2 = $(".row-2");
let row3 = $(".row-3");
let row4 = $(".row-4");
let row5 = $(".row-5");

col1.css({
    left: "0px",    
});

col2.css({
	left: "50px",
});

col3.css({
	left: "100px",
});

col4.css({
	left: "150px",
});

col5.css({
	left: "200px",
});


row1.css({
    top: "0px",    
});

row2.css({
	top: "50px",
});

row3.css({
	top: "100px",
});

row4.css({
	top: "150px",
});

row5.css({
	top: "200px",
});

*/
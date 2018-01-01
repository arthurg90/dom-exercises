// let firstList = $(".js__first-list");

// let secondList = $(".js__second-list");

let main = $("#main");

let side = $("#sidebar");

let head = $("#header");

let body = $("body");



let paragraphs = main.find("p, ul");

paragraphs.remove();

let paraOne = side.first("p");
paraOne.remove();


let jumbotron = $(".jumbotron");
let paragraph = jumbotron.find("p")

paragraph.remove();

let currentTime = new Date();
let hours = currentTime.getHours(); // 
let mins = currentTime.getMinutes(); // 


jumbotron.append(hours+ ":" +mins);


const imagePath = "images/";

let title = document.getElementById("title");
let dice1 = document.getElementById("dice-1");
let dice2 = document.getElementById("dice-2");
let button = document.getElementById("btn");
const redFlagImg = "<img src='images/redFlag.png'>";

button.addEventListener("click", () => {
    let randomNumber1 = Math.ceil(Math.random() * 6);
    let randomNumber2 = Math.ceil(Math.random() * 6);

    dice1.setAttribute("src", `${imagePath}dice${randomNumber1}.png`);
    dice2.setAttribute("src", `${imagePath}dice${randomNumber2}.png`);
    
    if (randomNumber1 > randomNumber2) {
        title.innerHTML = redFlagImg + " Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        title.innerHTML =  "Player 2 Wins! " + redFlagImg;
    }
    else {
        title.innerHTML = redFlagImg + " Draw!";
    }
});

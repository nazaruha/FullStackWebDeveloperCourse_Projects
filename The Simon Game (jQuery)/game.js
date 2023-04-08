const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let isGameStarted = false;
let currentLevel = 0;

$(document).on("keydown", () => {
    if (!isGameStarted) {
        nextSequence();
        isGameStarted = !isGameStarted;
    }
})

$(".square").on("click", function(event) {
    const clickedColor = $(event.target).attr("id");
    userClickedPattern.push(clickedColor);
    animatePress(clickedColor);
    checkAnswer(userClickedPattern.length - 1);
})

function animatePress(currentColor) {
    let obj = $(`#${currentColor}`);
    obj.addClass("pressed");
    obj.css("background-color", "gray");
    setTimeout(function() {
        obj.removeClass("pressed");
        obj.css("background-color", currentColor);
    }, 120);
    playSound(currentColor);
}

function nextSequence() {
    $("h1").text(`Level ${++currentLevel}`);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    animateSquare(randomChosenColour);
    gamePattern.push(randomChosenColour);
    userClickedPattern = [];
}

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animateSquare(color) {
    $(`#${color}`).fadeToggle(120).fadeToggle(100);
    playSound(color);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (currentLevel + 1 == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
        return;
    }
    gameOver();
}

function gameOver() {
    $("body").css("background-color", "red");
    setTimeout(function() {
        $("body").css("background-color", "#011f3f");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    resetVariables();
}

function resetVariables() { // this func for correct game restart
    isGameStarted = false;
    currentLevel = 0;
    gamePattern = [];
    userClickedPattern = [];
}




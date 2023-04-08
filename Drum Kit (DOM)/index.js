let buttons = document.getElementsByClassName("drum");

window.addEventListener("load", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        })
    }
})

document.addEventListener("keydown", (event) => { // event - gets the event that triggers that function (you can name it as you wish)
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(button) {
    switch(button) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    let tool = document.querySelector(`.${currentKey}`);
    tool.classList.add("pressed");
    setTimeout(function() {
        tool.classList.remove("pressed"); // will compilate after 100 milli seconds
    }, 100);
}

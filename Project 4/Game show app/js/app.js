/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
let pressedKeys = [];

// selectedButton function will be called when key is selected, it will call the handleInteraction method and pass in a single letter as an argument
const selectedButton = (event) => {
    game.handleInteraction(event);
};

//Creating new instance of game class and starting the game when the button is clicked
const startBtn = document.getElementById('btn__reset');
startBtn.addEventListener('click', () => {
    game = new Game;
    game.startGame();
})

//Passing the key to selectedButton function when keys are pressed through keyboard. Filtering out the keys which are already selected.
window.addEventListener('keydown', (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (!pressedKeys.includes(event.key.toLowerCase())) {
            selectedButton(event.key.toLowerCase());
            pressedKeys.push(event.key.toLowerCase());
        }
    }
});

//Passing the key to selectedButton function when keys are clicked.
const keyboardBtn = document.getElementById('qwerty');
keyboardBtn.addEventListener('click', (event) => {
    if (event.target.className === 'key') {
        selectedButton(event.target.textContent);
        pressedKeys.push(event.target.textContent);
    }
});
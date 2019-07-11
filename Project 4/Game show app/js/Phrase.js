/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    // Accepts a phrase
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
       // Adds letter placeholders to the display when the game starts
        const board = document.getElementById('phrase');

        // Breaking into individual characters
        const letters = [...this.phrase];

        // Creating new li element and Iterate over the characters array
        letters.forEach(char => {
            const li = document.createElement('li');
            if (char === ' ') {
                li.className = 'hide space';
                // Otherwise add the class 'hide letter' with the character
            } else {
                li.className = `hide letter ${char}`;
                li.textContent = char;
            }
      // Append the list item to the unordered list in the board
            board.firstElementChild.appendChild(li);
        });
    }

    //Check the letter matches the letter selected by the player
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    getWord() {
        const letters = [...this.phrase];
        let word = "";
        letters.forEach(char => {
            word += char;
        });
        //alert(word);
        return word;
    }

    //displaying the corresponding letter if it matches with key clicked
    showMatchedLetter(letter) {
        // An array of the characters from the board
        const boardChars = document.getElementById('phrase').firstElementChild.children;
        // Loops over each character element from the board
        for (let i = 0; i < boardChars.length; i++) {
            // If the matching letter is the same as the character letter, then change the class name to 'show'
            if (boardChars[i].textContent.toLowerCase() === letter) {
                boardChars[i].classList.add('show');
       // If the matching letter is the same as the character letter, then change the class name to 'hide'
                boardChars[i].classList.remove('hide');
            }
        }
    }
}
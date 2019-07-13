/* Treehouse FSJS Techdegree
 * Project 4 -Urenwa Nwokiwu-OOP Game App
 * Game.js */

//This is the Game constructor and 
class Game {
  constructor() {
    // The number of missed guesses by the player
    this.missed = 0;
    // An array of phrases to use with the game
    this.phrases = [new Phrase('without music life would be a mistake'),
      new Phrase('music does not lie'),
      new Phrase('jazz music is americas past and future'),
      new Phrase('music to my ears'),
      new Phrase('The only truth is music'),
      new Phrase('music is one of the most powerful'),
      new Phrase('cry me a river'),
      new Phrase('jazz is smooth and cool'),
      new Phrase('do the hustle'),
      new Phrase('music to my ears'),
      new Phrase('The only truth is music')
    ];


    // Phrase instance with random phrase to use in the game
    this.activePhrase = null;
  }

  
  //returning random phrases from the phrases list
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }

  //disabling the clicked letters from the keypad and highlighting the correct ones on the phrase
  handleInteraction(letter) {
    const index = document.querySelectorAll('.key');
    if (this.activePhrase.checkLetter(letter)) {
      for (let i = 0; i < index.length; i++) {
        if (letter === index[i].textContent) {
          index[i].disabled = true;
          index[i].classList.add('chosen');
        }
      }
      this.activePhrase.showMatchedLetter(letter);
    } else {
      for (let i = 0; i < index.length; i++) {
        if (letter === index[i].textContent) {
          index[i].disabled = true;
          index[i].classList.add('wrong');
        }
      }
      this.removeLife();
    }
    if (this.checkForWin()) {
      this.gameOver('win');
    }
  }

  //removing hearts if the guesses are wrong
  removeLife() {
    const hearts = document.getElementById('scoreboard').firstElementChild;
    document.getElementsByClassName('tries')[0].remove();
    const lostLi = document.createElement('li');
    const lostHeart = document.createElement('img');
    lostHeart.src = "images/lostHeart.png";
    lostHeart.height = "35";
    lostHeart.width = "30";
    lostLi.appendChild(lostHeart);
    hearts.appendChild(lostLi);
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver('lose');
    }
  }

  //Checking all the words are correctly matched in the phrase
  checkForWin() {
    let LettersOfBoard = 0;
    const li = document.getElementById('phrase').firstElementChild.children;
    let DisplayLetters = 0;
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML !== '') {
        LettersOfBoard++;
      }
      if (li[i].classList.contains('show')) {
        DisplayLetters += 1;
      }
    }
    //alert(LettersOfBoard+' lettersofboard');
    //alert(DisplayLetters+' displayletters')
    if (DisplayLetters === LettersOfBoard) {
      return true;
    }

  }

  //displaying the corresponding messages for win and lose 
  gameOver(status) {
    document.getElementById('btn__reset').textContent = 'Play Again';
    const gameMessage = document.getElementById('game-over-message');
    const classChange = document.getElementById('overlay');
    if (status === 'win') {
      gameMessage.innerText = 'You win! The word was ' + this.activePhrase.getWord();;
      classChange.className = "win";
      classChange.style.display = 'flex';

    }
    if (status === 'lose') {
      //alert(this.activePhrase.getWord());
      gameMessage.innerText = 'Sorry, try again next time! The word was ' + this.activePhrase.getWord();
      classChange.className = "lose";
      classChange.style.display = 'flex';

    }
  }

  //resetting the keypad and the phrase once the game is over
  reset() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('overlay').className = "start";
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].classList.remove('chosen', 'wrong');
    }
    const lives = document.querySelectorAll('img');
    for (let i = 0; i < lives.length; i++) {
      lives[i].src = 'images/liveHeart.png';
      lives[i].height = "35";
      lives[i].width = "30";
      lives[i].parentNode.setAttribute("class", "tries");
    }
    const hearts = document.getElementById('scoreboard').firstElementChild;
    const ul = document.querySelector('#phrase').firstElementChild;
    while (ul.lastChild) {
      ul.removeChild(ul.lastChild);
    }
  }

  startGame() {
    this.reset();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
}

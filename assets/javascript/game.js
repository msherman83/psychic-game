var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var psychicLetter;
var userLetter;
var wins = 0;
var losses = 0;
var guessedLetters = 0;
var guessesLeft = 10;
var guessedSoFar = [];

// NEEDS TO CYCLE THROUGH ON KEY PRESS UNTIL GUESSES LEFT IS ZERO OR UNTIL A LETTER IS MATCHED.

// Guesses set to 10.
// Type any key to start game.

// Computer chooses a random letter (so far only choosing a number?)
psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(psychicLetter);
// User chooses a letter and it prints to guesses so far.
var userLetter = document.getElementById("guesses-so-far");

// Listening for key press from user.
window.addEventListener("keyup", userLetter, false);

// Add +1 to wins HTML (just updates whatever i have as the var wins.  Not adding to it)
function winsFunction(wins) {
  var elWins = document.getElementById('wins');
  elWins.innerHTML = wins;
}

// Adds 1 to losses HTML.
function lossesFunction(losses) {
  var elosses = document.getElementById('losses');
  elosses.innerHTML = losses;
}

// Subtract from guesses left.
function updateGuesses(reset = false) {
  guessesLeft = (reset) ? 10 : guessesLeft - 1;
  if (guessesLeft === 0) {
    addLoss();
    userLetter.textContent = '';
    guessesLeft = 10;
  }
  var elGuessesLeft = document.getElementById('guesses-left');
  elGuessesLeft.innerHTML = guessesLeft;
}

function addWin() {
  wins = wins + 1;
  winsFunction(wins);
}

function addLoss() {
  losses = losses + 1;
  lossesFunction(losses);
}


document.onkeyup = function (event) {

  if (!alphabet.includes(event.key.toLowerCase())) {
    return;
  }

  // If users letter matches computers letter add to Wins counter and restart guesses counter.
  if (psychicLetter === event.key.toLowerCase()) {
    console.log("You Win!");
    userLetter.textContent = '';
    addWin();
    updateGuesses(true);
  } else {
    // If users letter doesnt equal computers letter subtract from guesses left counter.
    userLetter.textContent = (userLetter.textContent.length) ? userLetter.textContent + ', ' + event.key : event.key
    console.log("Wrong!");
    updateGuesses();
  }

};



// Print out letters guessed so far on screen.  Once guesses left gets to zero start over.
function lettersGuessed(guessedSoFar) {

}
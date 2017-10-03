var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var psychicLetter;
var userLetter;
var wins = 5;
var losses = 0;
var guessedLetters = 0;
var guessesLeft = 10;
var guessedSoFar = [];

// NEEDS TO CYCLE THROUGH ON KEY PRESS UNTIL GUESSES LEFT IS ZERO OR UNTIL A LETTER IS MATCHED.

// Guesses set to 10.
// Type any key to start game.

// Computer chooses a random letter (so far only choosing a number?)
psychicLetter = Math.floor(Math.random() * alphabet.length);
console.log(psychicLetter);

// User chooses a letter and it prints to guesses so far.
var userLetter = document.getElementById("guesses-so-far");

// Listening for key press from user.
window.addEventListener("keyup", userLetter, false);


document.onkeyup = function(event) {
    userLetter.textContent = event.key;
  };

// If users letter matches computers letter add to Wins counter and restart guesses counter.
if (psychicLetter == userLetter) {
    console.log("You Win!") && wins + 1;
} else {
    console.log("You lose!");
}

// Add +1 to wins HTML (just updates whatever i have as the var wins.  Not adding to it)
function winsFunction(wins) {
    var elWins = document.getElementById('wins');
    elWins.innerHTML = wins;
}

// Adds 1 to losses HTML.
function lossesFunction(losses) {
    var elosses = document.getElementById('losses');
    ellosses.innerHTML = losses;
}

// If users letter doesnt equal computers letter subtract from guesses left counter.     

//if guesses left counter reaches zero a point goes into Losses counter and guesses start over.
if (guessesLeft === 0) {
    losses + 1 && guessesLeft === 10;
}

// Print out letters guessed so far on screen.  Once guesses left gets to zero start over.
function lettersGuessed(guessedSoFar) {
    
}
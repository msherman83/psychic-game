// ============================================
// MIKE SHERMAN'S PSYCHIC GAME WITH JAVASCRIPT
// ============================================



// Array of the alphabet for possible guesses.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables used.
var psychicLetter;
var userLetter;
var wins = 0; // Wins set to 0.
var losses = 0; // Losses set to 0.
var guessedLetters = 0;
var guessesLeft = 10;  // Guesses set to 10.


// Computer chooses a random letter.
psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(psychicLetter);

// User chooses a letter and it prints to guesses so far.
var userLetter = document.getElementById("guesses-so-far");

// Listening for key press from user.
window.addEventListener("keyup", userLetter, false);

// Add +1 to wins span tag.
function winsFunction(wins) {
  var elWins = document.getElementById('wins');
  elWins.innerHTML = wins;
}

// Adds 1 to losses span tag.
function lossesFunction(losses) {
  var elosses = document.getElementById('losses');
  elosses.innerHTML = losses;
}

// Subtract from guesses left.  If guesses left hits zero update losses and restart guesses left counter.
function updateGuesses(reset = false) {
  guessesLeft = (reset) ? 10 : guessesLeft - 1;
  if (guessesLeft === 0) {
    addLoss();
    userLetter.textContent = '';
    alert("You Lose!")
    guessesLeft = 10;
  }
  var elGuessesLeft = document.getElementById('guesses-left');
  elGuessesLeft.innerHTML = guessesLeft;
}

// function to add +1 to wins.
function addWin() {
  wins = wins + 1;
  winsFunction(wins);
}

// function to add +1 to losses.
function addLoss() {
  losses = losses + 1;
  lossesFunction(losses);
}

// Pressing a letter key triggers the following event.
document.onkeyup = function (event) {

  // If letter other than the alphabet is pressed return nothing.
  if (!alphabet.includes(event.key.toLowerCase())) {
    return;
  }

  // If users letter matches computers letter add to Wins counter and restart guesses counter.
  if (psychicLetter === event.key.toLowerCase()) {
    alert("You Win!");
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

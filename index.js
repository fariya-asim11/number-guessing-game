var secretNumber = Math.floor(Math.random() * 100) + 1;
    
function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);

  if (userGuess < secretNumber) {
    alert("Too low! Try again.");
  } else if (userGuess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You've guessed the number");
  }
}
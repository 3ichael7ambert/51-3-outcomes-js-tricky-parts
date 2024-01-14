function guessingGame(getGuessInput) {
  // Generate a random number between 1 and 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  let attempts = 0;
  let guessedNumber;

  // Function to check guess
  function checkGuess() {
    if (guessedNumber === secretNumber) {
      return `You win! You found ${guessedNumber} in ${attempts} guesses.`;
    } else if (guessedNumber < secretNumber) {
      return `${guessedNumber} is too low!`;
    } else {
      return `${guessedNumber} is too high!`;
    }
  }

  // Main loop
  do {
    // Get user input
    guessedNumber = getGuessInput();

    // Increment the attempts
    attempts++;

    // Check if the guessed number is correct
    console.log(checkGuess());

  } while (guessedNumber !== secretNumber);
}

// Dummy function for testing, replace it with actual user input logic
function getGuessInput() {
  return Math.floor(Math.random() * 100) + 1;
}

module.exports = { guessingGame, getGuessInput };

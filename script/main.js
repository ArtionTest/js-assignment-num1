alert(`
The Evil AI is here! We have to defeat him in a number guessing game.\n
Open your console and write 'game()' to begin.
How to open the console:\n
Windows/Linux -> F12 or Ctrl+Shift+I
Mac Chrome -> Cmd+Option+I
Mac Safari -> Cmd+Option+C
Mac Firefox -> Cmd+Option+K\n
Good luck!'`);
console.log(
  "Welcome to the game! I have picked a number between 1 and 100. You only have 10 attempts. GO!",
);
game();
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
  while (true) {
    let input = prompt("Guess a number between 1 and 100:");

    // If the user clicked Cancel, prompt() returns null
    if (input === null) {
      let wantsToQuit = confirm("Do you want to quit the game?");
      if (wantsToQuit) return null;
      else continue;
    }

    const isInteger = /^\d+$/.test(input);

    if (!isNaN(input) && input >= 1 && input <= 100 && isInteger) {
      return input;
    }
    alert("Invalid input. Please put a whole number between 1 and 100.");
  }
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
    return "Too low";
  } else if (playerGuess > correctNumber) {
    return "Too high";
  } else {
    return "correct";
  }
}

function game() {
  const correctNumber = generateRandomNumber();
  const maxAttempts = 10;
  let attempts = 0;

  while (attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts} / ${maxAttempts}`);

    let guess = getPlayerGuess();

    if (guess === null) {
      console.log("You quit the game. Your score: 0 points.");
      return;
    }

    let result = checkGuess(guess, correctNumber);

    if (result === "correct") {
      let score = (maxAttempts - attempts) * 10 + 10;

      console.log(`Congratulations! The number was ${correctNumber}.`);
      console.log(`You won in ${attempts} attempt(s).`);
      console.log(`Your score: ${score} points`);
      return;
    }

    console.log(`${result}, try again.`);
  }

  console.log(
    `Game over! You used all ${maxAttempts} attempts. The number was ${correctNumber}.`,
  );
  console.log("Your score: 0 points");
}

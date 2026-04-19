alert(`
The Evil AI is here! We have to defeat him in a number guessing game.

The game will start now!

(Optional) Open the console to see extra logs:
Windows/Linux -> F12 or Ctrl+Shift+J
Mac Chrome -> Cmd+Option+J
Mac Safari -> Cmd+Option+C
Mac Firefox -> Cmd+Option+K

Good luck!'`);
console.log(
  "Welcome to the game! I have picked a number between 1 and 100. You only have 10 attempts. GO!",
);
game();
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(attempt, maxAttempts, lastGuess) {
  while (true) {
    let message = `Attempt ${attempt}/${maxAttempts}`;

    if (lastGuess) {
      message += `\nLast result: ${lastGuess}`;
    }

    message += `\n\nGuess a number between 1 and 100:`;
    let input = prompt(message);

    if (input === null) {
      let wantsToQuit = confirm("Do you want to quit the game?");
      if (wantsToQuit) return null;
      else continue;
    }
    const isInteger = /^\d+$/.test(input);

    if (!isInteger) {
      alert(
        `"${input}" is not a valid number. Please enter whole numbers only (e.g. 42).`,
      );
      continue;
    }
    if (input < 1 || input > 100) {
      alert(
        `${input} is out of range. Please enter a number between 1 and 100.`,
      );
      continue;
    }
    return input;
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
  let lastResult;
  while (attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts} / ${maxAttempts}`);

    let guess = getPlayerGuess(attempts, maxAttempts, lastResult);

    if (guess === null) {
      console.log("You quit the game. Your score: 0 points.");
      return;
    }

    let result = checkGuess(guess, correctNumber);

    if (result === "correct") {
      let score = (maxAttempts - attempts) * 10 + 10;

      alert(`
        Congratulations! The Evil AI has been defeated!
        
        You guessed the number ${correctNumber} in ${attempts} attempt(s)!
        Your score: ${score} points`);
      console.log(`Congratulations! The number was ${correctNumber}.`);
      console.log(`You won in ${attempts} attempt(s).`);
      console.log(`Your score: ${score} points`);
      return;
    }
    lastResult = result;
    console.log(`${result}, try again.`);
  }
alert(`
    Game over! You used all ${maxAttempts} attempts. THE EVIL AI WINS!
    
    The number was ${correctNumber}.
    
    Your score: 0 points`);
  console.log(
    `Game over! You used all ${maxAttempts} attempts. The number was ${correctNumber}.`,
  );
  console.log("Your score: 0 points");
}

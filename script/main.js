//Open console & Call function "game();" to BEGIN
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    while (true) {
        let input = prompt("Guess a number between 1 and 100:");

        if (input === null) {
            let wantsToQuit = confirm("Do you want to quit the game?");
            if (wantsToQuit) return null;
            else continue;            
        }
        const isInteger = /^\d+$/.test(input);

        if (!isInteger) {
            alert(`"${input}" is not a valid number. Please enter whole numbers only (e.g. 42).`);
            continue;
        }
        if (input < 1 || input > 100) {
            alert(`${input} is out of range. Please enter a number between 1 and 100.`);
            continue;
        }
        return input;
    }
}
  
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
    return "Too low";} 
    else if (playerGuess > correctNumber) {
    return "Too high";} 
    else {
    return "correct";}
}

function game() {
    const correctNumber = generateRandomNumber();
    console.log(correctNumber);
    const maxAttempts = 10;                      
    let attempts = 0;                           

    console.log("Welcome to the game! I have picked a number between 1 and 100. You only have 10 attempts. GO!");

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

    console.log(`Game over! You used all ${maxAttempts} attempts. The number was ${correctNumber}.`);
    console.log("Your score: 0 points");
}

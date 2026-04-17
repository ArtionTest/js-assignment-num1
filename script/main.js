//Open console & Call function "game();" to BEGIN
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    while (true) {
        let input = prompt("Guess a number between 1 and 100:");
            let guess = parseInt(input);

        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        }       
        alert("Invalid input. Please put a whole number between 1 and 100.");
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
        let result = checkGuess(guess, correctNumber);

        if (result === "correct") {
            //Score: Every unused attempt = 10 points, plus 10 for winning.
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

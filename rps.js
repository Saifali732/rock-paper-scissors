let playerScore = 0;
let computerScore = 0;

document.querySelector('#score').textContent = `${playerScore} - ${computerScore}`;

// make reset button to reset the game
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#score').textContent = `${playerScore} - ${computerScore}`;
    document.querySelector('#results').textContent = "";
});
//function selects the move for the computer randomly
function computerPlay() {
    //generates a number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

//Plays one round of rps
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    let result = '';
    if (playerSelection === "rock" && computerSelection == "scissors" ||
        playerSelection === "paper" && computerSelection == "rock" ||
        playerSelection === "scissors" && computerSelection == "paper") {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (computerSelection === "rock" && playerSelection == "scissors" ||
        computerSelection === "paper" && playerSelection == "rock" ||
        computerSelection === "scissors" && playerSelection == "paper") {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } else {
        result = 'Tie!';
    }
    // display the result within the results div
    document.querySelector('#results').textContent = result;
    document.querySelector('#score').textContent = `${playerScore} - ${computerScore}`;
    // now check winner
    checkWinner();
}

// function to check if there is a winner in the game
function checkWinner() {
    // first make sure there is a winner
    if (playerScore < 5 && computerScore < 5) return;

    // display the output
    if (playerScore === 5) {
        // document.querySelector('#results').append("You Win!");
        document.querySelector('#results').textContent = "You Beat the Computer!";
    } else {
        // document.querySelector('#results').append("You Lose!");
        document.querySelector('#results').textContent = "You Lost to the Computer :("
    }
    playerScore = computerScore = 0;
}



// selects all of the button choices and listens for what the user picks to play 1 round
const choices = document.querySelector('#choices').querySelectorAll("button");
choices.forEach(button => button.addEventListener('click', function () {
    playRound(button.value);
}));

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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection == "scissors" ||
        playerSelection === "paper" && computerSelection == "rock" ||
        playerSelection === "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "rock" && playerSelection == "scissors" ||
        computerSelection === "paper" && playerSelection == "rock" ||
        computerSelection === "scissors" && playerSelection == "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'Tie!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    //play 5 rounds, keeping track of the score
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("rock, paper, or scissors?");
        const result = playRound(playerSelection, computerSelection);
        //update score if someone won the round
        if (result.charAt(4) === 'w') {
            playerScore++;
        } else if (result.charAt(4) === 'l') {
            computerScore++;
        }
        console.log(result);
        if (i != 4) {
            console.log(`Current Score is You: ${playerScore} Computer: ${computerScore}`);
        }
    }
    //report final scores and winner
    if (playerScore > computerScore) {
        console.log(`You Win! Final score: ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You Lose! Final score: ${playerScore} - ${computerScore}`);
    } else {
        console.log(`You Tied! Final score: ${playerScore} - ${computerScore}`);
    }
}
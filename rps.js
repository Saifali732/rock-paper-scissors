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
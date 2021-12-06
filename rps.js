//function selects the move for the computer randomly
function computerPlay() {
    //generates a number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}
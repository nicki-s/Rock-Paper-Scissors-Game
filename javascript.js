function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(4);
    randomNum = Math.floor(Math.random()*(max-min)) + min;

    if (randomNum == 1) {
        return "Rock";
    }
    else if (randomNum == 2) {
        return "Paper";
    }
    else if (randomNum == 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a Tie!";
    }
    else {
        return "Error";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

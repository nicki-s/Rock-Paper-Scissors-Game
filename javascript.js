function getComputerChoice() {
    const min = Math.ceil(1);
    const max = Math.floor(4);
    let randomNum = Math.floor(Math.random()*(max-min)) + min;

    if (randomNum == 1) {
        return "rock";
    }
    else if (randomNum == 2) {
        return "paper";
    }
    else if (randomNum == 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return tie;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" || 
             playerSelection.toLowerCase() == "paper" && computerSelection == "rock" || 
             playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return playerWins;
    }
    else {
        return computerWins;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let results = playRound(playerSelection, computerSelection);
        if (results == playerWins) {
            playerScore++;
        }
        else if (results == computerWins) {
            computerScore++;
        }
        else {
            console.log("No one wins this round!");
        }
        console.log("Current Scores: Player: " + playerScore + " Computer: " + computerScore);
    }
}

const tie = "It's a Tie!";
const playerWins = "You Win This Round!";
const computerWins = "Computer Wins This Round!";
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("Welcome to the game of Rock Paper Scissors!");
game();



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
    if (playerSelection == computerSelection) {
        return tie;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || 
             playerSelection == "paper" && computerSelection == "rock" || 
             playerSelection == "scissors" && computerSelection == "paper") {
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
        let playerSelection = prompt("Please enter your selection: ").toLowerCase();
        console.log("Your selection: " + playerSelection);
        let computerSelection = getComputerChoice();
        console.log("Computer's selection: " + computerSelection);
        let results = playRound(playerSelection, computerSelection);
        if (results == playerWins) {
            console.log(playerWins);
            playerScore++;
        }
        else if (results == computerWins) {
            console.log(computerWins);
            computerScore++;
        }
        else {
            console.log(tie);
            console.log("No one wins this round!");
        }
        console.log("Current Scores: Player: " + playerScore + " Computer: " + computerScore);
    }
    if (computerScore > playerScore) {
        console.log("Computer Wins the Game with a score of " + computerScore + "!");
    }
    else if (computerScore < playerScore) {
        console.log("You win the game with a score of " + playerScore + "!");
    }
    else {
        console.log("It's a tie! No one wins the game.");
    }
}

const tie = "It's a Tie!";
const playerWins = "You Win This Round!";
const computerWins = "Computer Wins This Round!";

console.log("Welcome to the game of Rock Paper Scissors!");

game();



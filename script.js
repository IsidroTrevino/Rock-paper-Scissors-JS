const prompt = require('prompt-sync')({ sigint: true });

let userpoints = 0;
let computerpoints = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getUserChoice() {
    let userChoice = prompt("Please choose rock, paper, or scissors.");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        console.log("Invalid choice. Please try again.");
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            computerpoints++;
            return "Computer wins!";
        } else {
            userpoints++;
            return "User wins!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            computerpoints++;
            return "Computer wins!";
        } else {
            userpoints++;
            return "User wins!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            computerpoints++;
            return "Computer wins!";
        } else {
            userpoints++;
            return "User wins!";
        }
    }
}

function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

for (let i = 0; i < 5; i++) {
    playGame();
}

if (userpoints > computerpoints) {
    console.log("User wins the game!");
} else if (userpoints < computerpoints) {
    console.log("Computer wins the game!");
} else {
    console.log("It's a tie game!");
}

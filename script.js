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

let yourThrow; 
let computerThrow;

function playGame(choice) {
  let userChoice = choice;
  let computerChoice = getComputerChoice();
  const display = document.getElementById('Choices');

  // Clear previous content, if any
  if (yourThrow) {
    display.removeChild(yourThrow);
  }
  if (computerThrow) {
    display.removeChild(computerThrow);
  }

  yourThrow = document.createElement('span');
  computerThrow = document.createElement('span');
  
  yourThrow.textContent = 'You threw: ' + userChoice;
  display.appendChild(yourThrow);

  computerThrow.textContent = 'The computer threw: ' + computerChoice;
  display.appendChild(computerThrow);

  const results = document.querySelector('#Results');
  
  // Update user and computer points
  determineWinner(userChoice, computerChoice);

  // Update text content of the points display
  const playerText = document.createElement('p');
  playerText.textContent = 'Your Points: ' + userpoints;

  const computerText = document.createElement('p');
  computerText.textContent = 'Computer Points: ' + computerpoints;

  // Clear previous content, if any
  results.innerHTML = '';

  // Append updated points to the results div
  results.appendChild(playerText);
  results.appendChild(computerText);

  const winner = document.createElement('p');

  if (computerpoints == 5) {
    results.removeChild(playerText);
    results.removeChild(computerText);
    computerpoints = 0;
    userpoints = 0;

    winner.textContent = 'La Computadora ha ganado esta partida!!!';
    results.appendChild(winner);
  } else if (userpoints == 5) {
    results.removeChild(playerText);
    results.removeChild(computerText);
    computerpoints = 0;
    userpoints = 0;

    winner.textContent = 'Tu has ganado esta partida!!!';

    results.appendChild(winner);
  }


}

const rockbtn = document.querySelector(".Options .rock");
const paperbtn = document.querySelector(".Options .paper");
const scissorsbtn = document.querySelector(".Options .scissors");

rockbtn.addEventListener("click", () => {
  playGame("rock");
});

paperbtn.addEventListener("click", () => {
  playGame("paper");
});

scissorsbtn.addEventListener("click", () => {
  playGame("scissors");
});

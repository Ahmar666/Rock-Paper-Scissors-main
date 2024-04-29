let player = 0;
let computer = 0;

function playGame() {
  let options = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }

  function rockPaperScissors(playerSelection, computerSelection) {
    switch (true) {
      case playerSelection === computerSelection:
        return "It's a Draw!";
      case (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper"):
        player++;
        return "You Win!";
      default:
        computer++;
        return "You Lose!";
    }
  }

  let playerSelection = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();

  if (!options.includes(playerSelection)) {
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
  } else {
    let computerSelection = getComputerChoice();
    console.log("Computer's choice:", computerSelection);
    console.log(rockPaperScissors(playerSelection, computerSelection));
  }
}

// Call the function to start the game
function playRounds() {
  for (let i = 0; i < 5; i++) {
    playGame();
  }
  console.log("Final Score - Player:", player, "Computer:", computer);
}

playRounds();

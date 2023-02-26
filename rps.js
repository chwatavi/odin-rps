function choiceToNum(choice){
  // Convert Rock, Paper, Scissors to 0, 1, 2 respectively
  // Output is null if the input is invalud
  switch (choice.toLowerCase()){
    case "rock":
      return 0;
      break;
    case "paper":
      return 1;
      break;
    case "scissors":
      return 2;
      break;
    default:
      return null;
  }
}

function numToChoice(num){
  // Convert number 0, 1, 2 to Rock, Paper, Scissors respectively
  switch (num){
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      return null;
  }
}

function getComputerChoice(){
  // Return randomly either Rock, Paper or Scisssors
  // Use an expression that reandomly generates 0, 1 or 2
  return numToChoice (Math.floor(Math.random() * 3));
}

function playRound(playerSelection, computerSelection) {
  // Output the winner declaration
  
  let outcome;
  let playerSelectionNum = choiceToNum(playerSelection);
  let computerSelectionNum = choiceToNum(computerSelection);

  // Subtract their choices numerically to determine the winner
  let winDeterminator = playerSelectionNum - computerSelectionNum
  switch ((winDeterminator + 3) % 3){
    case 0:
      outcome = `It's a draw! We both chose ${computerSelection}.`;
      break;
    case 1:
      outcome = `You win! ${numToChoice(playerSelectionNum)} beats ${computerSelection}!`;
      break;
    case 2:
      outcome = `You lose! ${computerSelection} beats ${numToChoice(playerSelectionNum)}!`;
      break;
    default:
      outcome = "There is error."
    }
    return outcome;
}

function game(){
  // Play 5 rounds of game
  for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Please enter Rock, Paper or Scissors.");
    if (choiceToNum(playerSelection) === null){
      alert("Invalid Input! Please Rock, Paper or Scissors.");
      continue;
    }
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
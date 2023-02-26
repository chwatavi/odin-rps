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
    case 3:
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

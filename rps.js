function getComputerChoice(){
  // Return randomly either Rock, Paper or Scisssors.
  switch (getRandomInt(3)){
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}
let choices = ["rock", "paper", "scissors"];

function computer_chose(choices) {
  return choices[ parseInt( (Math.random() * 10) % 3 ) ];
}

function verify_promt(p , choices) {
  if (choices.includes(p)) {
    return true;
  } else {
    return false;
  }
}

function winner(player_choice, comp_choice) {
  console.log(`comp_choice = ${comp_choice}`);
  console.log(`player_choice = ${player_choice}`);
  
  if (comp_choice == player_choice) {
    return 0; // means even
  } else if (
    (player_choice == "rock" && comp_choice == "scissors") ||
    (player_choice == "scissors" && comp_choice == "paper") ||
    (player_choice == "paper" && comp_choice == "rock")
  ) {
    return 1; // means you win
  } else {
    return -1; // means computer wins
  }
}

function playRound() {
  let your_choice = window.prompt(
    `enter your choice between these choices \"${choices.join(" | ")}\"`
  );
  your_choice = your_choice.toLowerCase();

  while (!verify_promt(your_choice , choices)) {
    your_choice = window.prompt(`bad choice it hase to be between these choices \"${choices.join(" | ")}\"`);
  }

  return winner(your_choice, computer_chose(choices));
}

let human_score = 0;
let computer_score = 0;

for (i = 0 ; i < 5 ; i++){
  win = playRound();
  switch (win){
    case 1 :  console.log(`you win this round\nyour score is ${++human_score} \ncomputer score is ${computer_score}`);break;
    case -1 : console.log(`you win this round\nyour score is ${human_score} \ncomputer score is ${++computer_score}`);break;
    default:  console.log(`that\'s even`);
  }
}
while( human_score === computer_score ){
  console.log(`additional round`);
  win = playRound();
  switch (win){
    case 1 :  console.log(`you win this round\nyour score is ${++human_score} \ncomputer score is ${computer_score}`);break;
    case -1 : console.log(`you win this round\nyour score is ${human_score} \ncomputer score is ${++computer_score}`);break;
    default:  console.log(`that\'s even`);
  }
  
}

if( human_score > computer_score ){
  console.log(`you win the game!! congradulations!!`);
}else{
  console.log(`sorry! you didn't win yet. Reload the page to play an other game`);
}
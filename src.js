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
    return "even";
  } else if (
    (player_choice == "rock" && comp_choice == "scissors") ||
    (player_choice == "scissors" && comp_choice == "paper") ||
    (player_choice == "paper" && comp_choice == "rock")
  ) {
    return "you win";
  } else {
    return "you lose";
  }
}

function playRound() {
  let your_choice = window.prompt(
    `enter your choice between these choices \"${choices.join(" | ")}\"`
  );

  while (!verify_promt(your_choice , choices)) {
    your_choice = window.prompt(`bad choice it hase to be between these choices \"${choices.join(" | ")}\"`);
  }

  console.log(winner(your_choice, computer_chose(choices)));
}

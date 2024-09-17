let choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function appendChildren(container, items) {
    for (let i = 0; i < items.length; i++) {
        container.appendChild(items[i]);
    }
    return;
}

function addButtons(container) {
    btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "buttonContainer");
    btns = [];
    btns.push(document.createElement("button"));
    btns[0].textContent = "Rock";

    btns.push(document.createElement("button"));
    btns[1].textContent = "Paper";

    btns.push(document.createElement("button"));
    btns[2].textContent = "Scissors";
    let i = 0;
    btns.forEach(btn => {
        i++;
        btn.setAttribute("class", `button button${i}`);
        btn.setAttribute("id", `button${i}`);

        btn.addEventListener("click", (e) => {
            switch(e.target.id){
                case "button1":
                    playGame("rock");
                    break;
                case "button2":
                    playGame("paper");
                    break;
                case "button3":
                    playGame("scissors");
                    break;
                default:
                    console.log("what the fuck is going on ??!!??");
                    break;
            }
        });
    });

    appendChildren(btnContainer, btns);

    container.appendChild(btnContainer);
}

function emtyContainer(container){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function computer_chose(choices) {
    return choices[parseInt((Math.random() * 10) % 3)];
}

function verify_promt(p, choices) {
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

function playGame(humanChoise){
    let computerChoise = computer_chose(choices);
    let win = winner(humanChoise, computerChoise);

    let gameDiv = document.querySelector("#game");
    let winnerContainer = document.querySelector("#winner");
    console.log(winnerContainer);

    emtyContainer(winnerContainer);

    let winnerLogger = document.createElement("h1");
    switch(win){
        case 1: winnerLogger.textContent = "You win !!";humanScore++;break;
        case 0: winnerLogger.textContent = "Thats even, you will make it next time";break;
        case -1: winnerLogger.textContent = "Sorry you didn't win yet, next time I am sure";computerScore++;break;
        default: winnerLogger.textContent = "What just happend ??!!??"
    }

    winnerContainer.appendChild(winnerLogger);
    //gameDiv.appendChild(winnerContainer);
    displayScore();
}

function displayScore(){
    scoreContainer = document.querySelector("#score");

    emtyContainer(scoreContainer);

    let humanScoreContainer = document.createElement("p");
    humanScoreContainer.textContent = `your score is ${humanScore}`;

    let computerScoreContainer = document.createElement("p");
    computerScoreContainer.textContent = `Computer score is ${computerScore}`

    scoreContainer.appendChild(humanScoreContainer);
    scoreContainer.appendChild(computerScoreContainer);
}

function playRound() {
    humanChoise = undefined;
    console.log("yess");
    
    let game = document.querySelector("#game");

    //to make sure game div is empty
    emtyContainer(game);

    //console.log(btns);
    addButtons(game);

    
    

    /*let your_choice = window.prompt(
        `enter your choice between these choices \"${choices.join(" | ")}\"`
    );
    your_choice = your_choice.toLowerCase();

    while (!verify_promt(your_choice, choices)) {
        your_choice = window.prompt(
            `bad choice it hase to be between these choices \"${choices.join(
                " | "
            )}\"`
        );
    }

    return winner(your_choice, computer_chose(choices));*/
}

/*let human_score = 0;
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
}*/

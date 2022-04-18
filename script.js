game();

/* Computer randomly plays rock, paper, or scissors. 
0 - Rock, 1 - Paper, 2 - Scissors */
function computerPlay(){
    let value = Math.floor(Math.random() * 3);
    if (value === 0){
        return "rock";
    } else if (value === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

/* Determines who wins the round */
function roundPlay(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "Tie";
        } else if (computerSelection === "paper"){
            return "You Lose";
        } else {
            return "You Win";
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You Win";
        } else if (computerSelection === "paper"){
            return "Tie";
        } else {
            return "You Lose";
        }
    } else { //Player decides Scissors
        if (computerSelection === "rock"){
            return "You Lose";
        } else if (computerSelection === "paper"){
            return "You Win";
        } else {
            return "Tie";
        }
    }
}

/* Creates a Best of 5 game and determines the winner of the game */
function game(){
    let playerWins = 0;
    let computerWins = 0;
    let result = "";
    for (let i = 0; i < 5; i++){ //Plays 5 rounds and keeps track of score
        let playerSelection = prompt("What would you like to play? Rock, paper, or scissors? ");
        result = roundPlay(playerSelection, computerPlay());
        alert(result);
        if (result === "You Win"){
            playerWins += 1;
        } else if (result === "You Lose"){
            computerWins += 1;
        }
        alert(`The score is ${playerWins} to ${computerWins}.`);
    }
    if (playerWins > computerWins){ //Determines who wins the series
        alert(`You win the series ${playerWins} to ${computerWins}!`);
    } else if (computerWins > playerWins){
        alert(`You lose the series ${playerWins} to ${computerWins}!`);
    } else {
        alert("It's a tie!");
    }
}
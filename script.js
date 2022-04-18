let playerSelection = prompt("What would you like to play? Rock, paper, or scissors? ");
alert(roundPlay(playerSelection, computerPlay()));

/* Computer randomly plays rock, paper, or scissors.
0 = Rock, 1 = Paper, 2 = Scissors */
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
            alert("Tie");
        } else if (computerSelection === "paper"){
            alert("You Lose");
        } else {
            alert("You Win");
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            alert("You Win");
        } else if (computerSelection === "paper"){
            alert("Tie");
        } else {
            alert("You Lose");
        }
    } else { //Player decides Scissors
        if (computerSelection === "rock"){
            alert("You Lose");
        } else if (computerSelection === "paper"){
            alert("You Win");
        } else {
            alert("Tie");
        }
    }
}
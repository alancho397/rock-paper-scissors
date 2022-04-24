let scorePlayer = 0;
let scoreComputer = 0;

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

function score(result){ //Keeps track of the score
    if (result === "You Win"){
        scorePlayer += 1;
    } else if (result === "You Lose"){
        scoreComputer += 1;
    }
}

let scoreTracker = document.getElementById('score-tracker');
let result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(){ //Every time the button is pressed, it plays a round of rock, paper, scissors
    score(roundPlay(button.className, computerPlay()))
    scoreTracker.textContent = `The score is ${scorePlayer} to ${scoreComputer}.`
    if (scorePlayer === 5){
        result.textContent = 'You are the winner!';
    }  else if (scoreComputer === 5){
        result.textContent = 'You\'ve lost!';
    }
    }
    ));
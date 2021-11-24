const scoreMessage = document.getElementById('scoreboard');
const rockSelection = document.getElementById('rock');
const paperSelection = document.getElementById('paper');
const scissorsSelection = document.getElementById('scissors');


let playerSelection = "";
let computerSelection = "";

let computerScore = 0;
let playerScore = 0;


rockSelection.addEventListener('click', () => { 
    scoreMessage.innerHTML = ""    
    playerSelection = "Rock";
    playRound(playerSelection, computerSelection);
    scoreCheck();
});

paperSelection.addEventListener('click', () => { 
    scoreMessage.innerHTML = ""    
    playerSelection = "Paper";
    playRound(playerSelection, computerSelection);
    scoreCheck();
});

scissorsSelection.addEventListener('click', () => { 
    scoreMessage.innerHTML = ""    
    playerSelection = "Scissors";
    playRound(playerSelection, computerSelection);
    scoreCheck();
});

function computerPlay() {
    let options=['Rock','Paper','Scissors']
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}
;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    scoreMessage.innerHTML = `Your choice ${playerSelection} Computer's Choice ${computerSelection}`;

    if (playerSelection === "Rock" && computerSelection === "Paper") { // taş - kağıt
        computerScore = computerScore + 1;
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`

    } else if (playerSelection === "Rock" && computerSelection === "Rock") { //taş -taş
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") { //taş - makas
        playerScore = playerScore + 1;
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") { //kağıt - makas
        computerScore = computerScore + 1;
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`
    } else if (playerSelection == "Paper" && computerSelection === "Paper") { //kağıt - kağıt
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") { //kağıt - taş
        playerScore = playerScore + 1;
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") { //makas -taş
        computerScore = computerScore + 1;
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`
    } else if(playerSelection === "Scissors" && computerSelection === "Scissors") { //makas - makas
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") { //makas-kağıt
        playerScore = playerScore + 1;
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}`
    }



}



function scoreCheck() {

if (computerScore == 5 || playerScore == 5 ) {
    if (computerScore > playerScore) {
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}<br>
        Game Over! You lost! `
        computerScore = 0;
        playerScore = 0;    

    } else if (playerScore > computerScore) {
        scoreMessage.innerHTML = `Your choice: ${playerSelection}<br> 
        Computer's Choice: ${computerSelection}<br>
        Scoreboard: ${playerScore} - ${computerScore}<br>
        Game Over! You won! `
        computerScore = 0;
        playerScore = 0;    


    }

}

  
}


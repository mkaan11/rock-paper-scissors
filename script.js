function computerPlay() {
    let options=['rock','paper','scissors']
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

scoreMessage = document.getElementById('scoreboard')
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = window.prompt("Enter your choice! \n Rock, Paper or Scissors").toLowerCase()
    computerSelection = computerPlay();
    console.log("Your choice: ", playerSelection," Computer choice: ", computerSelection);

    if (playerSelection === "rock" && computerSelection === "paper") { // taş - kağıt
        computerScore = computerScore + 1;
        console.log(`Computer has won! \n Your Score: ${playerScore} - Computer Score: ${computerScore} `);
    } else if (playerSelection === "rock" && computerSelection === "rock") { //taş -taş
        console.log(`It's a draw! \n Your Score: ${playerScore} - Computer Score: ${computerScore}`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") { //taş - makas
        playerScore = playerScore + 1;
        console.log(`You have won! \n Your Score: ${playerScore} - Computer Score: ${computerScore} `);
    } else if (playerSelection === "paper" && computerSelection === "scissors") { //kağıt - makas
        computerScore = computerScore + 1;
        console.log(`Computer has won! \n Your Score: ${playerScore} - Computer Score: ${computerScore} `);
    } else if (playerSelection == "paper" && computerSelection === "paper") { //kağıt - kağıt
        console.log(`It's a draw! \n Your Score: ${playerScore} - Computer Score: ${computerScore}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") { //kağıt - taş
        playerScore = playerScore + 1;
        console.log(`You have won! \n Your Score: ${playerScore} - Computer Score: ${computerScore} `);
    } else if (playerSelection === "scissors" && computerSelection === "rock") { //makas -taş
        computerScore = computerScore + 1;
        console.log(`Computer has won! \n Your Score: ${playerScore} - Computer Score: ${computerScore} `);
    } else if(playerSelection === "scissors" && computerSelection === "scissors") { //makas - makas
        console.log(`It's a draw! \n Your Score: ${playerScore} - Computer Score: ${computerScore}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") { //makas-kağıt
        playerScore = playerScore + 1;
        console.log(`You have won! \n Your Score: ${playerScore} - Computer Score: ${computerScore} `); 
    }



}



function game() {

    for (let highestScore = 0; highestScore < 5; ) {
        playRound();

        if (computerScore > playerScore) {
            highestScore = computerScore;
      } else if (playerScore > computerScore) {
         highestScore = playerScore;

        } else if (playerScore == computerScore);
           highestScore = playerScore // just pick one of them, doesn't really matter which one
    }

    if (computerScore > playerScore) {
        console.log(`Game Ended! You Lost!`);        
    } else if (computerScore < playerScore) {
        console.log(`Game Ended! You won! `)
    } else {
        console.log(`Game Ended! It's a draw!`)
    }

    computerScore = 0;
    playerScore = 0;    
}


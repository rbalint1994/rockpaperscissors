
const rps = ["rock", "paper", "scissors"]


let playerScore = 0;
let computerScore = 0;
for(i = 0; i < 5; i++){
    let playerSelection = prompt("Rock paper or scissors?").toLowerCase();
    let computerSelection = computerPlay();
   console.log(playRound(playerSelection, computerSelection));
}

function playRound(a, b) {
    if(a == b){
        console.log(`Player chose ${a}, computer chose ${b}`);
        console.log("It's a tie!")
        return `Player score: ${playerScore}, computer score: ${computerScore}`
    }else if(a == "rock" && b == "scissors" || a == "scissors" && b == "paper" || a == "paper" && b == "rock" ){
        console.log(`Player chose ${a}, computer chose ${b}`);
        playerScore += 1;
        console.log(`You Win! ${a.charAt(0).toUpperCase()+a.slice(1)} beats ${b}`)
        return `Player score: ${playerScore}, computer score: ${computerScore}`
    } else if(b == "rock" && a == "scissors" || b == "scissors" && a == "paper" || b == "paper" && a == "rock" ) {
        console.log(`Player chose ${a}, computer chose ${b}`);
        computerScore += 1;
        console.log(`You lose! ${b.charAt(0).toUpperCase()+b.slice(1)} beats ${a}!`)
        return `Player score: ${playerScore}, computer score: ${computerScore}`
        
    }else{
        return "Invalid value, try again!"
    }
  }

  function computerPlay(){
    let i = Math.floor(Math.random() * 3);
    return (rps[i])
}
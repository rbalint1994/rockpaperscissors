
function computerPlay(){
    let i = Math.floor(Math.random() * 3);
    return (rps[i])
}
const rps = ["rock", "paper", "scissors"]

const playerSelection = prompt("Rock paper or scissors?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function playRound(a, b) {
    if(a == b){
        console.log(`Player chose ${a}, computer chose ${b}`);
        return "It's a tie!"
    }else if(a == "rock" && b == "scissors" || a == "scissors" && b == "paper" || a == "paper" && b == "rock" ){
        console.log(`Player chose ${a}, computer chose ${b}`);
        return `You Win! ${a.charAt(0).toUpperCase()+a.slice(1)} beats ${b}`
    } else {
        console.log(`Player chose ${a}, computer chose ${b}`);
        return `You lose! ${b.charAt(0).toUpperCase()+b.slice(1)} beats ${a}!`
    }
  }
  

function getComputerChoice(){
    let rand = Math.random()*3;
    rand = Math.round(rand)
    if(rand === 0 ){
        return "rock";
    }
    else if(rand === 1){
        return "paper";
    }
    else{
        return "scissors"
    }
}
function getHumanChoice(h = prompt('Choose your Choice')){
    return h.toLowerCase();
}
let humanCounter = 0;
let computerCounter = 0;

function playRound(human, computer){
    if(human === 'rock' && computer == 'scissors'){
        humanCounter++;
    }
    else if(human === 'scissors' && computer == 'paper'){
        humanCounter++;
    }
    else if(human === 'paper' && computer == 'rock'){
        humanCounter++;
    }
    else if(human === computer){
        
    }
    else{
        computerCounter++;
    }
}
function getComputerChoice(){
    let rand = Math.random()*3;
    rand = Math.round(rand)
    if(rand === 0 ){
        return "Rock";
    }
    else if(rand === 1){
        return "Paper";
    }
    else{
        return "Scissors"
    }
}
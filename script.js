function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randIndex];
    document.getElementById('computer').textContent = computerChoice;
    return computerChoice; 
}

// Event listener for the select element
document.querySelector('.select').addEventListener('change', function() {
    const humanChoice = this.value; 
    const computerChoice = getComputerChoice();

    const roundResult = playRound(humanChoice, computerChoice);
    document.getElementById('result').textContent = `Result: ${roundResult}, Human: ${humanCounter}, Computer: ${computerCounter}`; 
});

let humanCounter = 0;
let computerCounter = 0;

function playRound(human, computer) {
    let result = "";

    if (human === computer) {
        result = "It's a tie!";
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'scissors' && computer === 'paper') ||
        (human === 'paper' && computer === 'rock')
    ) {
        result = "You win!";
        humanCounter++;
    } else {
        result = "Computer wins!";
        computerCounter++;
    }

    return result; // Return the result of the round
}

// Initial display of the computer's choice
getComputerChoice();

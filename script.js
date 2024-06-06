function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    document.getElementById('computer').textContent = choices[randIndex];
    return choices[randIndex]; // Return the computer's choice
}

// Event listener for when the select element changes
document.querySelector('.select').addEventListener('change', () => {
    const humanChoice = this.value;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    displayScore();

    
    for (const option of this.options) {
        option.disabled = option.value === humanChoice;
    }
});

let humanCounter = 0;
let computerCounter = 0;

function playRound(human, computer) {
    if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'scissors' && computer === 'paper') ||
        (human === 'paper' && computer === 'rock')
    ) {
        humanCounter++;
    } else if (human !== computer) {
        computerCounter++;
    }
}

function displayScore() {
    document.getElementById('result').textContent = `human score: ${humanCounter}, computer score: ${computerCounter}`;
}

// Initial computer choice display at the start
getComputerChoice();

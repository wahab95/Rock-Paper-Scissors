// Function to randomly select the computer's choice (rock, paper, or scissors)
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];             // Array of possible choices
    const randIndex = Math.floor(Math.random() * choices.length); // Generate a random index within the choices array
    const computerChoice = choices[randIndex];                // Get the choice at the random index
    document.getElementById('computer').textContent = computerChoice; // Display the computer's choice in the HTML
    return computerChoice;                                   // Return the computer's choice for further use
  }
  
  // Event listener that triggers when the user makes a selection from the dropdown
  document.querySelector('.select').addEventListener('change', function() {
    const humanChoice = this.value;                         // Get the user's choice from the selected option
    const computerChoice = getComputerChoice();              // Get the computer's choice
  
    const roundResult = playRound(humanChoice, computerChoice); // Determine the result of the round
    // Update the result display with the round outcome and the current scores
    document.getElementById('result').textContent = `Result: ${roundResult}, Human: ${humanCounter}, Computer: ${computerCounter}`; 
  });
  
  // Initialize score counters
  let humanCounter = 0;
  let computerCounter = 0;
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(human, computer) {
    let result = "";                                          // Initialize a variable to store the round result
  
    if (human === computer) {
      result = "It's a tie!";                              // If choices are the same, it's a tie
    } else if (
      (human === 'rock' && computer === 'scissors') ||       // Winning combinations for the human player
      (human === 'scissors' && computer === 'paper') ||
      (human === 'paper' && computer === 'rock')
    ) {
      result = "You win!";
      humanCounter++;                                        // Increment the human's score
    } else {
      result = "Computer wins!";                           // If not a tie or human win, the computer wins
      computerCounter++;                                      // Increment the computer's score
    }
  
    return result;                                          // Return the result of the round
  }
  
  // Display the computer's initial choice when the page loads
  getComputerChoice(); 
  
  // Initialize score counters
  let humanCounter = 0;
  let computerCounter = 0;
  
  
  
  // Function to play a single round of Rock Paper Scissors
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
    } else if (
        ( computer === 'rock' && human === 'scissors') ||       
        ( computer === 'scissors' && human === 'paper') ||
        ( computer === 'paper' && human === 'rock')
    ) {
        result = "Computer wins!";                           
        computerCounter++;                                      
    }
    
    return result;   
    

}  

  // Function to randomly select the computer's choice (rock, paper, or scissors)
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];             // Array of possible choices
    const randIndex = Math.floor(Math.random() * choices.length); // Generate a random index within the choices array
    const computerChoice = choices[randIndex];                // Get the choice at the random index
    document.getElementById('computer').textContent = computerChoice; // Display the computer's choice in the HTML
    return computerChoice;                                   // Return the computer's choice for further use
}
  

  
document.querySelector('.select').addEventListener('change', function() { 
    const humanChoice = this.value;                         
    const computerChoice = getComputerChoice();              

    const roundResult = playRound(humanChoice, computerChoice); 
    
     document.getElementById('result').textContent = `Result: ${roundResult}, Human: ${humanCounter}, Computer: ${computerCounter}`; 
});




  

  
  // Display the computer's initial choice when the page loads
getComputerChoice(); 
  
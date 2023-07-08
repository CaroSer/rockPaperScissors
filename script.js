// This code keeps track of wins and losses in a rock-paper-scissors game and displays the scores.

// Variable declarations
var wins = 0; // The number of wins
var loses = 0; // The number of losses
var options = ['rock', 'paper', 'scissors']; // Available choices 


// Generates a random choice from the options array
function randomChoice() {
var randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}


// Compares the player's choice with the computer's choice and displays the result
function compareChoices(playerChoice) {


// Get the selected images from the DOM
var selectedImg = document.getElementById('selectedImg');
var selectedImgComputer = document.getElementById('selectedImgComputer');


// Set the source of the selected images based on the choices
selectedImg.src = 'img/' + playerChoice + '.png';
selectedImgComputer.src = 'img/' + computerChoice + '.png';


// Delay the winner alert to allow the images to update
setTimeout(alertWinner, 100);


// Displays the winner or tie based on the choices
function alertWinner() {
    if (playerChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        alert("You lose! " + computerChoice + " beats " + playerChoice + ".");
        loses++;
        refreshScores();
        setTimeout(checkScores, 500);
    } else {
        alert("You win! " + playerChoice + " beats " + computerChoice + ".");
        wins++;
        refreshScores();
        setTimeout(checkScores, 500);
    }
}
}


// Checks the scores to determine if a player has reached 5 wins or losses
function checkScores() {
    if (wins === 5) {
    alert("You were the first to get 5 wins. You won!");
    loses = 0;
    wins = 0;
    refreshScores();
    } else if (loses === 5) {
    alert("Your opponent got 5 wins before you. You lost!");
    loses = 0;
    wins = 0;
    refreshScores();
    }
    }
    

    // Updates the scores displayed in the DOM
    function refreshScores() {
    document.getElementById('playerScore').textContent = wins;
    document.getElementById('computerScore').textContent = loses;
    }

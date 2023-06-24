function randomChoice(){
    let randomChoice= Math.floor(Math.random()*(3.9-1)+1);
    let computerChoice=options[randomChoice]
    return computerChoice
} 
/*
function compareChoices(){
    switch(true){

        case(playerChoiceLC==computerChoice):
        alert("It's a tie!");break;

        case (playerChoiceLC=="rock"):
            if(computerChoice=="paper"){ alert("You lose! Paper beats rock."); loses++}
            else{ alert("You win! Rock beats scissors."); wins++;}
            break;

            case (playerChoiceLC=="paper"):
            if(computerChoice=="scissors"){ alert("You lose! Scissors beats paper.");loses++}
            else{ alert("You win! Paper beats rock."); wins++;}
            break;

            case (playerChoiceLC=="scissors"):
            if(computerChoice=="rock"){ alert("You lose! Rock beats scissors.");loses++}
            else{ alert("You win! Scissors beats paper."); wins++;}
            break;

            default: alert("Check your choice and try again.");break;
    }
}
*/

var wins=0;
var loses=0;


document.addEventListener('DOMContentLoaded', function() {

    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');

    var options = [rock, paper, scissors];

    var selectedImg = document.getElementById('selectedImg');

    for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        let img = options[i].src;
        selectedImg.setAttribute('src', img);
    });
    }
});






/*

while(true){
if(wins==5){
    alert("You were the first to get 5 wins, you won!")
    wins=0
    loses=0
    break;
}

else if(loses==5){
    alert("Your opponent got 5 wins before you, you lost!")
    wins=0
    loses=0
    break;
}

else{
var playerChoice= prompt("Rock, paper or scissors?")
var computerChoice=randomChoice() 
var playerChoiceLC=playerChoice.toLowerCase()
compareChoices()
}
}*/


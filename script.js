function randomChoice(){
    let options= ["rock","paper","scissors"]
    let randomChoice= Math.floor(Math.random()*(3.9-1)+1);
    let computerChoice=options[randomChoice]
    return computerChoice
} 

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

var wins=0;
var loses=0;

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
}

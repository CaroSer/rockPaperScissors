
    let playerChoice= prompt("Rock, paper or scissors?")
    let computerChoice=randomChoice()


 function randomChoice(){
    let options= ["Rock","Paper","Scissors"]
    let randomChoice= Math.floor(Math.random()*(3.9-1)+1);
    console.log(randomChoice)
 } 
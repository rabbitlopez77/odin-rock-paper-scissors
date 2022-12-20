let computerResult = '';
let playerResult = '';
let computerRound = 0;
let playerRound = 0;
const getComputerChoice = () => {
    let result = (Math.floor(Math.random() * 3));
    if(result == 0){
        result = "rock"
    }else if(result == 1){
        result = "paper"
    }else {
        result = 'scissors'
    }
    return computerResult = result
}
const playerChoice =(choice)=>{
    return playerResult = choice
}
const results =()=> {
    let winner = '';
    if(computerResult === '' || playerResult === ''){
       return alert("Please make sure you made a choice and that the computer made a choice")
    }
    else if(computerResult == 'rock' && playerResult == 'rock'){
        winner = 'Draw'
    }else if(computerResult == 'rock' && playerResult == 'paper'){
        winner = 'You Won!'
        playerRound += 1;
        document.getElementById('playerRound').innerHTML= playerRound;
    }else if(computerResult == 'rock' && playerResult == 'scissors'){
        winner = "The Computer Beat You!"
        computerRound += 1
        document.getElementById('computerRound').innerHTML= computerRound;
    }else if(computerResult == 'paper' && playerResult == 'rock'){
        winner = 'The Computer Beat You!'
        computerRound += 1
        document.getElementById('computerRound').innerHTML= computerRound;
    }else if(computerResult == 'paper' && playerResult == 'paper'){
        winner = 'Draw'
    }else if(computerResult == 'paper' && playerResult == 'scissors'){
        winner = "You Won!"
        playerRound += 1;
        document.getElementById('playerRound').innerHTML= playerRound;
    }else if(computerResult == 'scissors' && playerResult == 'rock'){
        winner = 'You Won!'
        playerRound += 1;
        document.getElementById('playerRound').innerHTML= playerRound;
    }else if(computerResult == 'scissors' && playerResult == 'paper'){
        winner = 'The Computer Beat You!'
        computerRound += 1
        document.getElementById('computerRound').innerHTML= computerRound;
    }else if(computerResult == 'scissors' && playerResult == 'scissors'){
        winner = "Draw"
    }
    alert('The result is...'+ winner + 'The Computer chose: ' + computerResult + ' Your choice: ' + playerResult + '. ')
    game()
   return( computerResult = '',
    playerResult = '')
}
const game=()=>{
    if(computerRound == 5){
        computerRound = 0;
        playerRound = 0;
        document.getElementById('computerRound').innerHTML= 'You Lost in the Best of 5!'
    }else if(playerRound == 5){
        computerRound = 0;
        playerRound = 0;
        document.getElementById('playerRound').innerHTML= 'You Won in the Best of 5!'
}
}
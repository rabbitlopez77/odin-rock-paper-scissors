let computerResult = '';
let playerResult = '';

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
    if(computerResult == 'rock' && playerResult == 'rock'){
        winner = 'Draw'
    }else if(c == 'rock' && playerResult == 'paper'){
        winner = 'You Won!'
    }else if(computerResult == 'rock' && playerResult == 'scissors'){
        winner = "The Computer Beat You!"
    }else if(computerResult == 'paper' && playerResult == 'rock'){
        winner = 'The Computer Beat You!'
    }else if(computerResult == 'paper' && playerResult == 'paper'){
        winner = 'Draw'
    }else if(computerResult == 'paper' && playerResult == 'scissors'){
        winner = "You Won!"
    }else if(computerResult == 'scissors' && playerResult == 'rock'){
        winner = 'You Won!'
    }else if(computerResult == 'scissors' && playerResult == 'paper'){
        winner = 'The Computer Beat You!'
    }else if(computerResult == 'scissors' && playerResult == 'scissors'){
        winner = "Draw"
    }alert('The Computer chose: ' + computerResult + ' Your choice: ' + playerResult + '. ' + 'The result is...'+ winner)
    
    
}
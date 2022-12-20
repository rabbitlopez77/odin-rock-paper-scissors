const getComputerChoice = () => {
    let result = (Math.floor(Math.random() * 3));
    if(result == 0){
        result = "rock"
    }else if(result == 1){
        result = "paper"
    }else {
        result = 'scissors'
    }
    return alert(result)
}
const playerChoice =(choice)=>{
    
}
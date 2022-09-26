function getComputerChoise(){
    let randOutput = Math.round(Math.random()*2);
    switch (randOutput){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

console.log(getComputerChoise());
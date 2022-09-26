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
function getPlayerChoise(){
    let input = prompt("inter \n0-rock\n 1:paper \n 2:scissors");
    switch (input){
        case '0':
            return "rock";
        case '1':
            return "paper";
        case '2':
            return "scessor";
        default:
            return"invalid input";
    }
}

function main(){
    let computerChoise = getComputerChoise();
    let playerChoise = getPlayerChoise();

    return "you:-"+playerChoise+"|computer:-"+computerChoise;
}

console.log(main())
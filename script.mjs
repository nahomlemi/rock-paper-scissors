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
            return "scissors";
        default:
            return"invalid input";
    }
}

function main(){
    let computerChoise = getComputerChoise();
    let playerChoise = getPlayerChoise();

    let stats = "you:-"+playerChoise+"|computer:-"+computerChoise+" ";
    if (computerChoise == "rock" && playerChoise == "scissors"){
        return stats + "computer wins";
    }
    else if (computerChoise == "paper" && playerChoise == "rock"){
        return stats + "computer wins";
    }
    else if (computerChoise == "scissors" && playerChoise == "paper"){
        return stats + "computer wins";
    }

//computer wins

    else if (computerChoise == "rock" && playerChoise == "paper"){
        return stats + "player wins";
    }
    else if (computerChoise == "paper" && playerChoise == "scissors"){
        return stats + "player wins";
    }
    else if (computerChoise == "scissors" && playerChoise == "rock"){
        return stats + "player wins";
    }
    else{
        return stats + "draw"
    }
}

console.log(main())
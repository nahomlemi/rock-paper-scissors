let score = { computer:0, player:0}
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
    let input = document.querySelectorAll('.button');

    Array.from(input).forEach(function(buttons){
        buttons.addEventListener('click', fucntion(){
            if
        })
    })
}

/**
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

**/

function main(){
    let computerChoise = getComputerChoise();
    let playerChoise = getPlayerChoise();

    let stats = "you:-"+playerChoise+"|computer:-"+computerChoise+" ";
    if (computerChoise == "rock" && playerChoise == "scissors"){
        score.computer+=1;
        return stats + "computer wins!, rock beats scissors!";
    }
    else if (computerChoise == "paper" && playerChoise == "rock"){
        score.computer+=1;
        return stats + "computer wins! paper beats rock!";
    }
    else if (computerChoise == "scissors" && playerChoise == "paper"){
        score.computer+=1;
        return stats + "computer wins! scissors beat paper!";
    }

//computer wins

    else if (computerChoise == "rock" && playerChoise == "paper"){
        score.player+=1;
        return stats + "player wins, paper beats rock!";
    }
    else if (computerChoise == "paper" && playerChoise == "scissors"){
        score.player+=1;
        return stats + "player wins! scissors beat paper!";
    }
    else if (computerChoise == "scissors" && playerChoise == "rock"){
        score.player+=1;
        return stats + "player wins! rock beats scissors!";
    }
    else{
        return stats + "draw"
    }
}
function game(){
    for(let i = 0; i <5; i++ ){
        console.log(main())
    }
    if(score.player<score.computer){return 'computer won'}
    else if(score.player>score.computer){return 'player won'}
    else {return "draw"}
}
console.log(game());
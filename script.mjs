let scoreBoard={
    round:0, computer:0, player:0
}

let score = null;
let display = document.querySelector('#displayBox');
let scoreDisplay = document.querySelector('#scoreBoard')

function displayScore(){
    scoreDisplay.textContent = `Round:${scoreBoard.round}| Computer: ${scoreBoard.computer} |Player: ${scoreBoard.player}`;
    if (scoreBoard.round ==5){
        if(scoreBoard.computer<scoreBoard.player){
            display.textContent ='Game Over, you won!'; return;
        }else if(scoreBoard.computer>scoreBoard.player){
            display.textContent ='Game Over, you lost!'; return;
        }else{console.log('Game Over, draw')} return;
    }
}

function playGround(){
    score +=getComputerChoise();
    if(scoreBoard.round<5){
        switch (score){
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                scoreBoard.computer+=1;
                scoreBoard.round +=1;
                display.textContent = `round: ${scoreBoard.round} you lost!`;
                displayScore();
                return;
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                display.textContent = 'you won!';
                scoreBoard.player+=1;
                scoreBoard.round +=1;
                display.textContent = `round: ${scoreBoard.round} you won!`;
                displayScore();
                return;
            default:
                display.textContent = 'tie!';
                scoreBoard.round +=1;
                display.textContent = `round: ${scoreBoard.round} tie!`;
                displayScore();
                return;
        }
    }
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', function(element){
    score = 'rock';
    playGround();
})

let paper = document.querySelector('#paper');
paper.addEventListener('click', function(element){
    score = 'paper';
    playGround();
})

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(element){
    score = 'scissors';
    playGround();
})

function getComputerChoise(){
    let randOutput = Math.round(Math.random()*2);
    switch (randOutput){
        case 0:
            return 'rock';
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
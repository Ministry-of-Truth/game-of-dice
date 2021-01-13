//turn variable
let turn = 1;

//score variables

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneScoreDisplay = document.getElementById('playerOneScore');
let playerTwoScoreDisplay = document.getElementById('playerTwoScore');

//roll variables

let playerOneRoll = 0;
let playerTwoRoll = 0;
let playerOneRollDisplay = document.getElementById('playerOneRoll');
let playerTwoRollDisplay = document.getElementById('playerTwoRoll');

//reset func + buttons

let rollBtn = document.getElementById('roll')

function reset() {
    playerOneScoreDisplay.style.color = 'white'
    playerTwoScoreDisplay.style.color = 'white'
    turn = 1;
    playerOneRoll = 0;
    playerTwoRoll = 0;
    playerOneRollDisplay.innerHTML = playerOneRoll;
    playerTwoRollDisplay.innerHTML = playerTwoRoll;
    console.log('reset')
}

function resetScore() {
    PlayerOneScore = 0;
    PlayerTwoScore = 0;
    playerOneScoreDisplay.innerHTML = 0;
    playerTwoScoreDisplay.innerHTML = 0;
}

document.getElementById('reset').addEventListener('click', resetScore)

//get random number

function getRandomNumber() {
        let min = Math.ceil(1);
        let max = Math.floor(6);
        return Math.floor(Math.random() * (max - min) + min);
}

//player turn functions

function playerOneTurn() {
    playerOneRoll = getRandomNumber();
    playerOneRollDisplay.innerHTML = playerOneRoll;
    turn++;
}

function playerTwoTurn() {
    playerTwoRoll = getRandomNumber();
    playerTwoRollDisplay.innerHTML = playerTwoRoll;
    turn++;
}

//compare winner functions

function findWinner() {
    if (playerOneRoll > playerTwoRoll) {
        playerOneScore++
        playerOneScoreDisplay.innerHTML = playerOneScore
    } else if (playerOneRoll < playerTwoRoll) {
        playerTwoScore++
        playerTwoScoreDisplay.innerHTML = playerTwoScore
    }
}

let playerTurnIndicator = document.getElementsByClassName('turn-indicator')[0];

function playTheGame() {
    rollBtn.innerHTML = 'Roll!'
    playerTurnIndicator.innerHTML = 'Player One Turn!'
    if(turn === 1) {
        playerTurnIndicator.innerHTML = 'Player Two Turn!'
        playerOneTurn()
    } else if (turn === 2) {
        rollBtn.innerHTML = 'Results!'
        playerTurnIndicator.innerHTML = 'Time for results!'
        playerTwoTurn()
    } else if (turn === 3) {
        findWinner()
        reset()
    }
}

rollBtn.addEventListener('click', playTheGame);
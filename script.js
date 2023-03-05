//declare variables

const grid = document.getElementsByClassName('grid');
const player1 = "x";
const player2 = "o";
let turns = 0;
let gameState = ["", "", "", "", "", "", "", "", ""]; //each position equals a cell, allows checking for win conditions
let gameActive = false;
let player1Score = document.getElementById('player1-score');
let player2Score = document.getElementById('player2-score');
let winner = null;
let status = document.getElementById('game-status');


let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

let cells = document.getElementsByClassName('box')

let startButton = document.getElementById('start')

status.innerHTML = `Press start to begin`;
player1Score.innerHTML = 0;
player2Score.innerHTML = 0;

//make start button clickable
startButton.addEventListener('click', () => {
    // console.log(gameActive)
    gameActive = true;
    status.innerHTML = `Player 1's turn`
    console.log(gameActive)
});

//make reset button clickable
document.getElementById('reset').addEventListener('click', () => {
    // console.log(gameActive)
    gameActive = false;
    turns = 0;
    gameState = ["", "", "", "", "", "", "", "", ""];
    for (cell of cells){
        cell.innerHTML = "";
    };
    // location.reload();
    status.innerHTML = `Game board successfully reset`
    // console.log(gameActive)
    // console.log(gameState)
})

//declare win conditions
function checkWin () {
    // for (let i = 0; i < cells.length; i++) {
        if (gameState[0] && gameState[1] === gameState[0] && gameState[2] === gameState[0]) { //top row winner
            if (gameState[0] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[0] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
            
        } else if (gameState[3] && gameState[4] === gameState[3] && gameState[5] === gameState[3]) { //middle row winner
            if (gameState[3] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[3] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[6] && gameState[7] === gameState[6] && gameState[8] === gameState[6]) { //bottom row winner
            if (gameState[6] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[6] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[0] && gameState[3] === gameState[0] && gameState[6] === gameState[0]) { //left column winner
            if (gameState[0] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[0] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[1] && gameState[4] === gameState[1] && gameState[7] === gameState[1]) { //middle column winner
            if (gameState[1] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[1] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[2] && gameState[5] === gameState[2] && gameState[8] === gameState[2]) { //right column winner
            if (gameState[2] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[2] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[0] && gameState[4] === gameState[0] && gameState[8] === gameState[0]) { //top left to bottom right winner
            if (gameState[0] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[0] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[2] && gameState[4] === gameState[2] && gameState[6] === gameState[2]) { //top right to bottom left winner
            if (gameState[2] === 'x') {
                gameActive = false;
                winner = player1;
                player1Score.innerHTML++;
                status.innerHTML = `Player 1 wins!`;
            } else if (gameState[2] === 'o') {
                gameActive = false;
                winner = player2;
                player2Score.innerHTML++;
                status.innerHTML = `Player 2 wins!`
            } 
        } else if (gameState[0] && gameState[1] && gameState[2] && gameState[3] && gameState[4] && gameState[5] && gameState[6] && gameState[7] && gameState[8]) { //tie game
            gameActive = false;
            status.innerHTML = `It's a tie!`
        }
    // }
}


//iterate over each cell to make board playable
for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener('click', () => {

        if (gameActive === true && cells[i].innerHTML == ""){
            if (turns%2 === 0){ //what happens when it's player 1's turn
                cells[i].innerHTML = player1;
                gameState[i] = player1;               
                console.log(gameState);
                turns++;
                status.innerHTML = `Player 2's turn`; //update status before start of player 2's turn
                checkWin();
            } else { //what happens when it's not player 1's turn
                cells[i].innerHTML = player2;
                gameState[i] = player2;
                console.log(gameState);
                turns++;
                status.innerHTML = `Player 1's turn`; //update turn status before start of player 1's turn
                checkWin();
            }
        }
        else if (gameActive === false) { //what happens when all cells are filled
            status.innerHTML = `Please reset game board and press Start to begin`;
        }
    });

}



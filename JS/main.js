/*----- constants -----*/
//   1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
const colors = {
  'player1': null,
  'player-1': null,
}



//   1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
//console.log(winningCombinations[0])


/*----- state variables -----*/
//   2.1) Use a board array to represent the squares.
const boardArray = document.querySelector('#board')
//   2.2) Use a turn variable to remember whose turn it is.
let turn = 1;

//   2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.

let winner;


/*----- cached elements  -----*/
//3.1) Store the 9 elements that represent the squares on the page.
const squares = Array.from(document.querySelectorAll('.square'))
console.log(squares)


/*----- event listeners -----*/
function handleClick(evt) {
  // if there is something in the square - make sure it cant be changed
  console.log("inside handleclick")
  if (turn == 1){
    evt.target.textContent = 'X'
    console.log(evt.target.textContent)
    turn*= -1
  }else{
    evt.target.textContent ='O'
    turn *= -1
  }if 


  }







squares.forEach(function(square){
  square.addEventListener('click', handleClick)

});

/*----- functions -----*/
//4.1
//   function init() {
//    let boardArray = [
//     '', '' , '',
//     '', '', '',
//     '', '', ''
//   ]
//   boardArray.forEach(function(squares))
//   // console.log(boardArray)
// };

//4.1.2
// function playerTurn() {
//   let turn = 1
// }

// //4.1.3
// function gameWinner() {
//   let winner = ''
// }

// function renderBoard() {
//    squares.forEach((square, index)=>{
//       square.setAttribute('color', );


//   }
//    )}
//   console.log(square)

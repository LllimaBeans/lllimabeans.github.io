// Checkers
// Laura Lima
// Monday November 13th
//
// This is basically just a mediocre checkers board
// White moves first, you have to click the checker first and then
// click to where you're moving it
// It should only move one square diagonally at a time, unless capturing a piece
// I couldn't figure out the right movement of the checkers at first
// so I had chat gpt help with the logic of that, so if that code looks 
// a bit weird it's probably that

// Extra for experts: 
// I think the only actual new thing I've used was assigning "null" to a variable
// So just that I think. I'm writing this note after doing everything
// so I may nave forgot about something 

let board;
const BOARD_SIZE = 8;
let cellSize;
let currentPlayer = 1; 
// 1 is white player and -1 is red player
let selectedChecker = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  board = generateCheckerboard(BOARD_SIZE, BOARD_SIZE);
  placeCheckers(board);

  // size of board
  if (height > width) {
    cellSize = width / BOARD_SIZE;
  } else {
    cellSize = height / BOARD_SIZE;
  }
}

function draw() {
  background(220);
  displayBoard();
}

function mousePressed() {
  // getting mouse location in regards to cell
  let y = Math.floor(mouseY / cellSize);
  let x = Math.floor(mouseX / cellSize);

  if (selectedChecker === null) {
    // if there isn't any checker selected, check if there's a checker where the mouse is clicked
    if (isValidChecker(x, y)) {
      selectedChecker = { x, y };
    }
  } else {
    // if a checker is selected, try move it to clicked position
    if (isValidMove(selectedChecker.x, selectedChecker.y, x, y)) {
      moveChecker(selectedChecker.x, selectedChecker.y, x, y);
      selectedChecker = null;
    } else {
      // if the move isnt valid, deselect the checker
      selectedChecker = null; 
    }
  }
}

function isValidChecker(x, y) {
  // checking if there is in fact a checker where you click
  return (
    board[y][x] !== 0 &&
    ((currentPlayer === 1 && board[y][x] === 1) || (currentPlayer === -1 && board[y][x] === -1))
  );
}

function isValidMove(startX, startY, endX, endY) {
  // is the move valid in the rules of chess
  let dx = endX - startX;
  let dy = endY - startY;

  // Regular move
  if (Math.abs(dx) === 1 && Math.abs(dy) === 1 && board[endY][endX] === 0) {
    return true;
  }

  // jumping over opponents checker diagonally and killing it
  if (
    Math.abs(dx) === 2 &&
    Math.abs(dy) === 2 &&
    board[endY][endX] === 0 &&
    board[startY + dy / 2][startX + dx / 2] === -currentPlayer
  ) {
    return true;
  }

  return false;
}

function moveChecker(startX, startY, endX, endY) {
  // moving checker to clicked position 
  board[endY][endX] = board[startY][startX];
  board[startY][startX] = 0;

  // the removing of the opponents checker in a capture
  let dx = endX - startX;
  let dy = endY - startY;
  if (Math.abs(dx) === 2 && Math.abs(dy) === 2) {
    board[startY + dy / 2][startX + dx / 2] = 0;
  }

  currentPlayer *= -1; // Switch player turn
}

function displayBoard() {
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      if ((x + y) % 2 === 0) {
        // empty white sqaure
        fill("white");
      } else {
        // dark square
        fill("darkgrey");
      }

      rect(x * cellSize, y * cellSize, cellSize, cellSize);

      if (board[y][x] !== 0) {
        // checker
        fill(board[y][x] === 1 ? "white" : "red");
        stroke("black");
        ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize);
      }
    }
  }
}

function generateCheckerboard(cols, rows) {
  let newBoard = [];
  for (let y = 0; y < rows; y++) {
    newBoard.push([]);
    for (let x = 0; x < cols; x++) {
      if ((x + y) % 2 === 0) {
        // empty white square
        newBoard[y].push(0);
      } else {
        // empty dark square
        newBoard[y].push(0);
      }
    }
  }
  return newBoard;
}

function placeCheckers(board) {
  // place checkers on the dark squares in the top two and bottom two rows
  for (let y = 0; y < BOARD_SIZE; y++) {
    if (y < 2) {
      if (y % 2 === 0) {
        for (let x = 0; x < BOARD_SIZE; x += 2) {
          board[y][x] = -1; 
          board[y + 1][x + 1] = -1; 
          // red checker in the top rows
        }
      }
    } else if (y >= BOARD_SIZE - 2) {
      if ((y + 1) % 2 === 0) {
        for (let x = 1; x < BOARD_SIZE; x += 2) {
          board[y][x] = 1; 
          board[y - 1][x - 1] = 1; 
          // white checker in the bottom rows
        }
      }
    }
  }
}

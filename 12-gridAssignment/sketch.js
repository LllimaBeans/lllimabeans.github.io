// Mastermind
// Laura Lima
// Date
//
// Extra for Experts:
// uh

let grid;
let cellSize;
const CELL_NUMBER = 4;
let colourList = ["red", "yellow", "green", "blue", "purple", "pink", "black", "white"];
let currentRow = 0;
let codeToGuess = [];
let guessGrid = [];
let maxAttempts = 10;
let attemptsLeft = maxAttempts;
let gameWon = false;
let pegSize = 20;
let stopFunction = false;

// Setting up the canvas
function setup() {
  createCanvas(400, 400);
  grid = genGrid(CELL_NUMBER, attemptsLeft);

  cellSize = width / CELL_NUMBER;

  makeRandomCode();
  displayInstructions();
}

// Displaying the instructions and then the game
function draw() {
  background(220);
  displayGrid();
  displayGuessGrid();
  displayAttemptsLeft();
  displayWinLoseMessage();
}

// Changing the colour of the box
function mousePressed() {
  if (currentRow < CELL_NUMBER && !gameWon) {
    let y = Math.floor(mouseY / cellSize);
    let x = Math.floor(mouseX / cellSize);

    changeColour(x, y, currentRow);
  }
}

function keyPressed() {
  // Entering guess
  if (key === " " && currentRow < CELL_NUMBER && !gameWon) {
    if (guessGrid[currentRow].length === CELL_NUMBER) {
      currentRow++;
      if (currentRow === CELL_NUMBER) {
        checkGuess();
      }
    }
  } 
  // Restarting the game after a win or loss
  else if (key === "r" && (gameWon || attemptsLeft === 0)) {
    resetGame();
  }
  // Starting the game and hiding instructions
  else if (key === "s") {
    stopFunction = !stopFunction;
  }
}

// Making the grid to use
function genGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

// Changing the colour where mouse is
function changeColour(x, y, row) {
  if (x < CELL_NUMBER && y === 0) {
    guessGrid[row][x] = colourList[0];
  }
}

// Drawing in a central position in the boxes
function drawPeg(x, y, colour) {
  fill(colour);
  ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, pegSize, pegSize);
}

// Generating a random colour code to guess
function makeRandomCode() {
  for (let i = 0; i < CELL_NUMBER; i++) {
    let randomColor = random(colourList);
    codeToGuess.push(randomColor);
  }
}

// Making brown boxes for game
function displayGrid() {
  for (let y = 0; y < CELL_NUMBER; y++) {
    for (let x = 0; x < CELL_NUMBER; x++) {
      drawPeg(x, y, "lightbrown");
    }
  }
}

// Show instructions, and then show the game
function displayGuessGrid() {
  if (stopFunction === false) {
    displayInstructions();
  }
  else {
    for (let i = 0; i < CELL_NUMBER; i++) {
      for (let j = 0; j < CELL_NUMBER; j++) {
        drawPeg(j, i, guessGrid[i][j]);
      }
    }
  }
}

// How many tries remain
function displayAttemptsLeft() {
  textSize(24);
  fill(0);
  text(`Attempts Left: ${attemptsLeft}`, 10, height - 20);
}

// Checking if the guess is right or partically right
function checkGuess() {
  let correctCount = 0;
  let correctPosition = 0;

  // Are the colours correct
  for (let i = 0; i < CELL_NUMBER; i++) {
    // Is position of colour correct
    if (guessGrid[CELL_NUMBER - 1][i] === codeToGuess[i]) {
      correctPosition++;
    } 
    // If colour in the code, but wrong spot
    else if (codeToGuess.includes(guessGrid[CELL_NUMBER - 1][i])) {
      correctCount++;
    }
  }

  // If game is won or lost
  if (correctPosition === CELL_NUMBER) {
    gameWon = true;
  } 
  else {
    attemptsLeft--;
    if (attemptsLeft === 0) {
      gameWon = false;
    }
  }
}

// Message to say if you've won or lost
function displayWinLoseMessage() {
  textSize(32);
  fill(0);

  if (gameWon) {
    text("Congratulations! You've won!", 10, 40);
    text("Press 'R' to restart.", 10, 80);
  } 
  else if (attemptsLeft === 0) {
    text("You've run out of attempts.", 10, 40);
    text("The secret code was:", 10, 80);

    for (let i = 0; i < CELL_NUMBER; i++) {
      drawPeg(i, CELL_NUMBER - 1, codeToGuess[i]);
    }
    text("Press 'R' to restart.", 10, height - 60);
  }
}

// Restart the game when r is pressed
function resetGame() {
  currentRow = 0;
  codeToGuess = [];
  guessGrid = [];
  attemptsLeft = maxAttempts;
  gameWon = false;
  makeRandomCode();
  displayInstructions();
}

// Display rules to play the game
function displayInstructions() {
  textSize(16);
  fill(0);
  text("Mastermind Game", 10, 10);
  text("Click on the circles to select colors for your guess.", 10, 30);
  text("Press SPACE to submit your guess.", 10, 50);
  text("Press 'R' to restart the game.", 10, 70);
  if (stopFunction) {
    return;
  }
}


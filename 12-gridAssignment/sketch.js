// Mastermind
// Laura Lima
// Date
//
// Extra for Experts:
// HOW DOES ONE MAKE MASTERMIND EXTRA
// TITLE SCREEN MAYBE???????????
// Actually yeah title screen might be good

let grid;
let cellSize;
const CELL_NUMBER = 6;
let colourList = ["red", "yellow", "green", "blue", "purple", "orange", "pink", "brown"];
let currentRow = 0;
let codeToGuess = [];
let guessGrid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateEmptyGrid(CELL_NUMBER, CELL_NUMBER);

  if (height > width) {
    cellSize = width / CELL_NUMBER;
  } 
  else {
    cellSize = height / CELL_NUMBER;
  }
}

function draw() {
  background(220);
  displayGrid();
  displayGuessGrid();
}

function mousePressed() {
  if (currentRow < CELL_NUMBER) {
    let y = Math.floor(mouseY / cellSize);
    let x = Math.floor(mouseX / cellSize);

    changeColour(x, y, currentRow);
  }
}

function keyPressed() {
  if (key === " " && currentRow < CELL_NUMBER) {
    // Enter guess
    if (guessGrid[currentRow].length === CELL_NUMBER) {
      currentRow++;
      if (currentRow === CELL_NUMBER) {
        checkGuess();
      }
    }
  }
}

function changeColour(x, y, row) {
  // Change colour to what colour of circle the mouse has selected
  if (x < CELL_NUMBER && y === 0) {
    guessGrid[row][x] = colourList[0];
  }
}

function drawCircle(x, y, colour) {
  fill(colour);
  ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize);
}

function makeRandomCode() {
  // Generate the 4 random colours
  for (let i = 0; i < CELL_NUMBER; i++) {
    let randomColor = random(colourList);
    codeToGuess.push(randomColor);
  }
}

function displayGrid() {
  // Display the grid for making guesses
  for (let y = 0; y < CELL_NUMBER; y++) {
    for (let x = 0; x < CELL_NUMBER; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function displayGuessGrid() {
  // Display the guessed colors
  for (let i = 0; i < CELL_NUMBER; i++) {
    for (let j = 0; j < CELL_NUMBER; j++) {
      if (guessGrid[i][j]) {
        drawCircle(j, i, guessGrid[i][j]);
      }
    }
  }
}

function checkGuess() {
  // Compare the guessed code with the secret code
  let correctCount = 0;
  let correctPosition = 0;

  for (let i = 0; i < CELL_NUMBER; i++) {
    if (guessGrid[CELL_NUMBER - 1][i] === codeToGuess[i]) {
      correctPosition++;
    } 
    else if (codeToGuess.includes(guessGrid[CELL_NUMBER - 1][i])) {
      correctCount++;
    }
  }

  console.log("Correct position: " + correctPosition);
  console.log("Correct colors: " + correctCount);
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function displayColours() {
  // use this function to make a physical colour bank including the eight colours in the colourList
  // Have the colours be clickable, when clicked the mouse will "hold" the colour and you can then click on a box to assign it the colour as a guess
  // Have the colour bank be below the mastermind game
}
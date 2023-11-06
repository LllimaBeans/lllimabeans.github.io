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
let colourList = ["red", "yellow", "green", "blue", "purple"];
let selectedColour;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genGrid(CELL_NUMBER, CELL_NUMBER);

  if (height > width) {
    cellSize = width/CELL_NUMBER;
  }
  else {
    cellSize = height/CELL_NUMBER;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  changeColour(x, y);   //current cell

  // when a colour is pressed have the mouse "hold" the colour, set coloured circle x,y to mouse location
  // when mouse clicked set cell guess to colour mouse was holding, make mouse stop holdingg the coloured circle
}

function changeColour() {
  // change colour to what colour of circle the mouse has selected
}

function drawCircle() {
  // display chosen circle on box
}

function keyPressed() {
  if (key === " "){
    // enter guess
  }
}

function makeRandomCode() {
  // generate the random colour code, 4 random colours
  // hide the code from the player
}

function displayBackground() {
  // Make brown rectangle as background, have it be vertically longer rather than horizontally 
}

function displayGrid() {
  // alter the empty grid created in genGrid() to make it look like a mastermind game
  // Use the following 2D array format to make all grid like-structures, including the guessing of colours
  for (let y = 0; y < CELL_NUMBER; y++) {
    for (let x = 0; x < CELL_NUMBER; x++) {
      
      // colours and whatnot can be changed in here
      fill("blue");
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function genGrid() {
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

  // call this somewhere in this function 
  makeRandomCode();
}
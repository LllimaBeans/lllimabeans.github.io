// Mastermind
// Laura Lima
// Date
//
// Extra for Experts:
// :(

let grid;
let cellSize;
const CELL_NUMBER = 6;
let colourList = ["red", "yellow", "green", "blue", "purple"];

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

function displayGrid() {
  // alter the empty grid created in genGrid() to make it look like a mastermind game
  // Use the following 2D array format to make all grid like-structures, including the guessing of colours
  for (let y = 0; y < CELL_NUMBER; y++) {
    for (let x = 0; x < CELL_NUMBER; x++) {
      
      // colours and whatnot can be changed in here

      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function genGrid() {
  // actually make grid here

  // call this somewhere in this function 
  makeRandomCode();
}
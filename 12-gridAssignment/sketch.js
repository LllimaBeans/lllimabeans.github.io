// Mastermind
// Laura Lima
// Date
//
// Extra for Experts:
// :(

let grid;
let cellSize;
const CELL_NUMBER = 6;
let colourList = [];

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
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  changeColour(x, y);   //current cell
}

function changeColour() {
  // change colour or hold the colours
}

function genGrid() {
  // Have to make grid and choose four colours
}

function drawCircle() {
  // display chosen circle on box
}

function keyPressed() {
  if (key === " "){
    // enter guess
  }
}

function mouseClicked() {
  // when a colour is pressed have the mouse "hold" the colour, set image x,y to mouse
  // when mouse clicked set cell guess to colour mouse was holding
}
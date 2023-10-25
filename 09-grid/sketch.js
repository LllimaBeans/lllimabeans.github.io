// 2D Array Grid

// let grid = [[1, 0, 0, 1], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 1]];

let grid;
let cellSize;
const GRID_SIZE = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    cellSize = width / GRID_SIZE;
  }
  else{
    cellSize = height / GRID_SIZE;
  }
  grid = genRandomGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1){
        fill("black");
      }      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function keyTyped() {
  if (key === "r") {
    grid = genRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  else if (key === "e") {
    grid = genEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function genRandomGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        randomArray[y].push(0);
      }
      else{
        randomArray[y].push(1);
      }
    }
  }
  return randomArray;
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  if (grid[y][x] === 0){
    grid[y][x] = 1;
  }
  else if (grid[y][x] === 1){
    grid[y][x] = 0;
  }
}

function genEmptyGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      randomArray.push(0);
    }
  }
  return randomArray;
}

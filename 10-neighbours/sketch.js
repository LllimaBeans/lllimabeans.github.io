// 2D GRid neighbours

let grid;
let cellSize;
const GRID_SIZE = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height){
    cellSize = height/GRID_SIZE;
  }
  else if(height > width){
    cellSize = width/GRID_SIZE;
  }
  grid = genEmptyGrid(cellSize, cellSize);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 1){
        fill("black");
      }
      if  (grid[y][x] === 0){
        fill("white");
      }
      rect(cellSize * x, cellSize * y, cellSize, cellSize);
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

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y);
  toggleCell(x, y - 1);
  toggleCell(x, y + 1);
  toggleCell(x - 1, y);
  toggleCell(x + 1, y);
}

function toggleCell(x, y) {
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE){
    if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}

function genRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < cols; y++){
    newGrid.push([]);
    for (let x = 0; x < rows; x++){
      if (random(10) < 5){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function genEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < cols; y++){
    newGrid.push([]);
    for (let x = 0; x < rows; x++){
      newGrid.push(0);
    }
  }
  return newGrid;
}
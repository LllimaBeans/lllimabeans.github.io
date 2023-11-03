// Game of Life

let grid;
const GRID_SIZE = 20;
let cellSize;
let playerX = 0;
let playerY = 0;

function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  // put player in grid
  grid[playerY][playerX] = 2;

  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  else if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  // move down
  else if (key === "s") {
    movementRules(0, 1);
  }
  // move up
  else if (key === "w") {
    movementRules(0, -1);
  }
  // move left
  else if (key === "a") {
    movementRules(-1, 0);
  }
  // move down
  else if (key === "d") {
    movementRules(1, 0);
  }
}

function movementRules(x, y) {
  // checking if on edge
  if (playerX + x >= 0 && playerX + x < GRID_SIZE && playerY + y >= 0, playerY + y < GRID_SIZE) {
    
    //  check if hitting a wall
    if (grid[playerY + y][playerX + x] === 0) {
      let tempX = playerX;
      let tempY = playerY;

      playerX += x;
      playerY += y;

      // update grid
      grid[playerY][playerX] = 2;
      grid[tempY][tempX] = 0;
    }
  }
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y);   //current cell
}

function toggleCell(x, y) {
  //check that we are within the grid, then toggle
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 2) {
        fill("blue");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
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
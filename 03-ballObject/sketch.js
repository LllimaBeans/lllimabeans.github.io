// Ball object nomination demo
// Laura Lima
// Oct 5th

let theBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = spawnBall();
}

function spawnBall() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(15, 30),
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
    dx: random(-10, 10),
    dy: random(-10, 10),
  };
  return theBall;
}

function draw() {
  background(220);
  displayBall();
  moveBall();
}

function keyTyped() {
  if (key === " ") {
    theBall = spawnBall();
  }
}

function moveBall() {
  if (theBall.x  - theBall.radius > width) {
    theBall.x = 0 - theBall.radius;
  }
  else if (theBall.x < 0 - theBall.radius){
    theBall.x = width + theBall.radius;
  }

  if (theBall.y - theBall.radius > height) {
    theBall.y = 0 - theBall.radius;
  }
  else if (theBall.y < 0 - theBall.radius) {
    theBall.y = height + theBall.radius;
  }

  theBall.x += theBall.dx;
  theBall.y += theBall.dy;

  console.log(theBall.x, theBall.y);
}

function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, theBall.radius * 2);
}
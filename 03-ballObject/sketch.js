// Ball object nomination demo
// Laura Lima
// Oct 5th

let theBall = {
  x: 100,
  y: 100,
  radius: 25,
  r: 230,
  g: 20,
  b: 50,
  dx: -30,
  dy: -50,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayBall();
  moveBall();
}

function moveBall() {
  if (theBall.dx < 0) {
    if (theBall.x < 0) {
      theBall.x = width - theBall.radius;
    } 
  }
  if (theBall.dy < 0) {
    if (theBall.y > 0) {
      theBall.y = height;
    }
  }
  if (theBall.x > width) {
    theBall.x = 0 - theBall.radius;
  }
  if (theBall.y > height) {
    theBall.y = 0 - theBall.radius;
  }
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;
}

function displayBall() {
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, theBall.radius * 2);
}
// Ball OOP

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(10, 25);
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx *= -1;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy *= -1;
    }
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius * 2);
  }

  bounceOff(otherBall) {
    let raSum = this.radius + otherBall.radius;
    let distAppart = dist(this.x, this.y, otherBall.x, otherBall.y);
    if (raSum > distAppart) {
      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theBall = new Ball(width/2, height/2);
  ballArray.push(theBall);
}

function draw() {
  background(220);
  for (let someBall of ballArray) {
    someBall.move();
    for (let otherBall of ballArray) {
      if (someBall !== otherBall) {
        someBall.bounceOff(otherBall);
      }
      someBall.display();
    }
}
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}
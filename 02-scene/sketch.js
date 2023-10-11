// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// list to store the balls & ball colour
let r = 0;
let g = 0;
let b = 0;
let balls = [];
let ballColor = 0;
let whiteBlack = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  makeBall();
}

// make a ball when mouse is clicked + add it to list
function mousePressed() {
  let newBall = {
    x: mouseX,
    y: mouseY,
    color: ballColor,
  };
  balls.push(newBall);
}

// draw the balls
function makeBall() {
  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    fill(ball.color);
    ellipse(ball.x, ball.y, 20, 20);

    // move balls + keep them seperate from mouse
    ball.y += 1;

    // delete balls that are out of the canvas
    if (ball.y > height) {
      balls.splice(i, 1);
    }
  }
}

// changing colour of balls depending on key pressed
function keyPressed() {
  if (!whiteBlack && keyCode === 32) {
    whiteBlack = !whiteBlack;
    r = 255;
    g = 255;
    b = 255;
  }
  else if (keyCode === 32) {
    whiteBlack = !whiteBlack;
    r = 0; 
    g = 0;
    b = 0;
  }
  //   increasing rgb when ball is black
  if (!whiteBlack) {
    if (keyCode === 82) {
      r += 25;
    }
    else if (keyCode === 71) {
      g += 25;
    }
    else if (keyCode === 66) {
      b += 25;
    }
  }
  //   decreasing rgb when ball is white
  if (whiteBlack) {
    if (keyCode === 82) {
      g -= 25;
      b -= 25;
    }
    else if (keyCode === 71) {
      r -= 25;
      b -= 25;
    }
    else if (keyCode === 66) {
      r -= 25;
      g -= 25;
    }
  }
  //   assigning rgb value to balls
  ballColor = color(r, g, b);
}
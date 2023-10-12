// Perlin Noise Ball

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
  background("white");
  // noStroke();
  window.setInterval(spawnBall, 500);
}

function draw() {

  for (let theBall of ballArray) {
    fill(theBall.color);
    
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time + 300) * height;
  
    circle(theBall.x, theBall.y, theBall.size);
  
    theBall.time += 0.01;
  }
}

function spawnBall(){
  let ball = {
    x: random(width),
    y: random(height),
    size: random(10, 50),
    color: color(random(255), random(255), random(255), random(255)),
    time: random(0, 1000),
  };

  ballArray.push(ball);
}

function mousePressed() {
  spawnBall();
}

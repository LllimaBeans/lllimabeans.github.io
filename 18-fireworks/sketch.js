// FIRE W

let theFire = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = theFire.length-1; i >= 0; i--) {
    let particle = theFire[i];
    particle.display();
    if (particle.isDead()) {
      theFire.splice(i, 1);
    }
    else {
      particle.update(); 
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    theFire.push(new Particle(mouseX, mouseY, random(-5, 5), random(-5, 5)));
  }
}

class Particle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y; 
    this.dx = dx;
    this.dy = dy;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
    this.radius = 3;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius * 2);

  }

  update() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    this.alpha -= 5;
  }

  isDead() {
    return this.alpha <= 0;
  }
}
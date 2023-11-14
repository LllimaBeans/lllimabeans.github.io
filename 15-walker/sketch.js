// Walkr oop

class Walker {
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.size = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move() {
    let theChoice = random(100);
    if (theChoice < 25) {
      // down
      this.y += this.speed;
    }
    else if (theChoice < 50) {
      // up
      this.y -= this.speed;
    }
    else if (theChoice < 75) {
      // right
      this.x += this.speed;
    }
    else {
      // left
      this.x -= this.speed;
    }
  }
}

let gabe;
// let emma;
let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  gabe = new Walker(width/2, height/2, "blue");
  theWalkers.push(gabe);
  // emma = new Walker(width/2 - 50, height/2 - 50, "red");
}

function draw() {
  for (let person of theWalkers){
    person.move();
    person.display();
  }

  // gabe.move();
  // gabe.display();

  // emma.move();
  // emma.display();
}

function mousePressed() {
  let gabe = new Walker(mouseX, mouseY, "blue");
  theWalkers.push(gabe);
}

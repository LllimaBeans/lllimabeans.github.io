// Arrays and Object Notation Assignment
// Laura Lima
// date
//
// Extra for Experts:
// I tried to learn how to use vectors. I haven't taken physics yet so I had chatGPT help me with the math of it

// use vectors
//      vectors can be extra for experts, noise can't
// Randomize colours to an extent? maybe give choice
// click mouse to change particle type/size
// use translate to make origin middle and make a mirrored mode, like the games

let holder = [];
let horizontalMirroring = false;
let verticalMirroring = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayParticle();
}

// Display the particles
function displayParticle() {
  for (let particle of holder) {
    fill(particle.color);
    circle(particle.x, particle.y, particle.size);
  }
}

// Set origin to the centre of the page
function layout() {
  translate(width/2, height/2);
}

// Creating individual particles
function spawnParticle() {
  let particle = {
    x: random(1, 30),
    y: random(1, 30),
    color: color(random(255), random(255), random(255), random(255)),
    dx: random(-10, 10),
    dy: random(-10, 10),
  };
  holder.push(particle);
}

// Display particles on mouse click
function mousePressed() {
  spawnParticle();
  // for (let i = 100; i > 0; i--){
  //   spawnParticle();

  // }
}

function horizontalMirror() {

}

function verticalMirror() {

}

function quadrantalMirror(){

}

function resetMirror(){

}

function keyPressed() {
  // if h (72) is pressed, a horizontal mirror will appear
  if (keyCode === 72){
    horizontalMirroring = !horizontalMirroring;
  }
  // if v (86) is pressed, a vertical mirror will appear
  if (keyCode === 86){
    verticalMirroring = !verticalMirroring;
  }
  // if a (65) is pressed, both mirrors will happen at once
  if (keyCode === 65){
    horizontalMirroring = !horizontalMirroring;
    verticalMirroring = !verticalMirroring;
  }
  // if r (82) is pressed, all mirroring is removed
  if (keyCode === 82){
    horizontalMirroring = !horizontalMirroring;
  }
}


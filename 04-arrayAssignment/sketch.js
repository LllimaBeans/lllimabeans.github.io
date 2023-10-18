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
let oppositeCornerMirroring = false;
let gravity, sliderBgColor, sliderR, sliderG, sliderB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 1);
  variousSliders();
}

function draw() {
  background(sliderBgColor.value());
  displayParticle();
}

// Display the particles
function displayParticle() {
  for (let particle of holder) {
    fill(particle.color);
    particle.dy += gravity.y;
    circle(particle.x, particle.y, particle.size);
  }
  if (horizontalMirroring === true){
    for (let particle of holder) {
      fill(particle.color);
      particle.dy += gravity.y;
      circle(width - particle.x, particle.y, particle.size);
    }
  }
  if (verticalMirroring === true){
    for (let particle of holder) {
      fill(particle.color);
      particle.dy += gravity.y;
      circle(particle.x, height - particle.y, particle.size);
    }
  }
  if (oppositeCornerMirroring === true){
    for (let particle of holder) {
      fill(particle.color);
      particle.dy += gravity.y;
      circle(width - particle.x, height - particle.y, particle.size);
    }
  }
}

function variousSliders() {
  sliderBgColor = createSlider(0, 255, 60, 5);
  sliderBgColor.position(10, 10);
  sliderBgColor.style("width", "400px");
  sliderR = createSlider(0, 255, 60, 5);
  sliderR.position(10, 10);
  sliderG = createSlider(0, 255, 60, 5);
  sliderG.position(10, 10);
  sliderB = createSlider(0, 255, 60, 5);
  sliderB.position(10, 10);
}

// Creating individual particles
function spawnParticle() {
  let particle = {
    x: mouseX,
    y: mouseY,
    color: color(random(255), random(255), random(255), random(255)),
    dx: random(-10, 10),
    dy: random(-10, 10),
    size: random(1, 10),
  };
  holder.push(particle);
}

// Display particles on mouse click
function mousePressed() {
  spawnParticle();
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
  // if a (65) is pressed, a mirror will happen in every quadrant
  if (keyCode === 65){
    horizontalMirroring = true;
    verticalMirroring = true;
    oppositeCornerMirroring = true;
  }
  // if r (82) is pressed, all mirroring is removed
  if (keyCode === 82){
    verticalMirroring = false;
    horizontalMirroring = false;
    oppositeCornerMirroring = false;
  }
}


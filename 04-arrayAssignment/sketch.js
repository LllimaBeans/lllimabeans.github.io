// Arrays and Object Notation Assignment
// Laura Lima
// Thursday, October 10th
//
// Extra for Experts:
// I used sliders to change the background colour
// From top to bottom the sliders change r, g, and b values
// 
// In the assignment I've made it so small balls appear where you click the mouse
// By pressing h, v, a, o, or r you can make the balls show up and/or 
// stop mirroring across different axis's

// Global variables
let holder = [];
let horizontalMirroring = false;
let verticalMirroring = false;
let oppCornerMirroring = false;
let gravity, sliderBgColor, sliderR, sliderG, sliderB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.3);
  variousSliders();
}

function draw() {
  background(sliderR.value(), sliderG.value(), sliderB.value());
  displayParticle();
  updateParticles();
}

// Display the particles
function displayParticle() {
  // Making particles where mouse is
  for (let particle of holder) {
    fill(particle.color);
    circle(particle.x, particle.y, particle.size);
  }
  // Mirroring particles across the y-axis if horizontalMirroring is true
  if (horizontalMirroring === true){
    for (let particle of holder) {
      fill(particle.color);
      circle(width - particle.x, particle.y, particle.size);
    }
  }
  // Mirroring particles across the x-axis if verticalMirroring is true
  if (verticalMirroring === true){
    for (let particle of holder) {
      fill(particle.color);
      circle(particle.x, height - particle.y, particle.size);
    }
  }
  // Mirroring particles in the quadrant diagonal if oppCornerMirroring is true
  if (oppCornerMirroring === true){
    for (let particle of holder) {
      fill(particle.color);
      circle(width - particle.x, height - particle.y, particle.size);
    }
  }
}

// Making the sliders that are for changing the background
function variousSliders() {
  sliderR = createSlider(0, 255, 60, 5);
  sliderR.position(10, 10);
  sliderR.style("width", "400px");
  sliderG = createSlider(0, 255, 60, 5);
  sliderG.position(10, 35);
  sliderG.style("width", "400px");
  sliderB = createSlider(0, 255, 60, 5);
  sliderB.position(10, 60);
  sliderB.style("width", "400px");
}

// Makes and adds 10 particles on every mouse click
function spawnParticle() {
  for (let i = 0; i < 10; i++) {
    let particle = {
      x: mouseX + random(-20, 20),
      y: mouseY + random(-20, 20),
      color: color(random(255), random(255), random(255), random(255)),
      dx: random(-10, 10),
      dy: random(-10, 10),
      size: random(1, 10),
    };
    holder.push(particle);
  }
}

// Display particles on mouse click
function mousePressed() {
  spawnParticle();
}

function updateParticles() {
  for (let i = holder.length - 1; i >= 0; i--) {
    let particle = holder[i];
    particle.x += particle.dx;
    particle.y += particle.dy;
    particle.dy += gravity.y; 
    }
  }
}

function keyPressed() {
  // If h (72) is pressed, the horizontal mirror will change
  if (keyCode === 72){
    horizontalMirroring = !horizontalMirroring;
  }
  // If v (86) is pressed, the vertical mirror will change
  if (keyCode === 86){
    verticalMirroring = !verticalMirroring;
  }
  // If o (79) is pressed, the opposite corner mirror will change
  if (keyCode === 86){
    oppCornerMirroring = !oppCornerMirroring;
  }
  // If a (65) is pressed, the mirroring appears in every quadrant
  if (keyCode === 65){
    horizontalMirroring = true;
    verticalMirroring = true;
    oppCornerMirroring = true;
  }
  // If r (82) is pressed, all mirroring is removed
  if (keyCode === 82){
    verticalMirroring = false;
    horizontalMirroring = false;
    oppCornerMirroring = false;
  }
}


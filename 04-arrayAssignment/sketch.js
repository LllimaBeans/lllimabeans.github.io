// Arrays and Object Notation Assignment
// Laura Lima
// date
//
// Extra for Experts:
// I tried to learn how to use vectors. I haven't taken physics yet so I had chatGPT help me with the math of it

// Noise --> make particles move randomly OR use vectors
//      vectors can be extra for experts, noise can't
// Randomize colours to an extent? maybe give choice
// click mouse to change particle type/size
// use translate to make origin middle and make a mirrored mode, like the gamres

let radius;
let holder = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function displayParticle() {
  for (let theBall of holder) {
    fill(theBall.color);
    
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time + 300) * height;
  
    circle(theBall.x, theBall.y, theBall.size);
  
    theBall.time += 0.01;
  }
}

function layout() {
  // Save the matix thing and set origin to the middle of the page
  push();
  translate(width/2, height/2);
}

// Creating individual particles
function spawnParticle() {
  let tempObject = {
    x: random(width),
    y: random(height),
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
    dx: random(-10, 10),
    dy: random(-10, 10),
  };
}

// Display particles on mouse click
function mousePressed() {
  // spawnParticle();
}


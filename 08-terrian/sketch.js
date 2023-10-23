// Terrian Generation

let terrian = [];
let xOffset = 0;
let bike;

function preload() {
  bike = loadImage("bike.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
  imageMode(CENTER);
}

function draw() {
  background(220);

  if (keyIsDown(RIGHT_ARROW)){
    if (xOffset < 100000 - xOffset) {
      xOffset += 25;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (xOffset > 25){
      xOffset -= 20;
    }
  }

  image(bike, mouseX, mouseY, bike.width * 0.5, bike.height * 0.5);

  displayRect();
}

function spawnRectangles() {
  let time = 0;
  for (let i = 0; i < 100000; i++) { 
    let h = noise(time) * height;
    let thisRect = {
      x: i,
      height: h,
    };
    terrian.push(thisRect);
    time += 0.002;
  }
}
function displayRect() {
  for (let i = xOffset; i < width + xOffset; i++) {
    let thisRect = terrian[i];
    rect(thisRect.x - xOffset, height - thisRect.height, 1, thisRect.height);
  }
}

function displayImage() {

  //  :(
}
// Images and sounds demo

let smile;
let laser;
let backgroundNoise;

function preload(){
  smile = loadImage("smile.png");
  laser = loadSound("laser6.mp3");
  backgroundNoise = loadSound("backgroundsong.mp3");

  backgroundNoise.setVolume(0.5);
  laser.setVolume(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(smile, mouseX, mouseY, smile.width * 0.5, smile.height * 0.5);
}

function mousePressed() {
  laser.play();

  if (!backgroundNoise.isPlaying()){
    backgroundNoise.loop();
  }
}
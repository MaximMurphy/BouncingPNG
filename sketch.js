let x, y, canvas;

let xSpeed;
let ySpeed;

let img;
let r, g, b;

function preload() {
  img = loadImage("maxim.png");
  //img = loadImage("smiley.png");
  //img = loadImage("ADD_YOUR_PNG_NAME_HERE.png");
}

function setup() {
  //canvas size is set tosize of the browser window
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("display", "block");

  //can change the starting position here
  x = 50;
  y = 50;

  //can change the speeds here
  xSpeed = 5;
  ySpeed = 5;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function pickColor() {
  r = random(100, 256); //range of 100-256 so that lighter colors are displayed
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(200);
  tint(r, g, b);
  image(img, x, y);
  x = x + xSpeed;
  y = y + ySpeed;

  //testing when walls are hit
  if (x + img.width >= windowWidth || x <= 0) {
    xSpeed = -xSpeed;
    pickColor();
  }
  if (y + img.height >= windowHeight || y <= 0) {
    ySpeed = -ySpeed;
    pickColor();
  }
}

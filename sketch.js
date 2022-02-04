let x, y, canvas;

let xSpeed;
let ySpeed;

let img;
let r, g, b;

function preload() {
  img = loadImage("maxim.png");
  //img = loadImage("smiley.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("display", "block");

  x = 50;
  y = 50;
  xSpeed = 5;
  ySpeed = 5;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function pickColor() {
  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);
}

function draw() {
  background(0);
  tint(r, g, b);
  image(img, x, y);
  x = x + xSpeed;
  y = y - ySpeed;

  if (x + img.width + 15 >= windowWidth || x <= 0) {
    xSpeed = -xSpeed;
    pickColor();
  }
  if (y + img.height + 20 >= windowHeight || y <= 5) {
    ySpeed = -ySpeed;
    pickColor();
  }
}

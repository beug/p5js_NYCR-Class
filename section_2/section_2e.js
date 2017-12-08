function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){
  //draw a slightly transparent background
  background(255,0, 200, 20); 
  //draw a circle that will follow the mouse
  ellipse(mouseX, mouseY, 100, 100);
}
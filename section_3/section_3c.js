var canvas;  // declare canvas globally so you can use it everywhere
var x = 1; 
var rect_width = 50;
var rect_height = 50;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //these features require the DOM Library which are added to the index.html file
  canvas.position(0,0);           // put the canvas at the top
  canvas.style('z-index', '-1');  // put it behind the page content
}

function draw() {
  let y = height/2;
  background(255,0, 200, 20);

  push();  
    fill(0,0,255);
    stroke(0);
    strokeWeight(10);
    rect(x-rect_width, y-rect_height, rect_width, rect_height);
  pop();
   
  push();    
    noFill();
    stroke(200,255,0);
    strokeWeight(20);
    ellipse(mouseX, mouseY, 100, 100);
  pop();
    
  x++;
  y++;
}
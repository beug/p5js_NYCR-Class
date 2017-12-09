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
  let remap_x = map(x, 0-rect_width, width+rect_width, width+rect_width, 0-rect_width);

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
    ellipse(remap_x, mouseY, 100, 100);
  pop();
    
  x+=8;
  
  if(x > width+rect_width){
    x = 0-rect_width;
  }

  if(x > width/3 && x < width*2/3){
    background(20, 20, 255, 40);
  }else{
    background(255, 0, 200, 40);
  }
    
}
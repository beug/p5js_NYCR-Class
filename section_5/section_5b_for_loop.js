var canvas;  // declare canvas globally so you can use it everywhere
var counter = 0;
var direction = true;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //these features require the DOM Library which are added to the index.html file
  canvas.position(0,0);           // put the canvas at the top
  canvas.style('z-index', '-1');  // put it behind the page content
}

function draw() {
  background(50, 8);
   
  let distance = 30;        // <-- try changing this
    
  translate(width/2, height/2);
  scale(0.5);               // <--try changing this
  rotate(frameCount * 0.1); // <-- try multiplying frameCount by bigger numbers here

  let r = random(100)+155;
  let g = random(100)+155;
  let b = random(100)+155;

  for (let x = distance; x < width; x+=distance){
    fill(r,g,b);
    ellipse(x+counter, distance/2, distance/2, distance/2);
  }
  
  if (direction == true && counter >= -width){
    counter--;    
  }else if(counter <= width){
    counter++;
    direction = false;
  }
}
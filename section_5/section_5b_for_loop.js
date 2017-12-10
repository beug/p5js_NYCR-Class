var canvas;  // declare canvas globally so you can use it everywhere

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //these features require the DOM Library which are added to the index.html file
  canvas.position(0,0);           // put the canvas at the top
  canvas.style('z-index', '-1');  // put it behind the page content
}

function draw() {
  background(100, 3);
   
  let distance = 100;
    
  translate(width/2, height/2);
  scale(0.5);
  rotate(frameCount * 0.1);

  let r = random(100)+155;
  let g = random(100)+155;
  let b = random(100)+155;

  for (let x = distance; x < width; x+=distance){
    fill(r,g,b);
    ellipse(x, distance/2, distance/2, distance/2);
  }

}
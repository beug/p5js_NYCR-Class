var canvas;  // declare canvas globally so you can use it everywhere

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //these features require the DOM Library which are added to the index.html file
  canvas.position(0,0);           // put the canvas at the top
  canvas.style('z-index', '-1');  // put it behind the page content
}

function draw() {
  background(100, 10);
   
  let distance = 80;

  for (let x = distance; x < width; x+=distance){
    for (let y = distance; y < height; y+=distance){
      ellipse(x, y, distance/2, distance/2);
    }
  }
      
  //noLoop();

}
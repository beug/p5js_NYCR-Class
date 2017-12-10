var canvas;  // declare canvas globally so you can use it everywhere

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //these features require the DOM Library which are added to the index.html file
  canvas.position(0,0);           // put the canvas at the top
  canvas.style('z-index', '-1');  // put it behind the page content
}

function draw() {
  background(100, 30);
  let x;
  let y;
  let size;
  

  for (let i = 0; i < 100; i++){
      x = random(0, width);
      y = random(0, height);
      size = random(20, 30);

      ellipse(x, y, size, size);
  }
   
  //noLoop();

}

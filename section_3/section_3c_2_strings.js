var counter = 0;

function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){
  background(0,255,200);
  let my_string = "Hello Word! You are also a picture of a word!"
    
  //draw a string to the screen
  push();
    textSize(30);
    fill(255, 0, 255);
    translate(width/2, height/2); // rotate(); can have some unexpected results without translate();  
    rotate(counter * 0.01);  
    text(my_string, -100, -100, 200, 200);
  pop();
    
    
  // you can also draw numbers to the screen
  push();
    textSize(50);
    fill(255, 0, 255);
    text(counter, mouseX, mouseY);
  pop();
  
  counter++;
    
}
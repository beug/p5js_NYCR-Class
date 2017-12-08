function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){
  background(255,0, 200, 20);

  push();  
    fill(0,0,255);
    stroke(0);
    strokeWeight(10);
    rect(50,50,50,50);
  pop();
   
  push();    
    noFill();
    stroke(200,255,0);
    strokeWeight(20);
    ellipse(mouseX, mouseY, 100, 100);
  pop();

}
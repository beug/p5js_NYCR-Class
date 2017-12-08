function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){   
  //draw a slightly transparent background (R,G,B,[A])
  background(255,0, 200, 20); 
    
  //draw a circle that will follow the mouse
  ellipse(mouseX, mouseY, 100, 100);
    
  //fill the shape with the color blue (R,G,B,[A])
  fill(0,0,255);
    
  //set the outline stroke color (R,G,B,[A])
  stroke(200,255,0);
    
  //set the width of the outline in pixels
  strokeWeight(10);
    
  //also draw a rectangle that is in the center of our canvas using math
  rect(width/2-178/2, height/2-178/2, 178, 178);

}
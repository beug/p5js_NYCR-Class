var line_x = 45;
var line_y = 45;

function setup(){
  createCanvas(640,480);    
}

function draw(){ 
    background(255);
    
    //draw a line that will traverse the canvas
    line(0, line_x, line_y, 0); 
    
    //increment the coordinates of the line
    line_x++;
    line_y++;
}
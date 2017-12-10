let my_silly_string =["lazy ", "clam ", "hats "];

function setup() { 
  createCanvas(640, 480, P2D);
}

function draw() {
    
  background(0,255,200);

  textSize(60);
  fill(255, 0, 255);
    
  /*
  We haven't covered if statements yet, 
  but we will in the next section so you can ignore this for now.
  
  basically every ~3 seconds it will update array_of_strings[3] 
  to be a string randomly selected from more_strings[] 
  */
    
  let more_strings = ["happy ", "sad ", "jumpy ", "bumpy ", "river ", "sea ", "dinner "];
  let replacement = round(random(more_strings.length-1)); 
    
  if(frameCount % 66 == 0){
    my_silly_string[0] = more_strings[replacement];
  } 
  
  text(my_silly_string[0] + my_silly_string[1] + my_silly_string[2], 100, 100, 800, 200);

}
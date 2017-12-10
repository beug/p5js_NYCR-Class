let array_of_strings = ["a", "b", "c", "lazy", "dog"];

function setup() { 
  createCanvas(640, 480, P2D);
}

function draw() {
    
  background(0,255,200);
    
  let array_of_nums = [0,45,37,33,6,4];
  //let array_of_strings = ["a", "b", "c", "lazy", "dog"];
  let array_of_nums_n_strings = [1, "bath", 300, "hats"];
  let multidimensional_array = [[1,2],[3,4,5],["clam", "bake"]];
  

  /* 
  console.log(array_of_nums[3]);             // prints 33
  array_of_nums[3] = 134;                    // we change the value at that index like any other variable
  console.log(array_of_nums[3]);             // now that same index prints 134
  console.log(array_of_strings[4]);          // prints "dog"
  console.log(array_of_nums_n_strings[1]);   // prints "bath"
  console.log(array_of_nums_n_strings[5]);   // prints undefined (doesn't exist)
  console.log(multidimensional_array[1][1]); // we want to access that number four
  console.log(multidimensional_array[2][0]); // we want to access that clam string
  */

  //because why the heck not...
  textSize(30);
  fill(255, 0, 255);
  /*
  We haven't covered if statements yet, 
  but we will in the next section so you can ignore this for now.
  
  basically every ~3 seconds it will update array_of_strings[3] 
  to be a string randomly selected from more_strings[] 
  */
  let more_strings = ["happy", "sad", "jumpy", "bumpy", "river", "sea"];
  let replacement = round(random(more_strings.length)); 
  if(frameCount % 99 == 0){
    array_of_strings[3] = more_strings[replacement];
    console.log("replacement = " + replacement);
  } 
  let my_silly_string = array_of_strings[3] + " " + multidimensional_array[2][0] + " " + array_of_nums_n_strings[3] + "!";
  text(my_silly_string, 100, 100, 200, 200);
    
    

     
}
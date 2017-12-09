function setup() { 
  createCanvas(640, 480, P2D);
}

function draw() {
    
  background(0,255,200);
    
  let array_of_nums = [0,45,37,33,6,4];
  let array_of_strings = ["a", "b", "c", "lazy", "dog"];
  let array_of_nums_n_strings = [1, "bath", 300, "hats"];
  let multidimensional_array = [[1,2],[3,4,5],["clam", "bake"]];
    
  console.log(array_of_nums[3]);             //prints 33
  console.log(array_of_strings[4]);          //prints "dog"
  console.log(array_of_nums_n_strings[1]);   // prints "bath"
  console.log(array_of_nums_n_strings[5]);   // prints undefined (doesn't exist)
  console.log(multidimensional_array[1][1]); //we want to access that number four
  console.log(multidimensional_array[2][0]); //we want to access that clam string
     
  //because why the heck not...
  textSize(30);
  fill(255, 0, 255);
  let my_silly_string = array_of_strings[3] + " " + multidimensional_array[2][0] + " " + array_of_nums_n_strings[3] + "!";
  text(my_silly_string, 100, 100, 200, 200);
}
//we hereby declare that x is a global variable that our entire program has access to
var x;  

function setup(){
  //we assign the variable x to hold the interger value 99;
  x = 99;
}

function draw(){
  //we print a string followed by the assigned value of x;
  console.log("x = " + x);
  
  //we increment the current value of x by 1;
  x++;
}

// you should never right a program like this, or if you do don't leave it running for too long :) 
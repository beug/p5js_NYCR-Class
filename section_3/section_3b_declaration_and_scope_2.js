var x = 99;
const Z = "99";

function setup(){
  let y = "ninety-nine";
  console.log("x = " + x);
  console.log("y = " + y);
  console.log("Z = " + Z);
}

function draw(){
  noLoop();
    
  // we CAN'T execute the following line:
  // console.log("y = " + y); 
  // because draw() doesn't know about y yet!
    
  let y = "some other thing"; //now the scope of draw knows about a y
  x = 44.5;
  console.log("x = " + x);
  console.log("y = " + y);
  console.log("Z = " + Z);
  x = x + 150;
  y = "something completely different";
  
  // we're not allowed to execute the following line either  
  // z = "wearing a sweater"; 
  // because changing a constant is not allowed!
     
  console.log("x = " + x);
  console.log("y = " + y);
  console.log("Z = " + Z);
}
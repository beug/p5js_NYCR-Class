# Course Syllabus


## Section 0: Preamble

### What in the heck is p5js?
p5js is a web framework that extends javascript for creating visual or interactive content in the browser. It is based on Processing, which is written originally in Java... 

**original premise via [processing.org](https://processing.org):**
> Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts. Since 2001, Processing has promoted software literacy within the visual arts and visual literacy within technology. There are tens of thousands of students, artists, designers, researchers, and hobbyists who use Processing for learning and prototyping.

**stated premise of [p5js.org](https://p5js.org/):**

> p5.js is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.

>Using the original metaphor of a software sketchbook, p5.js has a full set of drawing functionality. However, you're not limited to your drawing canvas, you can think of your whole browser page as your sketch! For this, p5.js has addon libraries that make it easy to interact with other HTML5 objects, including text, input, video, webcam, and sound. 

>p5.js is a new interpretation, not an emulation or port, and it is in active development. An official editing environment is coming soon, as well as many more features!

There are other frameworks that build on javascript like [Three.js](https://threejs.org/), [D3](https://d3js.org/), or [Paper.js](http://paperjs.org/) which also put visual creativity at the forefront, albeit each have a fundamentally different style of coding. We won't cover any of these in this coursework, but it is good to know of their existance.

### Javascript

Javascript is the language used to write the interactive parts of websites.

You put your content in HTML.  You describe how it should look (colors, highlighting, positioning, etc.) with CSS.  And javascript provides the final piece, describing what happens when the user clicks and types at your web page.



## Section 1: Up and Running
### Text Editor with syntax-highlighting
Most operating systems come with a built in text-editor like textEdit(Mac) or notepad(windows), and most terminal applications come with Nano built in. Unfortunately these don't have things like syntax-highlighting or autocomplete that are very nice to have contextual features when learning to program. 

* **[Sublime](https://www.sublimetext.com/) Free trial, then $80 / works on Mac Linux Windows (preferred option)**
* Other Options:
  * [Atom](https://atom.io/) Free and open-source / works on Mac Linux Windows
  * [Brackets](http://brackets.io/)
  * [BBEdit](https://www.barebones.com/products/bbedit/) Free version Mac only
  * vim/emacs – the longstanding nerd war of CLI editors

### Filepath, Directory Structure & Filetypes
* Users/path/to/your/folder/
* index.html
* file.js

### 1.a: HTML & The DOM
---
HTML: Hyper Text Markup Language

> Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web.[2] Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. 
>  
> _- [Wikipdedia](https://en.wikipedia.org/wiki/HTML)_

DOM: Document Object Model

> The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document. 
> 
> _- [W3schools](https://www.w3schools.com/html/) (a great canonical source for web standards)_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```
source: [W3schools](https://www.w3schools.com/html/)

Further reading on [the DOM](https://github.com/processing/p5.js/wiki/Intro-to-DOM-manipulation-and-events) as it relates to p5js

### Loading in the browser

1. copy and paste the above code into your index.html file and save it
2. find the path to this file
* open the browser of your choice
* paste or type the full path as the URL starting with: `file://Users/path/to/your/folder/index.html`
* OPTIONAL: Start a local server on your computer:
  * [Instructions for Mac / Windows / Linux](https://github.com/processing/p5.js/wiki/Local-server)
  * ^^ this may be too time consuming for class 

### Play Around

1. Try changing the text between the title tags``<title>Page Title</title>`` and see what happens.
2. Try adding a new heading or paragraph to your HTML document.
3. Each time you make a change, save your file and refresh your browser.

### 1.b: Javascript syntax in HTML context (in-line)
---
Go back to our index.html file and add a new paragraph `<p>` tag with an id of "demo":
`<p id="demo"></p>` inside the body tag. This is in-line javascript that is manupulating the content of HTML through the DOM tree.

```javascript
<script>document.getElementById("demo").innerHTML = "Hello JavaScript!";</script>
```
source: [W3Schools](https://www.w3schools.com/js/js_intro.asp)

**Give it a try! your code might now look something like this:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <p id="demo">
      <script>document.getElementById("demo").innerHTML = "Hello JavaScript!";</script>
    </p>

  </body>
</html>

```

**Takeaway:**

* We just stuck some javascript code in our HTML code! wat?? 
* The code "excecuted" because we referenced it between ``<script> </script>`` tags (this is what our browser does with scripts – it loads them as a program to run) 
* We used javascript to dynamically change our otherwise static web page. 
* if the syntax looks crazy and you feel lost DON'T PANIC we'll get there!


### 1.c Loading external files (or scripts) into your HTML
---
As I mentioned p5js is a set of tools that extends Javascript. In order to use these new tools them we need to tell our HTML page that we want to use them. We can do that by embedding an external script into our page.

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.15/p5.js"></script>
```
Add this line inside the ``<head></head>`` tags. This will tell our HTML page that we want to load it. Alternatively, you can download p5js into your directory and load it locally. What this means is that instead of putting all this (massive amount of) javascript into our code, we are just including it in the file, and making our browser aware of it. Pretty neat!
 
#### Loading p5js library locally
The p5js library is included in the course github repo, but for future reference the most up to date versions are available via: 

* [p5js download page](https://p5js.org/download/)
* at the time of this class: [download v 0.5.16 of p5js here](https://github.com/processing/p5.js/releases/download/0.5.16/p5.js)
* same thing but [compressed version here](https://github.com/processing/p5.js/releases/download/0.5.16/p5.min.js)
* 
 
* TODO: add or link to how to do that
* TODO: talk about the path

**Food for thought:**

Something to think about is that this doesn't seem to change anything about our page, but actually it does. By including this file we've made all of the magical functionality of p5js available to our browser.

## Section 2: p5js! (FINALLY!)
**Language Reference: [https://p5js.org/reference](https://p5js.org/reference/)** <-- this is the most important resource for learning p5js. So important in fact, you will probably whitness me having to look stuff up in here during this class!

Programming Examples: [https://p5js.org/examples/](https://p5js.org/examples/)

Tutorials:
[Daniel Shiffman wiling out on Youtube](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) <-- more resources like this at the end of the syllabus

### 2.a The Sketch
---
A long standing tradition in the "Processing" ecosystem is the idea that a program is called a "sketch" 

A sketch consists of a few basic functions that almost always need to be present. The syntax is still just like javascript, but these conventions actually come from Processing which is based in JAVA (which for reasons no one can explan, has little or NOTHING to do with javascript). There is probably a joke to be made here about computer programmers either liking coffee or Indonesia.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=WTto0CWwDVo
" target="_blank"><img src="http://img.youtube.com/vi/WTto0CWwDVo/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="640" height="480" border="0" /></a>


When we load the p5js framwork into our DOM context, we "extend" javascript to do a bunch of new magical things for us. While we can still write normal javascript, we can also add a sketch (possibly multiple sketches) to the DOM and access some of the magic.

1. To start let's create a new file, called anything you like (e.g. ``my_first_sketch.js``) make sure you use the extension **.js** at the end of the file. 

2. almost every p5js sketch ever will contain these two functions (add them to your file and save):

```javascript
function setup(){

}

function draw(){

}
```
 * 3. Now we need to tell our HTML file about this new script we've made: 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Sketch</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.15/p5.js"></script>
  </head>
  <body>

    <script src="my_first_sketch.js"></script>

  </body>
</html>

```

### setup()
This code gets excecuted sequentially (line by line) exactly one time. When it has finished excecuting every line between the curly braces, it moves on to ``draw() ``

```javascript
function setup(){
  //some code gets excecuted here
}
```
When it has finished excecuting every line between the curly braces, it moves on to ``draw()`` where it will stay (most of the time forever)

### draw()
```javascript
function draw(){
  //the bulk of your code gets executed here, rinse repeat
  //the draw function loops continuously
}
```
Once draw is called, it excecutes the code 

### Structure

When we start a line with the word ``function`` we are declaring to javascript that what that comes next is going to be a set of commands to follow. The syntax has a few components. ``function`` is the declaration, then it needs a name – functions can have any name you give them, (but ``setup`` and ``draw`` are kind of special). Then the parentheses which is where normally you can supply arguments, but in these two cases there are none – more on that later. And then finally curly braces. 

| declaration   | Name of function |( arguments )| { code to be executed }|
|---------------|------------------|-------------|------------------------|
| function      | 	  setup	     | none        | code                   |
| function      |      draw        | none        | code                   |


### Canvas
By default, a p5js sketch will add a canvas element the body of our HTML. Unfortunately it's not very generous with canvas and defaults to 100 pixels x 100 pixels.

We can specify a few things in our setup function if we know them in advance. For example, if we know that we want our sketch to have a workspace of 640x480 pixels we can **call** the [``createCanvas()``](https://p5js.org/reference/#/p5/createCanvas) function as a line of code during our setup function. Like ``setup()`` and ``draw()``, ``createCanvas()`` is a function but it was already declared when we loaded the framework into our html page. So, unlike these previously discussed built-in functions,  ``createCanvas()`` **DOES** take arguments and since it has already been defined in the p5js framework, instead of declaring it, we execute it.

| Name of function |( arguments )| 
|------------------|-------------|
| createCanvas	  | (width, height, renderer);|

width and height are required, renderer is optional, but let's choose one and put it in for good measure. There canvas has two renderers available, P2D for 2-dimensional artwork, and WEBGL for 3-dimensional artwork. Let's start with P2D for now...

```javascript
function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){

}
```
####Asking the browser to follow Instructions
When we ask the browser to ``createCanvas();`` we're explicitly asking it to complete this instruction. If we get it wrong, the console will complain. (show example).

####The semicolon is very important!
Notice that there is a semicolon at the end of the new line of code that we've just written. This is a subtle bit of syntax that is very important, as it tells the compiler/interpereter/browser, that we've come to the end of an instruction


####Bonus! draw a background to prove that we've properly instantiated a canvas:
If we run this code as is, it will be valid, but we won't really see anything different on the page. To test this visually pretty quickly, we can use another function that will color the background of our canvas so that we can distingush it from the HTML page:

| Name of function |( arguments )| 
|------------------|-------------|
| background	  | (value between 0 and 255);|
|         	  | (R, G, B, A);| 
|              |  (#C31F99)   |

we could do this in either setup or our draw loop, and there are advantages to each. Let's try it in the draw loop for now...

```javascript
function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){
  background(255);
}
```
running this code should show our display our grey html background, and our new white canvas at the size we specified in the upper lefthand corner.

Try changing the numerical values in ``createCanvas(640, 480, P2D);`` and see what happens in the browser. We'll talk more about ``background()`` in another section.

### 2.b: OMG can we plz draw something already!?!
---
There are a number of built in shape functions, let's start with an old favorite, the [``ellipse()``](https://p5js.org/reference/#/p5/ellipse) which, like all the other things we've seen so far in p5js is a function, and like createCanvas it has already been declared in our framework file and it also takes four arguments: x location, y location, width, and height. 

| Name of function |( arguments )| 
|------------------|-------------|
| ellipse	  | (x location, y location, width, height);|

```javascript
function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){
  ellipse(200, 200, 100, 100);
}
```

### Shape Primatives
Some of the other built in shapes that we can use to draw with:

* TODO: add this section
### Shape Attributes
* TODO: add this section

| Name of function |( arguments )| Description |
|------------------|-------------|-------------|
|arc()
|ellipse()
|line()
|point()
|quad()
|rect()
|triangle()

### More with Shapes
* TODO: add this section (maybe omit)

### Now is probably a good time to talk about Axis

So we've defined our canvas as 640 pixels across the horizontal axis and 480 pixels on the vertical axis. So now we have a grid of 307,200 pixels – each one with their own unique address. Just like in math class when you were a kid and learned about graphs with an x and y axis, our canvas is now like that, except 0,0 is the top left corner, and any number above zero on either brings us into the canvas. On the vice versa, negative numbers will move you off-screen 📺 (this can be handy sometimes).

### mouseX / mouseY
* TODO: add this section

### Now is probably a good time to talk about drawing the background()
* TODO: add this section

### console.log()
* This is likely

### Full Page Canvas as Background

To create a canvas that fills your webpage and stays in the background, add this to your code:

```javascript
let canvas;  // declare canvas globally so you can use it everywhere

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);           // put the canvas at the top
	canvas.style('z-index', '-1');  // put it behind the page content
}
```

### Push Pop?

### Basic arithmatic operations:

* + addition
* - subtraction
* * multiplication
* / division
* % modulo
* ++ add one shorthand
* -- subtract one shorthand
* += shorthand for add n to x 
* -= shorthand for subtract n from x
* etc. 


## Section 3: Variables / Scope
### Variables
Variables are a way that we can reserve a small part of a computer's memory to store data. We reserve a name for it in our program so that we can either refer back to it, and in some cases even modify it's value later on. TODO (make this section actually factual)

> In computer programming, a variable or scalar is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value. The variable name is the usual way to reference the stored value; this separation of name and content allows the name to be used independently of the exact information it represents. The identifier in computer source code can be bound to a value during run time, and the value of the variable may thus change during the course of program execution.
>
Variables in programming may not directly correspond to the concept of variables in mathematics. The value of a computing variable is not necessarily part of an equation or formula as in mathematics. In computing, a variable may be employed in a repetitive process — assigned a value in one place, then used elsewhere, then reassigned a new value and used again in the same way (see iteration). Variables in computer programming are frequently given long names to make them relatively descriptive of their use, whereas variables in mathematics often have terse, one- or two-character names for brevity in transcription and manipulation. _- [Wikipedia](https://en.wikipedia.org/wiki/Variable_(computer_science))_

Because p5js is javascript, we get to use javascript syntax for declaring and using our variables. Something that is unique to scripting languages like javascript is that when we declare variables, we don't necessarily have to worry about what data type the variable is. 

* __Declarations__
  * var 
     * var is for declaring variables of any type in the global scope of our program – this means anywhere outside of our ``setup()`` and ``draw()`` functions as well as any functions that we might create on our own.	
  * let
     * let is the same as var, but it is for declaring variabes *inside* local functions – meaning, if we declare a variable inside of the draw loop, it is important to declare it using let instead of var. We'll go into this in more detail in the next section. 
  * const
  	 * Const is kind of a special variable that we may not use very much in this class. Unlike var and let, once defined, const is not updatable. These are special variables that if we know that for some reason we always want to define use a fixed value by name we can. 	

| declaration   | name of variable | = | value to be stored |
|---------------|------------------|-------------|------------------------|
| var           | 	  x	            | =           |    99;                  |
| let           |     y            | =           |    "ninty-nine";         |
| const         |     z            | =           |     "99";               |
  
 	
* __Data Types__
W3Schools Reference on [Javascript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
  * intergers: can be any whole number, no decimals, we can declare them as such:
     * ``var x = 2;`` ``var year = 1984;`` 
     * ``let y = 5;`` ``let year = 300;`` 
     * ``const z = 26;`` ``const my_favorite_number = 711;``
  * float: can be any number, with decimal places ``var/let/const x = 23.97``
  * string: can be any letter/character or phrase/characters **Note the quotation marks around the contents when we declare strings below** 
     * ``var s = "a"`` or  ``let message = "Hello World!"``
     * ``"<div id='my_div'>
        	  <p>Hello World!</p> 
        	  <p>My favorite color is green!</p>
        	</div>"``
          * tricky thing to note, is that a string can be a number: ``var s = "37"``
         * even trickier, if you use math on an interger and a string, javascript will treat the number as a string.
  * boolean: True or False statements – we'll talk more about these.
     * ``var logical_test_1 = "true"; //string ``
     * ``var logical_test_2 = 1; //integer ``
     * ``var logical_test_3 = true; //bool ``
     * ``var logical_test_4 = "false"; //string ``
     * ``var logical_test_5 = 0; //integer ``
     * ``var logical_test_6 = false; //bool ``	
  * arrays
* __how the DOM intereperets__

### Scope of Declaration
* __global scope__
  *  When we declare a variable with global scope, that means we are giving every part of our program access to that variable. 
* __local scope__

### Bonus: Commenting out Code
You may have noticed this a little already... any time two slashes are used, everything after it will be commented out.
 
* ``//this is a comment`` it could also look like this: ``//var my_variable = 100;``
* ``var my_variable = 400; //this is a comment that starts after valid code``
* comments can also span multiple lines:

```javascript
var my_variable = "I am a string, not a comment!";

/*  <-- begins a comment block
   anything
      in 
        here 
          is 
            a
              comment!  
                nothing will get excecuted here.                 
ends the comment --> */

var my_other_variable = "I am totally variable!";

```

## Section 4: Conditional If( ) / Then / Else statements

If statements are much like functions. They take some conditional arguments and then test those arguments. If the condition matches the assertion that we're testing, then we will excecute some code. The idea behind ``if()`` statements is that we are asking the program to test something.

so far we've seen arguments to 

###Booleans
Boolean logic is based on the idea of a binary difference between zero and one. Or in more english like logical terms a test of "true" and "false"

###Logic Operators
Unlike when we set a variable using the = symbol, when we ask our browser to evaluate if two values are equal to each other we use ==.

*




## Section 5: While( ) and For( ) Loops

###Section 5.a: while( ){   }
Similar to ``if()``, while() will also provide a conditional check against a logic statement. The difference is that with ``if()`` the check only happens as the code passes by the if statement, and excecutes whatever happens in that code block or whatever is in the else block depending on which conditions are met. Afterward, it continues on through the code that comes after those blocks if there is any, and eventually when it reaches the end of the ``draw()`` loop it starts over at the beginning of the ``draw()`` loop. 

On the otherhand with ``while()``, as long as the condition that we are checking are met, a ``while()`` loop will continue indefinitely, preventing any code outside of the scope of the ``while()`` block from excecuting. If the condition never changes, the program can be trapped forever. Sometimes you want this, but it can be a very serious pitfall. 


```
while(condition){
  do something until the condition is no longer met
}
```

An simple program with example of using ``while()`` in a way that is problematic:

```
function setup(){

}

function draw() {
  let my_condition = false;
  let my_counter = 0;
  
  while(my_condition != true){
    my_counter = my_counter + 1;  //as long as my_condition is false 
    console.log(my_counter);
  }

  if (my_counter > 20000){
    my_condition = true;
  }
}
```
So problematic it could even crash your browser window. The problem with this code is that despite the fact that the variable ``my_counter`` will keep incrementing, the program will never leave the while loop, and the logical test that we have on the next line to check if ``my_counter`` is greater than 20,000 will never be excecuted. Leaving my_counter to increment indefinitely until the browser crashes. Many modern browsers will refuse to even excecute this code.

The same code with the ``if()`` statement inside the ``while()`` loop, will work


```
function setup(){

}

function draw() {
  let my_condition = false;
  let my_counter = 0;
  
  while(my_condition != true){
    my_counter = my_counter + 1;
    console.log(my_counter);
  }

  if (my_counter > 20000){
    my_condition = true;
  }
}
```


###Section 5.b: for( )
Similar, but more commonly used that ``while()`` better``for()``  

```
for(var i = 0; i < 10; i++){
  //Do Something, maybe even with i...
}
```

```
for(var i = 100; i > 0; i-=2){
  //Do Something, maybe even with i...
}
```
notice exception to the "var vs. let" rule. Use var inside for loop.

## Section 6: Handling Time
There are many reasons in programming when you might want to have timing available. Time is is incredibly useful for makeing smooth animations, or transitions, and also when you are dealing with requesting external data sources (more on that later).

In Processing, and similar languages like arduino, there is a built in function called ``delay()``. ``delay()`` is kind of a terrible snake oil for people who are just starting to program – because it seems at once simple and magical but it also really shouldn't be used except very sparingly. Even when used sparingly, it produces confusing effects. The basic principle is that it makes the entire program stop and wait for a specified number of milliseconds. If you have code that is executing continuously, and you use delay, the entire program will halt for that amount of time. What ends up happening for programmers who've learned the hard way or otherwise know better is that they end up writing their own functions for dealing with time differences.

### setTimeout( )
Luckily for us, javascript is designed to be asynchronous, and already has a better implementation of a wait time, and even *more* luckily, the creators of p5js decided *against* implementing ``delay()``, presumably for the reasons stated above.

``setTimout(__,__)`` is a built in function that takes exactly two arguments: The first is a function (which can be anonymous or defined elsewhere in our code), and the second argument is the amount of time to wait in milliseconds. For reference, 1 second is 1000 milliseconds.

[Schiffman's explaination of setTimeout()](https://www.youtube.com/watch?v=nGfTjA8qNDA)

### millis( )
* TODO: add this section
* add logic to our program instead of delay() - is this too complicated for an intro class?

### systemTime( )
* TODO: add this section (maybe this one isn't that important actually)

## Section 8: The Internet / Data Source
* TODO: Possibly optional section

## Section 9: Write our own function!
TODO: __choose some good examples from Reference__

## Section 10: Go buck wild
TODO: __Build something together__ 

 

## Collection of Further Reading/Learning

* [Watch this lunatic named Daniel Schiffman](https://vimeo.com/channels/learningp5js/) <-- he is actually really great
* [Lauren McCarthy's Creative Javascript Class](https://github.com/lmccart/itp-creative-js)
* [Allison Parrish's Class on p5.play](http://creative-coding.decontextualize.com/making-games-with-p5-play/)
* [Gene Cogan's Examples](http://genekogan.com/code/p5js-transformations/)
* [Robert Cook's physics tutorial](http://professorcook.org/CHAPphysics.pdf)
* a seemingly endless supply of resources from the [p5js github wiki](https://github.com/processing/p5.js/wiki/Education)
	* [Javascript Basics for p5js](https://github.com/processing/p5.js/wiki/JavaScript-basics)


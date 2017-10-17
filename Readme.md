#Introduction to p5js 
This is a one-day introduction to the p5js web programming framework for javascript. It is suitable for students with little or no programming experience. p5js is an excellent gateway way to learning programming. In the class we will breifly cover some necessary basics of HTML and Javascript to get up and running, but will primarily focus on the p5js environment for animation and interactivity. By the end of this class you will create your own interactive web page, and will have the tools to continue exploring and learning p5js on your own.

* Why is it cool? (Do you have some neat things to link to?)
	* https://codepen.io/winkerVSbecks/full/zgayr/
	* 
* Who should take it?
	* anyone interested in programming (is this too broad? – should I say you should have some familiarity with HTML? I want it to be accessible)
* What materials will students need?
	* You will need to bring your own laptop computer, and this should be equipped with the ability to join a WiFi network. NYC Resistor cannot provide extra laptops for this course. 

##Section 1: Preamble

###What is it
p5js is framework that extends javascript for creating visual or interactive art in the browser
###Javascript
dafuq dat ish
###Cool projects!
...

##Section 2: Up and Running
###Text Editor with syntax highlighting
* Atom
* Sublime 
* textWrangler
* vim/emacs

###Filepath, Directory Structure & Filetypes
* Users/path/to/your/folder/
* index.html
* file.js

###HTML & The DOM
---
HTML: Hyper Text Markup Language

DOM: Document Object Model

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

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

###Loading in the browser

* copy and paste the above code into your index.html file and save it
* open your browser
* `file://Users/path/to/your/folder/index.html`

###Javascript syntax in HTML context (in-line)
add a new paragraph `<p>` tag with an id of "demo":
`<p id="demo"></p>` inside the body tag


```javascript
<script>document.getElementById("demo").innerHTML = "Hello JavaScript!";</script>
```
give it a try!


This is in line javascript that is manupulating the content of HTML through the DOM tree

###Loading external files into your HTML

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.15/p5.js"></script>
```

* talk about the path


##Section 3: p5js! (FINALLY!)
Language Reference: [https://p5js.org/reference](https://p5js.org/reference/)

Programming Examples: [https://p5js.org/examples/](https://p5js.org/examples/)

Tutorials:
[Daniel Shiffman wiling out on Youtube](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

###sketch
A long standing tradition in the "Processing" ecosystem is the idea that a program is called a "sketch" 

A sketch consists of a few basic functions that almost always need to be present. The syntax is javascript, but these conventions actually come from Processing which is based in JAVA (which for reasons no one can explan, has NOTHING to do with javascript)

When we load the p5js framwork into our DOM context, we "extend" javascript to do a bunch of new magical things for us. While we can still write normal javascript, we can also add a sketch (possibly multiple sketches) to the DOM and access some of the magic.

almost every p5js sketch ever will contain these two functions:

```javascript
function setup(){

}

function draw(){

}

```

###setup()
This code gets excecuted sequentially (line by line) exactly one time. When it has finished excecuting every line between the curly braces, it moves on to ``draw() ``

```javascript
function setup(){
  //some code gets excecuted here
}
```
When it has finished excecuting every line between the curly braces, it moves on to ``draw()`` where it will stay (most of the time forever)

###draw()
```javascript
function draw(){
  //the bulk of your code gets executed here, rinse repeat
  //the draw function loops continuously
}
```
Once draw is called, it excecutes the code 

###Structure

When we start a line with the word ``function`` we are declaring to javascript that what that comes next is going to be a set of commands to follow. The syntax has a few components. ``function`` is the declaration, then it needs a name – functions can have any name you give them, (but ``setup`` and ``draw`` are kind of special). Then the parentheses which is where normally you can supply arguments, but in these two cases there are none – more on that later. And then finally curly braces. 

| declaration   | Name of function |( arguments )| { code to be executed }|
|---------------|------------------|-------------|------------------------|
| function      | 	  setup	     | none        | code                   |
| function      |      draw        | none        | code                   |


###Canvas
By default, a p5js sketch will add a canvas element the body of our HTML. Unfortunately it's not very generous with canvas and defaults to 100 pixels x 100 pixels.

We can specify a few things in our setup function if we know them in advance. For example, if we know that we want our sketch to have a workspace of 640x480 pixels we can **call** the [``createCanvas()``](https://p5js.org/reference/#/p5/createCanvas) function as a line of code during our setup function. Like ``setup()`` and ``draw()``, ``createCanvas()`` is a function but it was already declared when we loaded the framework. So, unlike these other two, it **DOES** take arguments and then instead of declaring it, we execute it.

| Name of function |( arguments )| 
|------------------|-------------|
| createCanvas	  | (width, height, renderer);|

width and height are required, renderer is optional, but lets put it in for good measure. There canvas has two renderers available, P2D for 2-dimensional artwork, and WEBGL for 3-dimensional artwork. Let's start with P2D for now...

```javascript
function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){

}
```
talk about semi-colon

###I guess we should probably draw something
There are a number of built in shape functions, let's start with everyone's favorite, the [``ellipse()``](https://p5js.org/reference/#/p5/ellipse) which, like all the other things we've seen so far in p5js is a function, and like createCanvas it has already been declared in our framework file and it also takes four arguments: x location, y location, width, and height. 

```javascript
function setup(){
  createCanvas(640, 480, P2D);
}

function draw(){
  ellipse(200, 200, 100, 100);
}
```
###Now is probably a good time to talk about Axis

So we've defined our canvas as 640 pixels across the horizontal axis and 480 pixels on the vertical axis. So now we have a grid of 307,200 pixels – each one with their own unique address. Just like in math class when you were a kid and learned about graphs with an x and y axis, our canvas is now like that, except 0,0 is the top left corner, and any number above zero on either 

###mouseX / mouseY

###console.log()

##Section 4: Variables / Scope
###Variables
* __declarations__
  * var 
  * let
  * const 
* __var vs. let__
* __Types__
  * int: can be any number, no decimals 
     * ``var x = 2;`` ``var year = 1984;`` 
     * ``let y = 5;`` ``let year = 300;`` 
     * ``const z = 7;`` ``const my_favorite_number = 711;``
  * float: can be any number, with decimal places ``var/let/const x = 23.97``
  * string: can be any letter or phrase/characters
     * ``var s = "a"`` ``let message = "Hello World!"``
     * ```"<div id='my_div'>
        	  <p>Hello World,</p> 
        	  <p>My favorite color is green!</p>
        	</div>" ```	
  * arrays
* __how the DOM intereperets__

###Scope of Declaration
* __global scope__
* __local scope__

##Section 5: Conditional If( ) / Then / Else statements

##Section 6: For( ) Loops

##Section 7: Handling Time
###delay( )
###millis( )
###systemTime( )

##Section 8: The Internet / Data Source

##Section 9: Write our own function!
__choose some good examples from Reference__

##Section 10: Go buck wild
__Build something together__ 

 




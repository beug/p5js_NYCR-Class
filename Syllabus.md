# Course Syllabus


## Section 1: Preamble

### What is it
p5js is a web framework that extends javascript for creating visual or interactive art in the browser. It is based on Processing, which is written in Java... 

**from [processing.org](https://processing.org):**
> Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts. Since 2001, Processing has promoted software literacy within the visual arts and visual literacy within technology. There are tens of thousands of students, artists, designers, researchers, and hobbyists who use Processing for learning and prototyping.

**from [p5js.org](https://p5js.org/):**

> p5.js is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.

>Using the original metaphor of a software sketchbook, p5.js has a full set of drawing functionality. However, you're not limited to your drawing canvas, you can think of your whole browser page as your sketch! For this, p5.js has addon libraries that make it easy to interact with other HTML5 objects, including text, input, video, webcam, and sound. 

>p5.js is a new interpretation, not an emulation or port, and it is in active development. An official editing environment is coming soon, as well as many more features!

There are other frameworks like [Three.js](https://threejs.org/), [D3](https://d3js.org/), or [Paper.js](http://paperjs.org/) that also put visual creativity at the forefront, albeit each have a fundamentally different style of coding. We won't cover any of these today, but it is good to know that they exist.

### Javascript
TODO: dafuq dat ish


## Section 2: Up and Running
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

### 2.a: HTML & The DOM
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

### 2.b: Javascript syntax in HTML context (in-line)
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

* We put some javascript code in our HTML code. 
* The code "excecuted" because we referenced it between ``<script> </script>`` tags (this is what our browser does with scripts – it loads them as a program to run) 
* We used javascript to dynamically change our otherwise static web page. 


### 2.c Loading external files (or scripts) into your HTML
---
As I mentioned p5js is a set of tools that extends Javascript. In order to use these new tools them we need to tell our HTML page that we want to use them. We can do that by embedding an external script into our page.

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.15/p5.js"></script>
```
Add this line inside the ``<head></head>`` tags. This will tell our HTML page that we want to load it. Alternatively, you can download p5js into your directory and load it locally.
 
* TODO: add or link to how to do that
* TODO: talk about the path

**Food for thought:**

Something to think about is that this doesn't seem to change anything about our page, but actually it does. By including this file we've made all of the magical functionality of p5js available to our browser.

## Section 3: p5js! (FINALLY!)
**Language Reference: [https://p5js.org/reference](https://p5js.org/reference/)** <-- this is the most important resource for learning p5js. So important in fact, you will probably whitness me having to look stuff up in here during this class!

Programming Examples: [https://p5js.org/examples/](https://p5js.org/examples/)

Tutorials:
[Daniel Shiffman wiling out on Youtube](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) <-- more resources like this at the end of the syllabus

### 3.a The Sketch
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
* TODO: talk about semi-colon

### 3.b: OMG can we plz draw something already, Eric!?!
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
### More with Shapes
* TODO: add this section (maybe omit)

### Now is probably a good time to talk about Axis

So we've defined our canvas as 640 pixels across the horizontal axis and 480 pixels on the vertical axis. So now we have a grid of 307,200 pixels – each one with their own unique address. Just like in math class when you were a kid and learned about graphs with an x and y axis, our canvas is now like that, except 0,0 is the top left corner, and any number above zero on either brings us into the canvas. On the vice versa, negative numbers will move you off-screen 📺 (this can be handy sometimes).

### mouseX / mouseY
* TODO: add this section

### Now is probably a good time to talk about drawing the background()
* TODO: add this section

### console.log()
* TODO: add this section

### Push Pop?

## Section 4: Variables / Scope
### Variables
Variables are a way that we can reserve a small part of a computer's memory to store data. We reserve a name for it in our program so that we can either refer back to it, and in some cases even modify it's value later on. TODO (make this section actually factual)

> In computer programming, a variable or scalar is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value. The variable name is the usual way to reference the stored value; this separation of name and content allows the name to be used independently of the exact information it represents. The identifier in computer source code can be bound to a value during run time, and the value of the variable may thus change during the course of program execution.
>
Variables in programming may not directly correspond to the concept of variables in mathematics. The value of a computing variable is not necessarily part of an equation or formula as in mathematics. In computing, a variable may be employed in a repetitive process — assigned a value in one place, then used elsewhere, then reassigned a new value and used again in the same way (see iteration). Variables in computer programming are frequently given long names to make them relatively descriptive of their use, whereas variables in mathematics often have terse, one- or two-character names for brevity in transcription and manipulation. _- [Wikipedia](https://en.wikipedia.org/wiki/Variable_(computer_science))_

Because p5js is javascript, we get to use javascript syntax for declaring and using our variables. The current specification is  

* __declarations__
  * var 
  * let
  * const 
* __var vs. let__
* __Types__
  * int: can be any number, no decimals 
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

## Section 5: Conditional If( ) / Then / Else statements

## Section 6: For( ) Loops

```
for(var i = 0; i < 10; i++){
  //Do Something, maybe even with i...
}
```
notice exception to the "var vs. let" rule. Use var inside for loop.

## Section 7: Handling Time
### delay( )
* TODO: add this section
* The usual warnings about delay...

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

var circles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noFill();
	
	for (let i = 10; i < 300; i+=20) {
		circles.push(new Circle(i));
	}
}

function draw() {
	for (let i = 0; i < circles.length; i++) {
		circles[i].display();
	}
}

function Circle(radius) {
	this.radius = radius;
	this.brightness = 255;
	
	this.display = function() {
		stroke(this.brightness);
		strokeWeight(1);
		ellipse(windowWidth/2, windowHeight/2, this.radius);
	}	
}

var on = false;

function setup() {
	createCanvas(600,400);
	stroke('cyan');
	strokeWeight(5);
	noFill();
}

function draw() {
	if (on) {
		background(255, 0, 255);
	} else {
		background(0);
	}

	if (mouseX > 300) {
		ellipse(200, 150, 100);		
	} else {
		rect(200, 150, 100, 100);
	}
}

function mousePressed() {
	if (!on) {
		on = true;
	} else {
		on = false;
	}
}

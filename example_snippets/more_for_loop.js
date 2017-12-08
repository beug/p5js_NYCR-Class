var canvas;
var single_wave;
var waves = [];
const WAVE_COUNT = 20;

var wave_level = 50;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0); 			// put the canvas at the top
	canvas.style('z-index', '-1'); 	// put it behind the page content
	
	// make a wave
	// single_wave = new Wave(150);	
}

function draw() {
	background(15, 162, 198);

	// just one wave
	// single_wave.update();
	// single_wave.display();

	// make a new wave if we need more
	if (waves.length < WAVE_COUNT) {
		if (parseInt(random(10)) == 0) {
			waves.push(new Wave(wave_level));
			// set the next one to be drawn further down
			wave_level += parseInt(random(10,50));
		}
	}	

	for (let i = 0; i < waves.length; i++) {
		waves[i].update();
		waves[i].display();
	}

}


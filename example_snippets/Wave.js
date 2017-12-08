// constructor for the Wave object
function Wave(y) {
	this.y = y;

	const WAVE_PEAK_X = 100;
	let l_x = 10;
	let r_x;
	let l_spline_x = l_x + WAVE_PEAK_X;
	let l_spline_y = y;
	let r_spline_x;
	let r_spline_y = y;
	let dir = 1;

	this.update = function() {
		// change direction when the wave gets too big
		if (l_spline_y > this.y + 100) {
			dir = -1;
		} else if (l_spline_y < this.y - 100) {
			dir = 1;
		}
		
		// update spline positions
		l_spline_y += dir;
		r_spline_y += -dir;
	}

	this.display = function() {
		// build right side based on widowWidth
		r_x = windowWidth - 10;
		r_spline_x = r_x - WAVE_PEAK_X;

		// draw the wave
		noFill();
		stroke(255);
		bezier(l_x, this.y,
				l_spline_x, l_spline_y,
				r_spline_x, r_spline_y,
				r_x, this.y);
	}
}

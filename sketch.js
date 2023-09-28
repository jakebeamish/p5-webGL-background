let angle = 0;
let n = 300;
let s = 10;
let t = 0.06;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.position(0, 0)
	canvas.style('position', 'fixed')
	canvas.style('z-index', -1)
	smooth(7);
	blendMode(SCREEN)
	angle += random(TAU);
}

function draw() {
	background(255);
	rotate(-angle / 3);
	rotateX(-angle / 7);
	noFill();
	rectMode(CENTER);

	push();
	rotateY(angle);
	for (let i = 0; i < n; i++) {
		rect(0, 0, i * s, i * s)
	}

	angle += 0.01 * t;
	pop();

	push();
	rotateX(-angle);
	for (let i = 0; i < n; i++) {
		rect(0, 0, i * s, i * s)
	}

	angle += 0.02 * t;
	pop();

	push();
	rotateZ(-angle);

	for (let i = 0; i < n; i++) {
		rect(0, 0, i * s, i * s)
	}

	angle += 0.005 * t;
	pop();
}
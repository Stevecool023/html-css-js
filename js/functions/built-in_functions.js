/*
 * The following custom function draws 100 random circles inside a <canvas> element.
 * Every time we want to do that, we can invoke the function as follows:
 * draw();
 */

function draw() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	for (let i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.fillStyle = "rgb(255 0 0 / 50%)";
		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
		ctx.fill();
	}
}

ADDING TEXT ADDING TEXT XOXOXOXOXOXOXOXOXOX


function setup() {
	createCanvas(400, 400)
}	


function draw() {
	background(255);
	winston(400, 300, 45);
	winston(200, 300, 150);
	winston(100, 50, 75);

}

var colors = [0, 255];

index = 0;

function winston (x, y, size) {
	
	stroke(1);
	fill(255, 255, 0);
	ellipse(x, y, size, size);

	noStroke();
	fill(0);
	ellipse(x-(size*.1), y -(size*.1), size*0.2, size*0.2);
	ellipse(x+(size*.3), y-(size*.1), size*0.2, size*0.2);

	fill(255, 0, 0);
	ellipse(x+(size*.1), y+(size*.2), size*0.25, size*0.3);

}

*/function mousePressed() {
	index += 1;
	if (index == colors.length) {
		index = 0;
	}
}*/


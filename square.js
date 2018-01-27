
var canvas = document.getElementById('main_canvas');
var canvas_draw = canvas.getContext('2d');

canvas_draw.fillStyle = 'red';
var i = 0;
var end_x = 1;
var end_y = 1;
var MAX_COORDS = 100;

function draw() {
    if (i == 0) {
	canvas_draw.fillStyle = 'red';
	i = 1;
    } else if (i == 1) {
	canvas_draw.fillStyle = 'green';
	i = 2;
    } else {
	canvas_draw.fillStyle = 'blue';
	i = 0;
    }
    canvas_draw.fillRect(0, 0, end_x, end_y);

    end_x = ((end_x + 1) % MAX_COORDS) + 1;
    end_y = ((end_y + 1) % MAX_COORDS) + 1;

}

draw();
setInterval(draw, 250);

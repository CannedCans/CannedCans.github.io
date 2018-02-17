var DIMENSIONS = 10; // Grid will be a square of DIMENSIONS x DIMENSIONS
var iteration_count = 0; // Number of iterations executed
var MAX_ITERATIONS = 10; // Maximum range on the iterations


// Arrays for storing the Game of Life data
var current_array;
var next_array;

// Declare our canvas variables
var canvas = document.getElementById('life_canvas');
var canvas_draw = canvas.getContext('2d');

function reset_arrays() {
    // Resets the arrays to zero
    current_array = new Array(DIMENSIONS);
    next_array = new Array(DIMENSIONS);
    
    for (x = 0; x < DIMENSIONS; x++) {
	current_array[x] = new Array(DIMENSIONS);
	next_array[x] = new Array(DIMENSIONS);
	
	for (y = 0; y < DIMENSIONS; y++) {
	    current_array[x][y] = 0;
	    next_array[x][y] = 0;
	}
    }
    
}

function display_array() {
    // Displays current_array on the canvas
    for (x = 0; x < DIMENSIONS; x++) {
	for (y = 0; y < DIMENSIONS; y++) {
	    if (current_array[x][y] == 0) {
		// Inactive space, draw white
		canvas_draw.fillStyle = 'white';
	    } else {
		canvas_draw.fillStyle = 'black';
	    }
	    canvas_draw.fillRect(x, y, 1, 1);
	}
    } 
}

function fill_array() {
    // Fills current_array with 1s in random spots
    for (x = 0; x < DIMENSIONS; x++) {
	for (y = 0; y < DIMENSIONS; y++) {
	    if (Math.floor(Math.random()) == 0) {
		current_array[x][y] = 0;
	    } else {
		current_array[x][y] = 1;
	    }
	}
    }
}

// Initialize the arrays
reset_arrays();

function life_iteration() {
    // Performs one iteration of the Game of Life, including displaying the content

    // Temporary code to display something at least
    fill_array();
    console.log("One iteration\n");

    if (iteration_count == MAX_ITERATIONS) {
	iteration_count = 0;
	reset_arrays();
	fill_array();
    } else {
	iteration_count++;
    }

    // Now we display the board which is either empty or with its content
    display_array();
    
}

setInterval(life_iteration, 500);

paper.install(window);
	
	window.onload = function() {
		paper.setup('myCanvas');

		// Create two drawing tools.
		// tool1 will draw straight lines,
		// tool2 will draw clouds.

		// Both share the mouseDown event:
		var r = 0;
		var g = 0;
		var b = 0;

		var myPath = new Path();
		myPath.strokeColor = new Color(r, g, b);
		myPath.strokeWidth = 14;




		// var cirPath = new Path();
		// cirPath.strokeColor = 'black';

		// function onMouseDown(event) {
		// 	path = new Path();
		// 	path.strokeColor = 'black';
		// 	path.add(event.point);
		// }



		var tool1 = new Tool();
		// tool1.onMouseDown = onMouseDown;
		var counter = 0;

		tool1.onMouseMove = function(event) {
			myPath.add(event.point);
			console.log("event.delta.length: ", event.delta.length);
			counter++;
			console.log("event.middlePoint: ", event.middlePoint);
			console.log("event.delta: ", event.delta);
			console.log("counter: ", counter);
			// event.count is the same thing as my counter
			console.log("event.count", event.count);
		};

		tool1.onMouseDown = function() {
			r += 0.10;
			g += 0.03;
			myPath = new Path;
			myPath.strokeColor = new Color(r, g, b);
			myPath.strokeWidth = 14;
		};


		// var tool2 = new Tool();
		// tool2.minDistance = 20;
		// // tool2.onMouseDown = onMouseDown;

		// tool2.onMouseMove = function(event) {
		// 	// Use the arcTo command to draw cloudy lines
		// 	myPath = new Path;
		// 	myPath.add(event.point);
		// 	myPath.strokeColor = 'black';
		// 	myPath.arcTo(event.point);
		// }
	}
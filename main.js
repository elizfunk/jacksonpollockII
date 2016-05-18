paper.install(window);
	
	window.onload = function() {
		paper.setup('myCanvas');


		// color variables:
		var r = 0;
		var g = 0;
		var b = 0;

		var myPath = new Path();
		myPath.strokeColor = new Color(r, g, b);
		myPath.strokeWidth = 4;


		var tool = new Tool();
		// tool.onMouseDown = onMouseDown;
		var counter = 0;

		tool.minDistance = 6;

		function speed (eventDeltaLength) {
			// function to determine stroke width based on speed
			if(eventDeltaLength >= 100) {
				return 1;
			}
			if(eventDeltaLength > 89 && eventDeltaLength < 100) {
				return 2;
			}
			if(eventDeltaLength > 79 && eventDeltaLength < 90) {
				return 2;
			}
			if(eventDeltaLength > 69 && eventDeltaLength < 80) {
				return 3;
			}
			if(eventDeltaLength > 59 && eventDeltaLength < 70) {
				return 3;
			}
			if(eventDeltaLength > 49 && eventDeltaLength < 60) {
				return 4;
			}
			if(eventDeltaLength > 39 && eventDeltaLength < 50) {
				return 5;
			}
			if(eventDeltaLength > 29 && eventDeltaLength < 40) {
				return 6;
			}
			if(eventDeltaLength > 19 && eventDeltaLength < 30) {
				return 8;
			}
			if(eventDeltaLength > 9 && eventDeltaLength < 20) {
				return 9;
			}
			if(eventDeltaLength > 7 && eventDeltaLength < 10){
				return 10;
			}
			if(eventDeltaLength > 5 && eventDeltaLength < 8){
				return 11;
			}
			if(eventDeltaLength > 3 && eventDeltaLength < 6){
				return 12;
			}
			

			return 13;
		}

		var radius;

		tool.onMouseMove = function(event) {
			myPath.add(event.point);
			console.log("event.delta.length: ", event.delta.length);
			counter++;
			if(counter % 40 === 0) {
				console.log("counter in %50", counter);
				console.log("event point", event.point);
				console.log("epx+", event.point, event.point.x, event.point.x + 5 * event.delta.length);

				var xPoint = event.point.x + 3 * event.delta.length,
					yPoint = event.point.y + 3 * event.delta.length;
				var littleSplat = new Path.Circle(new Point(xPoint, yPoint), 4);
				littleSplat.fillColor = myPath.strokeColor;

				var tinySplat = new Path.Circle(new Point(event.point.x + 2 * event.delta.length, event.point.y + 2 * event.delta.length), 2);
				tinySplat.fillColor = myPath.strokeColor;

				var tinySplat2 = new Path.Circle(new Point(event.point.x + event.delta.length, event.point.y + event.delta.length), 2);
				tinySplat2.fillColor = myPath.strokeColor;

				var tinySplat3 = new Path.Circle(new Point(event.point.x - event.delta.length, event.point.y + event.delta.length), 2);
				tinySplat3.fillColor = myPath.strokeColor;

				var tinySplat4 = new Path.Circle(new Point(event.point.x + event.delta.length, event.point.y - Math.random() * 4), 3);
				tinySplat4.fillColor = myPath.strokeColor;

				var littleSplat2 = new Path.Circle(new Point(event.point.x + Math.random() * 5, event.point.y + Math.random() * 5), 4);
				littleSplat2.fillColor = myPath.strokeColor;

				var littleSplat3 = new Path.Circle(new Point(event.point.x - Math.random() * 5, event.point.y - Math.random() * 5), 4);
				littleSplat3.fillColor = myPath.strokeColor;

				if(event.delta.length < 8){
					var tinySplat5 = new Path.Circle(new Point(event.point.x + event.delta.length, event.point.y - Math.random() * 4), 5);
						tinySplat5.fillColor = myPath.strokeColor;

					var littleSplat4 = new Path.Circle(new Point(event.point.x + Math.random() * 5, event.point.y + Math.random() * 5), 8);
						littleSplat4.fillColor = myPath.strokeColor;

				}



			}
			if(counter % 4 === 0) {
				myPath = new Path();
				myPath.add(event.point);
				myPath.strokeColor = new Color(r, g, b);
				var strokeW = myPath.strokeWidth;
				myPath.strokeWidth = speed(event.delta.length);
				
				// if mouse movement is super slow, create a blob
				if(event.delta.length < 7) {
					radius = myPath.strokeWidth * 5;
					console.log("circle blob event point", event.point);
					var circle = new Path.Circle(event.point, radius);
					circle.fillColor = myPath.strokeColor;
				}
				if(event.delta.length > 6 && event.delta.length < 9) {
					radius = myPath.strokeWidth * 4;
					var circle = new Path.Circle(event.point, radius);
					circle.fillColor = myPath.strokeColor;
				}
				
				if(strokeW !== myPath.strokeWidth){
					if(strokeW > myPath.strokeWidth) {
						radius = strokeW/2;
					} else {
						radius = myPath.strokeWidth/2;
					}
					console.log("circle event point on width change", event.point);
					var circle = new Path.Circle(event.point, radius);
					circle.fillColor = myPath.strokeColor;
				}
				// myPath.fullySelected = true;
				// myPath.smooth({ type: 'catmull-rom', factor: 0.5 });
				var arr = myPath._segments;
				for(var i = 0; i < arr.length - 1; i++) {
					myPath.smooth({ type: 'continuous', 
								from: arr[i],
								to: arr[i + 1]
					});
				}
				console.log("strokeW & myPath.strokeWidth: ", strokeW, myPath.strokeWidth);

			}
			// console.log("event", event);
			// console.log("event.delta: ", event.delta);
			// console.log("event.count", event.count);


		};

		var clickCount = 0;

		tool.onMouseDown = function() {
			
			if(r > 0.97 || g > 0.97 || b > 0.97 || clickCount === 0) {
				r = Math.random();
				g = Math.random();
				b = Math.random();
			} else {
				r += 0.23;
				g += 0.13;
				b += 0.30;	
			}
			clickCount++;
			myPath = new Path;
			myPath.strokeColor = new Color(r, g, b);
			myPath.strokeWidth = 14;
		};


	}
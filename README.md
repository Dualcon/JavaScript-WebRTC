# WebRTCGetUserMedia


# JavaScript - How to get the user media using WebRTC.


## This demo takes a snapshot from webcam every 10 seconds and convert it to base 64.


# index.html


	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="ISO-8859-1">
	<title>WebRTC Get user Media Demo</title>
	</head>
	<body>

	<h1>This demo takes a snapshot every 10 seconds and convert it to base 64.</h1><br />

  	<div id="container">
        	<video width="320" height="240" autoplay style="display: inline;"></video>
    	<canvas width="320" id="canvas" height="240" style="display: inline;"></canvas>
  	</div>

	<!-- WebRTC Lib -->
 	<script src="js/adapter.js"></script>
  	<script src="js/common.js"></script>
  	<script src="js/lib/ga.js"></script>
  
  	<script src="main.js"></script>

	</body>
	</html>


# main.js


	'use strict';

	//Put variables in global scope to make them available to the browser console.
	var video = document.querySelector('video');
	var canvas = window.canvas = document.querySelector('canvas');
	canvas.width = 480;
	canvas.height = 360;

	//Configure waht kind of media will be shared.
	var constraints = {
			audio: true,
			video: true
	};

	function successCallback(stream) {
		// Make stream available to browser console.
		window.stream = stream;
		video.srcObject = stream;
		takeSnapshot();
	}

	function errorCallback(error) {
		console.log('navigator.getUserMedia error: ', error);
	}

	navigator.getUserMedia(constraints, successCallback, errorCallback);

	function takeSnapshot() {
		var timer = setInterval(function () {
			//Add image to canvas
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	
			// Capturing a frame from the stream on base 64 every 10 seconds.
			var data = canvas.toDataURL('image/png');
			console.log(data);
		}, 10000);
	}


# Do not forget to add the WebRTC js lib files.


Produced by [Wiki Dreams.github.io](https://WikiDreams.github.io/).
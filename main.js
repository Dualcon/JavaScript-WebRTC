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

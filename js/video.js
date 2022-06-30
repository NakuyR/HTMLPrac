let video = document.getElementById("video");
let videocontrol = document.getElementById("video");

video.onloadedmetadata = function f(e){
	alert(video.videoWidth + "x" + video.videoHeight);
	video.width = video.videoWidth;
	video.height = video.videoHeight;
}

function play(){
if(videocontrol.paused) videocontrol.play();
	else videocontrol.pause();
}

function big(){
	videocontrol.width += 200;
	videocontrol.height +=200;
}

function small(){
	videocontrol.width -= 200;
	videocontrol.height -= 200;
}
let div = document.getElementById("msg");
let audio = document.getElementById("audio");

function control(e){
	let id = e.target.id;
	if(id=="play"){
		audio.play();
		div.innerHTML = "재생중입니다."
	}
	else if(id == "pause"){ 
		audio.pause(); 
		div.innerHTML = "일시중지되었습니다.";
	}
	else if(id == "replay"){ 
		audio.load(); 
		audio.play(); 
		div.innerHTML = audio.src + "를 처음부터 재생합니다.";
	}
	else if(id=="vol-"){
		audio.volume-=0.1;
		if(audio.volume <0.1)audio.volume=0;
		div.innerHTML="음량 0.1 감소"+"현재"+audio.volume;
	}
	else if(id == "vol+") { 
		audio.volume += 0.1; 
		if(audio.volume > 0.9) audio.volume = 1.0;
		div.innerHTML = "음량 0.1 증가." + "현재 " + audio.volume;
	}
	else if(id == "mute on/off") { 
		audio.muted = !audio.muted; 
		if(audio.muted) div.innerHTML = "음소거";
		else div.innerHTML = "음소거 해제";
	}

}
function showClock(){
	let currentDate = new Date();
	let divClock = document.getElementById('divClock');
	let msg = "현재 시간 : ";
	if(currentDate.getHours()>12){
		msg += "오후";
		msg += currentDate.getHours()-12+"시";
	}
	else {
		msg+= "오전";
		msg+= currentDate.getHours()+"시";
	}
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	divClock.innerText=msg;
	if (currentDate.getMinutes()>58){
		divClock.style.color="red";
	}
	setTimeout(showClock, 1000);
}
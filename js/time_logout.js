var logoutUser = false;
var timeoutHnd = null;
var logouTimeInterval = 0.5*60*1000;

function onuser_activite(){
	if(logoutUser){
		;
	}else{
		ResetLogOutTimer();
	}
}
function OnTimeoutReached(){
	logoutUser = true;
	alert("세션의 지속 시간은 30초입니다. 만료되면 자동 로그아웃됩니다.!");
	session_del();
	window.location.href = "index.html";
}

function ResetLogOutTimer(){
	clearTimeout(timeoutHnd);
	timeoutHnd = setTimeout('OnTimeoutReached();',logouTimeInterval);
}
document.body.onclick = onuser_activite();
timeoutHnd = setTimeout('OnTimeoutReached();',logouTimeInterval);

function session_del() {
	if(sessionStorage){
		sessionStorage.removeItem("Session_Storage_test");
		alert('세션 만료 확인! : 세션 스토리지를 삭제합니다.');
	}
	else {
		alert("세션 스토리지 지원 x");
	}
}
function setCookie(key,value,expiredays){
	let todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}
function delCookie(key){
	let todayDate = new Date();
	document.cookie = key + "=; path=/; expires=" + todayDate.toGMTString()+";";
	alert('로그아웃 버튼 클릭 확인 : 쿠키를 삭제합니다.');
} 
function getCookie(key){
	key = new RegExp(key + '=([^;]*)');
	return key.test(document.cookie)?unescape(RegExp.$1):'';
} 

function boolCheckCookie(key){
	return getCookie(key) != ''? true : false;
} 

function checkCookieTest(key){
	let val = getCookie(key);
	if (val != ""){
		alert ('현재 쿠키가 설정되어 있습니다');
		return val;
	}
	else {
		val = prompt(key + " 직접 쿠키의 값을 입력해주세요:","");
		if (val != ""&& val != null){
			alert('새로운 쿠키를 설정합니다.');
			setCookie(key,val,365);
			return val;
		}
	}
}
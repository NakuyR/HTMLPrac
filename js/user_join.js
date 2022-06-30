function setCookie(key,value,expiredays){
	value = String(value);
	let todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = key + "=" + value + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getCookie(name) { 
     var nameOfCookie = name + "="; 
     var x = 0; 
     while (x <= document.cookie.length) { 
          var y = (x + nameOfCookie.length); 
          if (document.cookie.substring(x, y) == nameOfCookie) { 
               if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) 
                    endOfCookie = document.cookie.length; 
               return unescape(document.cookie.substring(y, endOfCookie)); 
          } 
          x = document.cookie.indexOf(" ", x) + 1;
          if (x == 0){ 
               break;
		  }
     } 
     return ""; 
}

function join_check()
{
	let str_id = document.getElementById("email");
	let str_pwd = document.getElementById("pw");
	let str_pwdcheck = document.getElementById("pwcheck");
	let name = document.getElementById("FN").value+document.getElementById("LN").value;
	let pwd_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 패스워드 정규 표현식
	let email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // 이메일 정규 표현식
	let blank_pattern = /[\s]/g; // 공백 정규 표현식
	let form = document.createElement('form');
	let cookie = getCookie(str_id.value); 
	if ((str_id.value=="")||(str_id.value==null)){
		alert("아이디를 입력하세요 제발!!");
		str_id.focus();
		return false;
	}
	if (!email_check.test(str_id.value)){
		alert("이메일@주소 형식으로 아이디를 입력하세요.");
		str_id.focus();
		return false;
	}
	if (str_pwd.value==''){
		alert("비밀번호를 입력하세요 제발!!");
		str_pwd.focus();
		return false;
		}
	if(blank_pattern.test(str_id.value)==true){
		alert('공백만 입력되었습니다.');
		return false;
	}
	if(!pwd_check.test(str_pwd.value)){
		alert("비밀번호는 영문자+숫자+특수문자 조합, 8글자 이상 입력!");
		str_pwd.focus();
		return false;
	}
	if(str_pwd.value != str_pwdcheck.value ){
		alert("비밀번호와 비밀번호 확인이 서로 다릅니다!")
		return false;
	}
	if(cookie != ""){
		alert("이미 가입된 아이디입니다.")
		return false;
	}
	document.body.append(form);
	alert(str_id.value+"님 회원가입을 축하합니다!");
	setCookie(str_id.value,name,365);
	form.action = 'index.html';
	form.method = 'POST';
	form.submit();
	
}
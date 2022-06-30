function form_check(){
	let str_id = document.getElementById("js_userid");
	let str_pwd = document.getElementById("js_password");
	let pwd_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/; // 패스워드 정규 표현식
	let email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // 이메일 정규 표현식
	let blank_pattern = /[\s]/g; // 공백 정규 표현식
	let form = document.createElement('form');
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
		alert("비밀번호는 영문자+숫자+특수문자 조합, 10글자 이상 입력!");
		str_pwd.focus();
		return false;
	}
	document.body.append(form);
	form.action = 'index_main.html';
	form.method = 'POST';
	form.submit();
}